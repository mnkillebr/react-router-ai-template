
import { getMagicLinkPayload, invalidMagicLink } from "~/magic-link.server";
import { authSessionStorage } from "~/sessions.server";
import { redirect, data, type LoaderFunctionArgs, type ActionFunctionArgs, Form, useLoaderData, Link } from "react-router";
import { validateForm } from "~/lib/validation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input"
import { MAGIC_LINK_MAX_AGE } from "~/lib/magicNumbers";
import { getUserByEmail } from "~/lib/auth.server";
import { authJwtLoginAuthJwtLoginPost, registerRegisterAuthRegisterPost, type UserRead } from "~/openapi-client";
import { registerMagicLinkSchema } from "~/lib/definitions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { getErrorMessage } from "~/lib/utils";

export async function loader({ request }: LoaderFunctionArgs) {
  const magicLinkPayload = getMagicLinkPayload(request);
  // Check magic link expiration
  const createdAt = new Date(magicLinkPayload.createdAt);
  const expiresAt = createdAt.getTime() + MAGIC_LINK_MAX_AGE;

  if (Date.now() > expiresAt) {
    throw invalidMagicLink("The magic link has expired");
  }

  // Validate magic link nonce
  const cookieHeader = request.headers.get("cookie");
  const authSession = await authSessionStorage.getSession(cookieHeader);

  if (authSession.get("nonce") !== magicLinkPayload.nonce) {
    throw invalidMagicLink("Invalid nonce");
  }

  // Checking if user exists
  const user = await getUserByEmail(magicLinkPayload.email) as UserRead;
  if (user) {
    try {
      const loginInput = {
        body: {
          username: magicLinkPayload.email,
          password: `${magicLinkPayload.email}-${process.env.MAGIC_LINK_SECRET}`,
        },
      };
      const { data, error: loginError } = await authJwtLoginAuthJwtLoginPost(loginInput);
      if (loginError) {
        return {
          email: magicLinkPayload.email,
          server_validation_error: getErrorMessage(loginError)
        };
      }
      authSession.set("access_token", data.access_token);
      authSession.unset("nonce");
      return redirect("/dashboard", {
        headers: {
          "Set-Cookie": await authSessionStorage.commitSession(authSession),
        },
      });
    } catch (err) {
      console.error("Login error:", err);
      return {
        email: magicLinkPayload.email,
        server_error: "An unexpected error occurred. Please try again later.",
      };
    }
  }
  return data({ email: magicLinkPayload.email }, {
    headers: {
      "Set-Cookie": await authSessionStorage.commitSession(authSession),
    }
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  return validateForm(
    formData,
    registerMagicLinkSchema,
    async ({ full_name }) => {
      try {
        const magicLinkPayload = getMagicLinkPayload(request);

        // create user
        const registerInput = {
          body: {
            email: magicLinkPayload.email,
            full_name,
            password: `${magicLinkPayload.email}-${process.env.MAGIC_LINK_SECRET}`,
          },
        }
        const { error: registerError } = await registerRegisterAuthRegisterPost(registerInput);
        if (registerError) {
          return { server_validation_error: getErrorMessage(registerError) };
        }

        // login user
        const loginInput = {
          body: {
            username: magicLinkPayload.email,
            password: `${magicLinkPayload.email}-${process.env.MAGIC_LINK_SECRET}`,
          },
        };
        const { data, error: loginError } = await authJwtLoginAuthJwtLoginPost(loginInput);
        if (loginError) {
          return { server_validation_error: getErrorMessage(loginError) };
        }

        const cookieHeader = request.headers.get("cookie");
        const authSession = await authSessionStorage.getSession(cookieHeader);
        authSession.set("access_token", data.access_token);
        authSession.unset("nonce");
        return redirect("/dashboard", {
          headers: {
            "Set-Cookie": await authSessionStorage.commitSession(authSession),
          },
        });
      } catch (err) {
        console.error("Registration error:", err);
        return {
          server_error: "An unexpected error occurred. Please try again later.",
        };
      }
    },
    (errors) => data(
      {
        errors,
        full_name: formData.get("full_name"),
      },
      { status: 400 }
    )
  );
};

export default function ValidateMagicLink() {
  const { email } = useLoaderData<typeof loader>();
	return (
		<div className="flex min-h-screen items-center justify-center">
      <div className="absolute top-4 left-4">
        <Link to="/">
          <Button variant="outline">Home</Button>
        </Link>
      </div>
      <Card className="w-[375px]">
        <CardHeader>
          <CardTitle>Almost there!</CardTitle>
          <CardDescription>Enter your name to complete the registration</CardDescription>
        </CardHeader>
        <CardContent>
          <Form method="post" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="full_name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                disabled
                value={email}
              />
            </div>
            <Button
              className="w-full"
              type="submit"
              name="_action"
              value="register"
            >
              Register
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
	)
};
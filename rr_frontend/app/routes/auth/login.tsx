import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { data, Form, Link, useActionData, type ActionFunctionArgs, redirect, type LoaderFunctionArgs, useLoaderData } from "react-router";
import { authSessionStorage, registerSessionStorage, themeSessionStorage } from "~/sessions.server";
import { validateForm } from "~/lib/validation";
import { loginSchema, type loginActionType } from "~/lib/definitions";
import { Label } from "~/components/ui/label";
import { ErrorMessage } from "~/components/form";
import { authJwtLoginAuthJwtLoginPost } from "~/openapi-client/sdk.gen";
import { getErrorMessage } from "~/lib/utils";
import { toast } from "sonner";
import { useEffect } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("cookie")
  const registerSession = await registerSessionStorage.getSession(cookieHeader);
  const registerEmail = registerSession.get("register_email");
  return { registerEmail };
}

export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("cookie")
  const themeSession = await themeSessionStorage.getSession(cookieHeader);
  const authSession = await authSessionStorage.getSession(cookieHeader);
  const formData = await request.formData();

  switch (formData.get("_action")) {
    case "login": {
      return validateForm(
        formData,
        loginSchema,
        async ({ username, password }) => {
          try {
            const input = {
              body: {
                username,
                password,
              },
            };
            const { data, error } = await authJwtLoginAuthJwtLoginPost(input);
            if (error) {
              return { server_validation_error: getErrorMessage(error) };
            }
            authSession.set("access_token", data.access_token);
            return redirect("/dashboard", {
              headers: {
                "Set-Cookie": await authSessionStorage.commitSession(authSession),
              },
            });
          } catch (err) {
            console.error("Login error:", err);
            return {
              server_error: "An unexpected error occurred. Please try again later.",
            };
          }
        },
        (errors) => data({ errors }, { status: 400 })
      )
    }
    default: {
      const theme = formData.get("theme");

      if (typeof theme === "string") {
        themeSession.set("rr_theme", theme);
      }

      return data(
        { success: true },
        {
          headers: {
            "Set-Cookie": await themeSessionStorage.commitSession(themeSession),
          },
        }
      );
    }
  }
}


export default function LoginRoute() {
  const { registerEmail } = useLoaderData<typeof loader>();
  const actionData = useActionData<loginActionType>();

  let renderCount = 0;
  useEffect(() => {
    if (registerEmail && renderCount === 0) {
      toast.success(`Account created for ${registerEmail}.\nPlease login to continue.`);
      renderCount++;
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form method="post" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="email"
                placeholder="Enter your email"
                required
              />
              <ErrorMessage>{actionData?.errors?.username}</ErrorMessage>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
              <ErrorMessage>{actionData?.errors?.password}</ErrorMessage>
            </div>
            <Button
              className="w-full"
              type="submit"
              name="_action"
              value="login"
            >
              Login
            </Button>
            <div className="text-sm text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Register
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
} 
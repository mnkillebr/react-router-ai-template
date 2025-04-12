import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { data, Form, Link, type ActionFunctionArgs, useActionData, redirect } from "react-router";
import { themeSessionStorage } from "~/sessions.server";
import { Label } from "~/components/ui/label";
import { validateForm } from "~/lib/validation";
import { registerSchema, type registerActionType } from "~/lib/definitions";
import { ErrorMessage } from "~/components/form";
import { getErrorMessage } from "~/lib/utils";
import { registerRegisterAuthRegisterPost } from "~/openapi-client/sdk.gen";
import { registerSessionStorage } from "~/sessions.server";
import { useEffect } from "react";
import { toast } from "sonner";

export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("cookie")
  const themeSession = await themeSessionStorage.getSession(cookieHeader);
  const registerSession = await registerSessionStorage.getSession(cookieHeader);
  const formData = await request.formData();
  switch (formData.get("_action")) {
    case "register": {
      return validateForm(
        formData,
        registerSchema,
        async ({ full_name, email, password }) => {
          try {
            const input = {
              body: {
                full_name,
                email,
                password,
              },
            };
            const { error } = await registerRegisterAuthRegisterPost(input);
            if (error) {
              return { server_validation_error: getErrorMessage(error) };
            }
            registerSession.set("register_email", email);
            return redirect("/login", {
              headers: {
                "Set-Cookie": await registerSessionStorage.commitSession(registerSession),
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

export default function RegisterRoute() {
  const actionData = useActionData<registerActionType>();

  useEffect(() => {
    if (actionData?.server_validation_error) {
      if (actionData.server_validation_error === 'REGISTER_USER_ALREADY_EXISTS') {
        toast.error('User with this email already exists');
      }
    }
  }, [actionData]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
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
                required
              />
              <ErrorMessage>{actionData?.errors?.email}</ErrorMessage>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                name="password"
                required
              />
              <ErrorMessage>{actionData?.errors?.password}</ErrorMessage>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                required
              />
              <ErrorMessage>{actionData?.errors?.confirmPassword}</ErrorMessage>
            </div>
            <Button
              className="w-full"
              type="submit"
              name="_action"
              value="register"
            >
              Register
            </Button>
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Login
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
} 
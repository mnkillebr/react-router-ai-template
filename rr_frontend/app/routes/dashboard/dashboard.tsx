import { data, redirect } from "react-router";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { themeSessionStorage } from "~/sessions.server";
import { getAuthToken } from "~/lib/auth.server";
import { CopilotPopup } from "@copilotkit/react-ui";

export async function loader({ request }: LoaderFunctionArgs) {
  const token = await getAuthToken(request);
  if (!token) {
    return redirect("/login")
  }
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("cookie")
  const themeSession = await themeSessionStorage.getSession(cookieHeader);
  const formData = await request.formData();

  switch (formData.get("_action")) {
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

export default function DashboardRoute() {
  return (
    <>
      <div className="flex h-screen">
        <main className="flex-1 p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This is your dashboard. You can add more content here.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>No recent activity to show.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p>No stats available yet.</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <CopilotPopup
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      />
    </>
  );
} 
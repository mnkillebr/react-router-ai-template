import { CopilotPopup, type CopilotKitCSSProperties } from "@copilotkit/react-ui";
import { useEffect } from "react";
import { Outlet, redirect, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { AppSidebar } from "~/components/app-sidebar";
import { ModeToggle } from "~/components/mode-toggle";
import { Separator } from "~/components/ui/separator";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { getCurrentUser } from "~/lib/auth.server";
import { getAuthToken } from "~/lib/auth.server";
import type { UserRead } from "~/openapi-client";

export async function loader({ request }: LoaderFunctionArgs) {
  const token = await getAuthToken(request);
  if (!token) {
    return redirect("/login")
  }
  const user = await getCurrentUser(token) as UserRead;
  return { user };
}

export default function DashboardLayout() {
  const { user } = useLoaderData<typeof loader>();
  useEffect(() => {
    const element = document.querySelector(".poweredBy");
    if (element) {
      element.remove();
    }
  }, []);
  return (
    <>
      <SidebarProvider>
        <AppSidebar user={user} />
        <SidebarInset className="max-w-8xl mx-auto">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 justify-between">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1 hover:text-primary" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            <div className="pr-4">
              <ModeToggle />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 px-4 pt-0">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
      <div
        style={
          {
            "--copilot-kit-primary-color": "var(--primary)",
            "--copilot-kit-contrast-color": "var(--secondary)",
            "--copilot-kit-background-color": "var(--popover)",
            "--copilot-kit-separator-color": "var(--border)",
            "--copilot-kit-muted-color": "var(--muted)",
          } as CopilotKitCSSProperties
        }
      >
        <CopilotPopup
          instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
          labels={{
            title: "Popup Assistant",
            initial: "Need any help?",
          }}
        />
      </div>
    </>
  );
} 
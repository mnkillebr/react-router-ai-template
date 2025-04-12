import { Outlet } from "react-router";
import { ModeToggle } from "~/components/mode-toggle";
import { Separator } from "~/components/ui/separator";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarRail,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter
} from "~/components/ui/sidebar";
export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>

        </SidebarHeader>
        <SidebarContent>
        </SidebarContent>
        <SidebarFooter>

        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
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
  );
} 
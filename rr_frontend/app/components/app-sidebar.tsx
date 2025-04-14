import { Building, LayoutDashboard } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { NavMain } from "./nav-main"
import type { UserRead } from "~/openapi-client"

const data = {
  user: {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: "https://i.pravatar.cc/150?img=34",
  },
  organization: {
    name: "Killebrew Inc",
    logo: Building,
    plan: "Enterprise",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
  ],
}

export function AppSidebar({ user, ...props }: { user: UserRead & { avatar: string } } & React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <data.organization.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {data.organization.name}
                </span>
                <span className="truncate text-xs">{data.organization.plan}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} /> 
      </SidebarFooter>
    </Sidebar>
  )
}

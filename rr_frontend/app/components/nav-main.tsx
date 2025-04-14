import clsx from "clsx"
import { type LucideIcon } from "lucide-react"
import { useLocation, useNavigate, useNavigation, useResolvedPath } from "react-router"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}) {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const path = useResolvedPath(item.url)
            const isActive = location.pathname.includes(path.pathname)
            const isLoading =
              navigation.state === "loading" &&
              navigation.location.pathname === path.pathname &&
              navigation.formData === undefined;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={isActive}
                  onClick={() => navigate(item.url)}
                  className={isLoading ? "animate-pulse duration-500" : ""}
                >
                  {item.icon && <item.icon className={clsx("size-4", isActive ? "text-primary" : "")} />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
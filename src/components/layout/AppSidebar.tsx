import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  FolderOpen,
  CheckSquare,
  Target,
  StickyNote,
  Calendar,
  FileText,
  Settings,
  ChevronLeft,
  TrendingUp,
  Users,
  Layout,
  Plug
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, group: "main" },
  { title: "Projects", url: "/projects", icon: FolderOpen, group: "main" },
  { title: "Tasks", url: "/tasks", icon: CheckSquare, group: "main" },
  { title: "Habits", url: "/habits", icon: Target, group: "main" },
  { title: "Notes", url: "/notes", icon: StickyNote, group: "main" },
  { title: "Calendar", url: "/calendar", icon: Calendar, group: "main" },
  { title: "Files", url: "/files", icon: FileText, group: "main" },
]

const advancedItems = [
  { title: "Analytics", url: "/analytics", icon: TrendingUp, group: "advanced" },
  { title: "Team", url: "/team", icon: Users, group: "advanced" },
  { title: "Templates", url: "/templates", icon: Layout, group: "advanced" },
  { title: "Integrations", url: "/integrations", icon: Plug, group: "advanced" },
]

const settingsItems = [
  { title: "Settings", url: "/settings", icon: Settings, group: "settings" },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/"
    return currentPath.startsWith(path)
  }

  return (
    <Sidebar
      className="border-r border-sidebar-border bg-sidebar shadow-soft"
      collapsible="icon"
    >
      <SidebarContent className="p-2">
        {/* Logo section */}
        <div className={`
          flex items-center gap-3 px-3 py-4 mb-2
          ${isCollapsed ? "justify-center" : ""}
        `}>
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground font-bold text-sm">C</span>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-semibold text-sidebar-foreground">ClickFlow</span>
              <span className="text-xs text-muted-foreground">Workspace</span>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-3 py-2">
              Main
            </SidebarGroupLabel>
          )}
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`
                      w-full justify-start rounded-lg transition-all duration-200
                      ${isCollapsed ? "px-2" : "px-3"}
                      ${isActive(item.url) 
                        ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                        : "hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground"
                      }
                    `}
                  >
                    <NavLink to={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className={`${isCollapsed ? "w-5 h-5" : "w-4 h-4"} flex-shrink-0`} />
                      {!isCollapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Advanced Features */}
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-3 py-2">
              Advanced
            </SidebarGroupLabel>
          )}
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {advancedItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`
                      w-full justify-start rounded-lg transition-all duration-200
                      ${isCollapsed ? "px-2" : "px-3"}
                      ${isActive(item.url) 
                        ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                        : "hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground"
                      }
                    `}
                  >
                    <NavLink to={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className={`${isCollapsed ? "w-5 h-5" : "w-4 h-4"} flex-shrink-0`} />
                      {!isCollapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`
                      w-full justify-start rounded-lg transition-all duration-200
                      ${isCollapsed ? "px-2" : "px-3"}
                      ${isActive(item.url) 
                        ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                        : "hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground"
                      }
                    `}
                  >
                    <NavLink to={item.url} className="flex items-center gap-3 w-full">
                      <item.icon className={`${isCollapsed ? "w-5 h-5" : "w-4 h-4"} flex-shrink-0`} />
                      {!isCollapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Collapse button */}
        <div className={`mt-auto p-2 ${isCollapsed ? "flex justify-center" : ""}`}>
          <SidebarTrigger className={`
            ${isCollapsed ? "w-10 h-10 p-0" : "w-full justify-start"} 
            hover:bg-sidebar-accent transition-colors duration-200
          `}>
            <div className="flex items-center gap-2">
              <ChevronLeft className={`w-4 h-4 transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""}`} />
              {!isCollapsed && <span className="ml-2">Collapse</span>}
            </div>
          </SidebarTrigger>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
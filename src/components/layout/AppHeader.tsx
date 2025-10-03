import { Search, Plus, Bell, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "../theme/ThemeToggle"
import { NewProjectDialog } from "../dialogs/NewProjectDialog"
import { useAuth } from "../auth/AuthProvider"
import { useToast } from "@/hooks/use-toast"

export function AppHeader() {
  const { user, signOut } = useAuth()
  const { toast } = useToast()

  const handleSignOut = () => {
    signOut()
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente"
    })
  }

  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex items-center justify-between h-full px-6">
        {/* Search bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="search"
              placeholder="Search projects, tasks, notes..."
              className="w-full pl-10 pr-4 bg-muted/50 border-border hover:bg-muted transition-colors duration-200"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3 ml-6">
          {/* Quick Add Button */}
          <NewProjectDialog />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative hover:bg-muted transition-colors duration-200">
                <Bell className="w-4 h-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-destructive text-destructive-foreground">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-background border border-border shadow-medium">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3">
                <div className="font-medium">Task "Website redesign" is due</div>
                <div className="text-sm text-muted-foreground">Due in 2 hours</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3">
                <div className="font-medium">New comment on "Mobile App"</div>
                <div className="text-sm text-muted-foreground">5 minutes ago</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start space-y-1 p-3">
                <div className="font-medium">Daily habit reminder</div>
                <div className="text-sm text-muted-foreground">Time to exercise!</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full hover:bg-muted transition-colors duration-200">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="User" />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border border-border shadow-medium" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user?.name || "Usuario"}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
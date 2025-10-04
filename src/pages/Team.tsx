import { useState } from "react"
import { 
  Plus, 
  Search,
  Mail,
  Phone,
  MapPin,
  MoreHorizontal,
  UserPlus,
  Shield,
  Crown,
  User,
  MessageSquare,
  Calendar
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

// This will be replaced with actual API calls
const FAKE_TEAM_DATA = {
  members: [
    {
      id: 1,
      name: "Sarah Wilson",
      email: "sarah.wilson@company.com",
      role: "owner",
      avatar: "",
      initials: "SW",
      department: "Engineering",
      location: "San Francisco, CA",
      phone: "+1 (555) 123-4567",
      joinedDate: "Jan 2023",
      status: "active",
      projects: 8,
      tasksCompleted: 142
    },
    {
      id: 2,
      name: "Mike Johnson",
      email: "mike.johnson@company.com",
      role: "admin",
      avatar: "",
      initials: "MJ",
      department: "Design",
      location: "New York, NY",
      phone: "+1 (555) 234-5678",
      joinedDate: "Mar 2023",
      status: "active",
      projects: 6,
      tasksCompleted: 98
    },
    {
      id: 3,
      name: "Emma Brown",
      email: "emma.brown@company.com",
      role: "member",
      avatar: "",
      initials: "EB",
      department: "Marketing",
      location: "Los Angeles, CA",
      phone: "+1 (555) 345-6789",
      joinedDate: "May 2023",
      status: "active",
      projects: 5,
      tasksCompleted: 87
    },
    {
      id: 4,
      name: "Alex Chen",
      email: "alex.chen@company.com",
      role: "member",
      avatar: "",
      initials: "AC",
      department: "Engineering",
      location: "Seattle, WA",
      phone: "+1 (555) 456-7890",
      joinedDate: "Jun 2023",
      status: "active",
      projects: 7,
      tasksCompleted: 112
    },
    {
      id: 5,
      name: "Lisa Anderson",
      email: "lisa.anderson@company.com",
      role: "member",
      avatar: "",
      initials: "LA",
      department: "Product",
      location: "Austin, TX",
      phone: "+1 (555) 567-8901",
      joinedDate: "Aug 2023",
      status: "away",
      projects: 4,
      tasksCompleted: 65
    }
  ],
  pendingInvites: [
    { email: "john.doe@company.com", role: "member", sentDate: "2 days ago" },
    { email: "jane.smith@company.com", role: "admin", sentDate: "1 week ago" }
  ]
}

const Team = () => {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [isInviteOpen, setIsInviteOpen] = useState(false)
  const [newMemberEmail, setNewMemberEmail] = useState("")
  const [newMemberRole, setNewMemberRole] = useState("member")

  const data = FAKE_TEAM_DATA

  const handleInviteMember = () => {
    if (!newMemberEmail) {
      toast({
        title: "Email required",
        description: "Please enter an email address",
        variant: "destructive"
      })
      return
    }

    toast({
      title: "Invitation sent! 📧",
      description: `Invitation sent to ${newMemberEmail}`,
    })
    setIsInviteOpen(false)
    setNewMemberEmail("")
    // Backend integration will handle actual invitation
  }

  const handleRemoveMember = (name: string) => {
    toast({
      title: "Member removed",
      description: `${name} has been removed from the team`,
    })
    // Backend integration will handle removal
  }

  const handleChangeRole = (name: string, newRole: string) => {
    toast({
      title: "Role updated",
      description: `${name} is now a ${newRole}`,
    })
    // Backend integration will handle role change
  }

  const handleMessageMember = (name: string) => {
    toast({
      title: "Opening chat...",
      description: `Starting conversation with ${name}`,
    })
    // Backend integration will handle messaging
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "owner": return <Crown className="w-4 h-4 text-warning" />
      case "admin": return <Shield className="w-4 h-4 text-accent" />
      default: return <User className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "owner": return "bg-warning/10 text-warning"
      case "admin": return "bg-accent/10 text-accent"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success"
      case "away": return "bg-warning"
      case "offline": return "bg-muted"
      default: return "bg-muted"
    }
  }

  const filteredMembers = data.members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.department.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Team</h1>
          <p className="text-muted-foreground mt-1">Manage your team members and collaboration</p>
        </div>
        <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow">
              <UserPlus className="w-4 h-4 mr-2" />
              Invite Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite Team Member</DialogTitle>
              <DialogDescription>
                Send an invitation to join your workspace
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="colleague@company.com"
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <select
                  id="role"
                  className="w-full h-10 px-3 rounded-md border border-border bg-background"
                  value={newMemberRole}
                  onChange={(e) => setNewMemberRole(e.target.value)}
                >
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsInviteOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleInviteMember}>
                Send Invitation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search team members..."
          className="pl-10 bg-muted/50 border-border"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="members" className="w-full">
        <TabsList>
          <TabsTrigger value="members">
            Members ({data.members.length})
          </TabsTrigger>
          <TabsTrigger value="pending">
            Pending ({data.pendingInvites.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => (
              <Card 
                key={member.id} 
                className="hover:shadow-medium transition-all duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(member.status)}`} />
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold text-foreground">
                          {member.name}
                        </CardTitle>
                        <Badge className={`text-xs mt-1 ${getRoleBadgeColor(member.role)}`}>
                          <span className="mr-1">{getRoleIcon(member.role)}</span>
                          {member.role}
                        </Badge>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleMessageMember(member.name)}>
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Send message
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleChangeRole(member.name, "admin")}>
                          <Shield className="w-4 h-4 mr-2" />
                          Change role
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleRemoveMember(member.name)}
                          className="text-destructive"
                        >
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {member.joinedDate}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Projects</span>
                      <span className="font-medium text-foreground">{member.projects}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-muted-foreground">Tasks done</span>
                      <span className="font-medium text-foreground">{member.tasksCompleted}</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full mt-2"
                    onClick={() => handleMessageMember(member.name)}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4 mt-6">
          <Card>
            <CardContent className="pt-6">
              {data.pendingInvites.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No pending invitations</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {data.pendingInvites.map((invite, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-muted">
                            <Mail className="w-5 h-5 text-muted-foreground" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{invite.email}</p>
                          <p className="text-sm text-muted-foreground">
                            Invited as {invite.role} • {invite.sentDate}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Resend
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Team

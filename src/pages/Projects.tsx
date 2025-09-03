import { useState, useMemo } from "react"
import { 
  Plus, 
  Grid3X3, 
  List, 
  Search, 
  Filter,
  Calendar,
  Users,
  MoreHorizontal,
  Star,
  Archive
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { NewProjectDialog } from "@/components/dialogs/NewProjectDialog"

const Projects = () => {
  const { toast } = useToast()
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of company website with modern design",
      progress: 75,
      status: "In Progress",
      priority: "high",
      dueDate: "Dec 15, 2024",
      team: [
        { name: "John Doe", avatar: "", initials: "JD" },
        { name: "Jane Smith", avatar: "", initials: "JS" },
        { name: "Mike Johnson", avatar: "", initials: "MJ" },
        { name: "Sarah Wilson", avatar: "", initials: "SW" }
      ],
      tags: ["Web", "Design", "Frontend"],
      tasksCount: 24,
      completedTasks: 18,
      lastUpdate: "2 hours ago",
      starred: false
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Native iOS and Android app for customer engagement",
      progress: 45,
      status: "In Progress",
      priority: "high",
      dueDate: "Jan 20, 2025",
      team: [
        { name: "Alex Chen", avatar: "", initials: "AC" },
        { name: "Maria Garcia", avatar: "", initials: "MG" },
        { name: "David Kim", avatar: "", initials: "DK" }
      ],
      tags: ["Mobile", "React Native", "Backend"],
      tasksCount: 32,
      completedTasks: 14,
      lastUpdate: "1 day ago",
      starred: false
    },
    {
      id: 3,
      name: "Brand Guidelines",
      description: "Comprehensive brand identity and style guide",
      progress: 90,
      status: "Almost Done",
      priority: "medium",
      dueDate: "Dec 10, 2024",
      team: [
        { name: "Emma Brown", avatar: "", initials: "EB" },
        { name: "Lucas Taylor", avatar: "", initials: "LT" }
      ],
      tags: ["Design", "Branding"],
      tasksCount: 15,
      completedTasks: 13,
      lastUpdate: "3 hours ago",
      starred: true
    },
    {
      id: 4,
      name: "Marketing Campaign Q1",
      description: "Digital marketing strategy for Q1 2025 launch",
      progress: 25,
      status: "Planning",
      priority: "medium",
      dueDate: "Feb 1, 2025",
      team: [
        { name: "Sophie Davis", avatar: "", initials: "SD" },
        { name: "Ryan Martinez", avatar: "", initials: "RM" },
        { name: "Lisa Anderson", avatar: "", initials: "LA" }
      ],
      tags: ["Marketing", "Strategy"],
      tasksCount: 20,
      completedTasks: 5,
      lastUpdate: "5 hours ago",
      starred: false
    }
  ])

  const handleNewProject = (newProject: any) => {
    setProjects(prev => [newProject, ...prev])
  }

  const handleStarProject = (projectId: number, projectName: string) => {
    setProjects(prev => prev.map(p => 
      p.id === projectId ? { ...p, starred: !p.starred } : p
    ))
    
    const project = projects.find(p => p.id === projectId)
    const isStarring = !project?.starred
    
    toast({
      title: isStarring ? "Project starred! ⭐" : "Project unstarred",
      description: `"${projectName}" has been ${isStarring ? "added to" : "removed from"} your favorites.`,
    })
  }

  const handleArchiveProject = (projectId: number, projectName: string) => {
    toast({
      title: "Project archived",
      description: `"${projectName}" has been moved to archives.`,
    })
    // Archive functionality would go here
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-priority-high text-white"
      case "medium": return "bg-priority-medium text-white"
      case "low": return "bg-priority-low text-white"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-accent/10 text-accent"
      case "Almost Done": return "bg-success/10 text-success"
      case "Planning": return "bg-warning/10 text-warning"
      default: return "bg-muted text-muted-foreground"
    }
  }

  // Filter projects based on search query
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects
    
    const query = searchQuery.toLowerCase()
    return projects.filter(project => 
      project.name.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query)) ||
      project.status.toLowerCase().includes(query) ||
      project.priority.toLowerCase().includes(query)
    )
  }, [projects, searchQuery])

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-1">Manage and track your project progress</p>
        </div>
        <NewProjectDialog onProjectCreate={handleNewProject} />
      </div>

      {/* Filters and View Toggle */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search projects..."
              className="pl-10 bg-muted/50 border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
        
        <div className="flex gap-1 border rounded-lg p-1">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-primary text-primary-foreground" : ""}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-primary text-primary-foreground" : ""}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Projects Grid/List */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-muted-foreground">
            {searchQuery ? "No projects found" : "No projects yet"}
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            {searchQuery ? "Try adjusting your search terms" : "Create your first project to get started"}
          </p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="hover:shadow-medium transition-all duration-200 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-foreground mb-2">
                      {project.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-background border border-border shadow-medium">
                      <DropdownMenuItem onClick={() => handleStarProject(project.id, project.name)}>
                        <Star className="w-4 h-4 mr-2" />
                        {projects.find(p => p.id === project.id)?.starred ? "Unstar" : "Favorite"}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleArchiveProject(project.id, project.name)}>
                        <Archive className="w-4 h-4 mr-2" />
                        Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Progress</span>
                    <span className="text-sm font-medium text-foreground">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {project.completedTasks} of {project.tasksCount} tasks completed
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Status and Priority */}
                <div className="flex gap-2">
                  <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                  <Badge className={`text-xs ${getPriorityColor(project.priority)}`}>
                    {project.priority}
                  </Badge>
                </div>

                {/* Team and Due Date */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, idx) => (
                      <Avatar key={idx} className="w-6 h-6 border-2 border-background">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback className="text-xs bg-muted text-muted-foreground">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {project.team.length > 3 && (
                      <div className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">+{project.team.length - 3}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {project.dueDate}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="hover:shadow-soft transition-all duration-200 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-24">
                        <Progress value={project.progress} className="h-2" />
                        <span className="text-xs text-muted-foreground">{project.progress}%</span>
                      </div>
                      
                      <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                      
                      <Badge className={`text-xs ${getPriorityColor(project.priority)}`}>
                        {project.priority}
                      </Badge>
                      
                      <div className="flex -space-x-1">
                        {project.team.slice(0, 3).map((member, idx) => (
                          <Avatar key={idx} className="w-6 h-6 border border-background">
                            <AvatarFallback className="text-xs bg-muted text-muted-foreground">
                              {member.initials}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      
                      <span className="text-sm text-muted-foreground min-w-20">{project.dueDate}</span>
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-background border border-border shadow-medium">
                      <DropdownMenuItem onClick={() => handleStarProject(project.id, project.name)}>
                        <Star className="w-4 h-4 mr-2" />
                        {projects.find(p => p.id === project.id)?.starred ? "Unstar" : "Favorite"}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleArchiveProject(project.id, project.name)}>
                        <Archive className="w-4 h-4 mr-2" />
                        Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects
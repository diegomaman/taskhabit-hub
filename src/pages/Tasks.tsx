import { useState } from "react"
import { 
  Plus, 
  Search, 
  Filter,
  Calendar,
  User,
  Flag,
  MoreHorizontal,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Tasks = () => {
  const [columns, setColumns] = useState({
    todo: [
      {
        id: 1,
        title: "Design homepage mockup",
        description: "Create wireframes and high-fidelity mockups for the new homepage",
        priority: "high",
        dueDate: "Dec 12",
        assignee: { name: "Sarah Wilson", initials: "SW" },
        project: "Website Redesign",
        tags: ["Design", "UI/UX"]
      },
      {
        id: 2,
        title: "API integration planning",
        description: "Plan the integration strategy for third-party APIs",
        priority: "medium",
        dueDate: "Dec 15",
        assignee: { name: "Mike Johnson", initials: "MJ" },
        project: "Mobile App",
        tags: ["Backend", "API"]
      },
      {
        id: 3,
        title: "Content strategy review",
        description: "Review and update content strategy for Q1",
        priority: "low",
        dueDate: "Dec 20",
        assignee: { name: "Emma Brown", initials: "EB" },
        project: "Marketing Campaign",
        tags: ["Content", "Strategy"]
      }
    ],
    inProgress: [
      {
        id: 4,
        title: "Implement user authentication",
        description: "Set up secure user login and registration system",
        priority: "high",
        dueDate: "Dec 10",
        assignee: { name: "Alex Chen", initials: "AC" },
        project: "Mobile App",
        tags: ["Development", "Security"]
      },
      {
        id: 5,
        title: "Brand color palette",
        description: "Finalize brand colors and create color guide",
        priority: "medium",
        dueDate: "Dec 8",
        assignee: { name: "Lucas Taylor", initials: "LT" },
        project: "Brand Guidelines",
        tags: ["Design", "Branding"]
      }
    ],
    done: [
      {
        id: 6,
        title: "Research competitor analysis",
        description: "Complete analysis of main competitors",
        priority: "medium",
        dueDate: "Dec 5",
        assignee: { name: "Sophie Davis", initials: "SD" },
        project: "Marketing Campaign",
        tags: ["Research", "Analysis"]
      },
      {
        id: 7,
        title: "Setup development environment",
        description: "Configure local and staging environments",
        priority: "high",
        dueDate: "Dec 1",
        assignee: { name: "David Kim", initials: "DK" },
        project: "Mobile App",
        tags: ["DevOps", "Setup"]
      },
      {
        id: 8,
        title: "Logo design concepts",
        description: "Create initial logo design concepts",
        priority: "medium",
        dueDate: "Nov 28",
        assignee: { name: "Emma Brown", initials: "EB" },
        project: "Brand Guidelines",
        tags: ["Design", "Logo"]
      }
    ]
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-priority-high"
      case "medium": return "text-priority-medium"
      case "low": return "text-priority-low"
      default: return "text-muted-foreground"
    }
  }

  const getPriorityBg = (priority: string) => {
    switch (priority) {
      case "high": return "bg-priority-high/10"
      case "medium": return "bg-priority-medium/10"
      case "low": return "bg-priority-low/10"
      default: return "bg-muted"
    }
  }

  const TaskCard = ({ task }: { task: any }) => (
    <Card className="mb-3 hover:shadow-medium transition-all duration-200 cursor-pointer group">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Flag className={`w-3 h-3 ${getPriorityColor(task.priority)}`} />
            <Badge variant="outline" className="text-xs">
              {task.project}
            </Badge>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreHorizontal className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <h3 className="font-medium text-foreground mb-2">{task.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {task.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarFallback className="text-xs bg-muted text-muted-foreground">
                {task.assignee.initials}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{task.assignee.name}</span>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {task.dueDate}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const columnTitles = {
    todo: "To Do",
    inProgress: "In Progress", 
    done: "Done"
  }

  const columnColors = {
    todo: "border-muted",
    inProgress: "border-accent",
    done: "border-success"
  }

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tasks</h1>
          <p className="text-muted-foreground mt-1">Organize and track your work with Kanban boards</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          New Task
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search tasks..."
              className="pl-10 bg-muted/50 border-border"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(columns).map(([columnKey, tasks]) => (
          <div key={columnKey} className="space-y-4">
            <Card className={`border-t-4 ${columnColors[columnKey as keyof typeof columnColors]}`}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    {columnTitles[columnKey as keyof typeof columnTitles]}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {tasks.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 min-h-[400px]">
                  {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                  
                  {/* Add Task Button */}
                  <Button 
                    variant="ghost" 
                    className="w-full border-2 border-dashed border-muted-foreground/20 hover:border-muted-foreground/40 hover:bg-muted/50 transition-all duration-200"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks
import { 
  FolderOpen, 
  CheckSquare, 
  Target, 
  StickyNote,
  TrendingUp,
  Clock,
  Users,
  Calendar
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const Dashboard = () => {
  const stats = [
    {
      title: "Active Projects",
      value: "4",
      description: "2 due this week",
      icon: FolderOpen,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Tasks Today",
      value: "6",
      description: "3 completed",
      icon: CheckSquare,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Habits Streak",
      value: "12",
      description: "Days in a row",
      icon: Target,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      title: "Recent Notes",
      value: "8",
      description: "3 new today",
      icon: StickyNote,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ]

  const recentProjects = [
    {
      name: "Website Redesign",
      progress: 75,
      dueDate: "Dec 15",
      team: 4,
      status: "on-track"
    },
    {
      name: "Mobile App",
      progress: 45,
      dueDate: "Jan 20",
      team: 6,
      status: "on-track"
    },
    {
      name: "Brand Guidelines",
      progress: 90,
      dueDate: "Dec 10",
      team: 2,
      status: "almost-done"
    },
    {
      name: "Marketing Campaign",
      progress: 25,
      dueDate: "Feb 1",
      team: 3,
      status: "just-started"
    }
  ]

  const todayTasks = [
    { name: "Review design mockups", priority: "high", project: "Website Redesign" },
    { name: "Update project documentation", priority: "medium", project: "Mobile App" },
    { name: "Client call preparation", priority: "high", project: "Brand Guidelines" },
    { name: "Team standup meeting", priority: "low", project: "General" },
    { name: "Code review", priority: "medium", project: "Mobile App" }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-priority-high"
      case "medium": return "bg-priority-medium"
      case "low": return "bg-priority-low"
      default: return "bg-muted"
    }
  }

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow">
          <TrendingUp className="w-4 h-4 mr-2" />
          View Analytics
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={stat.title} 
            className="hover:shadow-medium transition-all duration-200 border-border animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <Card className="hover:shadow-medium transition-all duration-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-accent" />
              Recent Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={project.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{project.name}</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.dueDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{project.progress}%</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-3 h-3" />
                      {project.team}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Projects
            </Button>
          </CardContent>
        </Card>

        {/* Today's Tasks */}
        <Card className="hover:shadow-medium transition-all duration-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-success" />
              Today's Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayTasks.map((task, index) => (
              <div key={task.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{task.name}</h4>
                  <p className="text-sm text-muted-foreground">{task.project}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <CheckSquare className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Tasks
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
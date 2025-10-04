import { useState } from "react"
import { 
  TrendingUp, 
  TrendingDown, 
  Activity,
  Clock,
  Target,
  Award,
  Calendar,
  Users,
  ChevronDown,
  Download
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"

// This will be replaced with actual API calls
const FAKE_ANALYTICS_DATA = {
  overview: {
    totalTasks: 247,
    completedTasks: 189,
    activeProjects: 12,
    teamMembers: 24,
    productivityScore: 87,
    weeklyGrowth: 12.5
  },
  productivity: [
    { day: "Mon", hours: 7.5, tasks: 12 },
    { day: "Tue", hours: 8.2, tasks: 15 },
    { day: "Wed", hours: 6.8, tasks: 10 },
    { day: "Thu", hours: 9.1, tasks: 18 },
    { day: "Fri", hours: 7.9, tasks: 14 },
    { day: "Sat", hours: 4.2, tasks: 6 },
    { day: "Sun", hours: 2.5, tasks: 3 }
  ],
  topProjects: [
    { name: "Website Redesign", completion: 85, time: "124h", trend: "up" },
    { name: "Mobile App", completion: 62, time: "98h", trend: "up" },
    { name: "Brand Guidelines", completion: 94, time: "67h", trend: "stable" },
    { name: "Marketing Campaign", completion: 38, time: "45h", trend: "down" }
  ],
  teamPerformance: [
    { name: "Sarah Wilson", tasks: 42, hours: 87, efficiency: 95 },
    { name: "Mike Johnson", tasks: 38, hours: 82, efficiency: 92 },
    { name: "Emma Brown", tasks: 35, hours: 78, efficiency: 89 },
    { name: "Alex Chen", tasks: 31, hours: 74, efficiency: 85 }
  ]
}

const Analytics = () => {
  const { toast } = useToast()
  const [timeRange, setTimeRange] = useState("7days")
  const [activeTab, setActiveTab] = useState("overview")

  const handleExport = () => {
    toast({
      title: "Exporting data...",
      description: "Your analytics report will be downloaded shortly.",
    })
    // Export functionality will be implemented with backend
  }

  const data = FAKE_ANALYTICS_DATA

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">Track your productivity and team performance</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleExport} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-medium transition-all duration-200 border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Productivity Score
            </CardTitle>
            <Activity className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{data.overview.productivityScore}%</div>
            <div className="flex items-center gap-1 text-xs text-success mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+{data.overview.weeklyGrowth}% from last week</span>
            </div>
            <Progress value={data.overview.productivityScore} className="h-2 mt-3" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-medium transition-all duration-200 border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tasks Completed
            </CardTitle>
            <Target className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{data.overview.completedTasks}</div>
            <p className="text-xs text-muted-foreground mt-1">
              of {data.overview.totalTasks} total tasks
            </p>
            <Progress 
              value={(data.overview.completedTasks / data.overview.totalTasks) * 100} 
              className="h-2 mt-3" 
            />
          </CardContent>
        </Card>

        <Card className="hover:shadow-medium transition-all duration-200 border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Projects
            </CardTitle>
            <Calendar className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{data.overview.activeProjects}</div>
            <p className="text-xs text-muted-foreground mt-1">
              In progress right now
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-medium transition-all duration-200 border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Team Members
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{data.overview.teamMembers}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Active contributors
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weekly Productivity Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Productivity</CardTitle>
                <CardDescription>Hours worked and tasks completed this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.productivity.map((day, index) => (
                    <div key={day.day} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-muted-foreground w-12">{day.day}</span>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <Progress value={(day.hours / 10) * 100} className="h-2 flex-1" />
                          <span className="text-xs text-foreground font-medium w-12">{day.hours}h</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={(day.tasks / 20) * 100} className="h-2 flex-1 opacity-60" />
                          <span className="text-xs text-muted-foreground w-12">{day.tasks} tasks</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Score */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Breakdown</CardTitle>
                <CardDescription>Your productivity metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">Task Completion</span>
                    </div>
                    <span className="text-sm font-bold text-foreground">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium text-foreground">Time Management</span>
                    </div>
                    <span className="text-sm font-bold text-foreground">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-warning" />
                      <span className="text-sm font-medium text-foreground">Goal Achievement</span>
                    </div>
                    <span className="text-sm font-bold text-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">Consistency</span>
                    </div>
                    <span className="text-sm font-bold text-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Projects Performance</CardTitle>
              <CardDescription>Your most active projects this period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.topProjects.map((project, index) => (
                  <div key={project.name} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{project.name}</h4>
                        <div className="flex items-center gap-2">
                          {project.trend === "up" && <TrendingUp className="w-4 h-4 text-success" />}
                          {project.trend === "down" && <TrendingDown className="w-4 h-4 text-destructive" />}
                          {project.trend === "stable" && <Activity className="w-4 h-4 text-muted-foreground" />}
                          <span className="text-sm text-muted-foreground">{project.time}</span>
                        </div>
                      </div>
                      <Progress value={project.completion} className="h-2" />
                      <span className="text-xs text-muted-foreground mt-1">{project.completion}% complete</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>Top performers this period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.teamPerformance.map((member, index) => (
                  <div key={member.name} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{member.name}</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{member.tasks} tasks</span>
                        <span>•</span>
                        <span>{member.hours}h logged</span>
                        <span>•</span>
                        <span className="text-accent font-medium">{member.efficiency}% efficiency</span>
                      </div>
                    </div>
                    <Progress value={member.efficiency} className="w-24 h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Analytics

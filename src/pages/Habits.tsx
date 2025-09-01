import { useState } from "react"
import { 
  Plus, 
  Target, 
  Flame, 
  CheckCircle2,
  Calendar as CalendarIcon,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const Habits = () => {
  const [habits] = useState([
    {
      id: 1,
      name: "Morning Exercise",
      description: "30 minutes of cardio or strength training",
      frequency: "Daily",
      streak: 12,
      completedToday: true,
      weekProgress: [true, true, false, true, true, true, false],
      category: "Health",
      color: "success"
    },
    {
      id: 2,
      name: "Read Technical Articles",
      description: "Stay updated with latest tech trends",
      frequency: "Daily",
      streak: 8,
      completedToday: false,
      weekProgress: [true, true, true, false, true, true, false],
      category: "Learning",
      color: "accent"
    },
    {
      id: 3,
      name: "Meditation",
      description: "10 minutes of mindfulness practice",
      frequency: "Daily",
      streak: 5,
      completedToday: true,
      weekProgress: [false, true, true, true, true, false, true],
      category: "Wellness",
      color: "primary"
    },
    {
      id: 4,
      name: "Code Review",
      description: "Review team code and provide feedback",
      frequency: "3x per week",
      streak: 3,
      completedToday: false,
      weekProgress: [true, false, true, false, true, false, false],
      category: "Work",
      color: "warning"
    }
  ])

  const getCategoryColor = (color: string) => {
    switch (color) {
      case "success": return "bg-success/10 text-success"
      case "accent": return "bg-accent/10 text-accent"
      case "primary": return "bg-primary/10 text-primary"
      case "warning": return "bg-warning/10 text-warning"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const toggleHabit = (habitId: number) => {
    // Toggle habit completion logic would go here
    console.log(`Toggle habit ${habitId}`)
  }

  const getDaysOfWeek = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return days
  }

  const completedToday = habits.filter(h => h.completedToday).length
  const totalHabits = habits.length
  const todayProgress = Math.round((completedToday / totalHabits) * 100)

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Habits</h1>
          <p className="text-muted-foreground mt-1">Build consistent daily routines and track your progress</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          New Habit
        </Button>
      </div>

      {/* Today's Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-medium transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Today's Progress
            </CardTitle>
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{completedToday}/{totalHabits}</div>
            <div className="mt-3">
              <Progress value={todayProgress} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {todayProgress}% completed today
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-medium transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Longest Streak
            </CardTitle>
            <div className="p-2 rounded-lg bg-warning/10">
              <Flame className="h-4 w-4 text-warning" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {Math.max(...habits.map(h => h.streak))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Days in a row
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-medium transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              This Week
            </CardTitle>
            <div className="p-2 rounded-lg bg-success/10">
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {habits.reduce((acc, habit) => acc + habit.weekProgress.filter(Boolean).length, 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Habits completed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Habits List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Your Habits</h2>
        
        <div className="grid gap-4">
          {habits.map((habit, index) => (
            <Card 
              key={habit.id} 
              className="hover:shadow-medium transition-all duration-200 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Button
                        variant={habit.completedToday ? "default" : "outline"}
                        size="sm"
                        className={`
                          w-8 h-8 p-0 rounded-full
                          ${habit.completedToday 
                            ? "bg-success text-success-foreground hover:bg-success/90" 
                            : "hover:bg-success/10 hover:text-success hover:border-success"
                          }
                        `}
                        onClick={() => toggleHabit(habit.id)}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </Button>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{habit.name}</h3>
                        <p className="text-sm text-muted-foreground">{habit.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(habit.color)}>
                          {habit.category}
                        </Badge>
                        <Badge variant="outline">
                          {habit.frequency}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      {/* Streak */}
                      <div className="flex items-center gap-2">
                        <Flame className="w-4 h-4 text-warning" />
                        <span className="font-medium text-foreground">{habit.streak}</span>
                        <span className="text-sm text-muted-foreground">day streak</span>
                      </div>
                      
                      {/* Week Progress */}
                      <div className="flex items-center gap-1">
                        {getDaysOfWeek().map((day, idx) => (
                          <div key={day} className="text-center">
                            <div className="text-xs text-muted-foreground mb-1">{day}</div>
                            <div 
                              className={`
                                w-6 h-6 rounded-full flex items-center justify-center text-xs
                                ${habit.weekProgress[idx] 
                                  ? "bg-success text-success-foreground" 
                                  : "bg-muted text-muted-foreground"
                                }
                              `}
                            >
                              {habit.weekProgress[idx] ? "✓" : ""}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Habits
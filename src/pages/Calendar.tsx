import { useState } from "react"
import { 
  Calendar as CalendarIcon, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  MapPin,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<"month" | "week">("month")

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Team Stand-up",
      time: "09:00",
      duration: "30 min",
      type: "meeting",
      color: "accent",
      location: "Conference Room A",
      attendees: 5,
      date: "2024-12-09"
    },
    {
      id: 2,
      title: "Website Redesign Deadline",
      time: "17:00",
      duration: "All day",
      type: "task",
      color: "destructive",
      project: "Website Redesign",
      date: "2024-12-10"
    },
    {
      id: 3,
      title: "Client Presentation",
      time: "14:00",
      duration: "1 hour",
      type: "meeting",
      color: "warning",
      location: "Zoom",
      attendees: 8,
      date: "2024-12-11"
    },
    {
      id: 4,
      title: "Code Review",
      time: "10:30",
      duration: "45 min",
      type: "task",
      color: "success",
      project: "Mobile App",
      date: "2024-12-12"
    },
    {
      id: 5,
      title: "Exercise",
      time: "07:00",
      duration: "30 min",
      type: "habit",
      color: "primary",
      date: "2024-12-09"
    }
  ]

  const getEventColor = (color: string) => {
    switch (color) {
      case "accent": return "bg-accent/10 text-accent border-l-accent"
      case "destructive": return "bg-destructive/10 text-destructive border-l-destructive"
      case "warning": return "bg-warning/10 text-warning border-l-warning"
      case "success": return "bg-success/10 text-success border-l-success"
      case "primary": return "bg-primary/10 text-primary border-l-primary"
      default: return "bg-muted text-muted-foreground border-l-muted"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "meeting": return <Users className="w-3 h-3" />
      case "task": return <CalendarIcon className="w-3 h-3" />
      case "habit": return <Clock className="w-3 h-3" />
      default: return <CalendarIcon className="w-3 h-3" />
    }
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.filter(event => event.date === dateStr)
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const todayEvents = events.filter(event => {
    const today = new Date().toISOString().split('T')[0]
    return event.date === today
  })

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
          <p className="text-muted-foreground mt-1">Manage your schedule and track important events</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          New Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-3 space-y-4">
          {/* Calendar Header */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("prev")}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <h2 className="text-xl font-semibold">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("next")}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex gap-1 border rounded-lg p-1">
                <Button
                  variant={view === "month" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setView("month")}
                  className={view === "month" ? "bg-primary text-primary-foreground" : ""}
                >
                  Month
                </Button>
                <Button
                  variant={view === "week" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setView("week")}
                  className={view === "week" ? "bg-primary text-primary-foreground" : ""}
                >
                  Week
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              {/* Calendar Grid */}
              <div className="space-y-2">
                {/* Days of week header */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-2">
                  {getDaysInMonth().map((day, index) => {
                    const dayEvents = day ? getEventsForDate(day) : []
                    const isToday = day && 
                      new Date().getDate() === day && 
                      new Date().getMonth() === currentDate.getMonth() &&
                      new Date().getFullYear() === currentDate.getFullYear()
                    
                    return (
                      <div
                        key={index}
                        className={`
                          min-h-20 p-1 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors
                          ${day ? "bg-background" : "bg-muted/20"}
                          ${isToday ? "ring-2 ring-primary" : ""}
                        `}
                      >
                        {day && (
                          <>
                            <div className={`text-sm font-medium mb-1 ${isToday ? "text-primary" : "text-foreground"}`}>
                              {day}
                            </div>
                            <div className="space-y-1">
                              {dayEvents.slice(0, 2).map(event => (
                                <div
                                  key={event.id}
                                  className={`text-xs p-1 rounded border-l-2 ${getEventColor(event.color)}`}
                                >
                                  <div className="font-medium truncate">{event.title}</div>
                                  <div className="text-xs opacity-75">{event.time}</div>
                                </div>
                              ))}
                              {dayEvents.length > 2 && (
                                <div className="text-xs text-muted-foreground">
                                  +{dayEvents.length - 2} more
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Events Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Today's Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayEvents.length > 0 ? (
                todayEvents.map(event => (
                  <div
                    key={event.id}
                    className={`p-3 rounded-lg border-l-4 ${getEventColor(event.color)} hover:bg-opacity-80 transition-colors cursor-pointer`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      {getTypeIcon(event.type)}
                    </div>
                    
                    <div className="space-y-1 text-xs opacity-75">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {event.time} • {event.duration}
                      </div>
                      
                      {event.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </div>
                      )}
                      
                      {event.attendees && (
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {event.attendees} attendees
                        </div>
                      )}
                      
                      {event.project && (
                        <Badge variant="outline" className="text-xs mt-1">
                          {event.project}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <CalendarIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No events today</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">This Week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Meetings</span>
                <Badge variant="secondary">8</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Tasks</span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Habits</span>
                <Badge variant="secondary">15</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Calendar
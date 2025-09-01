import { useState } from "react"
import { 
  Plus, 
  Search, 
  Pin,
  Trash2,
  Edit3,
  Palette
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const Notes = () => {
  const [notes] = useState([
    {
      id: 1,
      title: "Project Ideas",
      content: "• AI-powered task manager\n• Collaborative whiteboard app\n• Voice-to-text note taking\n• Smart habit tracker",
      color: "yellow",
      pinned: true,
      createdAt: "2024-12-08T10:30:00Z"
    },
    {
      id: 2,
      title: "Meeting Notes",
      content: "Sprint Planning:\n- Review backlog items\n- Estimate story points\n- Assign tasks to team members\n- Set sprint goals",
      color: "blue",
      pinned: false,
      createdAt: "2024-12-07T14:15:00Z"
    },
    {
      id: 3,
      title: "Learning Goals",
      content: "Q1 2025:\n✓ Master React Server Components\n• Learn WebAssembly basics\n• Explore AI/ML fundamentals\n• Improve system design skills",
      color: "green",
      pinned: true,
      createdAt: "2024-12-06T09:00:00Z"
    },
    {
      id: 4,
      title: "Quick Thoughts",
      content: "Maybe we should consider using a micro-frontend architecture for the dashboard. It would allow teams to work independently and deploy separately.",
      color: "purple",
      pinned: false,
      createdAt: "2024-12-05T16:45:00Z"
    },
    {
      id: 5,
      title: "Books to Read",
      content: "• System Design Interview\n• Clean Architecture\n• Designing Data-Intensive Applications\n• The Pragmatic Programmer",
      color: "pink",
      pinned: false,
      createdAt: "2024-12-04T11:20:00Z"
    },
    {
      id: 6,
      title: "Weekend Plans",
      content: "Saturday:\n- Morning workout\n- Grocery shopping\n- Work on side project\n\nSunday:\n- Family brunch\n- Code review prep\n- Relax and read",
      color: "orange",
      pinned: false,
      createdAt: "2024-12-03T18:30:00Z"
    }
  ])

  const getColorClasses = (color: string) => {
    switch (color) {
      case "yellow": return "bg-yellow-100 border-yellow-200 hover:bg-yellow-50"
      case "blue": return "bg-blue-100 border-blue-200 hover:bg-blue-50"
      case "green": return "bg-green-100 border-green-200 hover:bg-green-50"
      case "purple": return "bg-purple-100 border-purple-200 hover:bg-purple-50"
      case "pink": return "bg-pink-100 border-pink-200 hover:bg-pink-50"
      case "orange": return "bg-orange-100 border-orange-200 hover:bg-orange-50"
      default: return "bg-yellow-100 border-yellow-200 hover:bg-yellow-50"
    }
  }

  const pinnedNotes = notes.filter(note => note.pinned)
  const unpinnedNotes = notes.filter(note => !note.pinned)

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Sticky Wall</h1>
          <p className="text-muted-foreground mt-1">Quick notes and ideas at your fingertips</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          New Note
        </Button>
      </div>

      {/* Search */}
      <div className="max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search notes..."
            className="pl-10 bg-muted/50 border-border"
          />
        </div>
      </div>

      {/* Pinned Notes */}
      {pinnedNotes.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Pin className="w-4 h-4 text-muted-foreground" />
            <h2 className="text-lg font-semibold text-foreground">Pinned</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pinnedNotes.map((note, index) => (
              <Card 
                key={note.id}
                className={`
                  ${getColorClasses(note.color)} 
                  cursor-pointer transition-all duration-200 hover:shadow-medium
                  animate-scale-in group relative
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  {/* Note Actions */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-white/20">
                      <Pin className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-white/20">
                      <Edit3 className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-white/20">
                      <Palette className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-white/20 text-destructive">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground text-sm leading-tight">
                      {note.title}
                    </h3>
                    <div className="text-sm text-foreground/80 whitespace-pre-wrap line-clamp-6">
                      {note.content}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular Notes */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Notes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {unpinnedNotes.map((note, index) => (
            <Card 
              key={note.id}
              className={`
                ${getColorClasses(note.color)} 
                cursor-pointer transition-all duration-200 hover:shadow-medium
                animate-scale-in group relative
              `}
              style={{ animationDelay: `${(pinnedNotes.length + index) * 0.1}s` }}
            >
              <CardContent className="p-4">
                {/* Note Actions */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1">
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-white/20">
                    <Pin className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-white/20">
                    <Edit3 className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-white/20">
                    <Palette className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-white/20 text-destructive">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground text-sm leading-tight">
                    {note.title}
                  </h3>
                  <div className="text-sm text-foreground/80 whitespace-pre-wrap line-clamp-6">
                    {note.content}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Empty State for New Note */}
      <Card className="border-2 border-dashed border-muted-foreground/20 hover:border-muted-foreground/40 hover:bg-muted/50 transition-all duration-200 cursor-pointer">
        <CardContent className="p-8 text-center">
          <Plus className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-muted-foreground">Click to add a new note</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Notes
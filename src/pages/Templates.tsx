import { useState } from "react"
import { 
  Plus, 
  Search,
  Star,
  Download,
  Eye,
  Copy,
  MoreHorizontal,
  Layout,
  Briefcase,
  Target,
  Calendar,
  TrendingUp,
  Users
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

// This will be replaced with actual API calls
const FAKE_TEMPLATES_DATA = {
  categories: [
    { id: "all", name: "All Templates", count: 24 },
    { id: "project", name: "Project Management", count: 8 },
    { id: "marketing", name: "Marketing", count: 6 },
    { id: "personal", name: "Personal", count: 5 },
    { id: "team", name: "Team Collaboration", count: 5 }
  ],
  templates: [
    {
      id: 1,
      name: "Website Redesign Project",
      description: "Complete template for managing website redesign projects with phases, tasks, and deliverables",
      category: "project",
      icon: Layout,
      tasks: 32,
      uses: 1247,
      rating: 4.8,
      featured: true,
      tags: ["Web Design", "Frontend", "UI/UX"]
    },
    {
      id: 2,
      name: "Product Launch Campaign",
      description: "End-to-end marketing campaign template for product launches",
      category: "marketing",
      icon: TrendingUp,
      tasks: 28,
      uses: 892,
      rating: 4.6,
      featured: true,
      tags: ["Marketing", "Launch", "Strategy"]
    },
    {
      id: 3,
      name: "Sprint Planning",
      description: "Agile sprint planning template with story points and velocity tracking",
      category: "team",
      icon: Target,
      tasks: 18,
      uses: 2103,
      rating: 4.9,
      featured: false,
      tags: ["Agile", "Scrum", "Development"]
    },
    {
      id: 4,
      name: "Personal Goal Tracker",
      description: "Track and achieve your personal goals with this comprehensive template",
      category: "personal",
      icon: Target,
      tasks: 15,
      uses: 3421,
      rating: 4.7,
      featured: false,
      tags: ["Goals", "Habits", "Personal"]
    },
    {
      id: 5,
      name: "Team Onboarding",
      description: "Complete onboarding checklist for new team members",
      category: "team",
      icon: Users,
      tasks: 24,
      uses: 1564,
      rating: 4.5,
      featured: true,
      tags: ["HR", "Team", "Onboarding"]
    },
    {
      id: 6,
      name: "Event Planning",
      description: "Comprehensive event planning template from concept to execution",
      category: "project",
      icon: Calendar,
      tasks: 35,
      uses: 987,
      rating: 4.4,
      featured: false,
      tags: ["Events", "Planning", "Management"]
    },
    {
      id: 7,
      name: "Content Calendar",
      description: "Organize your content strategy with this editorial calendar template",
      category: "marketing",
      icon: Calendar,
      tasks: 20,
      uses: 2341,
      rating: 4.8,
      featured: false,
      tags: ["Content", "Marketing", "Social Media"]
    },
    {
      id: 8,
      name: "Business Plan",
      description: "Structure your business plan with milestones and financial projections",
      category: "project",
      icon: Briefcase,
      tasks: 42,
      uses: 756,
      rating: 4.6,
      featured: false,
      tags: ["Business", "Strategy", "Planning"]
    }
  ]
}

const Templates = () => {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [favorites, setFavorites] = useState<number[]>([])

  const data = FAKE_TEMPLATES_DATA

  const handleUseTemplate = (templateName: string) => {
    toast({
      title: "Creating from template...",
      description: `Setting up your project from "${templateName}"`,
    })
    // Backend integration will handle template instantiation
  }

  const handlePreviewTemplate = (templateName: string) => {
    toast({
      title: "Opening preview",
      description: `Loading preview of "${templateName}"`,
    })
    // Backend integration will handle preview
  }

  const handleToggleFavorite = (templateId: number) => {
    setFavorites(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    )
    toast({
      title: favorites.includes(templateId) ? "Removed from favorites" : "Added to favorites",
    })
  }

  const filteredTemplates = data.templates.filter(template => {
    const matchesSearch = 
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredTemplates = data.templates.filter(t => t.featured)

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Templates Library</h1>
          <p className="text-muted-foreground mt-1">Start projects faster with pre-built templates</p>
        </div>
        <Button variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Create Template
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search templates..."
            className="pl-10 bg-muted/50 border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          {data.categories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name} ({category.count})
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Featured Templates */}
        {selectedCategory === "all" && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Featured Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTemplates.map((template, index) => (
                <Card 
                  key={template.id}
                  className="hover:shadow-medium transition-all duration-200 cursor-pointer animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                          <template.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base font-semibold text-foreground">
                            {template.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">Featured</Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Star className="w-3 h-3 fill-warning text-warning" />
                              {template.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => handleToggleFavorite(template.id)}
                      >
                        <Star 
                          className={`w-4 h-4 ${favorites.includes(template.id) ? 'fill-warning text-warning' : 'text-muted-foreground'}`} 
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {template.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {template.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border">
                      <div className="flex items-center gap-4">
                        <span>{template.tasks} tasks</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {template.uses}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        onClick={() => handleUseTemplate(template.name)}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Use Template
                      </Button>
                      <Button 
                        variant="outline"
                        size="icon"
                        onClick={() => handlePreviewTemplate(template.name)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Templates */}
        <TabsContent value={selectedCategory} className="space-y-6 mt-6">
          {selectedCategory === "all" && featuredTemplates.length > 0 && (
            <h2 className="text-xl font-semibold text-foreground">All Templates</h2>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <Card 
                key={template.id}
                className="hover:shadow-medium transition-all duration-200 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <template.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base font-semibold text-foreground">
                          {template.name}
                        </CardTitle>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                          <Star className="w-3 h-3 fill-warning text-warning" />
                          {template.rating}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => handleToggleFavorite(template.id)}
                    >
                      <Star 
                        className={`w-4 h-4 ${favorites.includes(template.id) ? 'fill-warning text-warning' : 'text-muted-foreground'}`} 
                      />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {template.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {template.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center gap-4">
                      <span>{template.tasks} tasks</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {template.uses}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1"
                      onClick={() => handleUseTemplate(template.name)}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Use Template
                    </Button>
                    <Button 
                      variant="outline"
                      size="icon"
                      onClick={() => handlePreviewTemplate(template.name)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold text-muted-foreground">No templates found</h3>
              <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Templates

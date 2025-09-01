import { useState } from "react"
import { 
  Upload, 
  Search, 
  Filter,
  Grid3X3,
  List,
  File,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Download,
  MoreHorizontal,
  FolderOpen,
  Star,
  Trash2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Files = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const files = [
    {
      id: 1,
      name: "Project Proposal.pdf",
      type: "pdf",
      size: "2.4 MB",
      uploadedAt: "2024-12-08",
      project: "Website Redesign",
      starred: true,
      url: "#"
    },
    {
      id: 2,
      name: "Design Mockups.fig",
      type: "figma",
      size: "15.7 MB",
      uploadedAt: "2024-12-07",
      project: "Mobile App",
      starred: false,
      url: "#"
    },
    {
      id: 3,
      name: "Team Photo.jpg",
      type: "image",
      size: "3.2 MB",
      uploadedAt: "2024-12-06",
      project: "General",
      starred: false,
      url: "#"
    },
    {
      id: 4,
      name: "Meeting Recording.mp4",
      type: "video",
      size: "45.8 MB",
      uploadedAt: "2024-12-05",
      project: "Brand Guidelines",
      starred: true,
      url: "#"
    },
    {
      id: 5,
      name: "Requirements.docx",
      type: "document",
      size: "128 KB",
      uploadedAt: "2024-12-04",
      project: "Website Redesign",
      starred: false,
      url: "#"
    },
    {
      id: 6,
      name: "API Documentation.pdf",
      type: "pdf",
      size: "1.8 MB",
      uploadedAt: "2024-12-03",
      project: "Mobile App",
      starred: false,
      url: "#"
    },
    {
      id: 7,
      name: "Brand Assets.zip",
      type: "archive",
      size: "23.4 MB",
      uploadedAt: "2024-12-02",
      project: "Brand Guidelines",
      starred: true,
      url: "#"
    },
    {
      id: 8,
      name: "Budget Spreadsheet.xlsx",
      type: "spreadsheet",
      size: "456 KB",
      uploadedAt: "2024-12-01",
      project: "Marketing Campaign",
      starred: false,
      url: "#"
    }
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf": return <FileText className="w-8 h-8 text-destructive" />
      case "image": return <Image className="w-8 h-8 text-success" />
      case "video": return <Video className="w-8 h-8 text-accent" />
      case "document": return <FileText className="w-8 h-8 text-accent" />
      case "spreadsheet": return <FileText className="w-8 h-8 text-success" />
      case "archive": return <Archive className="w-8 h-8 text-warning" />
      case "figma": return <File className="w-8 h-8 text-primary" />
      default: return <File className="w-8 h-8 text-muted-foreground" />
    }
  }

  const getFileColor = (type: string) => {
    switch (type) {
      case "pdf": return "bg-destructive/10"
      case "image": return "bg-success/10"
      case "video": return "bg-accent/10"
      case "document": return "bg-accent/10"
      case "spreadsheet": return "bg-success/10"
      case "archive": return "bg-warning/10"
      case "figma": return "bg-primary/10"
      default: return "bg-muted/10"
    }
  }

  const handleDownload = (file: any) => {
    console.log(`Downloading ${file.name}`)
    // Download functionality would go here
  }

  const handleStar = (fileId: number) => {
    console.log(`Starring/unstarring file ${fileId}`)
    // Star functionality would go here
  }

  const handleDelete = (fileId: number) => {
    console.log(`Deleting file ${fileId}`)
    // Delete functionality would go here
  }

  const starredFiles = files.filter(file => file.starred)
  const recentFiles = files.slice(0, 4)

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Files</h1>
          <p className="text-muted-foreground mt-1">Store and organize your project files</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow">
          <Upload className="w-4 h-4 mr-2" />
          Upload File
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-medium transition-all duration-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Files</p>
                <p className="text-2xl font-bold text-foreground">{files.length}</p>
              </div>
              <FolderOpen className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-medium transition-all duration-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Storage Used</p>
                <p className="text-2xl font-bold text-foreground">94.2 MB</p>
              </div>
              <Archive className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-medium transition-all duration-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Starred</p>
                <p className="text-2xl font-bold text-foreground">{starredFiles.length}</p>
              </div>
              <Star className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-medium transition-all duration-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Recent</p>
                <p className="text-2xl font-bold text-foreground">{recentFiles.length}</p>
              </div>
              <FileText className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and View Toggle */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search files..."
              className="pl-10 bg-muted/50 border-border"
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

      {/* Files Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {files.map((file, index) => (
            <Card 
              key={file.id} 
              className="hover:shadow-medium transition-all duration-200 cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* File Icon and Actions */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${getFileColor(file.type)}`}>
                      {getFileIcon(file.type)}
                    </div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-background border border-border shadow-medium">
                        <DropdownMenuItem onClick={() => handleDownload(file)}>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStar(file.id)}>
                          <Star className="w-4 h-4 mr-2" />
                          {file.starred ? "Unstar" : "Star"}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDelete(file.id)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  
                  {/* File Info */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium text-foreground text-sm leading-tight line-clamp-2">
                        {file.name}
                      </h3>
                      {file.starred && (
                        <Star className="w-4 h-4 text-warning fill-current flex-shrink-0" />
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{file.size}</span>
                      <span>{file.uploadedAt}</span>
                    </div>
                    
                    <Badge variant="outline" className="text-xs">
                      {file.project}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {files.map((file, index) => (
            <Card 
              key={file.id} 
              className="hover:shadow-soft transition-all duration-200 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.02}s` }}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`p-2 rounded-lg ${getFileColor(file.type)}`}>
                      {getFileIcon(file.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-foreground truncate">{file.name}</h3>
                        {file.starred && (
                          <Star className="w-4 h-4 text-warning fill-current flex-shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{file.size}</span>
                        <span>{file.uploadedAt}</span>
                        <Badge variant="outline" className="text-xs">
                          {file.project}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-background border border-border shadow-medium">
                      <DropdownMenuItem onClick={() => handleDownload(file)}>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStar(file.id)}>
                        <Star className="w-4 h-4 mr-2" />
                        {file.starred ? "Unstar" : "Star"}
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleDelete(file.id)}
                        className="text-destructive focus:text-destructive"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Upload Area */}
      <Card className="border-2 border-dashed border-muted-foreground/20 hover:border-muted-foreground/40 hover:bg-muted/50 transition-all duration-200 cursor-pointer">
        <CardContent className="p-8 text-center">
          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">Drop files to upload</h3>
          <p className="text-muted-foreground mb-4">or click to select files from your computer</p>
          <Button variant="outline">
            Choose Files
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Files
import { useState } from "react"
import { 
  Plus,
  Search,
  Check,
  ExternalLink,
  Settings,
  TrendingUp,
  Mail,
  Calendar as CalendarIcon,
  MessageSquare,
  Github,
  Slack,
  Figma,
  Zap,
  Database,
  Cloud
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"

// This will be replaced with actual API calls
const FAKE_INTEGRATIONS_DATA = {
  connected: [
    {
      id: 1,
      name: "Slack",
      description: "Team communication and notifications",
      icon: Slack,
      category: "Communication",
      connected: true,
      status: "active",
      lastSync: "2 minutes ago"
    },
    {
      id: 2,
      name: "GitHub",
      description: "Version control and code management",
      icon: Github,
      category: "Development",
      connected: true,
      status: "active",
      lastSync: "5 minutes ago"
    },
    {
      id: 3,
      name: "Google Calendar",
      description: "Sync tasks and deadlines with your calendar",
      icon: CalendarIcon,
      category: "Productivity",
      connected: true,
      status: "active",
      lastSync: "1 hour ago"
    }
  ],
  available: [
    {
      id: 4,
      name: "Figma",
      description: "Design collaboration and prototyping",
      icon: Figma,
      category: "Design",
      connected: false,
      popular: true
    },
    {
      id: 5,
      name: "Gmail",
      description: "Email integration and notifications",
      icon: Mail,
      category: "Communication",
      connected: false,
      popular: true
    },
    {
      id: 6,
      name: "Zapier",
      description: "Automate workflows with 5000+ apps",
      icon: Zap,
      category: "Automation",
      connected: false,
      popular: true
    },
    {
      id: 7,
      name: "Notion",
      description: "Sync notes and documentation",
      icon: Database,
      category: "Productivity",
      connected: false,
      popular: false
    },
    {
      id: 8,
      name: "Discord",
      description: "Team chat and voice channels",
      icon: MessageSquare,
      category: "Communication",
      connected: false,
      popular: false
    },
    {
      id: 9,
      name: "Google Drive",
      description: "Cloud storage and file sharing",
      icon: Cloud,
      category: "Storage",
      connected: false,
      popular: true
    }
  ]
}

const Integrations = () => {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [integrations, setIntegrations] = useState(FAKE_INTEGRATIONS_DATA)

  const handleConnect = (integrationName: string) => {
    toast({
      title: "Connecting...",
      description: `Setting up ${integrationName} integration`,
    })
    // Backend integration will handle OAuth and connection
  }

  const handleDisconnect = (integrationName: string) => {
    toast({
      title: "Disconnected",
      description: `${integrationName} has been disconnected`,
    })
    // Backend integration will handle disconnection
  }

  const handleConfigure = (integrationName: string) => {
    toast({
      title: "Opening settings",
      description: `Configure ${integrationName} integration`,
    })
    // Backend integration will handle configuration
  }

  const allIntegrations = [...integrations.connected, ...integrations.available]
  
  const filteredIntegrations = allIntegrations.filter(integration =>
    integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    integration.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    integration.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const categories = Array.from(new Set(allIntegrations.map(i => i.category)))

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Integrations</h1>
          <p className="text-muted-foreground mt-1">Connect your favorite tools and streamline your workflow</p>
        </div>
        <Button variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Request Integration
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search integrations..."
          className="pl-10 bg-muted/50 border-border"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">
            All ({allIntegrations.length})
          </TabsTrigger>
          <TabsTrigger value="connected">
            Connected ({integrations.connected.length})
          </TabsTrigger>
          <TabsTrigger value="available">
            Available ({integrations.available.length})
          </TabsTrigger>
        </TabsList>

        {/* Connected Integrations */}
        <TabsContent value="connected" className="space-y-4 mt-6">
          {integrations.connected.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No integrations connected yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.connected.map((integration, index) => (
                <Card 
                  key={integration.id}
                  className="hover:shadow-medium transition-all duration-200 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                          <integration.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-base font-semibold text-foreground">
                            {integration.name}
                          </CardTitle>
                          <Badge className="text-xs mt-1 bg-success/10 text-success">
                            <Check className="w-3 h-3 mr-1" />
                            Connected
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>

                    <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                      <span className="text-muted-foreground">Last synced</span>
                      <span className="text-foreground font-medium">{integration.lastSync}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => handleConfigure(integration.name)}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleDisconnect(integration.name)}
                      >
                        Disconnect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Available Integrations */}
        <TabsContent value="available" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.available.map((integration, index) => (
              <Card 
                key={integration.id}
                className="hover:shadow-medium transition-all duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                        <integration.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold text-foreground">
                          {integration.name}
                        </CardTitle>
                        {integration.popular && (
                          <Badge variant="secondary" className="text-xs mt-1">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>

                  <Badge variant="outline" className="text-xs">
                    {integration.category}
                  </Badge>

                  <Button 
                    className="w-full"
                    onClick={() => handleConnect(integration.name)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* All Integrations */}
        <TabsContent value="all" className="space-y-6 mt-6">
          {categories.map(category => {
            const categoryIntegrations = filteredIntegrations.filter(i => i.category === category)
            if (categoryIntegrations.length === 0) return null

            return (
              <div key={category}>
                <h2 className="text-xl font-semibold text-foreground mb-4">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryIntegrations.map((integration, index) => (
                    <Card 
                      key={integration.id}
                      className="hover:shadow-medium transition-all duration-200 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-lg ${integration.connected ? 'bg-gradient-primary shadow-glow' : 'bg-muted'} flex items-center justify-center`}>
                              <integration.icon className={`w-6 h-6 ${integration.connected ? 'text-primary-foreground' : 'text-foreground'}`} />
                            </div>
                            <div>
                              <CardTitle className="text-base font-semibold text-foreground">
                                {integration.name}
                              </CardTitle>
                              {integration.connected ? (
                                <Badge className="text-xs mt-1 bg-success/10 text-success">
                                  <Check className="w-3 h-3 mr-1" />
                                  Connected
                                </Badge>
                              ) : (
                                'popular' in integration && integration.popular && (
                                  <Badge variant="secondary" className="text-xs mt-1">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    Popular
                                  </Badge>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {integration.description}
                        </p>

                        {integration.connected && 'lastSync' in integration && (
                          <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                            <span className="text-muted-foreground">Last synced</span>
                            <span className="text-foreground font-medium">{integration.lastSync}</span>
                          </div>
                        )}

                        {integration.connected ? (
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => handleConfigure(integration.name)}
                            >
                              <Settings className="w-4 h-4 mr-2" />
                              Configure
                            </Button>
                            <Button 
                              variant="outline"
                              onClick={() => handleDisconnect(integration.name)}
                            >
                              Disconnect
                            </Button>
                          </div>
                        ) : (
                          <Button 
                            className="w-full"
                            onClick={() => handleConnect(integration.name)}
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Connect
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold text-muted-foreground">No integrations found</h3>
              <p className="text-sm text-muted-foreground mt-2">Try adjusting your search</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Integrations

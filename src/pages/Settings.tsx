import { useState } from "react"
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe,
  Smartphone,
  Moon,
  Sun,
  Monitor,
  Save,
  Upload,
  Mail,
  Lock,
  Download,
  Trash2,
  Key,
  Zap,
  Clock,
  Activity,
  Database,
  Plug,
  Settings as SettingsIcon,
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "@/components/theme/ThemeProvider"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

const Settings = () => {
  const { theme, setTheme } = useTheme()
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    // Profile
    name: "John Doe",
    email: "john@example.com",
    bio: "Product Manager focused on building great user experiences",
    phone: "+1 234 567 8900",
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    weeklyDigest: false,
    taskReminders: true,
    projectUpdates: true,
    mentionAlerts: true,
    
    // Preferences
    language: "en",
    timezone: "UTC-5",
    startOfWeek: "monday",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12h",
    
    // Privacy
    profileVisibility: "team",
    dataSharing: false,
    analyticsOptOut: false,
    twoFactorAuth: false,
    
    // Workspace
    autoSave: true,
    compactMode: false,
    showConfetti: true,
    soundEffects: false,
    
    // Integrations
    slackConnected: false,
    googleCalendar: true,
    githubConnected: false
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSave = () => {
    console.log("Saving settings:", settings)
    toast({
      title: "Settings saved!",
      description: "Your preferences have been updated successfully.",
    })
  }

  const SettingsSection = ({ title, description, icon: Icon, children, badge }: {
    title: string
    description: string
    icon: any
    children: React.ReactNode
    badge?: string
  }) => (
    <Card className="hover:shadow-medium transition-all duration-300 border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
              {badge && <Badge variant="secondary" className="text-xs">{badge}</Badge>}
            </div>
            <p className="text-sm text-muted-foreground font-normal">{description}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  )

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account and application preferences</p>
        </div>
        <Button 
          onClick={handleSave}
          className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <SettingsSection
          title="Profile"
          description="Manage your personal information"
          icon={User}
        >
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/avatars/01.png" />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg">
                JD
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Change Photo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={settings.name}
                onChange={(e) => handleSettingChange("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => handleSettingChange("email", e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={settings.phone}
              onChange={(e) => handleSettingChange("phone", e.target.value)}
              placeholder="+1 234 567 8900"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={settings.bio}
              onChange={(e) => handleSettingChange("bio", e.target.value)}
              placeholder="Tell us about yourself..."
              className="min-h-20"
            />
          </div>
        </SettingsSection>

        {/* Theme Settings */}
        <SettingsSection
          title="Appearance"
          description="Customize how the app looks and feels"
          icon={Palette}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTheme("light")}
                  className="flex items-center gap-2"
                >
                  <Sun className="w-4 h-4" />
                  Light
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTheme("dark")}
                  className="flex items-center gap-2"
                >
                  <Moon className="w-4 h-4" />
                  Dark
                </Button>
                <Button
                  variant={theme === "system" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTheme("system")}
                  className="flex items-center gap-2"
                >
                  <Monitor className="w-4 h-4" />
                  System
                </Button>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Compact Mode</Label>
                <p className="text-sm text-muted-foreground">Reduce spacing and padding</p>
              </div>
              <Switch
                checked={settings.compactMode}
                onCheckedChange={(checked) => handleSettingChange("compactMode", checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Show Confetti Animations</Label>
                <p className="text-sm text-muted-foreground">Celebrate completed tasks</p>
              </div>
              <Switch
                checked={settings.showConfetti}
                onCheckedChange={(checked) => handleSettingChange("showConfetti", checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Sound Effects</Label>
                <p className="text-sm text-muted-foreground">Play sounds for notifications</p>
              </div>
              <Switch
                checked={settings.soundEffects}
                onCheckedChange={(checked) => handleSettingChange("soundEffects", checked)}
              />
            </div>
          </div>
        </SettingsSection>

        {/* Notification Settings */}
        <SettingsSection
          title="Notifications"
          description="Control how you receive updates"
          icon={Bell}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Get notified in your browser</p>
              </div>
              <Switch
                checked={settings.pushNotifications}
                onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Weekly Digest</Label>
                <p className="text-sm text-muted-foreground">Weekly summary of your activity</p>
              </div>
              <Switch
                checked={settings.weeklyDigest}
                onCheckedChange={(checked) => handleSettingChange("weeklyDigest", checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Task Reminders</Label>
                <p className="text-sm text-muted-foreground">Reminders for upcoming deadlines</p>
              </div>
              <Switch
                checked={settings.taskReminders}
                onCheckedChange={(checked) => handleSettingChange("taskReminders", checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Project Updates</Label>
                <p className="text-sm text-muted-foreground">Get notified about project changes</p>
              </div>
              <Switch
                checked={settings.projectUpdates}
                onCheckedChange={(checked) => handleSettingChange("projectUpdates", checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Mention Alerts</Label>
                <p className="text-sm text-muted-foreground">When someone mentions you</p>
              </div>
              <Switch
                checked={settings.mentionAlerts}
                onCheckedChange={(checked) => handleSettingChange("mentionAlerts", checked)}
              />
            </div>
          </div>
        </SettingsSection>

        {/* Preferences */}
        <SettingsSection
          title="Preferences"
          description="Customize your workspace"
          icon={Globe}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Language</Label>
                <Select
                  value={settings.language}
                  onValueChange={(value) => handleSettingChange("language", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Timezone</Label>
                <Select
                  value={settings.timezone}
                  onValueChange={(value) => handleSettingChange("timezone", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border">
                    <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                    <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="UTC+0">UTC</SelectItem>
                    <SelectItem value="UTC+1">Central Europe (UTC+1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Start of Week</Label>
              <Select
                value={settings.startOfWeek}
                onValueChange={(value) => handleSettingChange("startOfWeek", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border">
                  <SelectItem value="sunday">Sunday</SelectItem>
                  <SelectItem value="monday">Monday</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date Format</Label>
                <Select
                  value={settings.dateFormat}
                  onValueChange={(value) => handleSettingChange("dateFormat", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border">
                    <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                    <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                    <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Time Format</Label>
                <Select
                  value={settings.timeFormat}
                  onValueChange={(value) => handleSettingChange("timeFormat", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border">
                    <SelectItem value="12h">12-hour</SelectItem>
                    <SelectItem value="24h">24-hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-save</Label>
                <p className="text-sm text-muted-foreground">Automatically save your work</p>
              </div>
              <Switch
                checked={settings.autoSave}
                onCheckedChange={(checked) => handleSettingChange("autoSave", checked)}
              />
            </div>
          </div>
        </SettingsSection>

        {/* Privacy Settings */}
        <SettingsSection
          title="Privacy & Security"
          description="Control your data and privacy"
          icon={Shield}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Profile Visibility</Label>
              <Select
                value={settings.profileVisibility}
                onValueChange={(value) => handleSettingChange("profileVisibility", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border">
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="team">Team Only</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Data Sharing</Label>
                <p className="text-sm text-muted-foreground">Share usage data to improve the app</p>
              </div>
              <Switch
                checked={settings.dataSharing}
                onCheckedChange={(checked) => handleSettingChange("dataSharing", checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Analytics Opt-out</Label>
                <p className="text-sm text-muted-foreground">Disable analytics tracking</p>
              </div>
              <Switch
                checked={settings.analyticsOptOut}
                onCheckedChange={(checked) => handleSettingChange("analyticsOptOut", checked)}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Switch
                checked={settings.twoFactorAuth}
                onCheckedChange={(checked) => handleSettingChange("twoFactorAuth", checked)}
              />
            </div>
          </div>
        </SettingsSection>

        {/* Integrations */}
        <SettingsSection
          title="Integrations"
          description="Connect with your favorite tools"
          icon={Plug}
          badge="New"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#611f69] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div>
                  <Label className="text-card-foreground">Slack</Label>
                  <p className="text-xs text-muted-foreground">Get notifications in Slack</p>
                </div>
              </div>
              {settings.slackConnected ? (
                <Badge variant="outline" className="gap-1 border-success text-success">
                  <CheckCircle2 className="w-3 h-3" />
                  Connected
                </Badge>
              ) : (
                <Button variant="outline" size="sm">Connect</Button>
              )}
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#4285F4] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <div>
                  <Label className="text-card-foreground">Google Calendar</Label>
                  <p className="text-xs text-muted-foreground">Sync your events</p>
                </div>
              </div>
              {settings.googleCalendar ? (
                <Badge variant="outline" className="gap-1 border-success text-success">
                  <CheckCircle2 className="w-3 h-3" />
                  Connected
                </Badge>
              ) : (
                <Button variant="outline" size="sm">Connect</Button>
              )}
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#24292e] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GH</span>
                </div>
                <div>
                  <Label className="text-card-foreground">GitHub</Label>
                  <p className="text-xs text-muted-foreground">Link your repositories</p>
                </div>
              </div>
              {settings.githubConnected ? (
                <Badge variant="outline" className="gap-1 border-success text-success">
                  <CheckCircle2 className="w-3 h-3" />
                  Connected
                </Badge>
              ) : (
                <Button variant="outline" size="sm">Connect</Button>
              )}
            </div>
          </div>
        </SettingsSection>
        
        {/* API Keys */}
        <SettingsSection
          title="API Keys"
          description="Manage your API access tokens"
          icon={Key}
          badge="Pro"
        >
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-border bg-muted/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <Label className="text-card-foreground">Production Key</Label>
                  <p className="text-xs text-muted-foreground mt-1">Created 3 months ago</p>
                </div>
                <Badge variant="outline" className="text-xs">Active</Badge>
              </div>
              <code className="text-xs bg-background px-2 py-1 rounded border border-border text-muted-foreground block mb-3">
                pk_live_51H8xxxxxxxxxxxxxxxxxxx
              </code>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  <Lock className="w-3 h-3 mr-1" />
                  Regenerate
                </Button>
                <Button variant="outline" size="sm" className="text-xs text-destructive">
                  <Trash2 className="w-3 h-3 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">
              <Key className="w-4 h-4 mr-2" />
              Create New API Key
            </Button>
          </div>
        </SettingsSection>
        
        {/* Data Management */}
        <SettingsSection
          title="Data Management"
          description="Import, export, and manage your data"
          icon={Database}
        >
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-between group">
              <span className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export All Data
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="w-full justify-between group">
              <span className="flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Import from CSV
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="w-full justify-between group">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Backup History
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Separator />
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10 border border-warning/20">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-warning" />
                <div>
                  <Label className="text-sm text-card-foreground">Last Backup</Label>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Backup Now</Button>
            </div>
          </div>
        </SettingsSection>
        
        {/* Activity Log */}
        <SettingsSection
          title="Recent Activity"
          description="Track your recent actions"
          icon={Activity}
        >
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <SettingsIcon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-card-foreground">Settings updated</p>
                <p className="text-xs text-muted-foreground">Changed notification preferences</p>
                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-card-foreground">Project completed</p>
                <p className="text-xs text-muted-foreground">Website Redesign project</p>
                <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Plug className="w-4 h-4 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-card-foreground">Integration connected</p>
                <p className="text-xs text-muted-foreground">Google Calendar synced</p>
                <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
              </div>
            </div>
            
            <Button variant="ghost" className="w-full text-sm">
              View All Activity
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </SettingsSection>
        
        {/* Account Actions */}
        <SettingsSection
          title="Account"
          description="Manage your account settings"
          icon={Smartphone}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start group">
                <Lock className="w-4 h-4 mr-2" />
                Change Password
                <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="w-full justify-start group">
                <Mail className="w-4 h-4 mr-2" />
                Email Preferences
                <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label className="text-destructive flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Danger Zone
              </Label>
              <p className="text-xs text-muted-foreground mb-3">
                These actions are irreversible. Please be careful.
              </p>
              <Button variant="destructive" className="w-full justify-start">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </div>
        </SettingsSection>
      </div>
      
      {/* Future Features Info */}
      <Card className="mt-8 border-2 border-dashed border-border bg-gradient-to-br from-primary/5 to-accent/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">Próximas Funcionalidades</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Estamos trabajando en funciones increíbles inspiradas en las mejores herramientas de productividad:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Time Tracking</p>
                    <p className="text-xs text-muted-foreground">Monitorea tiempo en tareas (como Toggl)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Team Workspaces</p>
                    <p className="text-xs text-muted-foreground">Espacios colaborativos (como Notion)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Advanced Analytics</p>
                    <p className="text-xs text-muted-foreground">Dashboards detallados (como Monday.com)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">AI Assistant</p>
                    <p className="text-xs text-muted-foreground">Sugerencias inteligentes (como ClickUp AI)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Automation Rules</p>
                    <p className="text-xs text-muted-foreground">Flujos automáticos (como Zapier)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Custom Templates</p>
                    <p className="text-xs text-muted-foreground">Plantillas personalizables (como Asana)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Video Conferencing</p>
                    <p className="text-xs text-muted-foreground">Reuniones integradas (como Zoom)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Mobile Apps</p>
                    <p className="text-xs text-muted-foreground">Apps nativas iOS/Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Settings
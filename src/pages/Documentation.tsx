import { Book, Code, Zap, Settings, Users, Database, Globe, CheckCircle2, AlertCircle, Layers, FileCode, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-primary">
              <Book className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Documentación Completa
              </h1>
              <p className="text-muted-foreground mt-1">
                Todo lo que necesitas saber sobre ClickFlow
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2">
            <TabsTrigger value="overview" className="gap-2">
              <Layers className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="architecture" className="gap-2">
              <Code className="w-4 h-4" />
              Arquitectura
            </TabsTrigger>
            <TabsTrigger value="features" className="gap-2">
              <Zap className="w-4 h-4" />
              Funciones
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="gap-2">
              <Rocket className="w-4 h-4" />
              Roadmap
            </TabsTrigger>
            <TabsTrigger value="api" className="gap-2">
              <FileCode className="w-4 h-4" />
              API & Integración
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-5 h-5 text-primary" />
                  ¿Qué es ClickFlow?
                </CardTitle>
                <CardDescription>
                  Una plataforma moderna de gestión de productividad y colaboración
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  ClickFlow es una aplicación web completa diseñada para ayudar a equipos y individuos a 
                  gestionar sus proyectos, tareas, notas, hábitos y colaboración de manera eficiente. 
                  Construida con las últimas tecnologías web, ofrece una experiencia moderna, rápida y responsive.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-lg border border-border bg-card hover:shadow-elegant transition-all duration-300">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Gestión Completa
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Proyectos, tareas, notas, archivos, calendario y más en un solo lugar
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg border border-border bg-card hover:shadow-elegant transition-all duration-300">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Colaboración en Equipo
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Invita miembros, asigna tareas y trabaja en conjunto
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg border border-border bg-card hover:shadow-elegant transition-all duration-300">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Analytics Avanzados
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Visualiza tu productividad con gráficos y estadísticas
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg border border-border bg-card hover:shadow-elegant transition-all duration-300">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Integraciones
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Conecta con tus herramientas favoritas (próximamente)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cómo Empezar</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="step1">
                    <AccordionTrigger>1. Iniciar Sesión</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">
                        Usa las credenciales de demostración:
                      </p>
                      <div className="bg-muted p-3 rounded-md font-mono text-sm">
                        Email: demo@clickflow.com<br />
                        Password: demo123
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="step2">
                    <AccordionTrigger>2. Crear tu Primer Proyecto</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Haz clic en el botón "+" en el header o ve a la sección de Proyectos. 
                        Completa el formulario con el nombre, descripción y fecha de entrega.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="step3">
                    <AccordionTrigger>3. Gestionar Tareas</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        En la sección de Tareas puedes crear, editar, filtrar y organizar tus tareas. 
                        Usa prioridades, etiquetas y fechas para mantener todo organizado.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="step4">
                    <AccordionTrigger>4. Explorar Funciones Avanzadas</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Explora Analytics para ver tus estadísticas, Templates para proyectos rápidos, 
                        Team para colaborar, e Integraciones para conectar otras herramientas.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Stack Tecnológico
                </CardTitle>
                <CardDescription>
                  Tecnologías y herramientas utilizadas en el proyecto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <Badge variant="secondary" className="mb-3">Frontend</Badge>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        React 18.3.1
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        TypeScript
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Vite
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        React Router v6
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <Badge variant="secondary" className="mb-3">Estilos</Badge>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Tailwind CSS
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Shadcn/ui
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Radix UI
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Lucide Icons
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <Badge variant="secondary" className="mb-3">Estado & Data</Badge>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        React Query
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        React Hook Form
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Zod Validation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        LocalStorage
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <Badge variant="secondary" className="mb-3">Backend (Preparado)</Badge>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                        Supabase (Ready)
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                        PostgreSQL (Ready)
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                        Auth (Ready)
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                        Storage (Ready)
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <Badge variant="secondary" className="mb-3">Gráficos</Badge>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Recharts
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Date-fns
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        React Day Picker
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <Badge variant="secondary" className="mb-3">UI/UX</Badge>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Sonner (Toasts)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Vaul (Drawers)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Embla Carousel
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estructura del Proyecto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <pre className="overflow-x-auto">
{`src/
├── components/
│   ├── auth/          # Autenticación
│   ├── dialogs/       # Modales y diálogos
│   ├── layout/        # Header, Sidebar, Layout
│   ├── theme/         # Theme toggle
│   └── ui/            # Componentes Shadcn
├── pages/
│   ├── Dashboard.tsx
│   ├── Projects.tsx
│   ├── Tasks.tsx
│   ├── Notes.tsx
│   ├── Calendar.tsx
│   ├── Files.tsx
│   ├── Habits.tsx
│   ├── Analytics.tsx
│   ├── Team.tsx
│   ├── Templates.tsx
│   ├── Integrations.tsx
│   └── Settings.tsx
├── hooks/             # Custom hooks
├── lib/               # Utilidades
└── integrations/      # Supabase config`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Funcionalidades Actuales
                </CardTitle>
                <CardDescription>
                  Estado actual de las funciones implementadas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Autenticación Mock</h4>
                      <p className="text-sm text-muted-foreground">
                        Sistema de login con datos hardcoded. Listo para integrar con Supabase Auth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Dashboard Interactivo</h4>
                      <p className="text-sm text-muted-foreground">
                        Vista general con estadísticas, proyectos recientes y tareas pendientes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Gestión de Proyectos</h4>
                      <p className="text-sm text-muted-foreground">
                        UI completa con datos fake. CRUD listo para backend.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Sistema de Tareas</h4>
                      <p className="text-sm text-muted-foreground">
                        Tablero Kanban, filtros, prioridades. UI completa con datos de ejemplo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Notas y Archivos</h4>
                      <p className="text-sm text-muted-foreground">
                        Sistema de notas con formato y gestión de archivos con preview.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Calendario</h4>
                      <p className="text-sm text-muted-foreground">
                        Vista de calendario con eventos y tareas programadas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Hábitos</h4>
                      <p className="text-sm text-muted-foreground">
                        Seguimiento de hábitos diarios con streaks y estadísticas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Gráficos de productividad, tiempo dedicado y progreso de proyectos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Gestión de Equipo</h4>
                      <p className="text-sm text-muted-foreground">
                        Invitaciones, roles, permisos y actividad del equipo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Templates</h4>
                      <p className="text-sm text-muted-foreground">
                        Plantillas predefinidas para iniciar proyectos rápidamente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Integraciones</h4>
                      <p className="text-sm text-muted-foreground">
                        UI preparada para conectar con Slack, GitHub, Google Drive, etc.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Configuración Completa</h4>
                      <p className="text-sm text-muted-foreground">
                        Perfil, seguridad, notificaciones, API keys, exportación de datos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-green-500/20 bg-green-500/5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-500 mb-1">Tema Claro/Oscuro</h4>
                      <p className="text-sm text-muted-foreground">
                        Sistema de temas completo con persistencia y diseño adaptable.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6 animate-fade-in">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Qué Falta Para Ser 100% Funcional</AlertTitle>
              <AlertDescription>
                La aplicación tiene toda la UI lista, pero necesita estas integraciones backend
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-primary" />
                  Próximos Pasos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-500 mb-1">1. Integración con Supabase</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Conectar con Supabase para autenticación real, base de datos y storage.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Configurar tablas en PostgreSQL</li>
                        <li>• Implementar Row Level Security (RLS)</li>
                        <li>• Conectar autenticación con Supabase Auth</li>
                        <li>• Configurar buckets de storage para archivos</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-500 mb-1">2. CRUD Real</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Reemplazar datos fake con operaciones reales de base de datos.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Proyectos: CREATE, READ, UPDATE, DELETE</li>
                        <li>• Tareas: Con estados, asignaciones y comentarios</li>
                        <li>• Notas: Con editor rich text y attachments</li>
                        <li>• Archivos: Upload, download, delete con Supabase Storage</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-500 mb-1">3. Sistema de Colaboración</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Implementar trabajo en equipo real.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Invitaciones por email</li>
                        <li>• Sistema de roles y permisos</li>
                        <li>• Notificaciones en tiempo real</li>
                        <li>• Comentarios y menciones</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-500 mb-1">4. Analytics Real</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Tracking real de métricas y productividad.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Registro de actividad del usuario</li>
                        <li>• Cálculo de tiempo dedicado a tareas</li>
                        <li>• Generación de reportes automáticos</li>
                        <li>• Exportación de datos en CSV/PDF</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-500 mb-1">5. Integraciones Externas</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Conectar con servicios de terceros.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Slack: Notificaciones y comandos</li>
                        <li>• GitHub: Sincronización de issues</li>
                        <li>• Google Calendar: Sincronización de eventos</li>
                        <li>• Webhooks: Para automatizaciones personalizadas</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-500 mb-1">6. Optimizaciones</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Mejoras de rendimiento y experiencia.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Lazy loading de componentes pesados</li>
                        <li>• Caché inteligente con React Query</li>
                        <li>• Optimistic updates en mutaciones</li>
                        <li>• Service Worker para PWA offline</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Funciones Premium Inspiradas en Apps Similares</CardTitle>
                <CardDescription>
                  Funcionalidades avanzadas que podrían implementarse
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold mb-2">🤖 AI Assistant</h4>
                    <p className="text-sm text-muted-foreground">
                      Asistente IA para generar tareas, resumir proyectos y sugerir optimizaciones (Notion AI style)
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold mb-2">📊 Time Tracking Automático</h4>
                    <p className="text-sm text-muted-foreground">
                      Registra automáticamente tiempo dedicado a cada tarea (RescueTime style)
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold mb-2">🎯 OKRs y Goals</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistema de objetivos y resultados clave con tracking visual (Asana style)
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold mb-2">💬 Chat en Tiempo Real</h4>
                    <p className="text-sm text-muted-foreground">
                      Chat integrado por proyecto con archivos compartidos (Slack style)
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold mb-2">📱 App Móvil Nativa</h4>
                    <p className="text-sm text-muted-foreground">
                      Versión móvil con notificaciones push y modo offline
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold mb-2">🔄 Automatizaciones</h4>
                    <p className="text-sm text-muted-foreground">
                      Workflows automáticos tipo "si pasa esto, hacer aquello" (Zapier style)
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold mb-2">📈 Burndown Charts</h4>
                    <p className="text-sm text-muted-foreground">
                      Gráficos de sprint para metodologías ágiles (Jira style)
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-semibold mb-2">🎨 Whiteboard Colaborativo</h4>
                    <p className="text-sm text-muted-foreground">
                      Pizarra visual para brainstorming en equipo (Miro style)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API & Integration Tab */}
          <TabsContent value="api" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-primary" />
                  API & Endpoints (Futuros)
                </CardTitle>
                <CardDescription>
                  Estructura de API cuando se implemente el backend
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Autenticación</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div><Badge variant="outline">POST</Badge> /auth/login</div>
                    <div><Badge variant="outline">POST</Badge> /auth/register</div>
                    <div><Badge variant="outline">POST</Badge> /auth/logout</div>
                    <div><Badge variant="outline">POST</Badge> /auth/refresh</div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Proyectos</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div><Badge variant="outline">GET</Badge> /api/projects</div>
                    <div><Badge variant="outline">POST</Badge> /api/projects</div>
                    <div><Badge variant="outline">GET</Badge> /api/projects/:id</div>
                    <div><Badge variant="outline">PUT</Badge> /api/projects/:id</div>
                    <div><Badge variant="outline">DELETE</Badge> /api/projects/:id</div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Tareas</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div><Badge variant="outline">GET</Badge> /api/tasks</div>
                    <div><Badge variant="outline">POST</Badge> /api/tasks</div>
                    <div><Badge variant="outline">PUT</Badge> /api/tasks/:id</div>
                    <div><Badge variant="outline">DELETE</Badge> /api/tasks/:id</div>
                    <div><Badge variant="outline">PATCH</Badge> /api/tasks/:id/status</div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Archivos</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div><Badge variant="outline">POST</Badge> /api/files/upload</div>
                    <div><Badge variant="outline">GET</Badge> /api/files/:id</div>
                    <div><Badge variant="outline">DELETE</Badge> /api/files/:id</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integraciones Planeadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
                    <Database className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Supabase</h4>
                      <p className="text-sm text-muted-foreground">Backend as a Service</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Slack</h4>
                      <p className="text-sm text-muted-foreground">Notificaciones de equipo</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
                    <Code className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">GitHub</h4>
                      <p className="text-sm text-muted-foreground">Sync de issues y PRs</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
                    <Globe className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Google Workspace</h4>
                      <p className="text-sm text-muted-foreground">Calendar y Drive</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

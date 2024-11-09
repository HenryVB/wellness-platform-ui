"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Heart, 
  Brain, 
  Smile, 
  Sun, 
  Coins, 
  Users, 
  Activity, 
  TestTube, 
  Apple, 
  Dumbbell, 
  Lightbulb, 
  Stethoscope, 
  PiggyBank, 
  CircuitBoard, 
  Flame,
  GraduationCap,
  ArrowRight
} from "lucide-react"
import Image from "next/image"
import { useRouter } from 'next/navigation'

const WellnessDimension = ({ icon: Icon, title, description, dimension }) => {
  const router = useRouter();
  const dimensionKey = dimension.toLowerCase();
  
  return (
    <Card 
      className="group h-full transition-all hover:shadow-lg hover:border-pink-200 cursor-pointer"
      onClick={() => router.push(`/specialists?dimension=${dimensionKey}`)}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-pink-50 p-2 group-hover:bg-pink-100 transition-colors">
            <Icon className="h-6 w-6 text-pink-500" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const SpecialistCard = ({ icon: Icon, title, description }) => (
  <Card className="group h-full transition-all hover:shadow-lg hover:-translate-y-1">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-pink-50 p-2 group-hover:bg-pink-100 transition-colors">
          <Icon className="h-6 w-6 text-pink-500" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardContent>
  </Card>
)

export default function Component() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-pink-50/80 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-100/50 via-transparent to-transparent" />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <Image
              src="/logo.jpg"
              alt="IntegralmenteBien Logo"
              width={200}
              height={200}
              className="mx-auto mb-12 rounded-full shadow-xl"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Comienza tu viaje hacia el bienestar integral
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Tu plataforma digital para el bienestar integral, conectándote con especialistas globales para mejorar tu salud física, mental, emocional, espiritual y financiera.
            </p>
            <Button 
              size="lg" 
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              onClick={() => router.push('/test')}
            >
              Realizar Test de Autodiagnóstico
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros Especialistas</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Conecta con expertos certificados que te guiarán en tu camino hacia el bienestar integral
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <SpecialistCard
              icon={Apple}
              title="Nutricionistas"
              description="Expertos en alimentación saludable y planes nutricionales personalizados."
            />
            <SpecialistCard
              icon={Dumbbell}
              title="Coach Deportivo"
              description="Profesionales en entrenamiento físico y desarrollo de rutinas de ejercicio."
            />
            <SpecialistCard
              icon={Lightbulb}
              title="Coach Ontológico"
              description="Especialistas en desarrollo personal y transformación del ser."
            />
            <SpecialistCard
              icon={Stethoscope}
              title="Psicólogos"
              description="Profesionales de la salud mental y bienestar emocional."
            />
            <SpecialistCard
              icon={PiggyBank}
              title="Coach Financiero"
              description="Expertos en gestión financiera y desarrollo de patrimonio."
            />
            <SpecialistCard
              icon={CircuitBoard}
              title="Coach TDAH"
              description="Especialistas en apoyo y estrategias para personas con TDAH."
            />
            <SpecialistCard
              icon={Flame}
              title="Coach Espiritual"
              description="Guías en el desarrollo espiritual y crecimiento interior."
            />
          </div>
        </div>
      </section>

      {/* Wellness Dimensions */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Dimensiones del Bienestar</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Descubre y desarrolla cada aspecto de tu bienestar integral
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WellnessDimension
              icon={Heart}
              title="Físico"
              description="Mejora tu salud física con rutinas personalizadas y seguimiento de hábitos saludables."
              dimension="physical"
            />
            <WellnessDimension
              icon={Brain}
              title="Mental"
              description="Desarrolla claridad mental y fortaleza cognitiva con prácticas efectivas."
              dimension="mental"
            />
            <WellnessDimension
              icon={Smile}
              title="Emocional"
              description="Cultiva inteligencia emocional y equilibrio en tus relaciones."
              dimension="emotional"
            />
            <WellnessDimension
              icon={Sun}
              title="Espiritual"
              description="Encuentra paz interior y propósito a través de prácticas contemplativas."
              dimension="spiritual"
            />
            <WellnessDimension
              icon={Coins}
              title="Financiero"
              description="Alcanza estabilidad y libertad financiera con estrategias probadas."
              dimension="financial"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">¿Por qué IntegralmenteBien?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Descubre los beneficios que nos hacen únicos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card 
            onClick={() => {
              document.getElementById('specialists')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group h-full bg-gradient-to-br from-pink-50/50 to-white hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-pink-100/50 p-2 group-hover:bg-pink-100 transition-colors">
                    <Users className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle className="text-xl">Especialistas Globales</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Accede a una red internacional de expertos en bienestar integral.</p>
              </CardContent>
            </Card>

            <Card 
            onClick={() => router.push('/test')}
            className="group h-full bg-gradient-to-br from-pink-50/50 to-white hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-pink-100/50 p-2 group-hover:bg-pink-100 transition-colors">
                    <TestTube className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle className="text-xl">Test de Autodiagnóstico</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Descubre qué especialistas se adaptan mejor a tus necesidades específicas.</p>
              </CardContent>
            </Card>

            <Card className="group h-full bg-gradient-to-br from-pink-50/50 to-white hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-pink-100/50 p-2 group-hover:bg-pink-100 transition-colors">
                    <Activity className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle className="text-xl">Seguimiento Digital</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Integración con dispositivos wearables para monitorear tu progreso en tiempo real.</p>
              </CardContent>
            </Card>

            <Card 
              className="group h-full bg-gradient-to-br from-pink-50/50 to-white hover:shadow-lg transition-all cursor-pointer"
              onClick={() => router.push('/community')}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-pink-100/50 p-2 group-hover:bg-pink-100 transition-colors">
                    <GraduationCap className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle className="text-xl">Comunidad y Aprendizaje</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Únete a una comunidad motivadora y accede a recursos actualizados sobre bienestar integral.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-t from-pink-50/80 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-pink-100/50 via-transparent to-transparent" />
        <div className="container relative px-4 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
            Transforma tu vida hoy
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Únete a nuestra comunidad y comienza tu viaje hacia el bienestar integral con el apoyo de expertos.
          </p>
          <Button size="lg" 
          onClick={() => router.push('/test')}
          className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5">
            Comenzar mi viaje
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-pink-50 py-8 text-center text-gray-600">
        <div className="container mx-auto px-4">
          <p>© 2024 IntegralmenteBien by Vanessa Yataco. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
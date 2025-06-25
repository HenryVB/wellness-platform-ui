"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {  
  Users, 
  Activity, 
  TestTube, 
  Lightbulb, 
  GraduationCap,
  ArrowRight
} from "lucide-react"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSpotify, FaCheck } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'





const specialistsData = [
  {
    name: 'Nutricionistas',
    physical: true,
    mental: false,
    emotional: true,
    spiritual: false,
    financial: false,
  },
  {
    name: 'Coach Deportivo',
    physical: true,
    mental: false,
    emotional: false,
    spiritual: false,
    financial: false,
  },
  {
    name: 'Coach Ontológico',
    physical: false,
    mental: true,
    emotional: true,
    spiritual: false,
    financial: false,
  },
  {
    name: 'Psicólogos',
    physical: false,
    mental: true,
    emotional: true,
    spiritual: false,
    financial: false,
  },
  {
    name: 'Coach Financiero',
    physical: false,
    mental: false,
    emotional: false,
    spiritual: false,
    financial: true,
  },
  {
    name: 'Coach TDAH',
    physical: false,
    mental: true,
    emotional: false,
    spiritual: false,
    financial: false,
  },
  {
    name: 'Coach Espiritual',
    physical: false,
    mental: false,
    emotional: true,
    spiritual: true,
    financial: false,
  },
];

export default function Component() {
  const router = useRouter();
  const formUrl = "https://forms.gle/o4yuLBft7DfPX2ak9"; // URL de tu Google Form
  
  // Definir las dimensiones de bienestar para uso dinámico
  const wellnessDimensions = [
    { 
      id: "physical", 
      name: "Físico", 
      description: "Optimiza tu salud física a través de nutrición, ejercicio y hábitos saludables.",
      imagePath: "/physical.jpg" 
    },
    { 
      id: "mental", 
      name: "Mental", 
      description: "Fortalece tu mente con técnicas de concentración y claridad mental.",
      imagePath: "/mental.jpg" 
    },
    { 
      id: "emotional", 
      name: "Emocional", 
      description: "Desarrolla inteligencia emocional y estrategias para gestionar tus emociones.",
      imagePath: "/emotional.jpg" 
    },
    { 
      id: "spiritual", 
      name: "Espiritual", 
      description: "Encuentra paz interior y propósito a través de prácticas contemplativas.",
      imagePath: "/spirit.jpg" 
    },
    { 
      id: "financial", 
      name: "Financiero", 
      description: "Alcanza estabilidad y libertad financiera con estrategias probadas.",
      imagePath: "/finances.jpg" 
    }
  ];

  // Función para navegar a la sección de especialistas filtrada por dimensión
  const navigateToSpecialists = (dimensionId: string) => {
    router.push(`/specialists?dimension=${dimensionId}`);
  };
  
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-orange-50/80 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 via-orange-50/20 to-teal-50/30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-green-200/20 rounded-full blur-3xl" />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <Image
              src="/logo.jpg"
              alt="IntegralmenteBien Logo"
              width={200}
              height={200}
              className="mx-auto mb-12 rounded-full shadow-xl"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Comienza tu viaje hacia el{" "}
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-teal-500 bg-clip-text text-transparent">
                bienestar integral
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Conectándote con especialistas globales para mejorar tu salud física, mental, emocional, espiritual y financiera.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              onClick={() => router.push('/test')}
            >
              Inicia tu ruta de bienestar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

   {/* Video Presentation Section */}
      <section className="py-24 relative bg-gradient-to-br from-orange-100/30 to-white">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Descubre IntegralmenteBien
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conoce de cerca nuestra visión de bienestar integral y cómo estamos transformando vidas a través de
                nuestro enfoque holístico y personalizado.
              </p>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              {/* Reemplazar este div con el video real cuando esté disponible */}
              <div className="w-full h-full bg-gradient-to-br from-orange-200/50 to-orange-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg inline-block">
                    <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-orange-700 transition-colors group">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                    </div>
                    <p className="mt-4 font-medium text-orange-700">Haz clic para reproducir el video</p>
                  </div>
                </div>
                
                {/* Código para implementar el video real */}
                { 
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Xl6xwXB-dzE?si=JTTUnoj9RlAPSyFK" 
                  title="IntegralmenteBien: Bienestar Integral"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                }
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-orange-100 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Comunidad Global</h3>
                <p className="text-gray-600">Conecta con miles de personas comprometidas con su bienestar integral.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-orange-100 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Enfoque Personalizado</h3>
                <p className="text-gray-600">Soluciones adaptadas a tus necesidades específicas en cada área de bienestar.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-orange-100 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Especialistas del bienestar</h3>
                <p className="text-gray-600">Tradicionales, funcionales, alternativos y holísticos en un solo lugar</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Wellness Dimensions */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Esferas del Bienestar</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Descubre cómo cada dimensión contribuye a tu bienestar integral y encuentra especialistas en cada área
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessDimensions.map((dimension) => (
              <div 
                key={dimension.id}
                className="flex flex-col items-center transition-all hover:-translate-y-2 cursor-pointer"
                onClick={() => navigateToSpecialists(dimension.id)}
              >
                <div className="mb-4 rounded-full overflow-hidden w-64 h-64 shadow-lg">
                  <Image 
                    src={dimension.imagePath} 
                    alt={`Bienestar ${dimension.name}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-orange-600">{dimension.name}</h3>
                <p className="text-gray-600 text-center max-w-xs">
                  {dimension.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section with Enhanced Table */}
      <section id="specialists" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros Especialistas</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Conecta con expertos certificados que te guiarán en tu camino hacia el bienestar integral
          </p>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 border-orange-200 bg-gradient-to-r from-orange-50 to-white p-4 text-left font-semibold text-gray-700">
                      Especialista
                    </th>
                    {['Físico', 'Mental', 'Emocional', 'Espiritual', 'Financiera'].map((dimension) => (
                      <th key={dimension} className="border-b-2 border-orange-200 bg-gradient-to-r from-orange-50 to-white p-4 text-center font-semibold text-gray-700">
                        {dimension}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specialistsData.map((specialist, index) => (
                    <tr key={specialist.name} className={`hover:bg-orange-50/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-orange-50/20'}`}>
                      <td className="border-b border-orange-200/70 p-4">{specialist.name}</td>
                      {(["physical", "mental", "emotional", "spiritual", "financial"] as const).map((dim) => (
                        <td key={`${specialist.name}-${dim}`} className="border-b border-orange-200/70 p-4 text-center">
                          {specialist[dim] && <div className="mx-auto w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                            <FaCheck className="text-white text-xs" />
                          </div>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            className="group h-full bg-gradient-to-br from-orange-50/50 to-white hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100/50 p-2 group-hover:bg-orange-100 transition-colors">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">Especialistas Globales</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image 
                    src="/global-specialist.png" 
                    alt="Especialistas globales"
                    width={250}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <p className="text-gray-600">Accede a una red internacional de expertos en bienestar integral.</p>
              </CardContent>
            </Card>

            <Card 
            onClick={() => router.push('/test')}
            className="group h-full bg-gradient-to-br from-orange-50/50 to-white hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100/50 p-2 group-hover:bg-orange-100 transition-colors">
                    <TestTube className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">Ruta de Bienestar</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image 
                    src="/autodiagnostic-test.png" 
                    alt="Test de autodiagnóstico"
                    width={250}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <p className="text-gray-600">Descubre qué especialistas se adaptan mejor a tus necesidades específicas.</p>
              </CardContent>
            </Card>

            <Card className="group h-full bg-gradient-to-br from-orange-50/50 to-white hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100/50 p-2 group-hover:bg-orange-100 transition-colors">
                    <Activity className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">Seguimiento Digital</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image 
                    src="/digital-tracking.png" 
                    alt="Seguimiento digital"
                    width={250}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <p className="text-gray-600">Integración con dispositivos wearables para monitorear tu progreso en tiempo real.</p>
              </CardContent>
            </Card>

            <Card 
              className="group h-full bg-gradient-to-br from-orange-50/50 to-white hover:shadow-lg transition-all cursor-pointer"
              onClick={() => router.push('/community')}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100/50 p-2 group-hover:bg-orange-100 transition-colors">
                    <GraduationCap className="h-6 w-6 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">Comunidad y Aprendizaje</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image 
                    src="/community.png" 
                    alt="Comunidad y aprendizaje"
                    width={250}
                    height={150}
                    className="rounded-lg mx-auto"
                  />
                </div>
                <p className="text-gray-600">Únete a una comunidad motivadora y accede a recursos actualizados sobre bienestar integral.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-t from-orange-50/80 to-white overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-orange-50/20 to-yellow-50/30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-teal-200/20 to-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl" />

        <div className="container relative px-4 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
            Transforma tu{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-teal-500 bg-clip-text text-transparent">
              vida hoy
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Únete a nuestra comunidad y comienza tu viaje hacia el bienestar integral con el apoyo de expertos.
          </p>
          <Button size="lg" 
          onClick={() => router.push('/test')}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5">
            Inicia tu ruta de bienestar
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Specialists Waitlist Section */}
      <section className="py-8 bg-gradient-to-b from-white to-orange-50/70">
        <div className="container mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-orange-100 flex flex-col md:flex-row items-center justify-between py-4 px-6 md:px-8">
            <div className="font-medium text-gray-700 text-center md:text-left mb-4 md:mb-0">
              Si eres especialista del bienestar, únete a la lista de espera
            </div>
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-all hover:shadow-md"
              onClick={() => window.open(formUrl, '_blank')}
            >
              Lista de espera
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-orange-50/70 to-orange-50 py-8 text-center text-gray-600">      
        <div className="container mx-auto px-4">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <Link href="https://www.instagram.com/integralmentebien/" target="_blank" rel="noopener noreferrer" 
              className="rounded-full bg-orange-50 p-2 hover:bg-orange-100 transition-colors">
              <FaFacebookF className="h-5 w-5 text-orange-500" />
            </Link>
            <Link href="https://www.instagram.com/integralmentebien/" target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-orange-50 p-2 hover:bg-orange-100 transition-colors">
              <FaInstagram className="h-5 w-5 text-orange-500" />
            </Link>
            <Link href="https://www.linkedin.com/in/vanessa-yataco-casas/" target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-orange-50 p-2 hover:bg-orange-100 transition-colors">
              <FaLinkedinIn className="h-5 w-5 text-orange-500" />
            </Link>
            <Link href="https://open.spotify.com/show/3vcymFCSOzbqHMRfQbwg0h?si=fOQq2NwFTa2I1-UHryZzpg" target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-orange-50 p-2 hover:bg-orange-100 transition-colors">
              <FaSpotify className="h-5 w-5 text-orange-500" />
            </Link>
          </div>
          
          {/* Copyright */}
          <p>© {new Date().getFullYear()} IntegralmenteBien by Vanessa Yataco. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
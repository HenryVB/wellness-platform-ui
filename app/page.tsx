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
import { useState } from "react";





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
  const [formUrl] = useState("https://forms.gle/o4yuLBft7DfPX2ak9"); // Reemplaza con la URL de tu Google Form
  
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
              Tu plataforma digital para el bienestar integral, conectándote con especialistas globales para mejorar tu salud física, mental, emocional, espiritual y financiera.
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
                <h3 className="font-bold text-lg mb-2 text-gray-800">Resultados Probados</h3>
                <p className="text-gray-600">Metodología basada en evidencia y con resultados medibles en el tiempo.</p>
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
            Descubre y desarrolla cada aspecto de tu bienestar integral
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="flex flex-col items-center transition-all hover:-translate-y-2"
            >
              <div className="mb-4 rounded-full overflow-hidden w-64 h-64 shadow-lg">
                <Image 
                  src="/physical.jpg" 
                  alt="Bienestar Físico"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-orange-600">Físico</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Mejora tu salud física con rutinas personalizadas y seguimiento de hábitos saludables.
              </p>
            </div>

            <div 
              className="flex flex-col items-center transition-all hover:-translate-y-2"
            >
              <div className="mb-4 rounded-full overflow-hidden w-64 h-64 shadow-lg">
                <Image 
                  src="/mental.jpg" 
                  alt="Bienestar Mental"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-orange-600">Mental</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Desarrolla claridad mental y fortaleza cognitiva con prácticas efectivas.
              </p>
            </div>

            <div 
              className="flex flex-col items-center transition-all hover:-translate-y-2"
            >
              <div className="mb-4 rounded-full overflow-hidden w-64 h-64 shadow-lg">
                <Image 
                  src="/emotional.jpg" 
                  alt="Bienestar Emocional"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-orange-600">Emocional</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Cultiva inteligencia emocional y equilibrio en tus relaciones.
              </p>
            </div>

            <div 
              className="flex flex-col items-center transition-all hover:-translate-y-2"
            >
              <div className="mb-4 rounded-full overflow-hidden w-64 h-64 shadow-lg">
                <Image 
                  src="/spirit.jpg" 
                  alt="Bienestar Espiritual"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-orange-600">Espiritual</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Encuentra paz interior y propósito a través de prácticas contemplativas.
              </p>
            </div>

            <div 
              className="flex flex-col items-center transition-all hover:-translate-y-2"
            >
              <div className="mb-4 rounded-full overflow-hidden w-64 h-64 shadow-lg">
                <Image 
                  src="/finances.jpg" 
                  alt="Bienestar Financiero"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-orange-600">Financiero</h3>
              <p className="text-gray-600 text-center max-w-xs">
                Alcanza estabilidad y libertad financiera con estrategias probadas.
              </p>
            </div>
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
                  <CardTitle className="text-xl">Test de Bienestar</CardTitle>
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
            Comenzar mi viaje
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>


      {/* Floating Waitlist Container */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-orange-100 flex items-center justify-between px-6 py-4 w-11/12 max-w-3xl">
        <div className="font-medium text-gray-700">
          Únete a la lista de espera
        </div>
        <Button 
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-all hover:shadow-md"
          onClick={() => window.open(formUrl, '_blank')}
        >
          Lista de espera
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-orange-50 py-8 text-center text-gray-600">      
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
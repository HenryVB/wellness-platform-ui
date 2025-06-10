"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { LearningSection } from '@/components/learning/LearningSection';

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-orange-50/80 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/50 via-transparent to-transparent" />
        <div className="container px-4 mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative aspect-square lg:aspect-auto">
              <Image
                src="/community.png"
                alt="Comunidad IntegralmenteBien"
                width={450}
                height={450}
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>

            {/* Content Column */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Únete a nuestra comunidad
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Forma parte de un espacio transformador donde compartirás experiencias, 
                aprenderás de otros y crecerás junto a personas comprometidas con su bienestar integral.
              </p>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Unirme ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Learning Resources Section */}
      <LearningSection />
    </div>
  )
}
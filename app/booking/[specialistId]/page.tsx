// app/booking/[specialistId]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { Specialist } from '@/types/specialist'
import { fetchSpecialists } from '@/lib/specialists'
import BookingFlow from '@/components/booking/BookingFlow'
import { useParams } from 'next/navigation'

export default function BookingPage() {
  const params = useParams()
  const [specialist, setSpecialist] = useState<Specialist | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadSpecialist() {
      setLoading(true)
      // In a real app, you'd have a dedicated API endpoint for fetching a single specialist
      const specialists = await fetchSpecialists()
      const specialist = specialists.find(s => s.id === params.specialistId)
      setSpecialist(specialist || null)
      setLoading(false)
    }
    loadSpecialist()
  }, [params.specialistId])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"/>
      </div>
    )
  }

  if (!specialist) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4 p-6">
          <h1 className="text-2xl font-bold text-gray-900">Especialista no encontrado</h1>
          <p className="text-muted-foreground">El especialista que buscas no está disponible</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/80 to-white">
      <div className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-100/50 via-transparent to-transparent pb-8">
        <div className="container mx-auto px-4">
          <div className="py-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Reserva tu sesión
            </h1>
            <p className="mt-2 text-gray-600">
              Completa los detalles de tu reserva con <strong className="text-pink-500">{specialist.name}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-lg border border-pink-100">
          <BookingFlow specialist={specialist} />
        </div>
      </div>
    </div>
  )
}
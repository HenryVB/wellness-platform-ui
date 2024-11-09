// components/booking/StepFour.tsx
import { BookingState } from '@/types/specialist'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import { Clock, MapPin, Calendar as CalendarIcon, CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface StepFourProps {
  bookingState: BookingState
}

export default function StepFour({ bookingState }: StepFourProps) {
  const router = useRouter()
  const { specialist, selectedSession, selectedDate, selectedTime } = bookingState

  const terms = [
    "Por favor llega 30 minutos antes de tu sesión",
    "Las sesiones virtuales requieren una conexión estable a internet",
    "Las cancelaciones deben realizarse con al menos 24 horas de anticipación",
    "No está permitido grabar las sesiones",
    "El pago debe completarse antes de la sesión",
    "Mantén tu cámara encendida durante toda la sesión virtual",
    "Asegúrate de estar en un espacio tranquilo y privado"
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Success message */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">¡Enhorabuena!</h1>
        <p className="text-gray-600 mt-2">Tu reserva se ha realizado con éxito</p>
      </div>

      <div className="max-w-2xl mx-auto w-full space-y-8">
        {/* Booking summary */}
        <Card className="p-8 hover:shadow-lg transition-all border-pink-100/50">
          <div className="space-y-8">
            {/* Specialist info */}
            <div className="flex items-start gap-4 pb-6 border-b border-pink-100">
              <Image
                src={specialist.image}
                alt={specialist.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">{specialist.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{specialist.location}</span>
                </div>
              </div>
            </div>

            {/* Session details in grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <span className="text-sm text-green-600 font-medium">Tipo de sesión</span>
                  <p className="text-gray-900 font-medium mt-1">{selectedSession?.name}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <span className="text-sm text-green-600 font-medium">Fecha</span>
                  <div className="flex items-center gap-2 mt-1">
                    <CalendarIcon className="w-4 h-4 text-gray-600" />
                    <p className="text-gray-900">{selectedDate?.toLocaleDateString('es-ES', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <span className="text-sm text-green-600 font-medium">Costo</span>
                  <div className="mt-1">
                    <Badge variant={selectedSession?.price === 0 ? "secondary" : "default"}
                      className={selectedSession?.price === 0 ? 'bg-green-100 text-green-700' : 'bg-green-600 text-white'}>
                      {selectedSession?.price === 0 ? 'Gratis' : `S/. ${selectedSession?.price}`}
                    </Badge>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <span className="text-sm text-green-600 font-medium">Hora</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <p className="text-gray-900">{selectedTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Terms and conditions */}
        <Card className="p-8 bg-gradient-to-br from-pink-50 to-white border-pink-100/50">
          <h3 className="font-semibold text-lg mb-4">Términos y condiciones</h3>
          <ul className="space-y-3">
            {terms.map((term, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1">
                  <div className="h-2 w-2 rounded-full bg-pink-500" />
                </div>
                <span className="text-gray-600">{term}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Return to home button */}
        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => router.push('/')}
            className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-6 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all group"
          >
            <span>Volver al inicio</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
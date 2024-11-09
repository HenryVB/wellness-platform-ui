// components/booking/StepThree.tsx
import { BookingState } from '@/types/specialist'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import { Clock, MapPin, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

interface StepThreeProps {
  bookingState: BookingState
  onNext: () => void
  onBack: () => void
}

export default function StepThree({
  bookingState,
  onNext,
  onBack,
}: StepThreeProps) {
  const { specialist, selectedSession, selectedDate, selectedTime } = bookingState

  return (
    <div className="flex flex-col h-full">
      {/* Progress indicator */}
      <div className="mb-8 bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl border border-pink-100/50">
        <div className="flex items-center gap-3 text-sm">
          <div className="h-10 w-10 rounded-full border-2 border-pink-200 text-pink-500 flex items-center justify-center font-medium">✓</div>
          <span className="text-pink-500">Tipo de sesión</span>
          <span className="flex-1 border-t-2 border-dashed border-pink-200" />
          <div className="h-10 w-10 rounded-full border-2 border-pink-200 text-pink-500 flex items-center justify-center">✓</div>
          <span className="text-pink-500">Fecha y hora</span>
          <span className="flex-1 border-t-2 border-dashed border-pink-200" />
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white flex items-center justify-center font-medium shadow-md">3</div>
          <span className="font-medium text-gray-900">Confirmación</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto w-full">
        <Card className="p-8 hover:shadow-lg transition-all border-pink-100/50">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Confirma tu reserva</h2>
            <p className="text-gray-600 mt-2">Revisa los detalles de tu sesión antes de confirmar</p>
          </div>

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

            {/* Session details */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <span className="text-sm text-pink-600 font-medium">Tipo de sesión</span>
                  <p className="text-gray-900 font-medium mt-1">{selectedSession?.name}</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <span className="text-sm text-pink-600 font-medium">Costo</span>
                  <div className="mt-1">
                    <Badge variant={selectedSession?.price === 0 ? "secondary" : "default"}
                      className={selectedSession?.price === 0 ? 'bg-pink-100 text-pink-700' : 'bg-pink-600 text-white'}>
                      {selectedSession?.price === 0 ? 'Gratis' : `S/. ${selectedSession?.price}`}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <span className="text-sm text-pink-600 font-medium">Fecha</span>
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
                <div className="bg-pink-50 p-4 rounded-lg">
                  <span className="text-sm text-pink-600 font-medium">Hora</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <p className="text-gray-900">{selectedTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Duration info */}
            <div className="flex items-center justify-center gap-2 text-gray-600 bg-gray-50 py-3 rounded-lg">
              <Clock className="w-5 h-5" />
              <span>Duración: {selectedSession?.duration} minutos</span>
            </div>
          </div>
        </Card>

        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between gap-4">
          <Button 
            variant="outline"
            onClick={onBack}
            className="w-full md:w-auto border-pink-200 hover:bg-pink-50 text-pink-700"
          >
            Volver
          </Button>
          <Button 
            onClick={onNext}
            className="w-full md:w-auto bg-gradient-to-r from-pink-600 to-pink-500 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all group"
          >
            <span>Confirmar reserva</span>
            <CheckCircle2 className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </div>
  )
}
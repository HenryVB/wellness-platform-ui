// components/booking/StepOne.tsx
import { BookingState, SessionType } from '@/types/specialist'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from 'lucide-react'
import { Button } from '../ui/button'

interface StepOneProps {
  bookingState: BookingState
  onNext: () => void
  onSessionSelect: (session: SessionType) => void
  onBack?: () => void  // Added optional onBack prop
}

export default function StepOne({ 
  bookingState, 
  onNext, 
  onSessionSelect,
  onBack 
}: StepOneProps) {
  const { specialist, selectedSession } = bookingState

  return (
    <div className="flex flex-col h-full">
      {/* Progress indicator with gradient background */}
      <div className="mb-8 bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl border border-pink-100/50">
        <div className="flex items-center gap-3 text-sm">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white flex items-center justify-center font-medium shadow-md">1</div>
          <span className="font-medium text-gray-900">Tipo de sesión</span>
          <span className="flex-1 border-t-2 border-dashed border-pink-200" />
          <div className="h-10 w-10 rounded-full border-2 border-pink-200 flex items-center justify-center text-gray-400">2</div>
          <span className="text-gray-500">Fecha y hora</span>
          <span className="flex-1 border-t-2 border-dashed border-pink-200" />
          <div className="h-10 w-10 rounded-full border-2 border-pink-200 flex items-center justify-center text-gray-400">3</div>
          <span className="text-gray-500">Confirmación</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 flex-1">
        {/* Left side - Specialist info */}
        <div className="space-y-6">
          <Card className="p-6 hover:shadow-lg transition-all border-pink-100/50">
            <div className="flex items-start gap-4">
              <Image
                src={specialist.image}
                alt={specialist.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h2 className="font-semibold text-lg">{specialist.name}</h2>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{specialist.location}</span>
                </div>
              </div>
            </div>

            {selectedSession && (
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-4">Resumen de la sesión</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tipo</span>
                    <span className="font-medium">{selectedSession.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Duración</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedSession.duration} min</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Costo</span>
                    <Badge variant={selectedSession.price === 0 ? "secondary" : "default"}>
                      {selectedSession.price === 0 ? 'Gratis' : `S/. ${selectedSession.price}`}
                    </Badge>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Right side - Session selection */}
        <div className="space-y-4">
          <h3 className="font-medium">Selecciona el tipo de sesión</h3>
          
          {specialist.sessions.map((session) => (
            <Card
              key={session.id}
              className={`p-4 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                selectedSession?.id === session.id 
                  ? 'border-pink-400 bg-gradient-to-r from-pink-50 to-white ring-1 ring-pink-200'
                  : 'hover:border-pink-200'
              }`}
              onClick={() => onSessionSelect(session)}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{session.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {session.description}
                  </p>
                </div>
                <Badge variant={session.price === 0 ? "secondary" : "default"}
                  className={session.price === 0 ? 'bg-pink-100 text-pink-700' : 'bg-pink-600 text-white'}>
                  {session.price === 0 ? 'Gratis' : `S/. ${session.price}`}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                <Clock className="w-4 h-4" />
                <span>{session.duration} minutos</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Update buttons */}
      <div className="mt-8 flex justify-between gap-4">
        {onBack && (
          <Button 
            variant="outline"
            onClick={onBack}
            className="w-full md:w-auto border-pink-200 hover:bg-pink-50 text-pink-700"
          >
            Volver
          </Button>
        )}
        <Button 
          onClick={onNext}
          disabled={!selectedSession}
          className="w-full md:w-auto bg-gradient-to-r from-pink-600 to-pink-500 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:transform-none"
        >
          Continuar
        </Button>
      </div>
    </div>
  )
}
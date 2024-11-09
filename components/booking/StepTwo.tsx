// components/booking/StepTwo.tsx
import { BookingState } from '@/types/specialist'
import { Calendar } from '@/components/ui/calendar'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, MapPin, Calendar as CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface StepTwoProps {
  bookingState: BookingState
  onNext: () => void
  onBack: () => void
  onDateSelect: (date: Date) => void
  onTimeSelect: (time: string) => void
}

export default function StepTwo({
  bookingState,
  onNext,
  onBack,
  onDateSelect,
  onTimeSelect,
}: StepTwoProps) {
  const { specialist, selectedSession, selectedDate, selectedTime } = bookingState
  const [availableHours] = useState([
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ])

  const disabledDays = {
    before: new Date(),
    after: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días adelante
  }

  return (
    <div className="flex flex-col h-full">
      {/* Progress indicator */}
      <div className="mb-8 bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl border border-pink-100/50">
        <div className="flex items-center gap-3 text-sm">
          <div className="h-10 w-10 rounded-full border-2 border-pink-200 text-pink-500 flex items-center justify-center font-medium">✓</div>
          <span className="text-pink-500">Tipo de sesión</span>
          <span className="flex-1 border-t-2 border-dashed border-pink-200" />
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white flex items-center justify-center font-medium shadow-md">2</div>
          <span className="font-medium text-gray-900">Fecha y hora</span>
          <span className="flex-1 border-t-2 border-dashed border-pink-200" />
          <div className="h-10 w-10 rounded-full border-2 border-pink-200 flex items-center justify-center text-gray-400">3</div>
          <span className="text-gray-500">Confirmación</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 flex-1">
        {/* Left side - Session summary */}
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

            <div className="mt-6 pt-6 border-t space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Tipo</span>
                <span className="font-medium">{selectedSession?.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Duración</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedSession?.duration} min</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Costo</span>
                <Badge variant={selectedSession?.price === 0 ? "secondary" : "default"}
                  className={selectedSession?.price === 0 ? 'bg-pink-100 text-pink-700' : 'bg-pink-600 text-white'}>
                  {selectedSession?.price === 0 ? 'Gratis' : `S/. ${selectedSession?.price}`}
                </Badge>
              </div>
              {selectedDate && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Fecha</span>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{selectedDate.toLocaleDateString('es-ES', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                </div>
              )}
              {selectedTime && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Hora</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedTime}</span>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Right side - Date & Time selection */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-4">
            <Calendar
              mode="single"
              selected={selectedDate ?? undefined}
              onSelect={(date) => date && onDateSelect(date)}
              disabled={disabledDays}
              className="rounded-md border"
            />
          </div>

          {selectedDate && (
            <Card className="p-6">
              <h3 className="font-medium mb-4">Horarios disponibles</h3>
              <div className="grid grid-cols-3 gap-3">
                {availableHours.map((hour) => (
                  <Button
                    key={hour}
                    variant={selectedTime === hour ? "default" : "outline"}
                    className={`
                      ${selectedTime === hour 
                        ? 'bg-pink-600 hover:bg-pink-700 text-white' 
                        : 'border-pink-200 hover:bg-pink-50 text-pink-700'}
                    `}
                    onClick={() => onTimeSelect(hour)}
                  >
                    {hour}
                  </Button>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>

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
          disabled={!selectedDate || !selectedTime}
          className="w-full md:w-auto bg-gradient-to-r from-pink-600 to-pink-500 text-white hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:transform-none"
        >
          Continuar
        </Button>
      </div>
    </div>
  )
}
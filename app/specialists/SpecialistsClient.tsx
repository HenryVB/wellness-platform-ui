// app/specialists/SpecialistsClient.tsx
'use client'

import { useState, useEffect } from 'react'
import { WellnessDimension } from '@/types/test'
import { Specialist } from '@/types/specialist'
import { fetchSpecialists } from '@/lib/specialists'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Calendar } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FilterPanel } from '@/components/specialists/FilterPanel'
import { DateRange } from 'react-day-picker'

export default function SpecialistsClient() {
  const searchParams = useSearchParams()
  const dimensionParam = searchParams.get('dimension') as WellnessDimension | null

  const router = useRouter()
  const [specialists, setSpecialists] = useState<Specialist[]>([])
  const [selectedDimension, setSelectedDimension] = useState<WellnessDimension | null>(dimensionParam)
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    location: '',
    priceRange: [0, 500] as [number, number],
    dateRange: undefined as DateRange | undefined,
    rating: 0
  })

  const dimensions: WellnessDimension[] = [
    'physical',
    'mental',
    'emotional',
    'spiritual',
    'financial'
  ]

  useEffect(() => {
    async function loadSpecialists() {
      setLoading(true)
      const data = await fetchSpecialists(selectedDimension || undefined)
      setSpecialists(data)
      setLoading(false)
    }
    loadSpecialists()
  }, [selectedDimension])

  const handleDimensionChange = (dimension: WellnessDimension) => {
    setSelectedDimension(dimension)
    router.push(`/specialists?dimension=${dimension}`, { scroll: false })
  }

  // Obtener ubicaciones únicas de los especialistas
  const locations = Array.from(new Set(specialists.map(s => s.location)))

  // Función para filtrar especialistas actualizada
  const filteredSpecialists = specialists.filter(specialist => {
    const matchesLocation = !filters.location || specialist.location === filters.location;
    const matchesPrice = specialist.price >= filters.priceRange[0] && specialist.price <= filters.priceRange[1];
    const matchesRating = !filters.rating || specialist.rating >= filters.rating;
    
    // Lógica de filtrado por fechas
    const matchesDates = !filters.dateRange || (
      specialist.availability?.some(date => {
        const availableDate = new Date(date);
        return (!filters.dateRange?.from || availableDate >= filters.dateRange.from) &&
               (!filters.dateRange?.to || availableDate <= filters.dateRange.to);
      })
    );

    return matchesLocation && matchesPrice && matchesRating && matchesDates;
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Especialistas en {selectedDimension ? selectedDimension.charAt(0).toUpperCase() + selectedDimension.slice(1) : 'todas las áreas'}
      </h1>
      
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-2 flex-wrap">
          {dimensions.map(dimension => (
            <Button
              key={dimension}
              variant={selectedDimension === dimension ? "default" : "outline"}
              className="rounded-full"
              onClick={() => handleDimensionChange(dimension)}
            >
              {dimension.charAt(0).toUpperCase() + dimension.slice(1)}
            </Button>
          ))}
        </div>
        
        <FilterPanel
          locations={locations}
          onLocationChange={(location) => setFilters(prev => ({ ...prev, location }))}
          onPriceRangeChange={(range: [number, number]) => setFilters(prev => ({ ...prev, priceRange: range }))}
          onDateRangeChange={(range) => setFilters(prev => ({ ...prev, dateRange: range }))}
          onRatingChange={(rating) => setFilters(prev => ({ ...prev, rating }))}
          filters={filters}
        />
      </div>

      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"/>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpecialists.map(specialist => (
          <Card key={specialist.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="relative w-full h-48">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{specialist.name}</h3>
              <span className="text-sm text-pink-600 font-medium">
                {specialist.dimension.charAt(0).toUpperCase() + 
                  specialist.dimension.slice(1)}
              </span>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{specialist.description}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">S/. {specialist.price}</span>
                <span className="text-gray-400">•</span>
                <span>{specialist.sessionLength} min</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < specialist.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({specialist.reviewCount} reseñas)
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button variant="outline" className="flex-1">
                Ver Perfil
              </Button>
              <Button className="flex-1">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
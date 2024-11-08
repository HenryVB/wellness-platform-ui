// components/specialists/FilterPanel.tsx
'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Filter, Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { DateRange } from "react-day-picker"

const ALL_LOCATIONS = 'all'

interface FilterPanelProps {
  filters: {
    location: string;
    priceRange: [number, number];
    dateRange?: DateRange;
    rating: number;
  };
  locations: string[];
  onLocationChange: (value: string) => void;
  onPriceRangeChange: (value: [number, number]) => void;
  onDateRangeChange: (range: DateRange | undefined) => void;
  onRatingChange: (rating: number) => void;
}

export function FilterPanel({
  filters,
  locations,
  onLocationChange,
  onPriceRangeChange,
  onDateRangeChange,
  onRatingChange,
}: FilterPanelProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtros de búsqueda</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <h4 className="font-medium">Ubicación</h4>
            <Select 
              onValueChange={(value) => onLocationChange(value === ALL_LOCATIONS ? '' : value)} 
              value={filters.location || ALL_LOCATIONS}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona ubicación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL_LOCATIONS}>Todas</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Rango de precios</h4>
            <div className="pt-6">
              <Slider
                min={0}
                max={500}
                step={10}
                value={filters.priceRange}
                onValueChange={onPriceRangeChange}
                className="py-4"
              />
              <div className="flex justify-between text-sm">
                <span>S/. {filters.priceRange[0]}</span>
                <span>S/. {filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Disponibilidad</h4>
            <Calendar
              mode="range"
              selected={filters.dateRange}
              onSelect={onDateRangeChange}
              className="rounded-md border"
              initialFocus
            />
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Valoración mínima</h4>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <Button
                  key={rating}
                  variant={filters.rating === rating ? "default" : "outline"}
                  size="sm"
                  onClick={() => onRatingChange(rating)}
                  className="flex gap-1"
                >
                  {rating}
                  <Star className="h-4 w-4 fill-current" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
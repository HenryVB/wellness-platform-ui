import SpecialistsClient from './SpecialistsClient'
import { Suspense } from 'react'

export default function SpecialistsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/80 to-white">
      <Suspense fallback={<div>Cargando...</div>}>
        <SpecialistsClient />
      </Suspense>
    </div>
  )
}
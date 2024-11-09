// components/test/Roadmap.tsx
import { useTest } from '@/contexts/TestContext';
import { WellnessDimension } from '@/types/test';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const dimensionColors: Record<WellnessDimension, { bg: string; text: string; icon: string }> = {
  physical: { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'border-blue-200' },
  mental: { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'border-purple-200' },
  emotional: { bg: 'bg-pink-50', text: 'text-pink-600', icon: 'border-pink-200' },
  spiritual: { bg: 'bg-amber-50', text: 'text-amber-600', icon: 'border-amber-200' },
  financial: { bg: 'bg-green-50', text: 'text-green-600', icon: 'border-green-200' }
};

export function Roadmap() {
  const router = useRouter();
  const { state } = useTest();
  const result = state.result;

  if (!result) return null;

  return (
    <div className="py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
          ¡Estamos listos para ayudarte a descubrir y alcanzar tu mejor versión!
        </h2>
        <p className="text-gray-600">Basado en tus respuestas, hemos creado un plan personalizado para ti</p>
      </div>

      {/* Dimensions Tags */}
      <div className="flex gap-2 flex-wrap justify-center">
        {result.dimensions.map((dimension) => (
          <span key={dimension}
            className={`px-4 py-2 rounded-full text-sm font-medium ${dimensionColors[dimension].bg} 
            ${dimensionColors[dimension].text} shadow-sm`}>
            {dimension.charAt(0).toUpperCase() + dimension.slice(1)}
          </span>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:w-0.5 
        before:bg-gradient-to-b before:from-pink-100 before:via-pink-300 before:to-pink-100">
        {result.roadmap.map((step, index) => (
          <div key={index} className="relative pl-14">
            <div className={`absolute left-0 p-3 rounded-full ${dimensionColors[step.dimension].bg} 
              shadow-md border-2 ${dimensionColors[step.dimension].icon}`}>
              {index + 1}
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.actionItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                    <span className="text-pink-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center pt-8">
        <Button 
          onClick={() => router.push('/')}
          size="lg"
          className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-full 
            transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Volver al Inicio
          <ArrowLeft className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
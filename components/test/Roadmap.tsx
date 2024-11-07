// components/test/Roadmap.tsx
import { useTest } from '@/contexts/TestContext';
import { RoadmapStep, WellnessDimension } from '@/types/test';

const dimensionColors: Record<WellnessDimension, { bg: string; text: string; icon: string }> = {
  physical: { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'border-blue-200' },
  mental: { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'border-purple-200' },
  emotional: { bg: 'bg-pink-50', text: 'text-pink-600', icon: 'border-pink-200' },
  spiritual: { bg: 'bg-amber-50', text: 'text-amber-600', icon: 'border-amber-200' },
  financial: { bg: 'bg-green-50', text: 'text-green-600', icon: 'border-green-200' }
};

export function Roadmap() {
  const { state } = useTest();
  const result = state.result;

  if (!result) return null;

  return (
    <div className="py-12">
      {/* Selected Dimensions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tu Plan de Bienestar</h2>
        <div className="flex gap-2 flex-wrap">
          {result.dimensions.map((dimension) => (
            <span
              key={dimension}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                dimensionColors[dimension].bg
              } ${dimensionColors[dimension].text}`}
            >
              {dimension.charAt(0).toUpperCase() + dimension.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* Roadmap Steps */}
      <div className="space-y-8">
        {result.roadmap.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector Line */}
            {index < result.roadmap.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200" />
            )}
            
            <div className="flex gap-4">
              {/* Step Number */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${
                  dimensionColors[step.dimension].icon
                } flex items-center justify-center ${dimensionColors[step.dimension].bg}`}
              >
                {index + 1}
              </div>

              {/* Step Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                {/* Action Items */}
                <ul className="space-y-2">
                  {step.actionItems.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
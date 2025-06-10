// components/test/Progress.tsx
import { useTest } from '@/contexts/TestContext';

export function Progress() {
  const { state } = useTest();
  const totalQuestions = state.questions.length;
  const currentQuestion = state.currentQuestionIndex + 1;
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-12 bg-white rounded-xl p-6 shadow-sm border">
      <div className="flex justify-between mb-4">
        <span className="text-sm font-medium text-gray-600">
          Pregunta {currentQuestion} de {totalQuestions}
        </span>
        <span className="text-sm font-medium text-orange-600">
          {Math.round(progress)}% Completado
        </span>
      </div>

      <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
              index < currentQuestion
                ? 'bg-orange-600'
                : index === currentQuestion - 1
                ? 'bg-orange-400 animate-pulse'
                : 'bg-orange-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
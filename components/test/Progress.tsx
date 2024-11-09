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
        <span className="text-sm font-medium text-pink-600">
          {Math.round(progress)}% Completado
        </span>
      </div>

      <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
              index < currentQuestion
                ? 'bg-pink-600'
                : index === currentQuestion - 1
                ? 'bg-pink-400 animate-pulse'
                : 'bg-pink-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
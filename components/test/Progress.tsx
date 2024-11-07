// components/test/Progress.tsx
import { useTest } from '@/contexts/TestContext';

export function Progress() {
  const { state } = useTest();
  const totalQuestions = state.questions.length;
  const currentQuestion = state.currentQuestionIndex + 1;
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-8">
      {/* Question counter */}
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">
          Pregunta {currentQuestion} de {totalQuestions}
        </span>
        <span className="text-sm font-medium text-gray-600">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-pink-600 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question indicators */}
      <div className="flex gap-2 mt-4 justify-center">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index < currentQuestion
                ? 'bg-pink-600'
                : index === currentQuestion - 1
                ? 'bg-pink-400'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
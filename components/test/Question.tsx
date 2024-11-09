// components/test/Question.tsx
import { useTest } from '@/contexts/TestContext';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

export function Question() {
  const { state, dispatch } = useTest();
  const question = state.questions[state.currentQuestionIndex];
  
  const handleSingleSelect = (value: string) => {
    dispatch({ 
      type: 'SET_ANSWER', 
      questionId: question.id, 
      answers: [value] 
    });
  };

  const handleMultiSelect = (value: string, checked: boolean) => {
    const currentAnswers = state.answers[question.id] || [];
    const newAnswers = checked 
      ? [...currentAnswers, value]
      : currentAnswers.filter(v => v !== value);
    
    dispatch({
      type: 'SET_ANSWER',
      questionId: question.id,
      answers: newAnswers
    });
  };

  return (
    <div className="space-y-8 bg-white rounded-xl p-8 shadow-sm border">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
        {question.text}
      </h2>
      
      {question.type === 'single' ? (
        <RadioGroup
          value={state.answers[question.id]?.[0]}
          onValueChange={handleSingleSelect}
          className="space-y-4"
        >
          {question.options.map(option => (
            <div key={option.id} 
              className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-pink-200 transition-colors">
              <RadioGroupItem value={option.id} id={option.id} />
              <label htmlFor={option.id} className="flex-grow cursor-pointer">{option.text}</label>
            </div>
          ))}
        </RadioGroup>
      ) : (
        <div className="space-y-4">
          {question.options.map(option => (
            <div key={option.id} 
              className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-pink-200 transition-colors">
              <Checkbox id={option.id}
                checked={state.answers[question.id]?.includes(option.id)}
                onCheckedChange={(checked) => handleMultiSelect(option.id, checked as boolean)}
              />
              <label htmlFor={option.id} className="flex-grow cursor-pointer">{option.text}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
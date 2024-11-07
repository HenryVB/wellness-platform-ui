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
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{question.text}</h2>
      
      {question.type === 'single' ? (
        <RadioGroup
          value={state.answers[question.id]?.[0]}
          onValueChange={handleSingleSelect}
        >
          {question.options.map(option => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id} id={option.id} />
              <label htmlFor={option.id}>{option.text}</label>
            </div>
          ))}
        </RadioGroup>
      ) : (
        <div className="space-y-2">
          {question.options.map(option => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={option.id}
                checked={state.answers[question.id]?.includes(option.id)}
                onCheckedChange={(checked) => 
                  handleMultiSelect(option.id, checked as boolean)
                }
              />
              <label htmlFor={option.id}>{option.text}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
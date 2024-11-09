// app/test/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { TestProvider } from '@/contexts/TestContext';
import { useTest } from '@/contexts/TestContext';
import { Question as QuestionComponent } from '@/components/test/Question';
import { Progress } from '@/components/test/Progress';
import { Roadmap } from '@/components/test/Roadmap';
import { Button } from '@/components/ui/button';
import { fetchQuestions, submitAnswers } from '@/lib/api';
import { Question as QuestionType } from '@/types/test';

function TestContent() {
  const { state, dispatch } = useTest();
  const isLastQuestion = state.currentQuestionIndex === state.questions.length - 1;

  const handleNext = async () => {
    if (isLastQuestion) {
      // Submit answers and get results
      const result = await submitAnswers(state.answers);
      dispatch({ type: 'SET_RESULT', result });
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  };

  const handlePrevious = () => {
    dispatch({ type: 'PREV_QUESTION' });
  };

  // Show results if test is completed
  if (state.result) {
    return <Roadmap />;
  }

  // Show questions if test is in progress
  return (
    <>
      <Progress />
      <QuestionComponent />
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={state.currentQuestionIndex === 0}
        >
          Previous
        </Button>
        <Button onClick={handleNext}>
          {isLastQuestion ? 'Finish' : 'Next'}
        </Button>
      </div>
    </>
  );
}

export default function TestPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
      setIsLoading(false);
    };
    loadQuestions();
  }, []);

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-pink-600/20 border-t-pink-600 rounded-full animate-spin mx-auto"/>
        <p className="text-gray-600">Cargando test...</p>
      </div>
    </div>
  );

  return (
    <TestProvider initialQuestions={questions}>
      <div className="min-h-screen bg-gradient-to-b from-pink-50/80 to-white">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <TestContent />
        </div>
      </div>
    </TestProvider>
  );
}
// contexts/TestContext.tsx
import { createContext, useContext, useReducer } from 'react';
import { Question, TestResult } from '@/types/test';

type TestState = {
  currentQuestionIndex: number;
  answers: Record<string, string[]>;
  questions: Question[];
  result: TestResult | null;
}

type TestAction = 
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREV_QUESTION' }
  | { type: 'SET_ANSWER', questionId: string, answers: string[] }
  | { type: 'SET_RESULT', result: TestResult };

const TestContext = createContext<{
  state: TestState;
  dispatch: React.Dispatch<TestAction>;
} | null>(null);

import { ReactNode } from 'react';

// Add props interface
interface TestProviderProps {
  children: ReactNode;
  initialQuestions: Question[];
}

// Update initial state
const createInitialState = (questions: Question[]): TestState => ({
  currentQuestionIndex: 0,
  answers: {},
  questions,
  result: null,
});

const testReducer = (state: TestState, action: TestAction): TestState => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case 'PREV_QUESTION':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
    case 'SET_ANSWER':
      return { ...state, answers: { ...state.answers, [action.questionId]: action.answers } };
    case 'SET_RESULT':
      return { ...state, result: action.result };
    default:
      return state;
  }
};

// Update TestProvider component
export const TestProvider = ({ children, initialQuestions }: TestProviderProps) => {
  const [state, dispatch] = useReducer(
    testReducer, 
    createInitialState(initialQuestions)
  );
  
  return (
    <TestContext.Provider value={{ state, dispatch }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => {
  const context = useContext(TestContext);
  if (!context) throw new Error('useTest must be used within TestProvider');
  return context;
};
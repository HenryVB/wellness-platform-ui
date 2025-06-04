// app/test/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { TestProvider } from '@/contexts/TestContext';
import { useTest } from '@/contexts/TestContext';
import { Question as QuestionComponent } from '@/components/test/Question';
import { Progress } from '@/components/test/Progress';
import { Roadmap } from '@/components/test/Roadmap';
import { Button } from '@/components/ui/button';
import { fetchQuestions, submitAnswers, registerUser } from '@/lib/api';
import { Question as QuestionType} from '@/types/test';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import countries from '@/data/countries';

// Define UserData interface
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
}

// User registration form component with proper typings
function UserRegistrationForm({ onSubmit, isLoading }: { 
  onSubmit: (userData: UserData) => void; 
  isLoading: boolean;
}) {
  const [formData, setFormData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Record<keyof UserData, string>>({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, country: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Record<keyof UserData, string> = {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      phone: ''
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es requerido';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Los apellidos son requeridos';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
      isValid = false;
    }

    if (!formData.country) {
      newErrors.country = 'El país es requerido';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El celular es requerido';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md p-8 mt-8">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">¡Test completado!</h2>
      <p className="text-gray-600 mb-6 text-center">
        Para ver tus resultados personalizados, por favor ingresa tus datos:
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nombre</Label>
          <Input 
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Apellidos</Label>
          <Input 
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="country">País</Label>
          <Select 
            value={formData.country} 
            onValueChange={handleSelectChange}
          >
            <SelectTrigger className={`w-full ${errors.country ? "border-red-500" : ""}`}>
              <SelectValue placeholder="Selecciona tu país" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Celular</Label>
          <Input 
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-pink-600 hover:bg-pink-700"
          disabled={isLoading}
        >
          {isLoading ? 
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
              Procesando...
            </div> : 
            "Ver mis resultados"
          }
        </Button>
      </form>
    </div>
  );
}

function TestContent() {
  const { state, dispatch } = useTest();
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const isLastQuestion = state.currentQuestionIndex === state.questions.length - 1;

  const handleNext = async () => {
    if (isLastQuestion) {
      // Show registration form instead of directly submitting answers
      setShowForm(true);
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  };

  const handlePrevious = () => {
    dispatch({ type: 'PREV_QUESTION' });
  };

  const handleUserRegistration = async (userData: UserData) => {
    setIsRegistering(true);
    try {
      // Register user first
      await registerUser(userData);
      
      // Then submit answers and get results
      const result = await submitAnswers(state.answers);
      dispatch({ type: 'SET_RESULT', result });
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle error appropriately
    } finally {
      setIsRegistering(false);
    }
  };

  // Show results if test is completed
  if (state.result) {
    return <Roadmap />;
  }

  // Show registration form if the test is finished but user data not collected
  if (showForm) {
    return <UserRegistrationForm onSubmit={handleUserRegistration} isLoading={isRegistering} />;
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        console.error('Error loading questions:', error);
        // Handle error appropriately
      } finally {
        setIsLoading(false);
      }
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
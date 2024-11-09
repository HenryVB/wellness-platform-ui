// components/booking/BookingFlow.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Changed from next/router
import { Specialist, BookingState } from '@/types/specialist';
import StepOne from '@/components/booking/StepOne';
import StepTwo from '@/components/booking/StepTwo';
import StepThree from '@/components/booking/StepThree';
import StepFour from '@/components/booking/StepFour';

interface BookingFlowProps {
  specialist: Specialist;
}

export default function BookingFlow({ specialist }: BookingFlowProps) {
  const router = useRouter();
  const [bookingState, setBookingState] = useState<BookingState>({
    specialist,
    selectedSession: null,
    selectedDate: null,
    selectedTime: null,
    step: 1
  });

  const nextStep = () => {
    const nextStepNumber = bookingState.step + 1 as 1|2|3|4;
    setBookingState(prev => ({ ...prev, step: nextStepNumber }));
  };

  const prevStep = () => {
    if (bookingState.step === 1) {
      router.back(); // This works the same in App Router
    } else {
      setBookingState(prev => ({ ...prev, step: prev.step - 1 as 1|2|3|4 }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 md:p-10">
      {bookingState.step === 1 && (
        <StepOne 
          bookingState={bookingState}
          onNext={nextStep}
          onBack={prevStep}
          onSessionSelect={(session) => setBookingState(prev => ({
            ...prev,
            selectedSession: session
          }))}
        />
      )}
      {bookingState.step === 2 && (
        <StepTwo
          bookingState={bookingState}
          onNext={nextStep}
          onBack={prevStep}
          onDateSelect={(date) => setBookingState(prev => ({
            ...prev,
            selectedDate: date
          }))}
          onTimeSelect={(time) => setBookingState(prev => ({
            ...prev,
            selectedTime: time
          }))}
        />
      )}
      {bookingState.step === 3 && (
        <StepThree
          bookingState={bookingState}
          onNext={nextStep}
          onBack={prevStep}
        />
      )}
      {bookingState.step === 4 && (
        <StepFour
          bookingState={bookingState}
        />
      )}
      {/* Similar pattern for other steps */}
    </div>
  );
}
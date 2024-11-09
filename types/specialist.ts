import { WellnessDimension } from "./test";

// types/specialist.ts
export type Specialist = {
  id: string;
  name: string;
  dimension: WellnessDimension;
  image: string;
  sessionLength: number; // in minutes
  price: number;
  description: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5; // Now only whole numbers
  reviewCount: number;
  location: string; // Nueva propiedad
  availability?: Date[]; // Nueva propiedad opcional
  sessions: SessionType[];
  availableTimeSlots: TimeSlot[];
}

export type SessionType = {
  id: string;
  name: string; // "Trial Session" | "Regular Session"
  description: string;
  duration: number;
  price: number;
}

export type TimeSlot = {
  hour: string; // "09:00", "10:00", etc.
  available: boolean;
}

export type BookingState = {
  specialist: Specialist;
  selectedSession: SessionType | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  step: 1 | 2 | 3 | 4;
}
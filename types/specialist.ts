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
}
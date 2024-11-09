// lib/learning.ts
import { LearningResource, ResourceCategory, WellnessDimension } from '@/types/learning';

const mockResources: LearningResource[] = [
  {
    id: '1',
    type: 'workshop',
    title: 'Meditación Mindfulness',
    dimension: 'mental',
    image: '/learning-1.jpeg',
    modality: 'Virtual',
    datetime: new Date('2024-04-15T18:00:00'),
    speaker: {
      name: 'Dr. Juan Pérez',
      bio: 'Experto en mindfulness con 15 años de experiencia'
    },
    description: 'Aprende técnicas de meditación mindfulness'
  },
  {
    id: '2',
    type: 'tool',
    title: 'Guía de Nutrición',
    dimension: 'physical',
    image: '/learning-2.jpeg',
    toolType: 'Guía PDF',
    description: 'Plan completo de nutrición saludable'
  },
  {
    id: '3',
    type: 'video',
    title: 'Gestión Emocional',
    dimension: 'emotional',
    image: '/learning-3.jpeg',
    duration: 45,
    speaker: {
      name: 'María González',
      bio: 'Psicóloga especialista en inteligencia emocional'
    },
    description: 'Aprende a gestionar tus emociones'
  },
  {
    id: 'w2',
    type: 'workshop',
    title: 'Yoga para el Bienestar Físico',
    dimension: 'physical',
    image: '/learning-2.jpeg',
    modality: 'Presencial',
    datetime: new Date('2024-05-10T09:00:00'),
    speaker: {
        name: 'Laura Gómez',
        bio: 'Instructora de yoga certificada con 10 años de experiencia'
    },
    description: 'Sesiones de yoga enfocadas en mejorar la flexibilidad y fuerza física'
  },
  {
    id: 'w3',
    type: 'workshop',
    title: 'Nutrición y Salud',
    dimension: 'physical',
    image: '/learning-3.jpeg',
    modality: 'Virtual',
    datetime: new Date('2024-06-15T14:00:00'),
    speaker: {
        name: 'Dr. Carlos Ruiz',
        bio: 'Nutricionista especializado en dietas equilibradas'
    },
    description: 'Aprende a planificar una dieta saludable para tu bienestar físico'
  },
  {
    id: 'w4',
    type: 'workshop',
    title: 'Gestión del Estrés',
    dimension: 'mental',
    image: '/learning-1.jpeg',
    modality: 'Virtual',
    datetime: new Date('2024-07-20T11:00:00'),
    speaker: {
        name: 'María Fernández',
        bio: 'Psicóloga con enfoque en mindfulness y reducción de estrés'
    },
    description: 'Técnicas efectivas para manejar el estrés diario'
  },
  {
    id: 'v1',
    type: 'video',
    title: 'Meditación Guiada',
    dimension: 'mental',
    image: '/learning-2.jpeg',
    duration: 15,
    speaker: {
        name: 'Ana López',
        bio: 'Guía de meditación con experiencia en mindfulness'
    },
    description: 'Video de meditación guiada para mejorar la concentración'
  },
  {
    id: 'v2',
    type: 'video',
    title: 'Técnicas de Respiración para la Relajación',
    dimension: 'mental',
    image: '/learning-3.jpeg',
    duration: 25,
    speaker: {
        name: 'Carlos Martínez',
        bio: 'Instructor de técnicas de relajación y respiración'
    },
    description: 'Video explicativo sobre técnicas de respiración para reducir el estrés'
  },
  {
    id: 'v3',
    type: 'video',
    title: 'Entrenamiento de Flexibilidad',
    dimension: 'physical',
    image: '/learning-1.jpeg',
    duration: 30,
    speaker: {
        name: 'Lucía Gómez',
        bio: 'Entrenadora personal especializada en flexibilidad y fuerza'
    },
    description: 'Sesión de ejercicios para mejorar la flexibilidad corporal'
  },
  {
    id: 'v4',
    type: 'video',
    title: 'Alimentación Saludable',
    dimension: 'physical',
    image: '/learning-2.jpeg',
    duration: 20,
    speaker: {
        name: 'Pedro Sánchez',
        bio: 'Nutricionista con experiencia en dietas equilibradas'
    },
    description: 'Consejos sobre cómo mantener una alimentación equilibrada para la salud'
  },
  {
    id: 'v5',
    type: 'video',
    title: 'Meditación para Principiantes',
    dimension: 'mental',
    image: '/learning-3.jpeg',
    duration: 15,
    speaker: {
        name: 'Ana López',
        bio: 'Guía de meditación con experiencia en mindfulness'
    },
    description: 'Introducción a la meditación para quienes comienzan su práctica'
  },
  {
    id: 't1',
    type: 'tool',
    title: 'App de Seguimiento de Hábitos',
    toolType: 'habit-tracking',
    dimension: 'mental',
    image: '/learning-1.jpeg',
    description: 'Aplicación para rastrear y fomentar hábitos saludables'
  },
  {
    id: 't2',
    type: 'tool',
    title: 'Calculadora de Nutrientes',
    toolType: 'nutrition',
    dimension: 'physical',
    image: '/learning-2.jpeg',
    description: 'Herramienta para calcular la ingesta diaria de nutrientes'
  },
  {
    id: 't3',
    type: 'tool',
    title: 'App de Meditación Guiada',
    toolType: 'meditation',
    dimension: 'mental',
    image: '/learning-3.jpeg',
    description: 'Aplicación con meditaciones guiadas para la relajación'
  },
  {
    id: 't4',
    type: 'tool',
    title: 'Calculadora de IMC',
    toolType: 'health',
    dimension: 'physical',
    image: '/learning-1.jpeg',
    description: 'Herramienta para calcular el índice de masa corporal'
  },
  {
    id: 't5',
    type: 'tool',
    title: 'App de Entrenamiento en Casa',
    toolType: 'fitness',
    dimension: 'physical',
    image: '/learning-2.jpeg',
    description: 'Aplicación con rutinas de entrenamiento para hacer en casa'
  },
  {
    id: 't6',
    type: 'tool',
    title: 'App de Control de Gastos',
    toolType: 'finance',
    dimension: 'financial',
    image: '/learning-3.jpeg',
    description: 'Herramienta para llevar un registro de los gastos personales'
  },
  {
    id: 't7',
    type: 'tool',
    title: 'Calculadora de Ahorros',
    toolType: 'finance',
    dimension: 'financial',
    image: '/learning-1.jpeg',
    description: 'Calculadora para planificar y visualizar metas de ahorro'
  }
];

export async function fetchResources(
  category?: ResourceCategory,
  dimension?: WellnessDimension
): Promise<LearningResource[]> {
  console.log('Fetching resources with:', { category, dimension }); // Debug log
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filtered = [...mockResources];
  console.log('Initial resources:', filtered.length); // Debug log

  // Fix category filtering
  if (category) {
    filtered = filtered.filter(resource => {
      console.log('Checking resource:', resource.type, 'against category:', category); // Debug log
      return resource.type === category;
    });
  }

  // Fix dimension filtering
  if (dimension) {
    filtered = filtered.filter(resource => resource.dimension === dimension);
  }

  console.log('Filtered resources:', filtered.length); // Debug log
  return filtered;
}
import { Specialist } from '@/types/specialist';
import { WellnessDimension } from '@/types/test';

const mockSpecialists: Specialist[] = [
  // Physical specialists
  {
    id: 'p1',
    name: 'Ana García Torres',
    dimension: 'physical',
    image: '/profile-1.png',
    sessionLength: 45,
    price: 120,
    description: 'Especialista en nutrición deportiva y entrenamiento funcional',
    rating: 5,
    reviewCount: 127
  },
  {
    id: 'p2',
    name: 'Carlos Ruiz Mendoza',
    dimension: 'physical',
    image: '/profile-2.png',
    sessionLength: 60,
    price: 150,
    description: 'Coach deportivo certificado con 10 años de experiencia',
    rating: 4,
    reviewCount: 243
  },
  {
    id: 'p3',
    name: 'María Sánchez Lima',
    dimension: 'physical',
    image: '/profile-1.png',
    sessionLength: 30,
    price: 90,
    description: 'Especialista en rehabilitación física y postural',
    rating: 5,
    reviewCount: 89
  },
  {
    id: 'p4',
    name: 'Jorge Mendoza Paz',
    dimension: 'physical',
    image: '/profile-2.png',
    sessionLength: 45,
    price: 130,
    description: 'Entrenador personal especializado en pérdida de peso',
    rating: 4,
    reviewCount: 156
  },

  // Mental specialists
  {
    id: 'm1',
    name: 'Laura Velasco Mora',
    dimension: 'mental',
    image: '/profile-1.png',
    sessionLength: 50,
    price: 160,
    description: 'Psicóloga especialista en terapia cognitivo-conductual',
    rating: 5,
    reviewCount: 178
  },
  {
    id: 'm2',
    name: 'Sofía Martínez López',
    dimension: 'mental',
    image: '/profile-1.png',
    sessionLength: 60,
    price: 170,
    description: 'Psicoterapeuta especializada en manejo del estrés y ansiedad',
    rating: 5,
    reviewCount: 210
  },
  {
    id: 'm3',
    name: 'Diego Hernández Ramírez',
    dimension: 'mental',
    image: '/profile-2.png',
    sessionLength: 50,
    price: 140,
    description: 'Coach de vida con enfoque en desarrollo personal y profesional',
    rating: 4,
    reviewCount: 150
  },
  {
    id: 'm4',
    name: 'Elena Gómez Pérez',
    dimension: 'mental',
    image: '/profile-1.png',
    sessionLength: 55,
    price: 160,
    description: 'Terapeuta cognitivo-conductual especializada en depresión',
    rating: 5,
    reviewCount: 175
  },

  // Emotional specialists
  {
    id: 'e1',
    name: 'Patricia Rojas Valle',
    dimension: 'emotional',
    image: '/profile-1.png',
    sessionLength: 55,
    price: 140,
    description: 'Coach emocional certificada en Inteligencia Emocional',
    rating: 5,
    reviewCount: 134
  },
  {
    id: 'e2',
    name: 'Juan Pérez López',
    dimension: 'emotional',
    image: '/profile-2.png',
    sessionLength: 50,
    price: 150,
    description: 'Especialista en gestión de emociones y resiliencia',
    rating: 5,
    reviewCount: 120
  },
  {
    id: 'e3',
    name: 'Carmen Díaz Silva',
    dimension: 'emotional',
    image: '/profile-1.png',
    sessionLength: 45,
    price: 140,
    description: 'Terapeuta emocional con enfoque en mindfulness',
    rating: 4,
    reviewCount: 95
  },
  {
    id: 'e4',
    name: 'Luis Fernández Ortega',
    dimension: 'emotional',
    image: '/profile-2.png',
    sessionLength: 60,
    price: 160,
    description: 'Coach de relaciones interpersonales y autoestima',
    rating: 5,
    reviewCount: 110
  },
  {
    id: 'e5',
    name: 'Isabel Ruiz Navarro',
    dimension: 'emotional',
    image: '/profile-1.png',
    sessionLength: 55,
    price: 155,
    description: 'Especialista en inteligencia emocional y desarrollo personal',
    rating: 4,
    reviewCount: 130
  },

  // Spiritual specialists
  {
    id: 's1',
    name: 'Miguel Ángel Castro',
    dimension: 'spiritual',
    image: '/profile-2.png',
    sessionLength: 60,
    price: 130,
    description: 'Guía espiritual y maestro de meditación',
    rating: 5,
    reviewCount: 92
  },
  {
    id: 's2',
    name: 'María José Sánchez',
    dimension: 'spiritual',
    image: '/profile-1.png',
    sessionLength: 45,
    price: 120,
    description: 'Terapeuta holística y sanadora energética',
    rating: 4,
    reviewCount: 105
  },
  {
    id: 's3',
    name: 'Ricardo González',
    dimension: 'spiritual',
    image: '/profile-2.png',
    sessionLength: 50,
    price: 140,
    description: 'Coach espiritual y terapeuta de regresiones',
    rating: 4,
    reviewCount: 120
  },
  {
    id: 's4',
    name: 'Ana María Pérez',
    dimension: 'spiritual',
    image: '/profile-1.png',
    sessionLength: 55,
    price: 150,
    description: 'Maestra de Reiki y terapeuta de cristales',
    rating: 5,
    reviewCount: 130
  },
  {
    id: 's5',
    name: 'Javier Gómez',
    dimension: 'spiritual',
    image: '/profile-2.png',
    sessionLength: 60,
    price: 160,
    description: 'Terapeuta espiritual y guía de meditación',
    rating: 4,
    reviewCount: 140
  },
  {
    id: 's6',
    name: 'María José Sánchez',
    dimension: 'spiritual',
    image: '/profile-1.png',
    sessionLength: 45,
    price: 120,
    description: 'Terapeuta holística y sanadora energética',
    rating: 4,
    reviewCount: 105
  },

  // Financial specialists
  {
    id: 'f1',
    name: 'Roberto Torres Cruz',
    dimension: 'financial',
    image: '/profile-2.png',
    sessionLength: 45,
    price: 180,
    description: 'Asesor financiero certificado con especialización en finanzas personales',
    rating: 4,
    reviewCount: 156
  },
  {
    id: 'f2',
    name: 'María Fernández López',
    dimension: 'financial',
    image: '/profile-1.png',
    sessionLength: 50,
    price: 190,
    description: 'Coach financiera especializada en independencia económica',
    rating: 5,
    reviewCount: 178
  },
  {
    id: 'f3',
    name: 'Carlos Pérez Ruiz',
    dimension: 'financial',
    image: '/profile-2.png',
    sessionLength: 55,
    price: 200,
    description: 'Especialista en inversiones y planificación financiera',
    rating: 5,
    reviewCount: 210
  },
  {
    id: 'f4',
    name: 'Laura Gómez Martínez',
    dimension: 'financial',
    image: '/profile-1.png',
    sessionLength: 60,
    price: 220,
    description: 'Asesora financiera con enfoque en ahorro y presupuesto',
    rating: 4,
    reviewCount: 189
  },
  {
    id: 'f5',
    name: 'Javier Pérez Sánchez',
    dimension: 'financial',
    image: '/profile-2.png',
    sessionLength: 45,
    price: 180,
    description: 'Coach financiero especializado en emprendimiento y negocios',
    rating: 5,
    reviewCount: 200
  },
  {
    id: 'f6',
    name: 'María Fernández López',
    dimension: 'financial',
    image: '/profile-1.png',
    sessionLength: 50,
    price: 190,
    description: 'Coach financiera especializada en independencia económica',
    rating: 5,
    reviewCount: 178
  },
  {
    id: 'f7',
    name: 'Carlos Pérez Ruiz',
    dimension: 'financial',
    image: '/profile-2.png',
    sessionLength: 55,
    price: 200,
    description: 'Especialista en inversiones y planificación financiera',
    rating: 5,
    reviewCount: 210
  },
  {
    id: 'f8',
    name: 'Laura Gómez Martínez',
    dimension: 'financial',
    image: '/profile-1.png',
    sessionLength: 60,
    price: 220,
    description: 'Asesora financiera con enfoque en ahorro y presupuesto',
    rating: 4,
    reviewCount: 189
  },
  {
    id: 'f9',
    name: 'Javier Pérez Sánchez',
    dimension: 'financial',
    image: '/profile-2.png',
    sessionLength: 45,
    price: 180,
    description: 'Coach financiero especializado en emprendimiento y negocios',
    rating: 5,
    reviewCount: 200
  }
];

export async function fetchSpecialists(dimension?: WellnessDimension): Promise<Specialist[]> {
  // Simular retraso de API
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return dimension 
    ? mockSpecialists.filter(s => s.dimension === dimension)
    : mockSpecialists
}

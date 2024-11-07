// lib/api.ts
import { Question, TestResult, WellnessDimension, RoadmapStep } from '@/types/test';

// Score thresholds
const DIMENSION_THRESHOLD = 0.6; // 60% score to include dimension
const MAX_DIMENSIONS = 5; // Maximum dimensions to include in roadmap

function processAnswers(answers: Record<string, string[]>): TestResult {
  // 1. Calculate scores per dimension
  const dimensionScores: Record<WellnessDimension, number> = {
    physical: 0,
    mental: 0,
    emotional: 0,
    spiritual: 0,
    financial: 0
  };

  // Calculate total possible points per dimension
  const maxScores: Record<WellnessDimension, number> = { ...dimensionScores };

  // Process each question's answers
  Object.entries(answers).forEach(([questionId, selectedOptionIds]) => {
    const question = mockQuestions.find(q => q.id === questionId);
    if (!question) return;

    // Get selected options
    const selectedOptions = question.options.filter(opt => 
      selectedOptionIds.includes(opt.id)
    );

    // Add weights to dimension scores
    selectedOptions.forEach(option => {
      dimensionScores[option.dimension] += option.weight;
    });

    // Add max possible scores
    question.options.forEach(option => {
      maxScores[option.dimension] += option.weight;
    });
  });

  // 2. Calculate percentages and sort dimensions
  const dimensionPercentages = Object.entries(dimensionScores).map(([dimension, score]) => ({
    dimension: dimension as WellnessDimension,
    percentage: maxScores[dimension as WellnessDimension] > 0 
      ? score / maxScores[dimension as WellnessDimension]
      : 0
  }));

  // Sort by percentage descending
  dimensionPercentages.sort((a, b) => b.percentage - a.percentage);

  // 3. Select top dimensions above threshold
  const selectedDimensions = dimensionPercentages
    .filter(d => d.percentage >= DIMENSION_THRESHOLD)
    .slice(0, MAX_DIMENSIONS)
    .map(d => d.dimension);

  // 4. Generate roadmap from selected dimensions
  const roadmap: RoadmapStep[] = [];
  selectedDimensions.forEach(dimension => {
    const dimensionSteps = mockRoadmaps[dimension];
    if (dimensionSteps) {
      roadmap.push(...dimensionSteps);
    }
  });

  // 5. Return test result
  return {
    dimensions: selectedDimensions,
    roadmap: roadmap
  };
}

// Make sure to export the function
export { processAnswers };

const mockQuestions: Question[] = [
    {
        id: '1',
        text: '¿Cuales son tus objetivos principales?',
        type: 'multiple',
        options: [
                { 
                        id: '1a',
                        text: 'Dormir mejor',
                        dimension: 'physical',
                        weight: 4
                },
                {
                        id: '1b',
                        text: 'Hacer ejercicio regularmente',
                        dimension: 'physical',
                        weight: 2
                },
                {
                        id: '1c',
                        text: 'Practicar la meditación diaria',
                        dimension: 'mental',
                        weight: 5
                },
                {
                        id: '1d',
                        text: 'Establecer un presupuesto mensual',
                        dimension: 'financial',
                        weight: 1
                },
                {
                        id: '1e',
                        text: 'Participar en actividades sociales',
                        dimension: 'emotional',
                        weight: 3
                },
                {
                        id: '1f',
                        text: 'Leer libros de desarrollo personal',
                        dimension: 'spiritual',
                        weight: 2
                },
                {
                        id: '1g',
                        text: 'Mejorar la alimentación',
                        dimension: 'physical',
                        weight: 5
                },
                {
                        id: '1h',
                        text: 'Aprender una nueva habilidad',
                        dimension: 'mental',
                        weight: 1
                },
                {
                        id: '1i',
                        text: 'Dedicar tiempo a la reflexión personal',
                        dimension: 'spiritual',
                        weight: 4
                }
        ]
    },
    {
        id: '2',
        text: '¿Hay alguna otra área que te gustaría mejorar?',
        type: 'multiple',
        options: [
                { 
                        id: '2a',
                        text: 'Aumentar mi autoestima',
                        dimension: 'emotional',
                        weight: 3
                },
                {
                        id: '2b',
                        text: 'Crear una rutina saludable consistente',
                        dimension: 'physical',
                        weight: 2
                },
                {
                        id: '2c',
                        text: 'Mejorar mi alimentación',
                        dimension: 'physical',
                        weight: 5
                },
                {
                        id: '2d',
                        text: 'Aumentar mi resiliencia emocional',
                        dimension: 'emotional',
                        weight: 1
                },
                {
                        id: '2e',
                        text: 'Gestionar mejor mi tiempo',
                        dimension: 'mental',
                        weight: 4
                },
                {
                        id: '2f',
                        text: 'Desarrollar una práctica de mindfulness',
                        dimension: 'spiritual',
                        weight: 2
                },
                {
                        id: '2g',
                        text: 'Fortalecer mis relaciones interpersonales',
                        dimension: 'emotional',
                        weight: 3
                },
                {
                        id: '2h',
                        text: 'Mejorar mis habilidades financieras',
                        dimension: 'financial',
                        weight: 4
                },
        ]
    },
    {
        id: '3',
        text: '¿Dirías que vives salusable y consciente?',
        type: 'single',
        options: [
                { 
                        id: '3a',
                        text: 'Sí',
                        dimension: 'spiritual',
                        weight: 5
                },
                {
                        id: '3b',
                        text: 'No',
                        dimension: 'physical',
                        weight: 1
                },
                {
                        id: '3c',
                        text: 'A veces',
                        dimension: 'emotional',
                        weight: 3
                }
        ]
    },
    {
        id: '4',
        text: '¿Cuáles son tus mayores retos para vivir como deseas?',
        type: 'multiple',
        options: [
                { 
                        id: '4a',
                        text: 'Dinero y finanzas',
                        dimension: 'financial',
                        weight: 4
                },
                {
                        id: '4b',
                        text: 'No darme prioridad',
                        dimension: 'emotional',
                        weight: 5
                },
                {
                        id: '4c',
                        text: 'No tener sufienciente tiempo',
                        dimension: 'mental',
                        weight: 3
                },
                {
                        id: '4d',
                        text: 'Falta de autoestima o no sentirse como un impostor',
                        dimension: 'emotional',
                        weight: 2
                },
                {
                        id: '4e',
                        text: 'Miedo a fracasar',
                        dimension: 'mental',
                        weight: 1
                },
                {
                        id: '4f',
                        text: 'No tener una rutina saludable',
                        dimension: 'physical',
                        weight: 4
                },
                {
                        id: '4g',
                        text: 'Falta de disciplina',
                        dimension: 'spiritual',
                        weight: 2
                },
                {
                        id: '4h',
                        text: 'Falta de motivación',
                        dimension: 'mental',
                        weight: 5
                },
                {
                        id: '4i',
                        text: 'Procastinación',
                        dimension: 'mental',
                        weight: 3
                },
                {
                        id: '4j',
                        text: 'Falta de apoyo social',
                        dimension: 'emotional',
                        weight: 4
                },
                {
                        id: '4k',
                        text: 'Creeencias limitantes',
                        dimension: 'spiritual',
                        weight: 1
                }
        ]
    }
    // Add more questions...
];

const mockRoadmaps: Record<WellnessDimension, RoadmapStep[]> = {
    physical: [
        {
            dimension: 'physical',
            title: 'Desarrolla una rutina de ejercicio',
            description: 'Comienza con ejercicios básicos...',
            actionItems: [
                'Realizar 30 minutos de ejercicio diario',
                'Mantener una dieta balanceada',
                // More items...
            ]
        }
    ],
    mental: [
        {
            dimension: 'mental',
            title: 'Mejora tu bienestar mental',
            description: 'Incorpora actividades que fortalezcan tu mente...',
            actionItems: [
                'Practicar la meditación diariamente',
                'Leer un libro nuevo cada mes',
                // More items...
            ]
        }
    ],
    emotional: [
        {
            dimension: 'emotional',
            title: 'Gestiona tus emociones',
            description: 'Aprende a identificar y manejar tus emociones...',
            actionItems: [
                'Mantener un diario emocional',
                'Buscar el apoyo de amigos o un profesional',
                // More items...
            ]
        }
    ],
    spiritual: [
        {
            dimension: 'spiritual',
            title: 'Fomenta tu bienestar espiritual',
            description: 'Encuentra prácticas que te conecten con tu ser interior...',
            actionItems: [
                'Practicar la gratitud diariamente',
                'Participar en actividades que aporten significado a tu vida',
                // More items...
            ]
        }
    ],
    financial: [
        {
            dimension: 'financial',
            title: 'Mejora tu salud financiera',
            description: 'Gestiona tus finanzas de manera efectiva...',
            actionItems: [
                'Crear y seguir un presupuesto mensual',
                'Ahorrar un porcentaje fijo de tus ingresos',
                // More items...
            ]
        }
    ],
};

export async function fetchQuestions(): Promise<Question[]> {
  // Simulate API call
  return new Promise(resolve => {
    setTimeout(() => resolve(mockQuestions), 1000);
  });
}

export async function submitAnswers(
  answers: Record<string, string[]>
): Promise<TestResult> {
  // Simulate API call and process answers
  return new Promise(resolve => {
    setTimeout(() => {
      // Logic to determine dimensions and roadmap based on answers
      const result = processAnswers(answers);
      resolve(result);
    }, 1000);
  });
}
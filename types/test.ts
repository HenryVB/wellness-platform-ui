// types/test.ts
export type Option = {
  id: string;
  text: string;
  dimension: WellnessDimension;
  weight: 1 | 2 | 3 | 4 | 5;
}

export type Question = {
  id: string;
  text: string;
  type: 'single' | 'multiple';
  options: Option[];
}

export type WellnessDimension = 'physical' | 'mental' | 'emotional' | 'spiritual' | 'financial';

export type RoadmapStep = {
  dimension: WellnessDimension;
  title: string;
  description: string;
  actionItems: string[];
}

export type TestResult = {
  dimensions: WellnessDimension[];
  roadmap: RoadmapStep[];
}

export interface DimensionScore {
  dimension: WellnessDimension;
  percentage: number;
}
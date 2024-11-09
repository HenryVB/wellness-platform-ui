// types/learning.ts
export type WellnessDimension = 'physical' | 'mental' | 'emotional' | 'spiritual' | 'financial';
export type ResourceCategory = 'workshop' | 'tool' | 'video'; // Note singular form

interface BaseResource {
  id: string;
  title: string;
  dimension: WellnessDimension;
  image: string;
  description: string;
}

export interface Workshop extends BaseResource {
  type: 'workshop';
  modality: 'Virtual' | 'Presencial';
  datetime: Date;
  speaker: {
    name: string;
    bio: string;
  };
}

export interface Tool extends BaseResource {
  type: 'tool';
  toolType: string;
}

export interface Video extends BaseResource {
  type: 'video';
  duration: number;
  speaker: {
    name: string;
    bio: string;
  };
}

export type LearningResource = Workshop | Tool | Video;
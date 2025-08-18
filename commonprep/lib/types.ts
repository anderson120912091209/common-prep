export interface Resource {
  type: 'course' | 'book' | 'project' | 'article' | 'video';
  title: string;
  url?: string;
  description?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  time_commitment?: string;
  author?: string;
}

export interface Course {
  title: string;
  description: string;
  resources: Resource[];
}

export interface Step {
  title: string;
  duration?: string;
  topics?: string[];
  courses: Course[];
}

export interface Curriculum {
  title: string;
  description: string;
  steps: Step[];
  relatedCareers?: string[];
}


export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    full_name: string;
  };
  thumbnail: string;
  duration: number;
  price: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  _count?: {
    enrollments: number;
    reviews: number;
  };
  rating?: number;
}

export interface CourseFilters {
  category: string;
  level: string;
  duration: string;
  price: string;
  search: string;
}
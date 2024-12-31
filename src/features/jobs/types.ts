export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  posted_at: string;
  skills: string[];
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
}

export interface JobFilters {
  location: string;
  experience: string;
  type: string;
  search: string;
}
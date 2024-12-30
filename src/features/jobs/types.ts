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
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  company_logo?: string;
  cover_image?: string;
  work_type?: 'remote' | 'hybrid' | 'office';
}

export interface JobFilters {
  location: string;
  experience: string;
  type: string;
  search: string;
}
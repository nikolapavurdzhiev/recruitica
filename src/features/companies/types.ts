export interface Company {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo_url: string | null;
  cover_image_url: string;
  industry: string;
  company_size: string;
  founded_year: number;
  website: string;
  locations: Array<{
    city: string;
    country: string;
    is_headquarters: boolean;
  }>;
  benefits: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
  }>;
  tech_stack?: string[];
  jobs_count: number;
  media: Array<{
    id: string;
    url: string;
    title: string;
    type: 'image' | 'video';
  }>;
}
import { Company } from '../types';

export const exampleCompanies: Company[] = [
  {
    id: '1',
    name: 'Global Talent Solutions',
    slug: 'global-talent-solutions',
    description: 'Leading international recruitment firm specializing in technology, finance, and executive search. With over 15 years of experience, we connect top talent with innovative companies worldwide.',
    logo_url: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&h=200',
    cover_image_url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600',
    industry: 'Technology Recruitment',
    company_size: '200-500 employees',
    founded_year: 2008,
    website: 'https://globaltalentsolutions.example.com',
    locations: [
      {
        city: 'London',
        country: 'United Kingdom',
        is_headquarters: true
      },
      {
        city: 'New York',
        country: 'United States',
        is_headquarters: false
      }
    ],
    benefits: [
      {
        id: '1',
        title: 'Comprehensive Healthcare',
        description: 'Full medical, dental, and vision coverage',
        category: 'health'
      },
      {
        id: '2',
        title: 'Learning Budget',
        description: '£2000 annual learning and development allowance',
        category: 'learning'
      }
    ],
    tech_stack: ['ATS Systems', 'LinkedIn Recruiter', 'Salesforce', 'Workday'],
    jobs_count: 15,
    media: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
        title: 'London Office',
        type: 'image'
      }
    ]
  },
  {
    id: '2',
    name: 'TechRecruit Pro',
    slug: 'techrecruit-pro',
    description: 'Boutique tech recruitment agency focused on placing software engineers, data scientists, and IT leaders in high-growth startups and established tech companies.',
    logo_url: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=200&h=200',
    cover_image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600',
    industry: 'Technology Recruitment',
    company_size: '50-100 employees',
    founded_year: 2015,
    website: 'https://techrecruitpro.example.com',
    locations: [
      {
        city: 'Manchester',
        country: 'United Kingdom',
        is_headquarters: true
      }
    ],
    benefits: [
      {
        id: '3',
        title: 'Remote Work',
        description: 'Flexible work-from-home options',
        category: 'other'
      }
    ],
    tech_stack: ['HackerRank', 'GitHub', 'Stack Overflow', 'DevSkiller'],
    jobs_count: 8,
    media: [
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4',
        title: 'Team Meeting',
        type: 'image'
      }
    ]
  },
  {
    id: '3',
    name: 'HealthStaff Solutions',
    slug: 'healthstaff-solutions',
    description: 'Specialized healthcare recruitment firm placing medical professionals, from nurses to hospital executives, across the NHS and private healthcare sector.',
    logo_url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=200&h=200',
    cover_image_url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600',
    industry: 'Healthcare Recruitment',
    company_size: '100-200 employees',
    founded_year: 2010,
    website: 'https://healthstaffsolutions.example.com',
    locations: [
      {
        city: 'Birmingham',
        country: 'United Kingdom',
        is_headquarters: true
      },
      {
        city: 'Leeds',
        country: 'United Kingdom',
        is_headquarters: false
      }
    ],
    benefits: [
      {
        id: '4',
        title: 'NHS Pension',
        description: 'Competitive pension scheme',
        category: 'health'
      }
    ],
    tech_stack: ['Healthcare CRM', 'Medical Compliance Tools', 'NHS Jobs'],
    jobs_count: 12,
    media: [
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
        title: 'Healthcare Team',
        type: 'image'
      }
    ]
  }
];
import { useQuery } from '@tanstack/react-query';
import { mockJobs } from '../data/mockJobs';
import { premiumJobs } from '../data/premiumJobs';

export function useJob(id: string | undefined) {
  return useQuery({
    queryKey: ['job', id],
    queryFn: async () => {
      // First check premium jobs
      const premiumJob = premiumJobs.find(job => job.id === id);
      if (premiumJob) {
        return {
          ...premiumJob,
          type: 'Full-time',
          experience: '5+ years',
          description: 'This is a premium recruitment position with excellent benefits and growth opportunities.',
          requirements: [
            'Bachelor\'s degree in relevant field',
            '5+ years of recruitment experience',
            'Strong understanding of technical roles',
            'Excellent communication and negotiation skills',
            'Experience with ATS and recruitment tools'
          ],
          responsibilities: [
            'Full-cycle recruitment from sourcing to placement',
            'Build and maintain relationships with hiring managers',
            'Develop recruitment strategies',
            'Screen and interview candidates',
            'Negotiate offers and close candidates'
          ],
          benefits: [
            'Competitive base salary + commission structure',
            'Comprehensive health insurance',
            'Flexible working hours',
            'Remote work options',
            '25 days annual leave'
          ],
          posted_at: new Date().toISOString(),
          skills: ['Technical Recruitment', 'Talent Acquisition', 'ATS', 'Negotiation', 'Client Relations']
        };
      }

      // Then check regular jobs
      const job = mockJobs.find(job => job.id === id);
      if (!job) throw new Error('Job not found');
      
      return {
        ...job,
        requirements: [
          'Bachelor\'s degree in relevant field',
          '5+ years of recruitment experience',
          'Strong understanding of technical roles',
          'Excellent communication and negotiation skills',
          'Experience with ATS and recruitment tools'
        ],
        responsibilities: [
          'Full-cycle recruitment from sourcing to placement',
          'Build and maintain relationships with hiring managers',
          'Develop recruitment strategies for technical roles',
          'Screen and interview candidates',
          'Negotiate offers and close candidates'
        ],
        benefits: [
          'Competitive base salary + commission structure',
          'Comprehensive health insurance',
          'Flexible working hours',
          'Remote work options',
          '25 days annual leave'
        ],
        cover_image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
        company_logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=100&h=100'
      };
    },
  });
}
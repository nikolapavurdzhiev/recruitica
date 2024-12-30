import { useQuery } from '@tanstack/react-query';
import { exampleCompanies } from '../data/exampleCompanies';

export function useCompanies() {
  return useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      // For now, return example companies
      // In production, this would fetch from Supabase
      return exampleCompanies;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
}
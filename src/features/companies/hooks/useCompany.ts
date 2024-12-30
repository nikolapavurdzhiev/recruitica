import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../../lib/supabase';

export function useCompany(slug: string) {
  return useQuery({
    queryKey: ['company', slug],
    queryFn: async () => {
      // First get the company ID from the slug
      const { data: companies, error: slugError } = await supabase
        .from('companies')
        .select('id')
        .eq('slug', slug)
        .single();

      if (slugError) throw slugError;
      if (!companies) throw new Error('Company not found');

      // Then fetch full company details using the ID
      const { data, error } = await supabase
        .from('companies')
        .select(`
          *,
          locations:company_locations(*),
          benefits:company_benefits(*),
          media:company_media(*),
          jobs(*)
        `)
        .eq('id', companies.id)
        .single();

      if (error) throw error;
      return data;
    },
  });
}
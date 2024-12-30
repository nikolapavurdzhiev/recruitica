import { supabase } from '../../../lib/supabase';

export async function findRelevantCompanies(query: string) {
  // Clean and prepare the search query
  const searchTerms = query
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove special characters
    .trim()
    .split(/\s+/)
    .filter(term => term.length > 2) // Filter out short words
    .join(' | '); // Join with OR operator

  if (!searchTerms) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('companies')
      .select(`
        id,
        name,
        industry,
        company_size,
        description,
        company_locations:company_locations(
          city,
          country,
          is_headquarters
        )
      `)
      .textSearch('name', `'${searchTerms}'`, {
        type: 'websearch',
        config: 'english'
      })
      .limit(3);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Company search error:', error);
    // Fallback to basic name matching if text search fails
    const { data } = await supabase
      .from('companies')
      .select(`
        id,
        name,
        industry,
        company_size,
        description,
        company_locations:company_locations(
          city,
          country,
          is_headquarters
        )
      `)
      .ilike('name', `%${query}%`)
      .limit(3);

    return data || [];
  }
}
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../../lib/supabase';
import type { Course, CourseFilters } from '../types';

export function useCourses(filters: CourseFilters) {
  return useQuery({
    queryKey: ['courses', filters],
    queryFn: async () => {
      let query = supabase
        .from('courses')
        .select(`
          *,
          instructor:profiles(full_name),
          _count:course_enrollments(count),
          reviews:course_reviews(rating)
        `)
        .eq('published', true);

      if (filters.category) {
        query = query.eq('category', filters.category);
      }

      if (filters.level) {
        query = query.eq('level', filters.level);
      }

      if (filters.duration) {
        const [min, max] = filters.duration.split('-').map(Number);
        query = query.gte('duration', min * 60).lte('duration', (max || 999) * 60);
      }

      if (filters.price === 'free') {
        query = query.eq('price', 0);
      } else if (filters.price === 'paid') {
        query = query.gt('price', 0);
      }

      if (filters.search) {
        query = query.ilike('title', `%${filters.search}%`);
      }

      const { data, error } = await query;

      if (error) throw error;

      return data.map(course => ({
        ...course,
        rating: course.reviews?.length 
          ? course.reviews.reduce((acc: number, curr: any) => acc + curr.rating, 0) / course.reviews.length
          : 0
      })) as Course[];
    }
  });
}
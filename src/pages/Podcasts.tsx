import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Headphones } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { PodcastCard } from '../components/podcasts/PodcastCard';
import { FeaturedPodcast } from '../components/podcasts/FeaturedPodcast';
import { PodcastHero } from '../components/podcasts/PodcastHero';

export function Podcasts() {
  const { data: podcasts, isLoading } = useQuery({
    queryKey: ['podcasts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcasts')
        .select(`
          *,
          author:profiles(full_name),
          episodes:podcast_episodes(count)
        `)
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  const [featured, ...otherPodcasts] = podcasts || [];

  return (
    <div className="max-w-7xl mx-auto">
      <PodcastHero />
      
      {featured && (
        <div className="mb-12">
          <FeaturedPodcast podcast={featured} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherPodcasts?.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </div>
  );
}
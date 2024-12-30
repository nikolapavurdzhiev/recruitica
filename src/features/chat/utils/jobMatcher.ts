import { mockJobs } from '../../jobs/data/mockJobs';

export function findRelevantJobs(query: string) {
  const keywords = query.toLowerCase().split(' ');
  
  return mockJobs.filter(job => {
    const searchText = `${job.title} ${job.company} ${job.location} ${job.type}`.toLowerCase();
    return keywords.some(keyword => searchText.includes(keyword));
  }).slice(0, 3); // Return top 3 matches
}
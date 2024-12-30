import { openai } from '../openai/client';
import { supabase } from '../supabase';

export async function getJobRecommendations(userId: string, limit = 5) {
  // Get user profile and history
  const { data: profile } = await supabase
    .from('profiles')
    .select(`
      *,
      skills:profile_skills(*),
      applications:job_applications(*)
    `)
    .eq('id', userId)
    .single();

  // Get available jobs
  const { data: jobs } = await supabase
    .from('jobs')
    .select('*')
    .eq('status', 'open')
    .limit(20);

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are an expert recruitment AI providing job recommendations.'
      },
      {
        role: 'user',
        content: JSON.stringify({ profile, jobs })
      }
    ],
    functions: [
      {
        name: 'recommendJobs',
        parameters: {
          type: 'object',
          properties: {
            recommendations: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  jobId: { type: 'string' },
                  score: { type: 'number' },
                  reasons: { type: 'array', items: { type: 'string' } }
                }
              }
            }
          }
        }
      }
    ]
  });

  const result = JSON.parse(completion.choices[0]?.message?.function_call?.arguments || '{}');
  return result.recommendations.slice(0, limit);
}

export async function getCompanyRecommendations(userId: string, limit = 3) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  const { data: companies } = await supabase
    .from('companies')
    .select(`
      *,
      jobs(*),
      company_culture(*)
    `)
    .limit(10);

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are an expert recruitment AI recommending companies to candidates.'
      },
      {
        role: 'user',
        content: JSON.stringify({ profile, companies })
      }
    ],
    functions: [
      {
        name: 'recommendCompanies',
        parameters: {
          type: 'object',
          properties: {
            recommendations: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  companyId: { type: 'string' },
                  score: { type: 'number' },
                  reasons: { type: 'array', items: { type: 'string' } }
                }
              }
            }
          }
        }
      }
    ]
  });

  const result = JSON.parse(completion.choices[0]?.message?.function_call?.arguments || '{}');
  return result.recommendations.slice(0, limit);
}
import { openai } from '../openai/client';
import type { AIJobMatch, AIProfileAnalysis } from './types';
import { supabase } from '../supabase';

export async function analyzeProfile(profileId: string): Promise<AIProfileAnalysis> {
  const { data: profile } = await supabase
    .from('profiles')
    .select(`
      *,
      skills:profile_skills(*)
    `)
    .eq('id', profileId)
    .single();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are an expert recruitment AI analyzing candidate profiles.'
      },
      {
        role: 'user',
        content: JSON.stringify(profile)
      }
    ],
    functions: [
      {
        name: 'analyzeProfile',
        parameters: {
          type: 'object',
          properties: {
            skills: {
              type: 'object',
              properties: {
                identified: { type: 'array', items: { type: 'string' } },
                missing: { type: 'array', items: { type: 'string' } },
                recommendations: { type: 'array', items: { type: 'string' } }
              }
            },
            experience: {
              type: 'object',
              properties: {
                years: { type: 'number' },
                relevance: { type: 'number' },
                gaps: { type: 'array', items: { type: 'string' } }
              }
            },
            cultureFit: {
              type: 'object',
              properties: {
                score: { type: 'number' },
                strengths: { type: 'array', items: { type: 'string' } },
                areas: { type: 'array', items: { type: 'string' } }
              }
            }
          }
        }
      }
    ]
  });

  return JSON.parse(completion.choices[0]?.message?.function_call?.arguments || '{}');
}

export async function matchJobWithCandidate(jobId: string, candidateId: string): Promise<AIJobMatch> {
  const { data: job } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', jobId)
    .single();

  const { data: candidate } = await supabase
    .from('profiles')
    .select(`
      *,
      skills:profile_skills(*)
    `)
    .eq('id', candidateId)
    .single();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are an expert recruitment AI matching candidates with jobs.'
      },
      {
        role: 'user',
        content: JSON.stringify({ job, candidate })
      }
    ],
    functions: [
      {
        name: 'matchJobCandidate',
        parameters: {
          type: 'object',
          properties: {
            matchScore: {
              type: 'object',
              properties: {
                score: { type: 'number' },
                reasons: { type: 'array', items: { type: 'string' } }
              }
            },
            recommendations: { type: 'array', items: { type: 'string' } }
          }
        }
      }
    ]
  });

  const result = JSON.parse(completion.choices[0]?.message?.function_call?.arguments || '{}');
  
  return {
    jobId,
    candidateId,
    ...result
  };
}
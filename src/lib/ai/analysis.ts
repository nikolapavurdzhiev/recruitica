import { openai } from '../openai/client';
import { supabase } from '../supabase';

export async function analyzeJobDescription(description: string) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are an expert recruitment AI analyzing job descriptions.'
      },
      {
        role: 'user',
        content: description
      }
    ],
    functions: [
      {
        name: 'analyzeJob',
        parameters: {
          type: 'object',
          properties: {
            requiredSkills: { type: 'array', items: { type: 'string' } },
            preferredSkills: { type: 'array', items: { type: 'string' } },
            experience: {
              type: 'object',
              properties: {
                minimum: { type: 'number' },
                preferred: { type: 'number' }
              }
            },
            keyResponsibilities: { type: 'array', items: { type: 'string' } },
            culturalAttributes: { type: 'array', items: { type: 'string' } },
            suggestions: { type: 'array', items: { type: 'string' } }
          }
        }
      }
    ]
  });

  return JSON.parse(completion.choices[0]?.message?.function_call?.arguments || '{}');
}

export async function analyzeResume(resumeText: string) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are an expert recruitment AI analyzing resumes.'
      },
      {
        role: 'user',
        content: resumeText
      }
    ],
    functions: [
      {
        name: 'analyzeResume',
        parameters: {
          type: 'object',
          properties: {
            skills: { type: 'array', items: { type: 'string' } },
            experience: {
              type: 'object',
              properties: {
                years: { type: 'number' },
                roles: { type: 'array', items: { type: 'string' } }
              }
            },
            education: { type: 'array', items: { type: 'string' } },
            strengths: { type: 'array', items: { type: 'string' } },
            improvements: { type: 'array', items: { type: 'string' } },
            recommendations: { type: 'array', items: { type: 'string' } }
          }
        }
      }
    ]
  });

  return JSON.parse(completion.choices[0]?.message?.function_call?.arguments || '{}');
}
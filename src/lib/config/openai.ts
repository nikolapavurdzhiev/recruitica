import { env } from './env';

export const openaiConfig = {
  apiKey: env.openai.apiKey,
  defaultModel: 'gpt-4-0125-preview',  // Updated to 4.0 mini model
  maxTokens: 150,
  temperature: 0.7,
  topP: 0.9,
  frequencyPenalty: 0.5,
  presencePenalty: 0.5
} as const;
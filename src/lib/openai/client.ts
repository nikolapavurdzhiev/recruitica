import OpenAI from 'openai';
import { openaiConfig } from '../config/openai';

export const openai = new OpenAI({
  apiKey: openaiConfig.apiKey,
  dangerouslyAllowBrowser: true // Note: In production, API calls should go through a backend
});
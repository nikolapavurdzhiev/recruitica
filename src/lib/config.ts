// Environment configuration
export const config = {
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
    defaultModel: 'gpt-3.5-turbo',
    maxTokens: 150,
    temperature: 0.7
  }
} as const;

// Validation
if (!config.openai.apiKey) {
  throw new Error(
    'OpenAI API key is missing. Please add VITE_OPENAI_API_KEY to your .env file'
  );
}
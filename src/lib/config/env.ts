// Environment variable validation and typing
export const env = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY
  },
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
  }
} as const;

// Validation
if (!env.supabase.url || !env.supabase.anonKey) {
  throw new Error('Missing Supabase environment variables');
}
import { createClient } from '@supabase/supabase-js';
import { env } from './env';

export const supabaseConfig = {
  url: env.supabase.url,
  anonKey: env.supabase.anonKey
} as const;
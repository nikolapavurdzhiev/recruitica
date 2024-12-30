import type { User } from '@supabase/supabase-js';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  created_at: string;
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}
import type { Message } from './types';

interface CreateMessageParams {
  content: string;
  role: 'user' | 'assistant';
}

export function createMessage({ content, role }: CreateMessageParams): Message {
  return {
    id: crypto.randomUUID(),
    content,
    role,
    created_at: new Date().toISOString()
  };
}
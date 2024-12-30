import { useState, useCallback } from 'react';
import { getChatResponse } from '../../../lib/openai/chat';
import type { Message, ChatState } from '../types';
import { createMessage } from '../utils';

export function useChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isTyping: false
  });

  const sendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage = createMessage({
      content,
      role: 'user'
    });

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true
    }));

    try {
      const response = await getChatResponse(content);

      // Add assistant response
      const assistantMessage = createMessage({
        content: response,
        role: 'assistant'
      });

      setState(prev => ({
        messages: [...prev.messages, assistantMessage],
        isTyping: false
      }));
    } catch (error) {
      console.error('Chat error:', error);
      
      // Add error message
      const errorMessage = createMessage({
        content: 'I apologize, but I encountered an error. Please try again later.',
        role: 'assistant'
      });

      setState(prev => ({
        messages: [...prev.messages, errorMessage],
        isTyping: false
      }));
    }
  }, []);

  return {
    messages: state.messages,
    isTyping: state.isTyping,
    sendMessage
  };
}
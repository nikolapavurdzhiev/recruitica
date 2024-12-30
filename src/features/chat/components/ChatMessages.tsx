import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import type { Message } from '../types';

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

export function ChatMessages({ messages, isTyping }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {/* Welcome Message */}
      {messages.length === 0 && (
        <div className="text-center text-gray-500 my-8">
          <Bot className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
          <p>Hi! How can I help you today?</p>
        </div>
      )}

      {/* Messages */}
      {messages.map((message) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-start gap-3 ${
            message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            message.role === 'assistant' ? 'bg-indigo-100' : 'bg-gray-100'
          }`}>
            {message.role === 'assistant' ? (
              <Bot className="w-5 h-5 text-indigo-600" />
            ) : (
              <User className="w-5 h-5 text-gray-600" />
            )}
          </div>
          <div className={`rounded-xl px-4 py-2 max-w-[80%] ${
            message.role === 'assistant' 
              ? 'bg-indigo-50 text-gray-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {message.content}
          </div>
        </motion.div>
      ))}

      {/* Typing Indicator */}
      {isTyping && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-gray-500"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <Bot className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
          </div>
        </motion.div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
}
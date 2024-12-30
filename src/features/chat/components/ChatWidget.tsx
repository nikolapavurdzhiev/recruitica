import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { useChat } from '../hooks/useChat';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isTyping, sendMessage } = useChat();

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 w-96 bg-white rounded-xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-indigo-600 p-4 flex items-center justify-between text-white">
              <div>
                <h3 className="font-semibold">Customer Support</h3>
                <p className="text-sm opacity-90">We're here to help</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 flex flex-col">
              <ChatMessages messages={messages} isTyping={isTyping} />
              <ChatInput onSend={sendMessage} isTyping={isTyping} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
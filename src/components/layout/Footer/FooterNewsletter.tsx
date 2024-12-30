import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Stay Updated</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Get the latest recruitment insights and opportunities delivered to your inbox.
      </p>

      <AnimatePresence mode="wait">
        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center text-green-600 dark:text-green-400 space-x-2"
          >
            <Mail className="h-5 w-5" />
            <span>Thanks for subscribing!</span>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="space-y-2"
          >
            <div className="flex max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="min-w-0 flex-auto rounded-l-lg border dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                required
              />
              <button
                type="submit"
                className="rounded-r-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
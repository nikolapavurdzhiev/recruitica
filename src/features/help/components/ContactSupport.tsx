import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, Clock } from 'lucide-react';

export function ContactSupport() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <MessageCircle className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Still Need Help?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 mb-8"
        >
          Our support team is here to help you with any questions or issues
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <Mail className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Send us an email anytime
            </p>
            <a
              href="mailto:support@recruitica.com"
              className="text-indigo-600 dark:text-indigo-400 font-medium"
            >
              support@recruitica.com
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <Phone className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Call us during business hours
            </p>
            <a
              href="tel:+442012345678"
              className="text-indigo-600 dark:text-indigo-400 font-medium"
            >
              +44 (0) 20 1234 5678
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              We're here to help
            </p>
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              Mon-Fri: 9:00 AM - 6:00 PM
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
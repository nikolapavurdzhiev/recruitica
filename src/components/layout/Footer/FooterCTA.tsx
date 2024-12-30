import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function FooterCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 md:p-8 mb-12"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
          Ready to Advance Your Recruitment Career?
        </h3>
        <p className="text-white/90 mb-6">
          Join thousands of recruitment professionals who have found their dream roles through our platform
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
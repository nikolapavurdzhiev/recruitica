import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

export function PopularArticles() {
  const articles = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of using our platform',
      href: '/help/articles/getting-started'
    },
    {
      title: 'How to Create a Strong Profile',
      description: 'Tips for creating an attractive recruiter profile',
      href: '/help/articles/create-profile'
    },
    {
      title: 'Job Application Process',
      description: 'Step-by-step guide to applying for jobs',
      href: '/help/articles/application-process'
    },
    {
      title: 'Account Security Best Practices',
      description: 'Keep your account safe and secure',
      href: '/help/articles/security-tips'
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Popular Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={article.href}
              className="group flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg">
                <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {article.description}
                </p>
                <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 mt-2 text-sm font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
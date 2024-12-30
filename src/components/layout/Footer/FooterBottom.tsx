import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span>© {currentYear} Recruitica. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <select 
              className="bg-transparent border-none focus:ring-0 text-sm cursor-pointer"
              defaultValue="en-GB"
            >
              <option value="en-GB">English (UK)</option>
              <option value="en-US">English (US)</option>
              <option value="fr-FR">Français</option>
              <option value="de-DE">Deutsch</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link 
            to="/sitemap" 
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Sitemap
          </Link>
          <Link 
            to="/security" 
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Security
          </Link>
          <Link 
            to="/status" 
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Status
          </Link>
        </div>
      </div>
    </div>
  );
}
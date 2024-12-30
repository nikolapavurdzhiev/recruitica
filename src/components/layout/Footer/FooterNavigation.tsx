import React from 'react';
import { Link } from 'react-router-dom';

export function FooterNavigation() {
  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Press', href: '/press' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Forum', href: '/forum' },
      { name: 'Help Center', href: '/help' },
      { name: 'Podcasts', href: '/podcasts' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
        <ul className="space-y-3">
          {navigation.company.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.href} 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
        <ul className="space-y-3">
          {navigation.resources.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
        <ul className="space-y-3">
          {navigation.legal.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
import React from 'react';
import { FooterNewsletter } from './FooterNewsletter';
import { FooterNavigation } from './FooterNavigation';
import { FooterSocial } from './FooterSocial';
import { FooterBottom } from './FooterBottom';
import { FooterFeatures } from './FooterFeatures';
import { FooterCTA } from './FooterCTA';
import { FooterApps } from './FooterApps';
import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <FooterCTA />
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-indigo-600">Recruitica</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Connecting recruitment professionals with their next career opportunity.
            </p>
            <FooterSocial />
            <FooterApps />
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <FooterNavigation />
          </div>

          {/* Newsletter */}
          <div>
            <FooterNewsletter />
          </div>
        </div>

        <FooterFeatures />
        
        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </footer>
  );
}
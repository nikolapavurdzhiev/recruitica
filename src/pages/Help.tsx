import React from 'react';
import { HelpHero } from '../features/help/components/HelpHero';
import { HelpCategories } from '../features/help/components/HelpCategories';
import { PopularArticles } from '../features/help/components/PopularArticles';
import { ContactSupport } from '../features/help/components/ContactSupport';

export function Help() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <HelpHero />
      <HelpCategories />
      <PopularArticles />
      <ContactSupport />
    </div>
  );
}
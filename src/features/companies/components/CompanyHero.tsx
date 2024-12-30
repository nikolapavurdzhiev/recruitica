import React from 'react';
import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { CompanySearch } from './CompanySearch';
import { CompanyFilters } from './CompanyFilters';

interface CompanyHeroProps {
  search: string;
  filters: {
    industry: string;
    size: string;
    location: string;
  };
  onSearchChange: (value: string) => void;
  onFilterChange: (key: string, value: string) => void;
}

export function CompanyHero({ search, filters, onSearchChange, onFilterChange }: CompanyHeroProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-sm mb-8 p-8 md:p-12 text-white"
    >
      <div className="flex items-center justify-center mb-6">
        <Building2 className="w-16 h-16 opacity-90" />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Discover Top Recruitment Companies
        </h1>
        <p className="text-lg opacity-90 mb-8">
          Find your next opportunity at leading recruitment agencies worldwide
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <CompanySearch value={search} onChange={onSearchChange} />
          <CompanyFilters 
            filters={filters}
            onFilterChange={onFilterChange}
          />
        </div>
      </div>
    </motion.div>
  );
}
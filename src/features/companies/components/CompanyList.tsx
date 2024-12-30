import React from 'react';
import { motion } from 'framer-motion';
import { CompanyCard } from './CompanyCard';
import type { Company } from '../types';

interface CompanyListProps {
  companies: Company[];
}

export function CompanyList({ companies }: CompanyListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </motion.div>
  );
}
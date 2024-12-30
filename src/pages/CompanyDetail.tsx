import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { CompanyDetailHero } from '../features/companies/components/CompanyDetailHero';
import { CompanyDetailContent } from '../features/companies/components/CompanyDetailContent';
import { exampleCompanies } from '../features/companies/data/exampleCompanies';

export function CompanyDetail() {
  const { slug } = useParams();
  const company = exampleCompanies.find(c => c.slug === slug);

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Company Not Found</h1>
          <p className="text-gray-600">The company you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <CompanyDetailHero company={company} />
        <div className="mt-8">
          <CompanyDetailContent company={company} />
        </div>
      </div>
    </div>
  );
}
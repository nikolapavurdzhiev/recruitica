import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Users, MapPin, Briefcase, Star } from 'lucide-react';
import type { Company } from '../types';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const location = company.locations?.[0] 
    ? `${company.locations[0].city}, ${company.locations[0].country}`
    : 'Location not specified';

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      <Link to={`/companies/${company.slug}`} className="block">
        {/* Header */}
        <div className="relative h-32 rounded-t-xl bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl" />
          </motion.div>
          
          {company.logo_url && (
            <div className="absolute -bottom-6 left-6">
              <div className="w-16 h-16 rounded-lg border-4 border-white bg-white shadow-md overflow-hidden">
                <img
                  src={company.logo_url}
                  alt={`${company.name} logo`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6 pt-8">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {company.name}
          </h3>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
              {company.industry || 'Industry not specified'}
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2 flex-shrink-0" />
              {company.company_size || 'Company size not specified'}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              {location}
            </div>
          </div>
          
          <p className="mt-4 text-gray-600 line-clamp-2">
            {company.description || 'No description available'}
          </p>

          {company.tech_stack && company.tech_stack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {company.tech_stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700"
                >
                  {tech}
                </span>
              ))}
              {company.tech_stack.length > 3 && (
                <span className="text-gray-500 text-sm">
                  +{company.tech_stack.length - 3} more
                </span>
              )}
            </div>
          )}

          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-700">
              <Briefcase className="w-4 h-4 mr-1" />
              View Opportunities
            </span>
            <span className="flex items-center text-gray-500">
              <Star className="w-4 h-4 mr-1 text-yellow-400" />
              {company.jobs_count || 0} open positions
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Users, MapPin, Briefcase } from 'lucide-react';

interface CompanyCardProps {
  company: {
    id: string;
    name: string;
    logo_url: string | null;
    industry: string;
    company_size: string;
    description: string;
    locations: Array<{
      id: string;
      city: string;
      country: string;
      is_headquarters: boolean;
    }>;
    jobs: { count: number };
    benefits: Array<{
      id: string;
      title: string;
      description: string;
      category: string;
    }>;
    tech_stack?: string[];
  };
}

export function CompanyCard({ company }: CompanyCardProps) {
  const location = company.locations?.[0] 
    ? `${company.locations[0].city}, ${company.locations[0].country}`
    : 'Location not specified';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
    >
      <Link to={`/companies/${company.id}`} className="block">
        <div className="relative h-32 rounded-t-xl bg-gradient-to-r from-indigo-500 to-purple-500">
          {company.logo_url && (
            <div className="absolute -bottom-6 left-6">
              <img
                src={company.logo_url}
                alt={`${company.name} logo`}
                className="w-16 h-16 rounded-lg border-4 border-white bg-white object-cover"
              />
            </div>
          )}
        </div>
        
        <div className="p-6 pt-8">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {company.name}
          </h3>
          
          <div className="space-y-2 my-4">
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
          
          <p className="text-gray-600 line-clamp-2 mb-4">
            {company.description || 'No description available'}
          </p>

          <div className="flex items-center justify-between text-sm">
            <span className="text-indigo-600 font-medium flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              View Opportunities
            </span>
            <span className="text-gray-500">
              {company.jobs?.count || 0} open positions
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
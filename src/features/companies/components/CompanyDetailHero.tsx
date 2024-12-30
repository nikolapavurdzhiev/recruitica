import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, MapPin, Users, Calendar } from 'lucide-react';
import type { Company } from '../types';

interface CompanyDetailHeroProps {
  company: Company;
}

export function CompanyDetailHero({ company }: CompanyDetailHeroProps) {
  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="h-80 overflow-hidden rounded-2xl">
        <img
          src={company.cover_image_url}
          alt={`${company.name} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
      </div>

      {/* Company Info */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-xl border-4 border-white bg-white shadow-lg overflow-hidden">
            {company.logo_url ? (
              <img
                src={company.logo_url}
                alt={`${company.name} logo`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-indigo-100">
                <Building2 className="w-12 h-12 text-indigo-600" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">
              {company.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                {company.industry}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {company.company_size}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {company.locations[0]?.city}, {company.locations[0]?.country}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Founded {company.founded_year}
              </span>
            </div>
          </div>

          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-colors"
          >
            <Globe className="w-4 h-4" />
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
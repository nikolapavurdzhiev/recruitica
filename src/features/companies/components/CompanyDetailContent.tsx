import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Heart, Award, CheckCircle } from 'lucide-react';
import type { Company } from '../types';

interface CompanyDetailContentProps {
  company: Company;
}

export function CompanyDetailContent({ company }: CompanyDetailContentProps) {
  return (
    <div className="space-y-8">
      {/* About */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-8 shadow-sm"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
        <p className="text-gray-600 whitespace-pre-line">{company.description}</p>
      </motion.section>

      {/* Locations */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl p-8 shadow-sm"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {company.locations.map((location, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <MapPin className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {location.city}, {location.country}
                </h3>
                {location.is_headquarters && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Headquarters
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-8 shadow-sm"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.benefits.map((benefit) => (
            <div key={benefit.id} className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack */}
      {company.tech_stack && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {company.tech_stack.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>
      )}

      {/* Gallery */}
      {company.media && company.media.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Office & Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {company.media.map((item) => (
              <div key={item.id} className="relative rounded-lg overflow-hidden aspect-video">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}
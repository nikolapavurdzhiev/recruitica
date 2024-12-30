import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Percent, Shield, Award } from 'lucide-react';

const tools = [
  {
    id: 1,
    name: 'Bullhorn CRM',
    description: 'Industry-leading recruitment CRM and ATS platform',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100',
    discount: '20% off first year',
    features: ['Complete ATS Solution', 'Automation Tools', 'Analytics Dashboard'],
    link: 'https://www.bullhorn.com'
  },
  {
    id: 2,
    name: 'CV Library',
    description: 'UK\'s leading independent job board',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=100&h=100',
    discount: '15% off job postings',
    features: ['Millions of CVs', 'Advanced Search', 'Direct Applications'],
    link: 'https://www.cv-library.co.uk'
  },
  {
    id: 3,
    name: 'Snov.io',
    description: 'Email automation and lead generation platform',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=100&h=100',
    discount: '25% off annual plans',
    features: ['Email Finder', 'Drip Campaigns', 'CRM Integration'],
    link: 'https://snov.io'
  }
];

export function PartnerTools() {
  return (
    <section className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Partner Tools & Software</h2>
        <p className="text-gray-600 mt-2">
          Exclusive discounts on industry-leading recruitment tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-indigo-600 font-medium mb-2">
                  <Percent className="w-5 h-5" />
                  {tool.discount}
                </div>
                <ul className="space-y-2">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <Shield className="w-4 h-4 text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors gap-2"
              >
                Get Started <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-2 text-gray-600 text-sm">
          <Award className="w-5 h-5 text-indigo-600" />
          All partners are vetted and trusted by thousands of recruiters
        </div>
      </div>
    </section>
  );
}
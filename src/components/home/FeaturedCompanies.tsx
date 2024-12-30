import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const featuredCompanies = [
  {
    id: 1,
    name: 'Hays',
    slug: 'hays',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&h=200',
    description: 'Global recruitment leader'
  },
  {
    id: 2,
    name: 'Robert Half',
    slug: 'robert-half',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=200&h=200',
    description: 'Specialized staffing & recruiting'
  },
  {
    id: 3,
    name: 'Michael Page',
    slug: 'michael-page',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=200&h=200',
    description: 'Professional recruitment services'
  },
  {
    id: 4,
    name: 'Randstad',
    slug: 'randstad',
    logo: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&w=200&h=200',
    description: 'Global HR services leader'
  }
];

export function FeaturedCompanies() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Top Employers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Work with Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join leading recruitment firms and shape the future of talent acquisition
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all"
            >
              <Link to={`/companies/${company.slug}`} className="block">
                <div className="relative h-16 mb-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-16 h-16 mx-auto object-cover rounded-lg group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-center font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {company.name}
                </h3>
                <p className="text-sm text-center text-gray-500 mt-1">
                  {company.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
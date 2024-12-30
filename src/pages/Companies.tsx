import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Search, MapPin, Users, Briefcase, Filter, Star, TrendingUp } from 'lucide-react';
import { useCompanies } from '../features/companies/hooks/useCompanies';
import { CompanyCard } from '../features/companies/components/CompanyCard';
import { CompanyStats } from '../features/companies/components/CompanyStats';
import { CompanySearch } from '../features/companies/components/CompanySearch';
import { CompanyFilters } from '../features/companies/components/CompanyFilters';

export function Companies() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    size: '',
    location: ''
  });
  const { data: companies, isLoading } = useCompanies();

  const filteredCompanies = companies?.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(search.toLowerCase()) ||
      company.industry?.toLowerCase().includes(search.toLowerCase());
    const matchesIndustry = !filters.industry || company.industry === filters.industry;
    const matchesSize = !filters.size || company.company_size === filters.size;
    const matchesLocation = !filters.location || 
      company.locations.some(loc => loc.city.toLowerCase().includes(filters.location.toLowerCase()));
    return matchesSearch && matchesIndustry && matchesSize && matchesLocation;
  });

  const stats = {
    totalCompanies: companies?.length || 0,
    activeJobs: companies?.reduce((total, company) => total + (company.jobs_count || 0), 0) || 0,
    locations: companies?.reduce((total, company) => total + company.locations.length, 0) || 0,
    totalEmployees: '10k+'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-8"
            >
              <Building2 className="w-20 h-20 text-white opacity-90" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            >
              Discover Top Recruitment Companies
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-white/90 max-w-3xl mx-auto"
            >
              Connect with leading recruitment agencies and unlock your next career opportunity
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 max-w-3xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search companies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  onClick={() => document.getElementById('filters')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-indigo-600 rounded-xl hover:bg-opacity-90 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <Building2 className="w-8 h-8 text-indigo-600 mb-4" />
            <div className="text-2xl font-bold text-gray-900">{stats.totalCompanies}</div>
            <div className="text-gray-600">Companies</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <Briefcase className="w-8 h-8 text-indigo-600 mb-4" />
            <div className="text-2xl font-bold text-gray-900">{stats.activeJobs}</div>
            <div className="text-gray-600">Active Jobs</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <MapPin className="w-8 h-8 text-indigo-600 mb-4" />
            <div className="text-2xl font-bold text-gray-900">{stats.locations}</div>
            <div className="text-gray-600">Locations</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <Users className="w-8 h-8 text-indigo-600 mb-4" />
            <div className="text-2xl font-bold text-gray-900">{stats.totalEmployees}</div>
            <div className="text-gray-600">Total Employees</div>
          </motion.div>
        </div>
      </div>

      {/* Filters Section */}
      <div id="filters" className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-900">Refine Your Search</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
              <select
                value={filters.industry}
                onChange={(e) => setFilters(prev => ({ ...prev, industry: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">All Industries</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Manufacturing">Manufacturing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
              <select
                value={filters.size}
                onChange={(e) => setFilters(prev => ({ ...prev, size: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Any Size</option>
                <option value="1-50">1-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">All Locations</option>
                <option value="london">London</option>
                <option value="manchester">Manchester</option>
                <option value="birmingham">Birmingham</option>
                <option value="remote">Remote</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Companies Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent" />
          </div>
        ) : filteredCompanies?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CompanyCard company={company} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No companies found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
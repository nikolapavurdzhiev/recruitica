import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, LinkedinIcon, FileText } from 'lucide-react';

export function ProfileHeader() {
  const profile = {
    name: 'John Smith',
    title: '360° Tech Recruiter',
    location: 'London, UK',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200',
    coverPhoto: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600',
    linkedinUrl: 'https://linkedin.com/in/johnsmith',
    yearsExperience: '8+ years',
    currentlyAt: 'Global Tech Solutions'
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative mb-24"
    >
      {/* Cover Photo with Animated Gradient Overlay */}
      <div className="h-80 rounded-xl overflow-hidden relative">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={profile.coverPhoto}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
        
        {/* Animated Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
      
      {/* Profile Content Container */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 translate-y-1/2"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile Photo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="md:w-40 md:h-40 w-32 h-32 rounded-xl overflow-hidden ring-4 ring-white shadow-lg -mt-20 md:-mt-24"
              >
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Profile Info */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{profile.name}</h1>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span>{profile.title} at {profile.currentlyAt}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5 mr-2 text-[#0A66C2]" />
                    LinkedIn Profile
                  </motion.a>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <FileText className="w-5 h-5 mr-2 text-gray-500" />
                    Download CV
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
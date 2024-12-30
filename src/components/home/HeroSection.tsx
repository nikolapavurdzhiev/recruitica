import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Briefcase, Users, ArrowRight } from 'lucide-react';

export function HeroSection() {
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchInput = (e.target as HTMLFormElement).querySelector('input');
    if (searchInput?.value) {
      navigate(`/jobs?search=${encodeURIComponent(searchInput.value)}`);
    }
  };

  return (
    <section className="relative min-h-[700px] overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </motion.div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] bg-cover bg-center opacity-10" />

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6"
            >
              Find Your Next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Recruitment Career Move
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Connect with top recruitment agencies and unlock your potential in the recruitment industry. 
              Access exclusive opportunities and take your career to the next level.
            </motion.p>

            <motion.form
              onSubmit={handleSearch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
                <div className="flex-1 flex items-center px-4">
                  <Search className="w-5 h-5 text-white/60 mr-3" />
                  <input
                    type="text"
                    placeholder="Search for recruitment opportunities..."
                    className="w-full bg-transparent border-none focus:outline-none text-white placeholder-white/60"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Search Jobs
                </button>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/jobs"
                className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Browse Jobs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/signup"
                className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Sign Up Now
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-8 border-t border-white/20 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-white">2.4k+</div>
                <div className="text-white/80">Active Jobs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/80">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10k+</div>
                <div className="text-white/80">Placements</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
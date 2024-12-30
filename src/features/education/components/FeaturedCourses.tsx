import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const featuredCourses = [
  {
    id: 1,
    title: 'Advanced Technical Recruitment',
    instructor: 'Sarah Johnson',
    students: 1240,
    duration: '6 weeks',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800',
    price: 299
  },
  {
    id: 2,
    title: 'Recruitment Marketing Mastery',
    instructor: 'Michael Chen',
    students: 890,
    duration: '4 weeks',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800',
    price: 249
  },
  {
    id: 3,
    title: 'Data-Driven Recruitment',
    instructor: 'Emma Wilson',
    students: 1560,
    duration: '8 weeks',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    price: 399
  }
];

export function FeaturedCourses() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
        <p className="mt-4 text-lg text-gray-600">Most popular courses among recruitment professionals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all"
          >
            <div className="relative h-48">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="font-semibold text-indigo-600">${course.price}</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">by {course.instructor}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  {course.rating}
                </div>
              </div>

              <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alistair Cox',
    role: 'CEO',
    company: 'Hays plc',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200',
    quote: 'This platform has revolutionized how we approach recruitment talent acquisition. The quality of candidates and the seamless experience have made it an invaluable resource for our global operations.'
  },
  {
    id: 2,
    name: 'Jonas Prising',
    role: 'CEO',
    company: 'ManpowerGroup',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200',
    quote: 'In the ever-evolving landscape of recruitment, having access to top recruitment talent is crucial. This platform consistently delivers exceptional professionals who understand our industry.'
  },
  {
    id: 3,
    name: 'Robert Walters',
    role: 'Founder & CEO',
    company: 'Robert Walters plc',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&h=200',
    quote: 'The caliber of recruitment professionals we\'ve connected with through this platform has been outstanding. It\'s become an essential part of our talent acquisition strategy.'
  }
];

export function Testimonials() {
  return (
    <section className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900">What Industry Leaders Say</h2>
        <p className="text-gray-600 mt-2">Trusted by the world's leading recruitment firms</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6 relative"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-indigo-100" />
            
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                <p className="text-indigo-600 text-sm">{testimonial.company}</p>
              </div>
            </div>

            <blockquote className="text-gray-600 italic">
              "{testimonial.quote}"
            </blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
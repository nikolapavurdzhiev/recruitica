import React from 'react';
import { Twitter, Linkedin, Github, Youtube, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export function FooterSocial() {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/recruitica', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/recruitica', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/recruitica', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/recruitica', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/recruitica', label: 'YouTube' },
    { icon: Github, href: 'https://github.com/recruitica', label: 'GitHub' }
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          aria-label={social.label}
        >
          <social.icon className="h-6 w-6" />
        </motion.a>
      ))}
    </div>
  );
}
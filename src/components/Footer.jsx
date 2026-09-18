import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-zinc-200 bg-zinc-50 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-t from-white via-zinc-50 to-zinc-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <motion.button 
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-4 bg-white border border-zinc-200 rounded-full text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 shadow-sm hover:shadow-md transition-all duration-300 -mt-20 mb-8"
        >
          <ArrowUp size={24} />
        </motion.button>
        
        <div className="text-3xl font-display font-bold text-zinc-900 mb-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center shadow-sm">
            <span className="text-white text-lg font-black leading-none">F</span>
          </div>
          FLM.
        </div>
        
        <div className="flex gap-6 mb-8">
          <a href="https://www.linkedin.com/in/fadzkal-luthfi-mayzanio/?locale=in" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/FadzkalWeb" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="mailto:fadzkal.luthfi.m@gmail.com" aria-label="Email" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <p className="text-zinc-500 font-mono text-sm mb-8 text-center max-w-md">
          "Built with passion, powered by code."
        </p>
        
        <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>Fadzkal Luthfi Mayzanio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

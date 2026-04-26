import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neon-blue/10 via-slate-950 to-slate-950 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <motion.button 
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-4 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full text-slate-400 hover:text-neon-blue hover:border-neon-blue/50 shadow-xl transition-colors -mt-20 mb-8"
        >
          <ArrowUp size={24} />
        </motion.button>
        
        <div className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-neon-blue to-neon-green flex items-center justify-center">
            <span className="text-slate-900 text-lg font-black leading-none">F</span>
          </div>
          FLM.
        </div>
        
        <div className="flex gap-6 mb-8">
          <a href="https://www.linkedin.com/in/fadzkal-luthfi-mayzanio/?locale=in" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-blue transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/FadzkalWeb" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="mailto:fadzkal.luthfi.m@gmail.com" aria-label="Email" className="text-slate-400 hover:text-neon-green transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <p className="text-slate-500 font-mono text-sm mb-8 text-center max-w-md">
          "Built with passion, powered by code."
        </p>
        
        <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>Fadzkal Luthfi Mayzanio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

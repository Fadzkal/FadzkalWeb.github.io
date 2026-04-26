import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'experience', path: '/experience' },
    { name: 'awards', path: '/awards' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-900/40 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold text-white z-50 flex items-center gap-2 group">
          <motion.div whileHover={{ rotate: 180 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}>
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-neon-blue to-neon-green flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              <span className="text-slate-900 text-lg font-black leading-none">F</span>
            </div>
          </motion.div>
          <span className="tracking-tighter">FLM.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className="relative px-4 py-2 rounded-full font-mono text-sm tracking-wide transition-colors"
                aria-label={`Go to ${link.name} page`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-neon-blue font-bold' : 'text-slate-400 hover:text-white'}`}>
                  <span className="text-neon-green/50 opacity-0 lg:opacity-100">/</span>{link.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.linkedin.com/in/fadzkal-luthfi-mayzanio/?locale=in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-blue transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/FadzkalWeb" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="mailto:fadzkal.luthfi.m@gmail.com" className="text-slate-400 hover:text-neon-green transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 z-50 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-0 left-0 w-full bg-slate-900/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, type: "spring", stiffness: 100 }}
              >
                <Link 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl font-display font-bold tracking-wider ${location.pathname === link.path ? 'text-neon-blue' : 'text-slate-300 hover:text-white'}`}
                >
                  <span className="text-neon-green mr-2">/</span>{link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 mt-8"
            >
              <a href="https://www.linkedin.com/in/fadzkal-luthfi-mayzanio/?locale=in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-neon-blue hover:bg-white/10 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/FadzkalWeb" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                <FaGithub size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

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
        scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-zinc-200/50 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold text-zinc-900 z-50 flex items-center gap-2 group">
          <motion.div whileHover={{ rotate: 180 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}>
            <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center shadow-sm">
              <span className="text-white text-lg font-black leading-none">F</span>
            </div>
          </motion.div>
          <span className="tracking-tighter">FLM.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 bg-white/50 backdrop-blur-md px-2 py-1 rounded-full border border-zinc-200/50 shadow-sm">
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
                    className="absolute inset-0 bg-zinc-100 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-zinc-900 font-semibold' : 'text-zinc-500 hover:text-zinc-900'}`}>
                  {link.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.linkedin.com/in/fadzkal-luthfi-mayzanio/?locale=in" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/FadzkalWeb" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="mailto:fadzkal.luthfi.m@gmail.com" className="text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-zinc-600 z-50 p-2 rounded-full bg-white/50 backdrop-blur-md border border-zinc-200/50 shadow-sm"
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
            className="md:hidden fixed inset-0 top-0 left-0 w-full bg-white/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center gap-8"
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
                  className={`text-3xl font-display font-bold tracking-wider ${location.pathname === link.path ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-900'}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 mt-8"
            >
              <a href="https://www.linkedin.com/in/fadzkal-luthfi-mayzanio/?locale=in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/FadzkalWeb" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition-colors">
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

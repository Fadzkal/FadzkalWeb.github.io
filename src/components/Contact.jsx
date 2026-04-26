import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-neon-blue">/</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki proyek yang ingin didiskusikan? Mari terhubung!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:border-neon-blue/50 transition-colors group">
              <div className="p-4 bg-slate-950 rounded-full text-neon-blue group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-mono">Email</p>
                <a href="mailto:fadzkalluthfi@gmail.com" className="text-lg font-medium text-white hover:text-neon-blue transition-colors">fadzkalluthfi@gmail.com</a>
              </div>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:border-neon-green/50 transition-colors group">
              <div className="p-4 bg-slate-950 rounded-full text-neon-green group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-mono">Telepon</p>
                <a href="tel:+6289663431927" className="text-lg font-medium text-white hover:text-neon-green transition-colors">0896 6343 1927</a>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4 hover:border-neon-blue/50 transition-colors group">
              <div className="p-4 bg-slate-950 rounded-full text-neon-blue group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-mono">Lokasi</p>
                <p className="text-lg font-medium text-white">Bandung, Jawa Barat</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://www.linkedin.com/in/fadzkal-luthfi-mayzanio/?locale=in" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn Profile"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/30 rounded-xl hover:bg-[#0A66C2] hover:text-white transition-all duration-300 shadow-lg"
              >
                <FaLinkedin size={20} /> LinkedIn
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://instagram.com/kalzlthfi__" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram Profile"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-pink-500/10 text-pink-500 border border-pink-500/30 rounded-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-lg"
              >
                <FaInstagram size={20} /> Instagram
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-slate-400 mb-2">Name_</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-slate-400 mb-2">Email_</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-slate-400 mb-2">Message_</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none"
                  placeholder="Halo, saya ingin berdiskusi mengenai..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-green text-slate-950 font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all duration-300">
                <Send size={20} /> Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

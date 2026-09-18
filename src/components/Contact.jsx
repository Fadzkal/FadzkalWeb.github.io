import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }}
      );
      gsap.fromTo('.contact-info',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }}
      );
      gsap.fromTo('.contact-form',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }}
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="contact-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-zinc-900 tracking-tight">
            <span className="text-zinc-400">/</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-zinc-200 mx-auto rounded-full"></div>
          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto text-lg">
            Tertarik untuk berkolaborasi atau memiliki proyek yang ingin didiskusikan? Mari terhubung!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="contact-info space-y-6">
            <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-6 flex items-center gap-6 hover:shadow-md hover:border-zinc-300 transition-all duration-300 group">
              <div className="p-4 bg-zinc-50 rounded-2xl text-zinc-900 group-hover:scale-110 transition-transform duration-300 border border-zinc-100">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-mono mb-1">Email</p>
                <a href="mailto:fadzkalluthfi@gmail.com" className="text-lg font-bold text-zinc-900 hover:text-blue-600 transition-colors">fadzkalluthfi@gmail.com</a>
              </div>
            </div>
            
            <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-6 flex items-center gap-6 hover:shadow-md hover:border-zinc-300 transition-all duration-300 group">
              <div className="p-4 bg-zinc-50 rounded-2xl text-zinc-900 group-hover:scale-110 transition-transform duration-300 border border-zinc-100">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-mono mb-1">Telepon</p>
                <a href="tel:+6289663431927" className="text-lg font-bold text-zinc-900 hover:text-blue-600 transition-colors">0896 6343 1927</a>
              </div>
            </div>

            <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-6 flex items-center gap-6 hover:shadow-md hover:border-zinc-300 transition-all duration-300 group">
              <div className="p-4 bg-zinc-50 rounded-2xl text-zinc-900 group-hover:scale-110 transition-transform duration-300 border border-zinc-100">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-mono mb-1">Lokasi</p>
                <p className="text-lg font-bold text-zinc-900">Bandung, Jawa Barat</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/fadzkal-luthfi-mayzanio/?locale=in" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn Profile"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-white text-[#0A66C2] border border-[#0A66C2]/30 rounded-2xl hover:bg-[#0A66C2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md font-semibold"
              >
                <FaLinkedin size={20} /> LinkedIn
              </a>
              <a 
                href="https://instagram.com/kalzlthfi__" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram Profile"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-white text-pink-600 border border-pink-500/30 rounded-2xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md font-semibold"
              >
                <FaInstagram size={20} /> Instagram
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form className="bg-white border border-zinc-200/80 rounded-[2rem] p-8 md:p-10 space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100 transition-all resize-none"
                  placeholder="Halo, saya ingin berdiskusi mengenai..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 hover:shadow-lg transition-all duration-300 mt-4">
                <Send size={20} /> Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

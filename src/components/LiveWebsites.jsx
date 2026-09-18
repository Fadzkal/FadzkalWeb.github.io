import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LiveWebsites = () => {
  const sectionRef = useRef(null);
  const websites = [
    { title: "Portfolio", url: "https://fadzkal-web-porto.vercel.app/" },
    { title: "POMFEST 2025", url: "https://pomfest2025.vercel.app/" },
    { title: "HIMAMOPOLMAN", url: "https://himamopolman.org/" },
    { title: "SMKS 15 Taruna", url: "https://smks15tarunaindonesiabengkulu.id/" },
    { title: "WSI", url: "https://www.wsi.co.id/" },
    { title: "BEM Polman", url: "https://bempolman.site/" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.live-title',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 90%' }}
      );
      
      const items = gsap.utils.toArray('.live-item');
      gsap.fromTo(items,
        { opacity: 0, scale: 0.9, y: 20 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          duration: 0.6, 
          stagger: 0.05, 
          ease: 'back.out(1.5)', 
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="live-title text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-zinc-900">
            <span className="text-zinc-400">/</span> Live Websites
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {websites.map((site, idx) => (
            <a
              key={idx}
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="live-item flex flex-col items-center justify-center p-6 bg-zinc-50 border border-zinc-200 rounded-[1.5rem] hover:border-zinc-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-zinc-100 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <ExternalLink size={18} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-zinc-700 group-hover:text-zinc-900 text-center break-words w-full">{site.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveWebsites;

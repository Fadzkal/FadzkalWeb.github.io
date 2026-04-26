import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const LiveWebsites = () => {
  const websites = [
    { title: "Portfolio", url: "https://fadzkal-web-porto.vercel.app/" },
    { title: "POMFEST 2025", url: "https://pomfest2025.vercel.app/" },
    { title: "HIMAMOPOLMAN", url: "https://himamopolman.org/" },
    { title: "SMKS 15 Taruna", url: "https://smks15tarunaindonesiabengkulu.id/" },
    { title: "WSI", url: "https://www.wsi.co.id/" },
    { title: "BEM Polman", url: "https://bempolman.site/" },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
            <span className="text-neon-green">/</span> Live Websites
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {websites.map((site, idx) => (
            <motion.a
              key={idx}
              href={site.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-neon-green/50 hover:bg-slate-800 transition-all duration-300 group"
            >
              <ExternalLink size={20} className="text-slate-500 group-hover:text-neon-green mb-2 transition-colors" />
              <span className="text-sm font-mono text-slate-300 group-hover:text-white text-center break-words w-full">{site.title}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveWebsites;

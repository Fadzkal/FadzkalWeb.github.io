import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, Trophy, Briefcase, FolderCheck, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Trophy className="text-neon-blue" />, count: "10+", label: "Gelar Juara Nasional" },
    { icon: <Briefcase className="text-neon-green" />, count: "3", label: "Pengalaman Profesional" },
    { icon: <FolderCheck className="text-neon-blue" />, count: "10+", label: "Proyek Selesai" },
    { icon: <Globe className="text-neon-green" />, count: "1", label: "Gelar Internasional" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-neon-blue">/</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-1 box-glow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-neon-green to-transparent"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-blue to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-neon-green to-transparent"></div>
              <div className="rounded-xl overflow-hidden bg-slate-950">
                 <img src="/images/20240209_143252.png" alt="Fadzkal Workspace" className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="text-neon-green" size={24} />
                <h3 className="text-2xl font-display font-semibold text-white">System.info()</h3>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Saya adalah Mahasiswa Teknologi Rekayasa Informatika Industri (Automation Engineering) di Politeknik Manufaktur Bandung. Fokus utama saya berada pada <span className="text-neon-blue font-semibold">Internet of Things (IoT)</span>, <span className="text-neon-green font-semibold">Full-Stack Development</span>, dan <span className="text-white font-semibold">AI/ML</span>.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Didukung dengan rekam jejak 10+ gelar juara kompetisi tingkat nasional dan pengalaman profesional di 3 perusahaan, saya memiliki passion kuat untuk merancang dan mengimplementasikan solusi teknologi yang inovatif dan memberikan dampak nyata.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-neon-blue/50 transition-colors duration-300">
                    <div className="flex justify-center mb-3">
                      {stat.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-1">{stat.count}</h4>
                    <p className="text-xs text-slate-400 font-mono">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

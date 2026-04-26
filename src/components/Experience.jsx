import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Laboratory Engineer Intern",
      company: "MoT Lab, SBM ITB",
      period: "Feb 2026 – Sekarang",
      description: [
        "Deployment Website MoT Lab, intranet SIMlab, IoT 'AIRA' (ESP32)",
        "Operasional 4 jenis mesin 3D Printer & Laser Cutter",
        "Analisis komersialisasi aset & penyusunan modul pembelajaran"
      ],
      isCurrent: true
    },
    {
      title: "Fullstack Developer Intern",
      company: "PT Nawasena Nusantara Teknologi",
      period: "Apr 2025 – Jul 2025",
      description: [
        "Revitalisasi 2 website CMS, meningkatkan pendapatan klien",
        "End-to-end development: UI/UX, backend, deployment, maintenance",
        "Integrasi Google Analytics & optimasi SEO komprehensif"
      ]
    },
    {
      title: "IT Support & Marketing Intern",
      company: "Yayasan Dari Hati Indonesia",
      period: "Mei 2024 – Jan 2025",
      description: [
        "Website inklusif untuk penyandang disabilitas Indonesia",
        "Pendataan disabilitas kawasan Bandung"
      ]
    },
    {
      title: "Social Media Officer Intern",
      company: "IDEAL",
      period: "Apr 2024 – Agu 2024",
      description: [
        "Mencapai 15.000+ audiens, engagement rate +35% dalam 2 bulan",
        "Mengelola paid ads yang melampaui target webinar 50% (200 peserta)"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-neon-blue">/</span> Pengalaman Kerja
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-800 ml-3 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Timeline dot */}
              <div className={`absolute w-6 h-6 rounded-full border-4 border-slate-950 ${exp.isCurrent ? 'bg-neon-blue box-glow' : 'bg-slate-700'} -left-[13px] md:left-1/2 md:-translate-x-1/2 top-1 z-10`}></div>
              
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'} w-full`}>
                <div className={`bg-slate-900 border ${exp.isCurrent ? 'border-neon-blue/30' : 'border-slate-800'} rounded-xl p-6 hover:border-neon-blue/50 transition-colors duration-300 relative group`}>
                  {/* Arrow for desktop */}
                  <div className={`hidden md:block absolute top-4 w-4 h-4 bg-slate-900 border-t border-l ${exp.isCurrent ? 'border-neon-blue/30' : 'border-slate-800'} group-hover:border-neon-blue/50 transition-colors duration-300 ${idx % 2 === 0 ? 'right-[-8px] rotate-[135deg] border-b-0 border-r-0' : 'left-[-8px] -rotate-45 border-b-0 border-r-0'}`}></div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className={`text-xl font-bold font-display ${exp.isCurrent ? 'text-neon-blue' : 'text-white'}`}>{exp.title}</h3>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4 text-neon-green">
                    <Briefcase size={16} />
                    <span className="font-medium text-sm">{exp.company}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-neon-blue mt-1">▹</span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

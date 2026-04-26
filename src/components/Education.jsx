import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users } from 'lucide-react';

const Education = () => {
  const orgs = [
    { role: "Menteri Media & Informasi", org: "BEM Polman", year: "2025" },
    { role: "Staff Ahli Media & Informasi", org: "HIMTROMEK", year: "2025" },
    { role: "Koordinator Lomba", org: "ATI UKM", year: "2025" },
    { role: "Ketua Divisi Lomba UI/UX", org: "FUSE", year: "2025" },
    { role: "Wakil Ketua Desain, Digital, Dekorasi", org: "MPPP Polman", year: "2024" }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-neon-blue" size={32} />
              <h2 className="text-3xl font-display font-bold">Pendidikan</h2>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden group hover:border-neon-blue/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 rounded-full blur-2xl group-hover:bg-neon-blue/10 transition-colors"></div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Politeknik Manufaktur Bandung</h3>
              <p className="text-neon-green font-mono mb-4">D-IV Automation Engineering</p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800/50 border border-slate-700 text-sm text-slate-300 mb-6">
                🏆 Juara 2 Mahasiswa Berprestasi (Pilmapres) Institusi 2026
              </div>
              
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Kursus Relevan</h4>
              <div className="flex flex-wrap gap-2">
                {["IoT", "Machine Learning", "AI", "Big Data", "Cloud Computing", "PLC", "Sistem Kendali", "NoSQL", "Jaringan Komputer"].map((course, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-full">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Organization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Users className="text-neon-green" size={32} />
              <h2 className="text-3xl font-display font-bold">Organisasi</h2>
            </div>
            
            <div className="space-y-4">
              {orgs.map((org, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-neon-green/30 transition-colors">
                  <div>
                    <h4 className="font-bold text-white">{org.role}</h4>
                    <p className="text-sm text-slate-400">{org.org}</p>
                  </div>
                  <div className="text-neon-green font-mono text-sm px-2 py-1 bg-neon-green/10 rounded">
                    {org.year}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;

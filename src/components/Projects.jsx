import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', 'IoT', 'Web', 'AI/ML', 'Mobile', 'Bisnis'];

  const projects = [
    {
      title: "AIRA – Air Intelligent Realtime Assistant",
      tags: ["IoT", "ML", "React", "Flutter", "Firebase", "ESP32"],
      category: ["IoT", "AI/ML", "Web", "Mobile"],
      desc: "Sistem IoT pemantauan kualitas udara berbasis ML untuk deteksi dini risiko ISPA. Juara 1 Nasional IoT.",
      demo: "https://aira-site.web.app/"
    },
    {
      title: "AirVision – AI-Powered Air Quality Monitoring",
      tags: ["CNN", "TensorFlow", "Flask", "React.js", "Flutter"],
      category: ["AI/ML", "Web", "Mobile"],
      desc: "Klasifikasi kualitas udara via citra langit dengan CNN custom akurasi 97%. Full-stack platform."
    },
    {
      title: "Sibersih – Smart Waste Management",
      tags: ["React", "Vue.js", "Firebase", "Flutter", "ML", "ESP32"],
      category: ["IoT", "Web", "Mobile", "AI/ML"],
      desc: "Aplikasi pengelolaan sampah berbasis komunitas. Juara 1 Hackathon Nasional UTB 2025.",
      demo: "https://hackatonutb.web.app/"
    },
    {
      title: "Pasar Atsiri – Platform Ekosistem Minyak Atsiri",
      tags: ["React", "Tailwind", "Flutter", "Firebase", "Google Cloud"],
      category: ["Web", "Mobile"],
      desc: "E-government platform ekosistem minyak atsiri. Juara 3 UI/UX KMIPN VII Nasional.",
      demo: "https://pasar-atsiri-app.web.app/"
    },
    {
      title: "Fragrance CMMS",
      tags: ["Python/Flask", "MongoDB", "REST API"],
      category: ["Web"],
      desc: "CMMS berbasis web dengan dashboard MTTR, OEE, manajemen multi-role (Operator, Teknisi, Supervisor, Manager)."
    },
    {
      title: "Monitoring MikroTik",
      tags: ["Python/Flask", "MikroTik API", "MySQL", "React.js"],
      category: ["Web"],
      desc: "Sistem monitoring jaringan real-time via MikroTik RouterOS API."
    },
    {
      title: "LoRa-Based Production Monitoring System",
      tags: ["LoRa", "ESP32", "Firebase", "Web Dashboard"],
      category: ["IoT", "Web"],
      desc: "Sistem monitoring produksi dengan 4 node sensor & dashboard real-time."
    },
    {
      title: "VR Robotic Simulation for Production Line",
      tags: ["Unity3D", "C#", "Robot Delta IK", "Oculus SDK"],
      category: ["Mobile"],
      desc: "Simulasi VR pelatihan operasional & validasi alur produksi teh matcha."
    },
    {
      title: "Eglace – Business Plan & Digital Prototyping",
      tags: ["Figma", "WordPress", "Business Modeling"],
      category: ["Bisnis", "Web"],
      desc: "Startup parfum minyak atsiri dengan e-commerce & mobile app.",
      demo: "https://eglace-parfume.vercel.app/"
    },
    {
      title: "Robot Line Follower",
      tags: ["Arduino", "Sensor IR", "Bluetooth", "Android"],
      category: ["IoT", "Mobile"],
      desc: "Robot dengan mode otonom & manual via Bluetooth."
    }
  ];

  const filteredProjects = filter === 'Semua' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-neon-blue">/</span> Selected Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full"></div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-neon-blue text-slate-950 border-neon-blue font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]' 
                  : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-neon-blue/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-neon-blue/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-950 rounded-lg text-neon-blue">
                      <Code size={24} />
                    </div>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`View live demo of ${project.title}`} className="text-slate-400 hover:text-neon-green transition-colors p-2">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono text-neon-green bg-neon-green/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

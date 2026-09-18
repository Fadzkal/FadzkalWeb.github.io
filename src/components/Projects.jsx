import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', 'IoT', 'Web', 'AI/ML', 'Mobile', 'Bisnis'];

  const projects = [
    {
      title: "AIRA – Air Intelligent Realtime Assistant",
      tags: ["IoT", "ML", "React", "Flutter", "Firebase", "ESP32"],
      category: ["IoT", "AI/ML", "Web", "Mobile"],
      desc: "Sistem IoT pemantauan kualitas udara berbasis ML untuk deteksi dini risiko ISPA. Juara 1 Nasional IoT.",
      demo: "https://aira-site.web.app/",
      thumbnail: "/Website Portopolio/Perlombaan/award-4/Aira.jpg"
    },
    {
      title: "AirVision – AI-Powered Air Quality Monitoring",
      tags: ["CNN", "TensorFlow", "Flask", "React.js", "Flutter"],
      category: ["AI/ML", "Web", "Mobile"],
      desc: "Klasifikasi kualitas udara via citra langit dengan CNN custom akurasi 97%. Full-stack platform.",
      thumbnail: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sibersih – Smart Waste Management",
      tags: ["React", "Vue.js", "Firebase", "Flutter", "ML", "ESP32"],
      category: ["IoT", "Web", "Mobile", "AI/ML"],
      desc: "Aplikasi pengelolaan sampah berbasis komunitas. Juara 1 Hackathon Nasional UTB 2025.",
      demo: "https://hackatonutb.web.app/",
      thumbnail: "/Website Portopolio/Perlombaan/award-1/Sibersih Produk.jpg"
    },
    {
      title: "Pasar Atsiri – Platform Ekosistem Minyak Atsiri",
      tags: ["React", "Tailwind", "Flutter", "Firebase", "Google Cloud"],
      category: ["Web", "Mobile"],
      desc: "E-government platform ekosistem minyak atsiri. Juara 3 UI/UX KMIPN VII Nasional.",
      demo: "https://pasar-atsiri-app.web.app/",
      thumbnail: "/Website Portopolio/Perlombaan/award-9/Product Pasar Atsiri.jpg"
    },
    {
      title: "Fragrance CMMS",
      tags: ["Python/Flask", "MongoDB", "REST API"],
      category: ["Web"],
      desc: "CMMS berbasis web dengan dashboard MTTR, OEE, manajemen multi-role (Operator, Teknisi, Supervisor, Manager).",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Monitoring MikroTik",
      tags: ["Python/Flask", "MikroTik API", "MySQL", "React.js"],
      category: ["Web"],
      desc: "Sistem monitoring jaringan real-time via MikroTik RouterOS API.",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "LoRa-Based Production Monitoring System",
      tags: ["LoRa", "ESP32", "Firebase", "Web Dashboard"],
      category: ["IoT", "Web"],
      desc: "Sistem monitoring produksi dengan 4 node sensor & dashboard real-time.",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "VR Robotic Simulation for Production Line",
      tags: ["Unity3D", "C#", "Robot Delta IK", "Oculus SDK"],
      category: ["Mobile"],
      desc: "Simulasi VR pelatihan operasional & validasi alur produksi teh matcha.",
      thumbnail: "https://images.unsplash.com/photo-1622979135225-d33ef56b2803?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Eglace – Business Plan & Digital Prototyping",
      tags: ["Figma", "WordPress", "Business Modeling"],
      category: ["Bisnis", "Web"],
      desc: "Startup parfum minyak atsiri dengan e-commerce & mobile app.",
      demo: "https://eglace-parfume.vercel.app/",
      thumbnail: "/Website Portopolio/Perlombaan/award-7/Product_EGLACE.jpg"
    },
    {
      title: "Robot Line Follower",
      tags: ["Arduino", "Sensor IR", "Bluetooth", "Android"],
      category: ["IoT", "Mobile"],
      desc: "Robot dengan mode otonom & manual via Bluetooth.",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredProjects = filter === 'Semua' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  useEffect(() => {
    // GSAP Scroll Animation
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }}
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="projects-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-zinc-900 tracking-tight">
            <span className="text-zinc-400">/</span> Selected Works
          </h2>
          <div className="w-24 h-1 bg-zinc-200 mx-auto rounded-full"></div>
          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto font-light text-lg">
            Berikut adalah proyek-proyek inovatif yang berhasil saya kembangkan. Jelajahi karya terbaik saya di bidang IoT, Pengembangan Web, AI/ML, dan lainnya.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border shadow-sm ${
                filter === cat 
                  ? 'bg-zinc-900 text-white border-zinc-900 scale-105' 
                  : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-white hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {/* Aceternity 3D Card wrapper */}
                <CardContainer containerClassName="py-0 h-full w-full" className="h-full w-full">
                  <CardBody className="bg-zinc-50 border border-zinc-200/80 rounded-[2rem] overflow-hidden group hover:border-zinc-300 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative w-full">
                    
                    {/* Project Image */}
                    <CardItem translateZ="60" className="w-full h-56 md:h-64 rounded-t-[2rem] overflow-hidden bg-zinc-100">
                       <img 
                          src={project.thumbnail} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/800x600/f4f4f5/71717a?text=Foto+Proyek`;
                          }}
                       />
                       {/* Overlay with Icon for Demo */}
                       {project.demo && (
                          <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                             <div className="bg-white text-zinc-900 p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                                <ExternalLink size={24} />
                             </div>
                          </div>
                       )}
                    </CardItem>

                    {/* Project Info */}
                    <CardItem translateZ="20" className="p-8 flex flex-col flex-grow w-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2.5 bg-white border border-zinc-100 rounded-xl text-zinc-500 shadow-sm">
                          <Code size={20} />
                        </div>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`View live demo of ${project.title}`} className="text-zinc-500 hover:text-blue-600 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md border border-zinc-100 z-50 relative pointer-events-auto">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold font-display text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-zinc-500 text-sm md:text-base mb-8 flex-grow leading-relaxed">
                        {project.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-xs font-mono font-medium text-zinc-600 bg-white border border-zinc-200 px-3 py-1 rounded-full shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TracingBeam } from './ui/tracing-beam';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
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
      isCurrent: true,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fullstack Developer Intern",
      company: "PT Nawasena Nusantara Teknologi",
      period: "Apr 2025 – Jul 2025",
      description: [
        "Revitalisasi 2 website CMS, meningkatkan pendapatan klien",
        "End-to-end development: UI/UX, backend, deployment, maintenance",
        "Integrasi Google Analytics & optimasi SEO komprehensif"
      ],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "IT Support & Marketing Intern",
      company: "Yayasan Dari Hati Indonesia",
      period: "Mei 2024 – Jan 2025",
      description: [
        "Website inklusif untuk penyandang disabilitas Indonesia",
        "Pendataan disabilitas kawasan Bandung"
      ],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Social Media Officer Intern",
      company: "IDEAL",
      period: "Apr 2024 – Agu 2024",
      description: [
        "Mencapai 15.000+ audiens, engagement rate +35% dalam 2 bulan",
        "Mengelola paid ads yang melampaui target webinar 50% (200 peserta)"
      ],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }}
      );
      
      const items = gsap.utils.toArray('.exp-item');
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            delay: 0.2, 
            ease: 'power3.out', 
            scrollTrigger: { 
              trigger: item, 
              start: 'top 85%' 
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="exp-title text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-zinc-900 tracking-tight">
            <span className="text-zinc-400">/</span> Pengalaman Kerja
          </h2>
          <div className="w-24 h-1 bg-zinc-200 mx-auto rounded-full"></div>
        </div>

        <TracingBeam className="pl-4 md:pl-10">
          <div className="space-y-16 lg:space-y-24">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="exp-item bg-zinc-50 border border-zinc-200/80 rounded-[2rem] overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-500 group relative ml-8 md:ml-12"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Text Content */}
                  <div className="p-8 lg:p-10 lg:w-1/2 flex flex-col justify-center">
                    <div className="flex flex-col mb-6">
                      <div className="flex items-center gap-2 text-zinc-500 font-mono text-sm uppercase tracking-widest mb-3">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                        {exp.isCurrent && (
                          <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold animate-pulse">AKTIF</span>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-zinc-600 font-medium text-base">
                        <Briefcase size={18} className="text-zinc-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-zinc-200 mb-6 group-hover:bg-zinc-300 transition-colors"></div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-zinc-600 text-base flex items-start gap-3 leading-relaxed">
                          <span className="text-zinc-400 mt-1 select-none flex-shrink-0">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Media Placeholder (For Image/Video) */}
                  <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden bg-zinc-200">
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={exp.image} 
                      alt={exp.company} 
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};

export default Experience;

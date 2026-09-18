import React, { useEffect, useRef } from 'react';
import { Terminal, Trophy, Briefcase, FolderCheck, Globe, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  
  const stats = [
    { icon: <Trophy size={20} className="text-zinc-700" />, count: "10+", label: "Gelar Nasional" },
    { icon: <Briefcase size={20} className="text-zinc-700" />, count: "3", label: "Pengalaman" },
    { icon: <FolderCheck size={20} className="text-zinc-700" />, count: "10+", label: "Proyek" },
    { icon: <Globe size={20} className="text-zinc-700" />, count: "1", label: "Internasional" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bento-item', 
        { opacity: 0, y: 40, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out', 
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bento-item text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-zinc-900 tracking-tight">
            About Me.
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light">
            Merancang solusi masa depan dengan presisi.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px]">
          
          {/* Main Info Box - Large */}
          <div className="bento-item md:col-span-2 lg:col-span-2 row-span-2 bg-zinc-50 border border-zinc-200/60 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-200/30 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-zinc-100">
                <Terminal className="text-zinc-900" size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold text-zinc-900 mb-4 tracking-tight">System.info()</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Mahasiswa Teknologi Rekayasa Informatika Industri di <span className="font-semibold text-zinc-900">Politeknik Manufaktur Bandung</span>. Fokus pada konvergensi <span className="font-semibold text-zinc-900">IoT</span>, <span className="font-semibold text-zinc-900">Full-Stack Development</span>, dan <span className="font-semibold text-zinc-900">AI</span>.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-zinc-500 relative z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
              Open to new opportunities
            </div>
          </div>

          {/* Image Box - Tall */}
          <div className="bento-item md:col-span-1 lg:col-span-1 row-span-2 rounded-[2rem] overflow-hidden relative group shadow-sm">
            <img src="/images/20240209_143252.png" alt="Workspace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-6">
               <h4 className="text-white font-semibold text-lg">My Workspace</h4>
               <p className="text-white/80 text-sm">Where ideas happen</p>
            </div>
          </div>

          {/* Passion Box - Wide/Square */}
          <div className="bento-item md:col-span-3 lg:col-span-1 row-span-1 bg-zinc-900 rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden group hover:shadow-2xl hover:shadow-zinc-900/30 transition-all duration-500">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            <div className="z-10 relative">
               <h3 className="text-white font-display font-bold text-2xl mb-2">Impact Driven</h3>
               <p className="text-zinc-400 text-sm leading-relaxed">Merancang solusi inovatif yang memberikan dampak nyata di industri.</p>
            </div>
            <ArrowUpRight className="absolute top-6 right-6 text-zinc-600 group-hover:text-white transition-colors duration-300" size={28} />
          </div>

          {/* 4 Stat Boxes -> Grouped in a bento cell */}
          <div className="bento-item md:col-span-3 lg:col-span-1 row-span-1 grid grid-cols-2 gap-4">
             {stats.slice(0, 2).map((stat, idx) => (
                <div key={idx} className="bg-white border border-zinc-200/80 rounded-[1.5rem] p-4 flex flex-col items-center justify-center text-center hover:bg-zinc-50 transition-colors shadow-sm hover:shadow-md cursor-default">
                   <div className="mb-2 bg-zinc-50 p-2 rounded-full">{stat.icon}</div>
                   <h4 className="text-2xl font-bold text-zinc-900">{stat.count}</h4>
                   <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-1">{stat.label}</p>
                </div>
             ))}
          </div>
          
          <div className="bento-item md:col-span-3 lg:col-span-2 row-span-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
             {stats.slice(2, 4).map((stat, idx) => (
                <div key={idx} className="col-span-1 sm:col-span-2 bg-white border border-zinc-200/80 rounded-[1.5rem] p-4 flex flex-col items-center justify-center text-center hover:bg-zinc-50 transition-colors shadow-sm hover:shadow-md cursor-default">
                   <div className="mb-2 bg-zinc-50 p-2 rounded-full">{stat.icon}</div>
                   <h4 className="text-2xl font-bold text-zinc-900">{stat.count}</h4>
                   <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-1">{stat.label}</p>
                </div>
             ))}
             
             {/* Extra filler block to make layout look premium */}
             <div className="col-span-2 bg-zinc-50 border border-zinc-200/80 rounded-[1.5rem] p-6 flex flex-col justify-center overflow-hidden relative group shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-zinc-900 font-bold text-lg relative z-10">Continuous Learner</h4>
                <p className="text-zinc-500 text-sm mt-1 relative z-10">Selalu haus akan inovasi & teknologi terbaru.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

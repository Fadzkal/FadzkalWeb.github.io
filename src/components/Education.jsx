import React, { useEffect, useRef } from 'react';
import { GraduationCap, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const orgs = [
    { role: "Menteri Media & Informasi", org: "BEM Polman", year: "2025" },
    { role: "Staff Ahli Media & Informasi", org: "HIMTROMEK", year: "2025" },
    { role: "Koordinator Lomba", org: "ATI UKM", year: "2025" },
    { role: "Ketua Divisi Lomba UI/UX", org: "FUSE", year: "2025" },
    { role: "Wakil Ketua Desain, Digital, Dekorasi", org: "MPPP Polman", year: "2024" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.edu-col',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }}
      );
      gsap.fromTo('.org-col',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }}
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <div className="edu-col">
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-zinc-700" size={32} />
              <h2 className="text-3xl font-display font-bold text-zinc-900">Pendidikan</h2>
            </div>
            
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 relative overflow-hidden group hover:shadow-md transition-shadow">
              
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Politeknik Manufaktur Bandung</h3>
              <p className="text-zinc-500 font-mono mb-4">D-IV Automation Engineering</p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-zinc-200 text-sm text-zinc-700 mb-6 shadow-sm">
                🏆 Juara 2 Mahasiswa Berprestasi (Pilmapres) Institusi 2026
              </div>
              
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">Kursus Relevan</h4>
              <div className="flex flex-wrap gap-2">
                {["IoT", "Machine Learning", "AI", "Big Data", "Cloud Computing", "PLC", "Sistem Kendali", "NoSQL", "Jaringan Komputer"].map((course, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white border border-zinc-200 text-zinc-600 text-xs rounded-full shadow-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Organization */}
          <div className="org-col">
            <div className="flex items-center gap-4 mb-8">
              <Users className="text-zinc-700" size={32} />
              <h2 className="text-3xl font-display font-bold text-zinc-900">Organisasi</h2>
            </div>
            
            <div className="space-y-4">
              {orgs.map((org, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-zinc-50 border border-zinc-200 rounded-xl hover:shadow-md hover:bg-white transition-all">
                  <div>
                    <h4 className="font-bold text-zinc-900">{org.role}</h4>
                    <p className="text-sm text-zinc-500">{org.org}</p>
                  </div>
                  <div className="text-zinc-600 font-mono text-sm px-2 py-1 bg-white border border-zinc-200 rounded shadow-sm">
                    {org.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;

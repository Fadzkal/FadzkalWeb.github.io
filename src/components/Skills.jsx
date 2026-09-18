import React, { useEffect, useRef } from 'react';
import { Cpu, Code2, Database, Brain, PenTool, Megaphone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';

gsap.registerPlugin(ScrollTrigger);

const skillIconMap = {
  "ESP32": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "Arduino": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  "Dart": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "CodeIgniter": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "NoSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "Canva": "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
  "Adobe Premiere Pro": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg",
  "Google Analytics": "https://upload.wikimedia.org/wikipedia/commons/8/89/Google_Analytics_icon.svg"
};

const Skills = () => {
  const sectionRef = useRef(null);
  const categories = [
    {
      title: "IoT & Embedded Systems",
      icon: <Cpu className="text-zinc-700" size={24} />,
      skills: ["ESP32", "Arduino", "Sensor Integration", "MQTT Protocol"],
    },
    {
      title: "Full-Stack Development",
      icon: <Code2 className="text-zinc-700" size={24} />,
      skills: ["React", "Vue.js", "Tailwind CSS", "Flutter", "Dart", "Firebase", "Google Cloud"],
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-zinc-700" size={24} />,
      skills: ["PHP", "CodeIgniter", "SQL", "NoSQL", "REST API"],
    },
    {
      title: "AI/Machine Learning",
      icon: <Brain className="text-zinc-700" size={24} />,
      skills: ["Python", "TensorFlow", "Machine Learning", "AI", "Data Analysis", "CNN"],
    },
    {
      title: "Design & Tools",
      icon: <PenTool className="text-zinc-700" size={24} />,
      skills: ["Figma", "Canva", "Adobe Premiere Pro"],
    },
    {
      title: "Digital Marketing",
      icon: <Megaphone className="text-zinc-700" size={24} />,
      skills: ["Google Analytics", "SEO", "Social Media Marketing"],
    }
  ];

  useEffect(() => {
    // Vanilla Tilt
    const cards = document.querySelectorAll('.skill-card');
    if (cards.length > 0) {
      VanillaTilt.init(cards, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.05,
      });
    }

    // GSAP
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }}
      );
      gsap.fromTo('.skill-card-container',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }}
      );
    }, sectionRef);

    return () => {
      ctx.revert();
      cards.forEach(c => c.vanillaTilt?.destroy());
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="skills-title text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-zinc-900 tracking-tight">
            <span className="text-zinc-400">/</span> Tech Stack
          </h2>
          <div className="w-24 h-1 bg-zinc-200 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="skill-card-container">
              <div className="skill-card bg-white border border-zinc-200/80 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 h-full flex flex-col cursor-default">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-zinc-50 border border-zinc-100 rounded-xl shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-zinc-900">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3 flex-grow">
                  {category.skills.map((skill, sIdx) => {
                    const iconUrl = skillIconMap[skill];
                    return (
                      <div 
                        key={sIdx} 
                        className="flex items-center gap-2 px-4 py-2 bg-zinc-50 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 text-zinc-700 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        {iconUrl && (
                          <img 
                            src={iconUrl} 
                            alt={`${skill} logo`} 
                            className="w-5 h-5 object-contain"
                            onError={(e) => { e.target.style.display = 'none' }}
                          />
                        )}
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

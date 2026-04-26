import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Brain, PenTool, Megaphone } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "IoT & Embedded Systems",
      icon: <Cpu className="text-neon-blue" size={24} />,
      skills: ["ESP32", "Arduino", "Sensor Integration", "MQTT Protocol"],
      color: "from-neon-blue to-blue-600"
    },
    {
      title: "Full-Stack Development",
      icon: <Code2 className="text-neon-green" size={24} />,
      skills: ["React", "Vue.js", "Tailwind CSS", "Flutter", "Dart", "Firebase", "Google Cloud"],
      color: "from-neon-green to-emerald-600"
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-purple-400" size={24} />,
      skills: ["PHP", "CodeIgniter", "SQL", "NoSQL", "REST API"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "AI/Machine Learning",
      icon: <Brain className="text-pink-400" size={24} />,
      skills: ["Machine Learning", "AI", "Python", "Data Analysis", "TensorFlow", "CNN"],
      color: "from-pink-400 to-rose-600"
    },
    {
      title: "Design & Tools",
      icon: <PenTool className="text-orange-400" size={24} />,
      skills: ["Figma", "Canva", "Adobe Premiere Pro"],
      color: "from-orange-400 to-amber-600"
    },
    {
      title: "Digital Marketing",
      icon: <Megaphone className="text-yellow-400" size={24} />,
      skills: ["SEO", "Google Analytics", "Social Media Marketing"],
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-neon-green">/</span> Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 group box-glow-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 text-sm font-mono bg-slate-950 border border-slate-700 text-slate-300 rounded-full hover:border-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className={`h-1 w-full mt-6 rounded-full bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

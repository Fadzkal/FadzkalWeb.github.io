import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Trophy } from 'lucide-react';

const Hero = () => {
  const titles = ["IoT Engineer", "Full-Stack Developer", "AI/ML Enthusiast", "10x National Champion"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const title = titles[currentTitleIndex];
    
    const type = () => {
      if (isDeleting) {
        setCurrentText(title.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(title.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === title) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  // List of Instagram post paths
  const instagramPosts = [
    '/p/DWoU4fdFMAA',
    '/p/DPd1HEkEsnW',
    '/p/DMK6RSRzvCs',
    '/p/DMiCecP0e3t',
    '/p/C8lw-JmJsO-',
    '/p/DASQeaPyluK',
    '/p/DCObR9opSr3',
    '/reel/DPBhCsWkoxD',
    '/p/DLOsHqsRd-8',
    '/p/DMiEiY90-DH',
    '/p/DOzn8RPEq1w',
    '/p/DPczO2zlL4B',
    '/p/DP6iXrTk6s5',
    '/reel/DLUe-nbKFBm',
    '/p/DRTvUZBkp18',
    '/p/DRUksjskpCv',
    '/reel/DRbzoOaEkvV',
    '/p/DRbWMSvgXQm',
    '/reel/DRtxJ1LEQFE',
    '/p/DTu3-eVgY8a',
    '/reel/DUj53mYkhCd'
  ];

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="order-2 lg:order-1"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-neon-blue mb-6 shadow-xl"
            >
              <Trophy size={16} />
              <span className="text-sm font-medium tracking-wide">Juara 2 Mahasiswa Berprestasi (Pilmapres) 2026</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight"
            >
              Fadzkal Luthfi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                Mayzanio
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-8 sm:h-12 mb-6"
            >
              <h2 className="text-xl sm:text-3xl font-mono text-slate-300 font-light">
                <span className="text-neon-green">&gt;</span> {currentText}<span className="animate-pulse">_</span>
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light"
            >
              Merancang solusi teknologi end-to-end — dari sensor ke cloud, dari ide ke produk. Spesialis dalam menciptakan pengalaman digital yang mulus dan interaktif.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="flex flex-wrap gap-4 items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow duration-300">
                  Lihat Proyek <ArrowRight size={20} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <a href="/CV_Fadzkal Luthfi Mayzanio (4).pdf" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md text-white font-medium rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <Download size={20} /> Unduh CV
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-green rounded-[3rem] blur-3xl opacity-20 animate-pulse"></div>
              
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-2 bg-slate-900/50 backdrop-blur-2xl rounded-[3rem] z-10 border border-white/10 overflow-hidden shadow-2xl p-2"
              >
                <img src="/images/fotoFadzkal.jpg" alt="Fadzkal Luthfi Mayzanio" className="w-full h-full object-cover rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700 ease-out" onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Fadzkal+Luthfi&size=512&background=0a0f18&color=00f0ff' }} />
              </motion.div>
              
              {/* Decorative orbit rings */}
              <div className="absolute inset-[-20px] rounded-[3.5rem] border border-white/5 border-dashed animate-[spin_20s_linear_infinite] z-0"></div>
              <div className="absolute inset-[-40px] rounded-[4rem] border border-neon-blue/10 animate-[spin_30s_linear_infinite_reverse] z-0"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              <span className="text-neon-blue">/</span> Latest Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-400 max-w-2xl mx-auto font-light">
              Momen-momen dan dokumentasi terbaik langsung dari linimasa sosial media saya.
            </p>
          </motion.div>

          {/* Grid setup for 20+ posts: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 items-center justify-center">
            {instagramPosts.map((postPath, idx) => (
              <motion.div
                key={postPath}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: (idx % 3) * 0.1 }}
                className="flex justify-center"
              >
                <div className="w-full max-w-[400px] h-[520px] rounded-[2rem] overflow-hidden bg-white shadow-2xl border border-white/10 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-shadow duration-500 flex flex-col">
                  <iframe 
                    src={`https://www.instagram.com${postPath}/embed`} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    allowtransparency="true"
                    className="bg-white flex-grow"
                    title={`Instagram Post ${idx + 1}`}
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

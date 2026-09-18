import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Trophy } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MacbookScroll } from './ui/macbook-scroll';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import { HeroParallax } from './ui/hero-parallax';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titles = ["IoT Engineer", "Full-Stack Developer", "AI/ML Enthusiast", "10x National Champion"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const heroRef = useRef(null);
  const highlightsRef = useRef(null);
  const macbookRef = useRef(null);

  useEffect(() => {
    // Typewriter effect
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

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero elements entrance
      gsap.fromTo('.gsap-hero-item', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );

      // Hero image entrance
      gsap.fromTo('.gsap-hero-image',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.4 }
      );

      // Highlights ScrollTrigger
      gsap.fromTo('.gsap-highlight-title',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.gsap-highlight-card',
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: 'top 70%',
          }
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const instagramPosts = [
    '/p/DWoU4fdFMAA', '/p/DPd1HEkEsnW', '/p/DMK6RSRzvCs', '/p/DMiCecP0e3t',
    '/p/C8lw-JmJsO-', '/p/DASQeaPyluK', '/p/DCObR9opSr3', '/reel/DPBhCsWkoxD',
    '/p/DLOsHqsRd-8', '/p/DMiEiY90-DH', '/p/DOzn8RPEq1w', '/p/DPczO2zlL4B',
    '/p/DP6iXrTk6s5', '/reel/DLUe-nbKFBm', '/p/DRTvUZBkp18', '/p/DRUksjskpCv',
    '/reel/DRbzoOaEkvV', '/p/DRbWMSvgXQm', '/reel/DRtxJ1LEQFE', '/p/DTu3-eVgY8a',
    '/reel/DUj53mYkhCd'
  ];

  const stickyContent = [
    {
      title: "IoT Engineering",
      description: "Membangun sistem perangkat keras dari nol menggunakan ESP32, Arduino, dan berbagai sensor industri. Menghubungkan dunia fisik dengan cloud melalui protokol MQTT, LoRa, dan Firebase untuk pemantauan real-time yang akurat.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" className="h-full w-full object-cover" alt="IoT" />
        </div>
      ),
    },
    {
      title: "Full-Stack Development",
      description: "Mengembangkan aplikasi web dan mobile dengan performa tinggi menggunakan React, Vue, Tailwind CSS, dan Flutter di sisi frontend, serta Node.js, Python Flask, MySQL, dan Google Cloud di sisi backend.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" className="h-full w-full object-cover" alt="Web Dev" />
        </div>
      ),
    },
    {
      title: "AI & Machine Learning",
      description: "Mengimplementasikan model kecerdasan buatan seperti Convolutional Neural Networks (CNN) dengan TensorFlow untuk klasifikasi citra, serta integrasi Generative AI untuk mengotomatisasi solusi cerdas.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600" className="h-full w-full object-cover" alt="AI" />
        </div>
      ),
    },
  ];

  const parallaxProducts = [
    { title: "AIRA - IoT", link: "#", thumbnail: "/Website Portopolio/Perlombaan/award-4/Aira.jpg" },
    { title: "Sibersih - Waste Mgmt", link: "#", thumbnail: "/Website Portopolio/Perlombaan/award-1/Sibersih Produk.jpg" },
    { title: "Pasar Atsiri - Web", link: "#", thumbnail: "/Website Portopolio/Perlombaan/award-9/Product Pasar Atsiri.jpg" },
    { title: "Eglace - E-commerce", link: "#", thumbnail: "/Website Portopolio/Perlombaan/award-7/Product_EGLACE.jpg" },
    { title: "Smartwatch UI", link: "#", thumbnail: "/Website Portopolio/Perlombaan/award-10/Product_IMBAYU.jpg" },
    { title: "Dashboard Dashboard", link: "#", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
    { title: "Mobile Application", link: "#", thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" },
    { title: "Hardware Sensors", link: "#", thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { title: "AI Vision System", link: "#", thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800" },
    { title: "Data Analytics", link: "#", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { title: "Cloud Architecture", link: "#", thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
    { title: "Robotics Design", link: "#", thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" },
    { title: "UI/UX Ecosystem", link: "#", thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" },
    { title: "Machine Learning API", link: "#", thumbnail: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=800" },
    { title: "Embedded C++", link: "#", thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abf0928e?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <>
      {/* 1. Hero Intro with Cinematic Background Video */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-1736-large.mp4" type="video/mp4" />
          </video>
          {/* Fallback Grid Background if video fails/loads slowly */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 lg:order-1">
            <div className="gsap-hero-item inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-900 mb-6 shadow-sm backdrop-blur-sm bg-white/50">
              <Trophy size={16} className="text-yellow-500" />
              <span className="text-sm font-medium tracking-wide">Juara 2 Mahasiswa Berprestasi (Pilmapres) 2026</span>
            </div>
            
            <h1 className="gsap-hero-item text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-zinc-900 mb-4 leading-tight tracking-tight">
              Fadzkal Luthfi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-900">
                Mayzanio
              </span>
            </h1>
            
            <div className="gsap-hero-item h-8 sm:h-12 mb-6">
              <h2 className="text-xl sm:text-3xl font-mono text-zinc-600 font-light">
                <span className="text-zinc-300">&gt;</span> {currentText}<span className="animate-pulse">_</span>
              </h2>
            </div>
            
            <p className="gsap-hero-item text-lg sm:text-xl text-zinc-500 mb-10 max-w-2xl leading-relaxed font-light">
              Merancang solusi teknologi end-to-end — dari sensor ke cloud, dari ide ke produk. Spesialis dalam menciptakan pengalaman digital yang mulus dan interaktif.
            </p>
            
            <div className="gsap-hero-item flex flex-wrap gap-4 items-center">
              <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-zinc-800 transition-all duration-300">
                Lihat Proyek <ArrowRight size={20} />
              </Link>

              <a href="/CV_Fadzkal Luthfi Mayzanio (4).pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border border-zinc-200 text-zinc-900 font-medium rounded-2xl hover:bg-zinc-50 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <Download size={20} /> Unduh CV
              </a>
            </div>
          </div>
          
          <div className="gsap-hero-image order-1 lg:order-2 flex justify-center lg:justify-end">
            <CardContainer className="inter-var">
              <CardBody className="relative w-72 h-72 sm:w-96 sm:h-96 bg-zinc-50/50 backdrop-blur-2xl rounded-[3rem] border border-zinc-200/80 overflow-hidden shadow-2xl p-2 cursor-pointer group">
                <CardItem translateZ="50" className="w-full h-full">
                  <img 
                    src="/images/fotoFadzkal.jpg" 
                    alt="Fadzkal Luthfi Mayzanio" 
                    className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" 
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Fadzkal+Luthfi&size=512&background=0a0f18&color=00f0ff' }} 
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* 2. Macbook Scroll Section */}
      <section ref={macbookRef} className="relative z-10 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
        <MacbookScroll
          title={
            <span className="text-zinc-900 font-display">
              Building digital ecosystems that just <br /> work. <span className="text-zinc-400 font-serif italic">Beautifully.</span>
            </span>
          }
          src="/Website Portopolio/Perlombaan/award-1/Sibersih Produk.jpg"
          showGradient={true}
        />
      </section>

      {/* 3. Sticky Scroll Reveal (Expertise) */}
      <section className="relative z-10 bg-white py-20 px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-zinc-900">
             Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Expertise</span>
          </h2>
          <p className="text-zinc-500 font-light text-lg">Mendalami tiga pilar utama teknologi untuk menciptakan solusi lintas disiplin ilmu.</p>
        </div>
        <StickyScroll content={stickyContent} />
      </section>

      {/* 4. Hero Parallax (Massive Project Grid) */}
      <section className="relative z-10 bg-white">
         <HeroParallax products={parallaxProducts} />
      </section>

      {/* 5. Latest Highlights (Instagram) */}
      <section ref={highlightsRef} className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="gsap-highlight-title text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-zinc-900">
              <span className="text-zinc-400">/</span> Latest Highlights
            </h2>
            <div className="w-24 h-1 bg-zinc-200 mx-auto rounded-full"></div>
            <p className="mt-6 text-zinc-500 max-w-2xl mx-auto font-light text-lg">
              Momen-momen dan dokumentasi terbaik langsung dari linimasa sosial media saya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 items-center justify-center">
            {instagramPosts.map((postPath, idx) => (
              <div
                key={postPath}
                className="gsap-highlight-card flex justify-center"
              >
                <CardContainer className="inter-var w-full max-w-[400px]">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-zinc-300/50 border-zinc-200 w-full h-[540px] rounded-[2.5rem] p-4 border transition-shadow duration-500">
                    <CardItem translateZ="40" className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-50">
                      <iframe 
                        src={`https://www.instagram.com${postPath}/embed`} 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        allowtransparency="true"
                        className="bg-zinc-50 w-full h-full"
                        title={`Instagram Post ${idx + 1}`}
                        loading="lazy"
                      ></iframe>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

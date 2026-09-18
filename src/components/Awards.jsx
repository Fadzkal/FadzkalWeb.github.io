import React, { useEffect, useRef } from 'react';
import { Award, Calendar, MapPin, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  const sectionRef = useRef(null);
  
  const awardsData = [
    {
      id: 1,
      title: "1st Place – AI Reels Challenge National Level",
      event: "Digipad (AI Platform)",
      date: "Desember 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-2/Digipad Anouncement.jpg",
        "/Website Portopolio/Perlombaan/award-2/DIGIPAD Foto.jpg",
        "/Website Portopolio/Perlombaan/award-2/DIGIPAD JUARA 1.jpg"
      ],
      description: "Awarded Overall Champion (The Most Innovative Idea) in recognition of the originality of the concept and the high-quality delivery of a compelling message about self-upgrading in the AI era.",
      type: "GOLD"
    },
    {
      id: 2,
      title: "1st Place – Hackathon Build App National",
      event: "HIMTEC × IT HOLIC",
      date: "November 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-1/Foto_hackathon.jpg",
        "/Website Portopolio/Perlombaan/award-1/Juara 1 Hackathon.jpg",
        "/Website Portopolio/Perlombaan/award-1/Sibersih Produk.jpg"
      ],
      description: "Membangun 'Sibersih' – Aplikasi pengelolaan sampah berbasis komunitas menggunakan React, Tailwind CSS, Vue.js, JavaScript, Firebase, dan Cloudinary, dengan aplikasi mobile dibangun menggunakan Flutter dan Dart.",
      type: "GOLD"
    },
    {
      id: 4,
      title: "Most Creative – Business Plan Competition",
      event: "Entrepreneur Festival",
      date: "November 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-10/Juara Kreatif BP MALANG - FADZKAL LUTHFI MAYZANIO.jpg",
        "/Website Portopolio/Perlombaan/award-10/Product_IMBAYU.jpg",
      ],
      description: "Dianugerahi sebagai Tim Paling Kreatif atas ide bisnis inovatif berupa smartwatch terintegrasi dengan mobile app untuk memantau kondisi kesehatan dan aktivitas harian orang tua lanjut usia.",
      type: "SPECIAL"
    },
    {
      id: 3,
      title: "3rd Place – UI/UX Design (E-Government)",
      event: "KMIPN VII",
      date: "November 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-9/Juara 3 KMIPN 2025.jpg",
        "/Website Portopolio/Perlombaan/award-9/Product Pasar Atsiri.jpg"
      ],
      description: "Mendesain 'Pasar Atsiri' – Ekosistem platform digital untuk industri minyak atsiri. Dikembangkan dengan React & Tailwind, Vue.js, dan Flutter.",
      type: "BRONZE"
    },
    {
      id: 5,
      title: "1st Place – Internet of Things (IoT)",
      event: "IT & Computer Cup",
      date: "Oktober 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-4/Aira.jpg",
        "/Website Portopolio/Perlombaan/award-4/Juara 1 IOT.jpg"
      ],
      description: "Mengembangkan AIRA (Air Intelligent Realtime Assistant), sistem pemantauan kualitas udara IoT berbasis Machine Learning untuk deteksi dini risiko ISPA.",
      type: "GOLD"
    },
    {
      id: 6,
      title: "1st Place – Videography (Master Category)",
      event: "IPEC – BAKORMA",
      date: "September 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-5/Fadzkal Luthfi Mayzanio-Videography Challenge JUARA 1 MASTER.jpg",
        "/Website Portopolio/Perlombaan/award-5/IPEC2025.jpg"
      ],
      description: "Meraih Juara 1 (Medali Emas) pada Kategori Master di IPEC 2 bertema “Rising and Shining in the Globalized World”.",
      type: "GOLD"
    },
    {
      id: 7,
      title: "1st Place – AI Public Service Advertisement",
      event: "LIBANEV",
      date: "Juni 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-3/Sertifikat Fadzkal Luthfi Mayzanio - Juara 1 Libanev 2025.jpg"
      ],
      description: "Memproduksi Iklan Layanan Masyarakat berbasis AI dengan memanfaatkan teknologi Generative AI.",
      type: "GOLD"
    },
    {
      id: 8,
      title: "3rd Place – Proficient Videography",
      event: "IPEC 2024",
      date: "November 2024",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-8/Juara 3 Lomba Videography IPEC Tingkat Nasional..jpg"
      ],
      description: "Meraih Juara Ketiga Kategori Videografi Mahir pada IPEC 2024 yang melibatkan 28 politeknik se-Indonesia.",
      type: "BRONZE"
    },
    {
      id: 9,
      title: "3rd Place – National Videography",
      event: "SINAR",
      date: "September 2024",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-6/Juara 3 Lomba Videography STIE Kasih Bangsa Tingkat Nasional..jpg"
      ],
      description: "Meraih Juara 3 Nasional dengan memproduksi video kreatif dan komunikatif penyampaian cerita visual yang kuat.",
      type: "BRONZE"
    },
    {
      id: 10,
      title: "3rd Place – Business Plan",
      event: "GENBI Gebyar",
      date: "Mei 2024",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-7/Product_EGLACE.jpg"
      ],
      description: "Mengembangkan proposal rencana bisnis komprehensif berfokus pada digitalisasi produk parfum minyak atsiri (Eglace).",
      type: "BRONZE"
    }
  ];

  const getTrophyColor = (type) => {
    switch (type) {
      case 'GOLD': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'SILVER': return 'text-zinc-600 bg-zinc-100 border-zinc-200';
      case 'BRONZE': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'SPECIAL': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.awards-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }}
      );
      
      const items = gsap.utils.toArray('.award-card');
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
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
    <section ref={sectionRef} className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto pt-24 pb-20 bg-white relative z-10">
      <div className="awards-title text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-zinc-900 tracking-tight">
          <span className="text-zinc-400">/</span> Awards & Achievements
        </h1>
        <div className="w-24 h-1 bg-zinc-200 mx-auto rounded-full mb-6"></div>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-light">
          Rekam jejak kompetisi dan penghargaan yang telah saya raih di berbagai bidang teknologi, desain, dan bisnis.
        </p>
      </div>

      {/* Masonry / Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
        {awardsData.map((award, idx) => {
          // Gold awards get a massive 2-column span and premium background
          const isGold = award.type === 'GOLD';
          const cardSpan = isGold ? "lg:col-span-2 xl:col-span-2" : "col-span-1";
          const cardBg = isGold ? "bg-gradient-to-br from-yellow-50/50 via-white to-white border-yellow-100 shadow-yellow-100/50" : "bg-white border-zinc-200/80 shadow-zinc-200/50";

          return (
            <div
              key={award.id}
              className={`award-card flex flex-col ${cardBg} border rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 p-8 lg:p-10 ${cardSpan} relative`}
            >
              {/* Optional: Magic UI / Aceternity style glowing border for Gold */}
              {isGold && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-200 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
              )}

              {/* Content Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 relative z-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {award.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-sm">
                      <MapPin size={14} className="text-zinc-400" />
                      {award.event}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-sm">
                      <Calendar size={14} className="text-zinc-400" />
                      {award.date}
                    </div>
                  </div>

                  <p className="text-zinc-500 leading-relaxed text-base md:text-lg max-w-4xl">
                    {award.description}
                  </p>
                </div>

                {/* Badge */}
                <div className={`px-4 py-2 rounded-full border flex items-center gap-2 shrink-0 ${getTrophyColor(award.type)} shadow-sm`}>
                  {award.type === 'SPECIAL' ? <Star size={18} /> : <Award size={18} />}
                  <span className="text-sm font-bold tracking-wider">{award.type}</span>
                </div>
              </div>

              {/* Aceternity 3D Images Grid */}
              <div className={`grid gap-6 mt-auto relative z-10 ${award.images.length === 1 ? 'grid-cols-1' : award.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                {award.images.map((img, imgIdx) => (
                  <CardContainer key={imgIdx} containerClassName="py-0 flex items-center justify-center w-full" className="w-full">
                    <CardBody className="bg-white relative group/card border-zinc-200 w-full h-full rounded-2xl p-2 border shadow-sm transition-shadow duration-500">
                      <CardItem translateZ="40" className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-zinc-50">
                        <img 
                          src={img.split('/').map(s => encodeURIComponent(s)).join('/')} 
                          alt={`${award.title} - Foto ${imgIdx + 1}`} 
                          className="w-full h-auto max-h-[300px] object-contain rounded-xl hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/800x600/f4f4f5/71717a?text=Foto+Tidak+Tersedia`;
                          }}
                        />
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Awards;

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, Star, ChevronRight } from 'lucide-react';

const Awards = () => {
  const awardsData = [
    {
      id: 1,
      title: "1st Place – AI Reels Challenge National Level",
      event: "Digipad (AI Education & Research Platform)",
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
      title: "1st Place – Hackathon Build App National Level",
      event: "HIMTEC × IT HOLIC, Universitas Teknologi Bandung",
      date: "November 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-1/Foto_hackathon.jpg",
        "/Website Portopolio/Perlombaan/award-1/Juara 1 Hackathon.jpg",
        "/Website Portopolio/Perlombaan/award-1/Sibersih Produk.jpg"
      ],
      description: "Membangun 'Sibersih' – Aplikasi pengelolaan sampah berbasis komunitas menggunakan React, Tailwind CSS, Vue.js, JavaScript, Firebase, dan Cloudinary, dengan aplikasi mobile dibangun menggunakan Flutter dan Dart. Didukung alat pengembangan seperti GitHub, VS Code, Android Studio, dan Canva.",
      type: "GOLD"
    },
    {
      id: 5,
      title: "1st Place – Internet of Things (IoT) National Level",
      event: "IT & Computer Cup, Politeknik Negeri Jakarta",
      date: "Oktober 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-4/Aira.jpg",
        "/Website Portopolio/Perlombaan/award-4/Itechnocup 2025.jpg",
        "/Website Portopolio/Perlombaan/award-4/Juara 1 IOT.jpg"
      ],
      description: "Mengembangkan AIRA (Air Intelligent Realtime Assistant), sistem pemantauan kualitas udara IoT berbasis Machine Learning untuk deteksi dini risiko ISPA. Menggunakan ESP32, multi-sensor, integrasi Firebase & Google Cloud, dashboard web (React + Tailwind), dan mobile app (Flutter).",
      type: "GOLD"
    },
    {
      id: 6,
      title: "1st Place – Videography (Master Category, Gold Medalist)",
      event: "IPEC – BAKORMA, Politeknik Negeri Manado",
      date: "September 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-5/Fadzkal Luthfi Mayzanio-Videography Challenge JUARA 1 MASTER.jpg",
        "/Website Portopolio/Perlombaan/award-5/IPEC2025.jpg"
      ],
      description: "Meraih Juara 1 (Medali Emas) pada Kategori Master di IPEC 2 bertema “Rising and Shining in the Globalized World”. Memproduksi video promosi jurusan dalam batas waktu 8 jam, mengelola proses kreatif penuh termasuk pengembangan konsep, produksi video, pengeditan, dan desain grafis menggunakan CapCut dan Canva.",
      type: "GOLD"
    },
    {
      id: 7,
      title: "1st Place – AI-Based Public Service Advertisement",
      event: "LIBANEV, Universitas Pelita Harapan",
      date: "Juni 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-3/LIBANEV 2025 UPH.jpg",
        "/Website Portopolio/Perlombaan/award-3/Sertifikat Fadzkal Luthfi Mayzanio - Juara 1 Libanev 2025.jpg"
      ],
      description: "Memproduksi Iklan Layanan Masyarakat berbasis AI dengan memanfaatkan teknologi Generative AI, termasuk Google AI Studio untuk aset visual, serta GPT, Veo, dan Imagen untuk membuat naskah, visual, dan animasi pendukung.",
      type: "GOLD"
    },
    {
      id: 4,
      title: "Most Creative Award – Business Plan Competition",
      event: "Entrepreneur Festival, Politeknik Negeri Malang",
      date: "November 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-10/Juara Kreatif BP MALANG - FADZKAL LUTHFI MAYZANIO.jpg",
        "/Website Portopolio/Perlombaan/award-10/Product_IMBAYU.jpg",
        "/Website Portopolio/Perlombaan/award-10/TIM BP MALANG.jpeg"
      ],
      description: "Dianugerahi sebagai Tim Paling Kreatif atas ide bisnis inovatif berupa smartwatch terintegrasi dengan mobile app untuk memantau kondisi kesehatan dan aktivitas harian orang tua lanjut usia. Konsep ini dinilai praktis, berorientasi solusi, dan sangat layak untuk diimplementasikan.",
      type: "SPECIAL"
    },
    {
      id: 3,
      title: "3rd Place – UI/UX Design (E-Government) National Level",
      event: "KMIPN VII, Politeknik Negeri Padang",
      date: "November 2025",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-9/Juara 3 KMIPN 2025.jpg",
        "/Website Portopolio/Perlombaan/award-9/KMIPN 2025.jpg",
        "/Website Portopolio/Perlombaan/award-9/Product Pasar Atsiri.jpg"
      ],
      description: "Mendesain 'Pasar Atsiri' – Ekosistem platform digital untuk industri minyak atsiri. Dikembangkan dengan React & Tailwind untuk web, Vue.js untuk komponen frontend, dan Flutter untuk aplikasi seluler, terintegrasi Firebase & Google Cloud.",
      type: "BRONZE"
    },
    {
      id: 8,
      title: "3rd Place – Proficient Videography Category",
      event: "IPEC 2024, Politeknik Negeri Medan",
      date: "November 2024",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-8/IPEC2024.jpg",
        "/Website Portopolio/Perlombaan/award-8/Juara 3 Lomba Videography IPEC Tingkat Nasional..jpg"
      ],
      description: "Meraih Juara Ketiga Kategori Videografi Mahir pada IPEC 2024, kompetisi tingkat nasional yang melibatkan 28 politeknik se-Indonesia di Politeknik Negeri Medan.",
      type: "BRONZE"
    },
    {
      id: 9,
      title: "3rd Place Award – National Videography Competition",
      event: "SINAR, STIE Kasih Bangsa",
      date: "September 2024",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-6/Foto_Sinar.jpg",
        "/Website Portopolio/Perlombaan/award-6/Juara 3 Lomba Videography STIE Kasih Bangsa Tingkat Nasional..jpg"
      ],
      description: "Meraih Juara 3 Nasional dengan memproduksi video kreatif dan komunikatif yang mendemonstrasikan penyampaian cerita visual yang kuat, kemampuan pengeditan, dan eksekusi teknis yang mumpuni.",
      type: "BRONZE"
    },
    {
      id: 10,
      title: "3rd Place – Business Plan Competition",
      event: "GENBI Gebyar Competition 2024, UIN Sunan Gunung Djati",
      date: "Mei 2024",
      location: "Nasional",
      images: [
        "/Website Portopolio/Perlombaan/award-7/Dokumentasi_GENBI.jpg",
        "/Website Portopolio/Perlombaan/award-7/Juara 3 Lomba BisnisPlan Genbi-UinBDG Tingkat Nasional.jpg",
        "/Website Portopolio/Perlombaan/award-7/Product_EGLACE.jpg"
      ],
      description: "Mengembangkan proposal rencana bisnis komprehensif (analisis pasar, model bisnis, strategi pertumbuhan). Proyek berfokus pada digitalisasi produk parfum minyak atsiri (Eglace) melalui platform berbasis web, didukung dengan desain prototipe Figma.",
      type: "BRONZE"
    }
  ];

  const getTrophyColor = (type) => {
    switch (type) {
      case 'GOLD': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'SILVER': return 'text-slate-300 bg-slate-300/10 border-slate-300/30';
      case 'BRONZE': return 'text-amber-700 bg-amber-700/10 border-amber-700/30';
      case 'SPECIAL': return 'text-neon-blue bg-neon-blue/10 border-neon-blue/30';
      default: return 'text-neon-green bg-neon-green/10 border-neon-green/30';
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 mt-8">
          <span className="text-neon-blue">/</span> Awards & Achievements
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full mb-6"></div>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Rekam jejak kompetisi dan penghargaan yang telah saya raih selama masa perkuliahan di berbagai bidang teknologi, desain, dan bisnis.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 pb-20">
        {awardsData.map((award, idx) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-neon-blue/50 transition-colors p-8 lg:p-10"
          >
            {/* Content Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-green transition-all">
                  {award.title}
                </h2>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-slate-300 font-mono text-sm bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    <MapPin size={16} className="text-neon-blue" />
                    {award.event}
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 font-mono text-sm bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar size={16} className="text-neon-green" />
                    {award.date}
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed text-lg max-w-4xl">
                  {award.description}
                </p>
              </div>

              {/* Badge */}
              <div className={`px-4 py-2 rounded-full border flex items-center gap-2 shrink-0 ${getTrophyColor(award.type)}`}>
                {award.type === 'SPECIAL' ? <Star size={18} /> : <Award size={18} />}
                <span className="text-sm font-bold tracking-wider">{award.type}</span>
              </div>
            </div>

            {/* Images Grid */}
            <div className={`grid gap-6 ${award.images.length === 1 ? 'grid-cols-1 md:grid-cols-2' : award.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
              {award.images.map((img, imgIdx) => (
                <div key={imgIdx} className="bg-slate-950/50 rounded-xl border border-slate-800/60 p-2 flex items-center justify-center overflow-hidden hover:border-neon-blue/30 transition-colors">
                  <img 
                    src={img.split('/').map(s => encodeURIComponent(s)).join('/')} 
                    alt={`${award.title} - Foto ${imgIdx + 1}`} 
                    className="w-full h-auto max-h-[400px] object-contain rounded-lg hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/800x600/0a0f18/00f0ff?text=Foto+Tidak+Tersedia`;
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;

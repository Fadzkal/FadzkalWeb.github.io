import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Projects from './components/Projects';
import LiveWebsites from './components/LiveWebsites';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Component to handle dynamic SEO based on current route
const RouteSEO = () => {
  const location = useLocation();
  const path = location.pathname;

  let title = "Fadzkal Luthfi Mayzanio | Front-End Developer";
  let description = "Portfolio of Fadzkal Luthfi Mayzanio, a Front-End Developer and UI/UX Designer from Indonesia.";
  let keywords = "Fadzkal Luthfi Mayzanio, Frontend Developer, React, UI/UX, Portfolio";

  if (path === '/about') {
    title = "About Fadzkal | Front-End Developer & UI/UX Designer";
    description = "Learn more about Fadzkal Luthfi Mayzanio, my technical skills in React, Next.js, Vue, and my educational background.";
    keywords = "Fadzkal Skills, React Developer, Tailwind CSS, Frontend Engineer Indonesia";
  } else if (path === '/experience') {
    title = "Professional Experience | Fadzkal Luthfi Mayzanio";
    description = "Explore the professional journey and work experience of Fadzkal Luthfi Mayzanio in web development and software engineering.";
    keywords = "Work Experience, Software Engineer, Web Developer Experience";
  } else if (path === '/awards') {
    title = "Awards & Achievements | Fadzkal Luthfi Mayzanio";
    description = "Discover the national awards and achievements won by Fadzkal Luthfi Mayzanio in Hackathons, Business Plans, and IT Competitions.";
    keywords = "Hackathon Winner, IT Competition, Awards, Achievements, IoT, Web Design";
  } else if (path === '/projects') {
    title = "Projects & Portfolios | Fadzkal Luthfi Mayzanio";
    description = "View the latest web development projects, applications, and live websites built by Fadzkal Luthfi Mayzanio using React and Tailwind CSS.";
    keywords = "Web Projects, React Applications, Frontend Portfolio, Sibersih, AIRA";
  } else if (path === '/contact') {
    title = "Contact Fadzkal | Hire Front-End Developer";
    description = "Get in touch with Fadzkal Luthfi Mayzanio for collaborations, hiring opportunities, or freelance front-end development projects.";
    keywords = "Contact Developer, Hire Frontend Developer, Freelance Web Developer";
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {/* Dynamic canonical URL based on window location */}
      <link rel="canonical" href={`https://fadzkalweb.github.io${path}`} />
    </Helmet>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green animate-pulse">
            Fadzkal Luthfi
          </h1>
          <p className="mt-4 text-slate-400 font-mono text-sm uppercase tracking-widest animate-fade-in">Initializing portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="bg-slate-950 min-h-screen font-sans selection:bg-neon-blue/30 overflow-x-hidden relative">
        {/* Background Grid */}
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Glowing Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] z-0 animate-blob"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-96 h-96 bg-neon-green/10 rounded-full blur-[100px] z-0 animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <RouteSEO />
          <main className="flex-grow pt-24 pb-12">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={
                <>
                  <About />
                  <Skills />
                  <Education />
                </>
              } />
              <Route path="/experience" element={<Experience />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/projects" element={
                <>
                  <Projects />
                  <LiveWebsites />
                </>
              } />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

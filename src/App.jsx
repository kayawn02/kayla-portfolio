import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Preloader from './components/Preloader';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import PortfolioShowcase from './components/PortfolioShowcase';
import Experience from './components/Experience';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenProject = (project) => {
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  return (
    <>
      {/* 1. Clean Loading Screen on initial visit */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-[#070507] text-[#f1f5f9] font-sans antialiased selection:bg-red-700/30 selection:text-white overflow-x-hidden ambient-glow">
        
        {/* Top Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-700 via-red-500 to-rose-400 z-[60] origin-left shadow-[0_0_8px_rgba(220,38,38,0.7)]"
          style={{ scaleX }}
        />

        {/* Modern Cosmic Red Galaxy Background with Star Particles & Meteors */}
        <GalaxyBackground />

        {/* Fixed Navigation */}
        <Navbar onNavigate={handleCloseProject} />

        {/* Main Content Sections or Dedicated Full-Page Project View */}
        <AnimatePresence mode="wait">
          {activeProject ? (
            <ProjectPage
              key={activeProject.id}
              project={activeProject}
              onBack={handleCloseProject}
            />
          ) : (
            <main className="relative z-10">
              <Hero />
              <Marquee />
              <About />
              <PortfolioShowcase onSelectProject={handleOpenProject} />
              <Experience />
              <CVSection />
              <Contact />
            </main>
          )}
        </AnimatePresence>

        {/* Footer */}
        <Footer />

      </div>
    </>
  );
}

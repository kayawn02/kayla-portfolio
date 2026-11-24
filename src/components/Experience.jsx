import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Palette, Sparkles, GraduationCap, ChevronLeft, ChevronRight, Award, Compass, ArrowRight } from 'lucide-react';
import { experiences } from '../data/experience';
import { playNavClickSound, playCardHoverSound } from '../utils/sound';

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const icons = [Users, Palette, Sparkles, GraduationCap];

  const currentExp = experiences[activeIndex] || experiences[0];
  const CurrentIcon = icons[activeIndex % icons.length];

  const handlePrev = () => {
    playNavClickSound();
    setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const handleNext = () => {
    playNavClickSound();
    setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      
      {/* Background Subtle Galaxy Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4A74A7]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#142A44]/80 border border-[#4A74A7]/30 text-xs font-heading font-semibold text-[#38bdf8] mb-3 backdrop-blur-md shadow-sm">
            <Compass size={12} className="animate-spin" style={{ animationDuration: '8s' }} />
            <span>LINIMASA PERJALANAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#DCEAF7] tracking-tight font-heading">
            Pengalaman &amp; Milestone
          </h2>
          <p className="text-neutral-300 text-sm mt-2 font-sans">
            Jejak peran kepemimpinan organisasi, instruktur desain antarmuka, dan rekayasa perangkat lunak.
          </p>
        </motion.div>

        {/* ========================================================
            INTERACTIVE CYBER-ORBITAL TIMELINE TRACK
            (3 Connected Interactive Nodes with Glowing Circuit Line)
           ======================================================== */}
        <div className="relative py-4 max-w-2xl mx-auto">
          {/* Circuit Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#142A44] via-[#4A74A7] to-[#142A44] z-0" />

          {/* 3 Node Buttons */}
          <div className="relative z-10 flex items-center justify-between">
            {experiences.map((exp, idx) => {
              const isActive = idx === activeIndex;
              const NodeIcon = icons[idx % icons.length];

              return (
                <button
                  key={exp.id}
                  onClick={() => {
                    playNavClickSound();
                    setActiveIndex(idx);
                  }}
                  onMouseEnter={() => playCardHoverSound()}
                  className="group flex flex-col items-center focus:outline-none"
                >
                  {/* Orbit Node Capsule */}
                  <div className="relative flex items-center justify-center">
                    {/* Active Pulsing Ring */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTimelineRing"
                        className="absolute -inset-2.5 rounded-full border-2 border-dashed border-[#38bdf8] animate-[spin_8s_linear_infinite]"
                      />
                    )}

                    {/* Core Button Disc */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                        isActive
                          ? 'bg-gradient-to-br from-[#142A44] via-[#4A74A7] to-[#38bdf8] text-white scale-110 shadow-[0_0_20px_rgba(56,189,248,0.5)] border-2 border-[#DCEAF7]'
                          : 'bg-[#081426] border border-[#4A74A7]/30 text-neutral-400 hover:text-white hover:border-[#4A74A7] hover:scale-105'
                      }`}
                    >
                      <NodeIcon size={isActive ? 22 : 18} />
                    </div>
                  </div>

                  {/* Year Tag Below Node */}
                  <div className="mt-3 text-center">
                    <span
                      className={`text-xs font-heading font-extrabold tracking-wider transition-colors ${
                        isActive ? 'text-[#38bdf8]' : 'text-neutral-400 group-hover:text-white'
                      }`}
                    >
                      {exp.period.split(' ')[0]}
                    </span>
                    <p className="text-[10px] text-neutral-400 font-sans hidden sm:block">
                      {exp.navLabel}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            FEATURED SPOTLIGHT MILESTONE POD (ASYMMETRIC & MODERN)
           ======================================================== */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExp.id}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              className="rounded-3xl border border-[#4A74A7]/30 bg-gradient-to-b from-[#142A44]/80 via-[#0e1d32]/90 to-[#081426]/95 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden select-none"
            >
              {/* Top Edge Animated Shimmer Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent z-10" />

              {/* Watermark Year in Background */}
              <div className="absolute -bottom-6 -right-6 text-8xl sm:text-9xl font-black font-heading text-white/[0.03] pointer-events-none select-none">
                {currentExp.yearGhost}
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Side: Dynamic Holographic Icon & Year Badge (4 cols) */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4 border-b md:border-b-0 md:border-r border-[#4A74A7]/20 pb-6 md:pb-0 md:pr-8">
                  {/* Orbital Constellation Icon */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#4A74A7]/40 animate-[spin_12s_linear_infinite]" />
                    <div className="absolute -inset-1.5 rounded-full border border-dotted border-[#DCEAF7]/20 animate-[spin_18s_linear_infinite_reverse]" />
                    
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#142A44] to-[#4A74A7] flex items-center justify-center text-white shadow-[0_0_20px_rgba(74,116,167,0.5)]">
                      <CurrentIcon size={28} />
                    </div>
                  </div>

                  <div>
                    <span className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
                      {currentExp.period}
                    </span>
                  </div>
                </div>

                {/* Right Side: Role Details & Concise Impact (8 cols) */}
                <div className="md:col-span-8 space-y-4 text-left">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#DCEAF7] leading-snug">
                      {currentExp.role}
                    </h3>
                    <p className="text-sm font-sans font-medium text-[#4A74A7] mt-1">
                      {currentExp.organization} &middot; {currentExp.institution}
                    </p>
                  </div>

                  {/* Punchy 1-Sentence Summary */}
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                    {currentExp.summary}
                  </p>

                  {/* Competency & Skill Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {currentExp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-heading font-medium text-[#DCEAF7] bg-[#081426]/80 border border-[#4A74A7]/30 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Navigation Switchers */}
                  <div className="pt-4 border-t border-[#4A74A7]/15 flex items-center justify-between text-xs font-heading">
                    <span className="text-neutral-400">
                      Milestone {activeIndex + 1} dari {experiences.length}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="p-2 rounded-xl bg-[#081426] border border-[#4A74A7]/30 hover:border-[#38bdf8] text-white transition-all hover:scale-105"
                        title="Milestone sebelumnya"
                      >
                        <ChevronLeft size={15} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2 rounded-xl bg-[#081426] border border-[#4A74A7]/30 hover:border-[#38bdf8] text-white transition-all hover:scale-105"
                        title="Milestone berikutnya"
                      >
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

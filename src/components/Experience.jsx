import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, Users, GraduationCap, Sparkles } from 'lucide-react';
import { experiences } from '../data/experience';

function ExperienceCard({ exp, idx }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const icons = [Users, Sparkles, GraduationCap];
  const IconComponent = icons[idx % icons.length];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 110, damping: 16, delay: idx * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-2xl p-6 sm:p-7 overflow-hidden border border-white/10 hover:border-red-500/50 bg-gradient-to-b from-[#160d15]/90 via-[#0e080e]/95 to-[#070507] backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_rgba(220,38,38,0.25)] transition-all duration-300 flex flex-col justify-between cursor-default select-none"
    >
      {/* Background Ghost Year Watermark */}
      <span className="absolute top-2 right-4 text-6xl sm:text-7xl font-mono font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors pointer-events-none select-none">
        {exp.yearGhost}
      </span>

      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, ${exp.accentColor}, transparent 70%)`
        }}
      />

      {/* Top Edge Animated Shimmer Beam */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${exp.pulseColor}, transparent)` }}
      />

      {/* Card Content Top */}
      <div className="relative z-10 space-y-4">
        {/* Status Pill & Period */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase border border-white/10 bg-white/[0.03]">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: exp.pulseColor }}
            />
            <span className="text-neutral-300">{exp.statusBadge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400">
            <Calendar size={12} className="text-red-400" />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* Role & Organization */}
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-red-300 transition-colors leading-snug">
            {exp.role}
          </h3>
          <p className="text-xs text-neutral-400 font-medium mt-1 leading-relaxed">
            {exp.organization} &middot; <span className="text-neutral-300">{exp.institution}</span>
          </p>
        </div>

        {/* Crisp One-Line Impact */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
          {exp.summary}
        </p>
      </div>

      {/* Card Content Bottom: Skill Badges */}
      <div className="relative z-10 pt-5 mt-5 border-t border-white/5 flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono text-neutral-300 bg-white/[0.04] border border-white/10 px-2.5 py-0.5 rounded-md transition-colors group-hover:border-red-500/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-xs font-mono font-semibold tracking-widest text-red-500 uppercase mb-2">
            Pengalaman
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perjalanan &amp; Pengalaman
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5">
            Kepemimpinan organisasi, pengabdian instruktur, dan studi akademik.
          </p>
        </motion.div>

        {/* 3-Column Bento Milestone Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} exp={exp} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

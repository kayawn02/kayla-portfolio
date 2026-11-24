import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Building2, Users, GraduationCap, Sparkles, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeExp = experiences[activeIdx];
  const icons = [Users, Sparkles, GraduationCap];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-xs font-mono font-semibold tracking-widest text-red-500 uppercase mb-2">
            Perjalanan &amp; Jejak Langkah
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Pengalaman &amp; Milestone
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5">
            Jejak peran organisasi, instruktur desain, dan studi rekayasa perangkat lunak.
          </p>
        </motion.div>

        {/* Interactive Cyber Timeline Stepper (Unique, Not Just Monotonous Boxes) */}
        <div className="relative">
          
          {/* Luminous Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-gradient-to-r from-red-600 via-amber-500 to-sky-500 opacity-30 z-0" />

          {/* Stepper Node Switchers */}
          <div className="grid md:grid-cols-3 gap-4 relative z-10">
            {experiences.map((exp, idx) => {
              const isSelected = activeIdx === idx;
              const IconComp = icons[idx % icons.length];

              return (
                <motion.button
                  key={exp.id}
                  onClick={() => setActiveIdx(idx)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-5 rounded-2xl text-left transition-all duration-300 border backdrop-blur-xl flex flex-col justify-between select-none ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#1c0f17] to-[#0d070e] border-red-500/70 shadow-[0_10px_30px_rgba(220,38,38,0.25)]'
                      : 'bg-[#100911]/70 hover:bg-[#140b15]/90 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Active Top Accent Line */}
                  {isSelected && (
                    <motion.div
                      layoutId="active-exp-indicator"
                      className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 to-rose-400 rounded-t-2xl shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                    />
                  )}

                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className={`text-2xl font-black font-heading ${isSelected ? 'text-red-400' : 'text-neutral-400'}`}>
                      {exp.period}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform ${
                        isSelected
                          ? 'bg-red-600 text-white shadow-md scale-105'
                          : 'bg-white/[0.04] text-neutral-400 border border-white/10'
                      }`}
                    >
                      <IconComp size={16} />
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-sm sm:text-base font-bold font-heading line-clamp-1 ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                      {exp.role}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className={isSelected ? 'text-red-300' : 'text-neutral-400'}>
                      {exp.statusBadge}
                    </span>
                    <span className={`transition-transform ${isSelected ? 'translate-x-1 text-red-400' : 'text-neutral-500'}`}>
                      &rarr;
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>

        {/* Active Milestone Focused Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#140b15]/95 to-[#090509] border border-red-900/30 shadow-2xl relative overflow-hidden"
          >
            {/* Background Accent Glow */}
            <div
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: activeExp.pulseColor }}
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase">
                    {activeExp.statusBadge} &middot; {activeExp.period}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {activeExp.role}
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  {activeExp.organization} &middot; <span className="text-neutral-400">{activeExp.institution}</span>
                </p>
              </div>

              {/* Year Ghost Watermark */}
              <div className="text-6xl sm:text-7xl font-black font-heading text-white/[0.06] select-none pointer-events-none">
                {activeExp.yearGhost}
              </div>
            </div>

            {/* Core Impact & Highlights */}
            <div className="relative z-10 space-y-4">
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-3xl">
                {activeExp.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {activeExp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
                  >
                    <Zap size={11} className="text-red-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, GraduationCap, Calendar, Zap } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  const icons = [Users, Sparkles, GraduationCap];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-xs font-heading font-semibold tracking-widest text-red-500 uppercase mb-2">
            Riwayat Peran
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Pengalaman &amp; Milestone
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5 font-sans">
            Jejak kepemimpinan organisasi, instruktur desain, dan rekayasa perangkat lunak.
          </p>
        </motion.div>

        {/* 3 Unified Milestone Cards (No Long Text / No AI Slop) */}
        <div className="grid md:grid-cols-3 gap-5">
          {experiences.map((exp, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#150c16]/90 to-[#090509]/95 border border-white/10 hover:border-red-500/40 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden group select-none"
              >
                {/* Top Radiant Shimmer Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${exp.pulseColor}, transparent)` }}
                />

                <div className="space-y-4">
                  {/* Year & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-heading text-white group-hover:text-red-400 transition-colors">
                      {exp.period}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                      <IconComp size={16} />
                    </div>
                  </div>

                  {/* Role & Org */}
                  <div>
                    <h3 className="text-base font-bold text-white font-heading leading-snug group-hover:text-red-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-neutral-400 font-sans mt-1">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Punchy Concise 1-Line Description */}
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed pt-1">
                    {exp.summary}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 mt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {exp.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-heading font-medium text-neutral-300 bg-white/[0.03] border border-white/10 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

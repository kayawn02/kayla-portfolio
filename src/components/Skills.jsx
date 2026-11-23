import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Smartphone, Cpu, Code2, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { technicalSkills, softSkills } from '../data/skills';

const iconMap = {
  Palette: Palette,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Code2: Code2,
  Wrench: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-crimson-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
            <span className="text-xs font-mono tracking-widest text-crimson-400 uppercase">
              // Keahlian &amp; Toolkit
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Alat, Bahasa &amp;{' '}
            <span className="bg-gradient-to-r from-crimson-400 to-rose-500 bg-clip-text text-transparent">
              Teknologi
            </span>
          </h2>
          <p className="text-neutral-400 text-sm mt-2 max-w-xl">
            Kombinasi kemampuan perancangan antarmuka pengguna, pemrograman aplikasi mobile, dan implementasi perangkat keras IoT.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2.5 mb-10"
        >
          {technicalSkills.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code2;
            const isActive = activeCategory === i;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-crimson-600 to-crimson-700 text-white font-semibold shadow-[0_0_20px_rgba(225,29,72,0.45)]'
                    : 'bg-[#120a14]/70 border border-crimson-500/20 text-neutral-400 hover:text-white hover:border-crimson-500/40'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-crimson-500'} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Category Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="card-glass p-8 rounded-3xl mb-14"
          >
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {technicalSkills[activeCategory].category}
                </h3>
                <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
                  {technicalSkills[activeCategory].description}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-crimson-950/60 border border-crimson-500/30 text-crimson-300">
                {technicalSkills[activeCategory].skills.length} Kemampuan
              </span>
            </div>

            {/* Grid of skill tags */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 pt-4 border-t border-crimson-500/15">
              {technicalSkills[activeCategory].skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0a050c]/80 border border-crimson-500/20 hover:border-crimson-500/50 transition-colors group"
                >
                  <CheckCircle2 size={16} className="text-crimson-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-glass p-8 rounded-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={18} className="text-crimson-400" />
            <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono text-xs text-crimson-400">
              // Kemampuan Interpersonal (Soft Skills)
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="p-3 rounded-xl bg-[#0d0710] border border-crimson-500/20 text-center hover:border-crimson-500/50 hover:bg-crimson-950/20 transition-all"
              >
                <p className="text-xs font-medium text-neutral-300">{skill}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

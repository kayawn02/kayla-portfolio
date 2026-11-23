import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-2">
            Pengalaman
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perjalanan &amp; Pengalaman
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5 max-w-md">
            Organisasi kemahasiswaan, pengabdian pelatihan, dan studi akademik.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-red-900/30 space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -35, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 90, damping: 16, delay: i * 0.08 }}
              className="relative"
            >
              {/* Glowing Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-2 border-[#070507] shadow-[0_0_10px_rgba(220,38,38,0.7)]" />

              {/* Card */}
              <div className="card-glass card-interactive p-6 sm:p-7 rounded-2xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-red-950/40 border border-red-700/30 text-red-300 font-semibold">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {exp.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-red-400">
                    {exp.organization} &middot; <span className="text-neutral-400 font-normal">{exp.institution}</span>
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  {exp.points.map((pt, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                      <span className="text-red-500 font-bold mt-0.5">&bull;</span>
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-neutral-300 bg-white/[0.04] border border-white/10 px-2.5 py-0.5 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

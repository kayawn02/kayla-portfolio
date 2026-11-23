import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles, Calendar, MapPin } from 'lucide-react';
import { achievements } from '../data/certificates';

export default function Certificates() {
  return (
    <section id="achievements" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-crimson-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
            <span className="text-xs font-mono tracking-widest text-crimson-400 uppercase">
              // Penghargaan &amp; Prestasi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Rekam Jejak{' '}
            <span className="bg-gradient-to-r from-crimson-400 to-rose-500 bg-clip-text text-transparent">
              Kompetisi &amp; Prestasi
            </span>
          </h2>
          <p className="text-neutral-400 text-sm mt-2 max-w-xl">
            Apresiasi yang diraih melalui dedikasi perancangan desain antarmuka dan pengembangan teknologi inovatif.
          </p>
        </motion.div>

        {/* 2-Column Achievement Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass p-7 rounded-3xl relative overflow-hidden group"
            >
              {/* Background Glow corner */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-crimson-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-crimson-600/20 transition-colors" />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-5">
                <div>
                  {/* Badge & Year Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-yellow-950/50 border border-yellow-500/40 text-yellow-300">
                      <Trophy size={13} className="text-yellow-400" />
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {item.year}
                    </span>
                  </div>

                  {/* Title & Event */}
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-crimson-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-1 mb-4 text-xs font-mono text-neutral-400">
                    <p className="text-crimson-400 font-semibold">{item.event}</p>
                    <p>{item.organizer}</p>
                    <p className="text-neutral-500">&bull; {item.level}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Associated Project */}
                {item.projectRef && (
                  <div className="pt-4 border-t border-crimson-500/15 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500">Proyek Terkait:</span>
                    <span className="text-crimson-300 font-semibold">{item.projectRef}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

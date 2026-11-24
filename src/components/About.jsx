import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2, ArrowRight, Sparkles, Instagram, Flame, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/socials';

export default function About() {
  const stageRef = useRef(null);
  const [hoverPos, setHoverPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setHoverPos({ x, y });
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Main About Row */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Kayla Photo with Spider-Man Interactive Hover Effect (Preserved 100%) */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: 'spring', stiffness: 90, damping: 20 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div
              ref={stageRef}
              onPointerMove={handlePointerMove}
              onPointerEnter={() => setIsHovered(true)}
              onPointerLeave={handlePointerLeave}
              className="relative w-72 h-96 sm:w-80 sm:h-[440px] rounded-3xl overflow-hidden cursor-crosshair select-none group card-interactive bg-gradient-to-b from-neutral-900/70 via-black/90 to-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              style={{ perspective: 1000 }}
            >
              {/* Soft ambient red glow behind cutout */}
              <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
              <div className="absolute -inset-10 bg-gradient-to-t from-red-600/15 via-red-900/5 to-transparent blur-3xl rounded-full pointer-events-none" />

              {/* Layer 1: Kayla Cutout */}
              <img
                src="/images/kayla-cutout.png"
                alt="Kayla Alia Atarani"
                className="absolute inset-0 w-full h-full object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] z-10 transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Layer 2: Spider-Man Miles Morales Suit */}
              <div
                className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: isHovered ? 1 : 0,
                  WebkitMaskImage: `radial-gradient(circle 150px at ${hoverPos.x}% ${hoverPos.y}%, black 0%, black 60%, transparent 100%)`,
                  maskImage: `radial-gradient(circle 150px at ${hoverPos.x}% ${hoverPos.y}%, black 0%, black 60%, transparent 100%)`,
                }}
              >
                <img
                  src="/images/spiderman-miles-morales.png"
                  alt="Spider-Man Miles Morales Suit Effect"
                  className="w-full h-full object-contain object-bottom filter saturate-110 contrast-105 drop-shadow-[0_0_30px_rgba(220,38,38,0.7)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Sleek Glass Corner Accents */}
              <div className="absolute inset-0 border border-red-500/25 rounded-3xl z-30 pointer-events-none shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]" />
            </div>

            {/* Hint Pill */}
            <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-700/30 text-[11px] text-neutral-300 font-sans shadow-sm transition-transform duration-300 hover:scale-105">
              <Sparkles size={12} className="text-red-400 animate-pulse shrink-0" />
              <span>Arahkan kursor ke foto untuk Spider-Man effect</span>
            </div>
          </motion.div>

          {/* Right: Modern, Clean & Punchy Bio (No AI Slop / Long Text) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-1">
              <span className="text-xs font-heading font-semibold tracking-widest text-red-500 uppercase">
                Tentang Saya
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight">
                Kayla Alia <span className="text-red-500">Atarani</span>
              </h2>
              <p className="text-sm font-heading font-medium text-neutral-300 pt-1">
                D4 Rekayasa Perangkat Lunak &middot; Politeknik Negeri Lampung
              </p>
            </div>

            {/* Core Capability Chips */}
            <div className="flex flex-wrap gap-2">
              {[
                'Desain Grafis & UI/UX',
                'Mobile Flutter',
                'IoT ESP32',
                'Branding Media HMJ TI'
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-lg text-xs font-heading font-medium bg-white/[0.04] border border-white/10 text-neutral-200 hover:border-red-500/40 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Concise One-Paragraph Human Summary (No AI Slop) */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
              Fokus merancang antarmuka visual kreatif, media komunikasi digital, serta mengembangkan sistem aplikasi mobile yang terhubung perangkat IoT cerdas.
            </p>

            {/* Instagram Profile Pill */}
            <div>
              <a
                href={personalInfo.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-red-500/10 border border-pink-500/30 hover:border-pink-500/60 text-white text-xs font-heading font-medium backdrop-blur-md transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                  <Instagram size={11} />
                </div>
                <span className="text-neutral-400">Instagram:</span>
                <span className="font-semibold text-white group-hover:text-pink-300 transition-colors">
                  {personalInfo.instagram.handle}
                </span>
                <span className="text-pink-400 group-hover:translate-x-1 transition-transform text-[11px]">
                  &rarr;
                </span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-5 py-2.5 rounded-full text-xs font-heading font-semibold shadow-[0_0_15px_rgba(220,38,38,0.35)] transition-all hover:scale-105"
              >
                <span>Hubungi Saya</span>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-medium text-neutral-300 hover:text-white transition-colors hover:translate-x-1 duration-200"
              >
                <span>Lihat Karya &amp; Sertifikat</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Minimalist 3-Pill Stat Strip (Simple, Unique, No Heavy Text Clutter) */}
        <div className="grid sm:grid-cols-3 gap-4 pt-4">
          
          {/* Stat 1 */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="p-5 rounded-2xl bg-gradient-to-b from-[#140b15]/80 to-[#080408]/90 border border-white/10 hover:border-red-500/40 transition-all duration-300 backdrop-blur-xl flex items-center gap-4 shadow-lg group select-none"
          >
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
              <Code2 size={20} />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white font-heading">2</span>
                <span className="text-xs font-heading text-red-400 font-semibold">Projek</span>
              </div>
              <p className="text-xs text-neutral-400 font-sans mt-0.5">
                Mobile App &amp; IoT
              </p>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="p-5 rounded-2xl bg-gradient-to-b from-[#140b15]/80 to-[#080408]/90 border border-white/10 hover:border-amber-500/40 transition-all duration-300 backdrop-blur-xl flex items-center gap-4 shadow-lg group select-none"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all">
              <Award size={20} />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white font-heading">7</span>
                <span className="text-xs font-heading text-amber-400 font-semibold">Sertifikat</span>
              </div>
              <p className="text-xs text-neutral-400 font-sans mt-0.5">
                Prestasi &amp; Pelatihan
              </p>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="p-5 rounded-2xl bg-gradient-to-b from-[#140b15]/80 to-[#080408]/90 border border-white/10 hover:border-sky-500/40 transition-all duration-300 backdrop-blur-xl flex items-center gap-4 shadow-lg group select-none"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-600/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <GraduationCap size={20} />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white font-heading">2024</span>
                <span className="text-xs font-heading text-sky-400 font-semibold">TRPL</span>
              </div>
              <p className="text-xs text-neutral-400 font-sans mt-0.5">
                Politeknik Negeri Lampung
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

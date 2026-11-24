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
              {/* Soft ambient galaxy glow behind cutout */}
              <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
              <div className="absolute -inset-10 bg-gradient-to-t from-[#142A44]/40 via-[#4A74A7]/15 to-transparent blur-3xl rounded-full pointer-events-none" />

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
                  className="w-full h-full object-contain object-bottom filter saturate-110 contrast-105 drop-shadow-[0_0_30px_rgba(74,116,167,0.7)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Sleek Glass Corner Accents */}
              <div className="absolute inset-0 border border-[#4A74A7]/30 rounded-3xl z-30 pointer-events-none shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]" />
            </div>

            {/* Hint Pill */}
            <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-[#142A44]/60 border border-[#4A74A7]/40 text-[11px] text-[#DCEAF7] font-heading shadow-sm transition-transform duration-300 hover:scale-105">
              <Sparkles size={12} className="text-[#38bdf8] animate-pulse shrink-0" />
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
              <span className="text-xs font-heading font-semibold tracking-widest text-[#4A74A7] uppercase">
                Tentang Saya
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight">
                Kayla Alia <span className="bg-gradient-to-r from-[#DCEAF7] via-[#4A74A7] to-[#38bdf8] bg-clip-text text-transparent">Atarani</span>
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
                  className="px-3 py-1 rounded-full text-xs font-heading font-medium bg-[#142A44]/50 border border-[#DCEAF7]/15 text-[#DCEAF7] hover:border-[#4A74A7] transition-all hover:scale-105"
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
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#142A44]/80 to-[#4A74A7]/30 border border-[#4A74A7]/40 hover:border-[#4A74A7] text-white text-xs font-heading font-medium backdrop-blur-md transition-all duration-300 hover:scale-105 group shadow-sm"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                  <Instagram size={11} />
                </div>
                <span className="text-neutral-400">Instagram:</span>
                <span className="font-semibold text-white group-hover:text-[#DCEAF7] transition-colors">
                  {personalInfo.instagram.handle}
                </span>
                <span className="text-[#4A74A7] group-hover:translate-x-1 transition-transform text-[11px]">
                  &rarr;
                </span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1 font-heading">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#142A44] via-[#4A74A7] to-[#142A44] hover:from-[#1c395c] hover:to-[#5a86bc] text-white px-5 py-2.5 rounded-full text-xs font-semibold border border-[#4A74A7]/40 shadow-[0_0_15px_rgba(74,116,167,0.35)] transition-all hover:scale-105"
              >
                <span>Hubungi Saya</span>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#DCEAF7] hover:text-white transition-colors hover:translate-x-1 duration-200"
              >
                <span>Lihat Karya &amp; Sertifikat</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* ===================== COSMIC ORBITAL TELEMETRY PODS (ANTIMAINTREAM, JANGAN KOTAK DOANG) ===================== */}
        <div className="grid sm:grid-cols-3 gap-5 pt-4">
          
          {/* Stat 1: 2 Projek */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            whileHover={{ y: -6, scale: 1.025 }}
            className="relative rounded-full p-4 sm:p-5 bg-gradient-to-r from-[#142A44]/80 via-[#0e1d32]/90 to-[#081426]/95 border border-[#4A74A7]/30 hover:border-[#38bdf8] transition-all duration-300 backdrop-blur-2xl flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.7)] group select-none overflow-hidden"
          >
            {/* Top edge cosmic starlight streak */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 relative z-10">
              {/* Spinning Orbital Core Icon */}
              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                {/* Rotating Dashed Satellite Orbit Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#4A74A7]/40 group-hover:border-[#38bdf8] animate-[spin_10s_linear_infinite]" />
                <div className="absolute -inset-1 rounded-full border border-dotted border-[#DCEAF7]/20 group-hover:border-[#DCEAF7]/40 animate-[spin_16s_linear_infinite_reverse]" />
                
                {/* Glowing Core Orb */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#142A44] to-[#4A74A7] flex items-center justify-center text-white shadow-[0_0_15px_rgba(74,116,167,0.5)] group-hover:scale-110 transition-transform">
                  <Code2 size={18} />
                </div>
              </div>

              {/* Digits & Minimal Info */}
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
                    2
                  </span>
                  <span className="text-xs font-heading text-[#38bdf8] font-bold uppercase tracking-wider">
                    Projek
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300 font-sans tracking-tight">
                  Mobile App &amp; IoT
                </p>
              </div>
            </div>

            {/* Micro Live Telemetry Capsule */}
            <div className="hidden xs:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142A44]/60 border border-[#DCEAF7]/10 text-[10px] font-heading font-semibold text-[#DCEAF7] shrink-0 mr-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span>Aktif</span>
            </div>
          </motion.div>

          {/* Stat 2: 7 Sertifikat */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.025 }}
            className="relative rounded-full p-4 sm:p-5 bg-gradient-to-r from-[#142A44]/80 via-[#0e1d32]/90 to-[#081426]/95 border border-[#4A74A7]/30 hover:border-[#4A74A7] transition-all duration-300 backdrop-blur-2xl flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.7)] group select-none overflow-hidden"
          >
            <div className="absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#4A74A7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-dashed border-[#4A74A7]/40 group-hover:border-[#38bdf8] animate-[spin_10s_linear_infinite]" />
                <div className="absolute -inset-1 rounded-full border border-dotted border-[#DCEAF7]/20 group-hover:border-[#DCEAF7]/40 animate-[spin_16s_linear_infinite_reverse]" />
                
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#142A44] to-[#4A74A7] flex items-center justify-center text-white shadow-[0_0_15px_rgba(74,116,167,0.5)] group-hover:scale-110 transition-transform">
                  <Award size={18} />
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
                    7
                  </span>
                  <span className="text-xs font-heading text-[#4A74A7] font-bold uppercase tracking-wider">
                    Sertifikat
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300 font-sans tracking-tight">
                  Prestasi &amp; Pelatihan
                </p>
              </div>
            </div>

            <div className="hidden xs:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142A44]/60 border border-[#DCEAF7]/10 text-[10px] font-heading font-semibold text-[#DCEAF7] shrink-0 mr-1">
              <Sparkles size={10} className="text-[#38bdf8]" />
              <span>Resmi</span>
            </div>
          </motion.div>

          {/* Stat 3: 2024 TRPL */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.025 }}
            className="relative rounded-full p-4 sm:p-5 bg-gradient-to-r from-[#142A44]/80 via-[#0e1d32]/90 to-[#081426]/95 border border-[#4A74A7]/30 hover:border-sky-400/60 transition-all duration-300 backdrop-blur-2xl flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.7)] group select-none overflow-hidden"
          >
            <div className="absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-dashed border-sky-400/40 group-hover:border-sky-300 animate-[spin_10s_linear_infinite]" />
                <div className="absolute -inset-1 rounded-full border border-dotted border-[#DCEAF7]/20 group-hover:border-[#DCEAF7]/40 animate-[spin_16s_linear_infinite_reverse]" />
                
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#142A44] to-sky-600/80 flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.5)] group-hover:scale-110 transition-transform">
                  <GraduationCap size={18} />
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
                    2024
                  </span>
                  <span className="text-xs font-heading text-sky-400 font-bold uppercase tracking-wider">
                    TRPL
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300 font-sans tracking-tight">
                  Politeknik Negeri Lampung
                </p>
              </div>
            </div>

            <div className="hidden xs:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142A44]/60 border border-[#DCEAF7]/10 text-[10px] font-heading font-semibold text-sky-300 shrink-0 mr-1">
              <span>D4 Vokasi</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

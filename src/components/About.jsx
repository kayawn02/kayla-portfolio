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

        {/* ===================== COSMIC REACTOR TELEMETRY PRISMS (ANTIMAINTREAM & ULTRA MODERN) ===================== */}
        <div className="grid sm:grid-cols-3 gap-6 pt-6">
          
          {/* Stat 1: 2 Projek */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#142A44]/85 via-[#0e1d32]/95 to-[#081426] border border-[#4A74A7]/35 hover:border-[#38bdf8] transition-all duration-500 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(74,116,167,0.15)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.25)] group select-none overflow-hidden flex flex-col justify-between"
          >
            {/* Animated Laser Border Beam */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#38bdf8]/10 rounded-full blur-2xl group-hover:bg-[#38bdf8]/20 transition-colors pointer-events-none" />

            {/* Top Row: Sonar Radar Gyroscope + Micro Tag */}
            <div className="flex items-center justify-between mb-6">
              <div className="relative w-14 h-14 flex items-center justify-center">
                {/* Expanding Radar Sonar Waves */}
                <div className="absolute inset-0 rounded-full border border-[#38bdf8]/30 animate-ping opacity-30" style={{ animationDuration: '3s' }} />
                {/* Rotating Dashed Satellite Orbit */}
                <div className="absolute -inset-1 rounded-full border border-dashed border-[#4A74A7]/50 group-hover:border-[#38bdf8] animate-[spin_8s_linear_infinite]" />
                
                {/* Core Glowing Orb */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#142A44] to-[#4A74A7] flex items-center justify-center text-[#DCEAF7] shadow-[0_0_15px_rgba(56,189,248,0.5)] group-hover:scale-110 transition-transform">
                  <Code2 size={18} className="text-[#38bdf8]" />
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#081426]/90 border border-[#4A74A7]/30 text-[10px] font-heading font-semibold text-[#38bdf8] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                <span>AKTIF</span>
              </div>
            </div>

            {/* Center: Hero Counter with Starlight Gradient */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-br from-white via-[#DCEAF7] to-[#38bdf8] tracking-tight">
                  2
                </span>
                <span className="text-sm font-heading font-bold text-[#38bdf8] uppercase tracking-wider">
                  Projek
                </span>
              </div>
              <h4 className="text-base font-bold font-heading text-[#DCEAF7] pt-1">
                Projek Unggulan
              </h4>
              <p className="text-xs text-neutral-300 font-sans">
                Mobile Flutter &amp; Sistem IoT ESP32
              </p>
            </div>

            {/* Bottom Cyber Progress Line */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>TRPL · Polinela</span>
              <span className="text-[#38bdf8] font-bold">100% Selesai</span>
            </div>
          </motion.div>

          {/* Stat 2: 7 Sertifikat */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#142A44]/85 via-[#0e1d32]/95 to-[#081426] border border-[#4A74A7]/35 hover:border-[#4A74A7] transition-all duration-500 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(74,116,167,0.15)] hover:shadow-[0_20px_50px_rgba(74,116,167,0.3)] group select-none overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4A74A7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#4A74A7]/10 rounded-full blur-2xl group-hover:bg-[#4A74A7]/20 transition-colors pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#4A74A7]/30 animate-ping opacity-30" style={{ animationDuration: '3.2s' }} />
                <div className="absolute -inset-1 rounded-full border border-dashed border-[#4A74A7]/50 group-hover:border-[#38bdf8] animate-[spin_8s_linear_infinite]" />
                
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#142A44] to-[#4A74A7] flex items-center justify-center text-[#DCEAF7] shadow-[0_0_15px_rgba(74,116,167,0.5)] group-hover:scale-110 transition-transform">
                  <Award size={18} className="text-[#DCEAF7]" />
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#081426]/90 border border-[#4A74A7]/30 text-[10px] font-heading font-semibold text-[#DCEAF7] shadow-sm">
                <Sparkles size={11} className="text-[#38bdf8]" />
                <span>TERVALIDASI</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-br from-white via-[#DCEAF7] to-[#4A74A7] tracking-tight">
                  7
                </span>
                <span className="text-sm font-heading font-bold text-[#4A74A7] uppercase tracking-wider">
                  Sertifikat
                </span>
              </div>
              <h4 className="text-base font-bold font-heading text-[#DCEAF7] pt-1">
                Sertifikat Resmi
              </h4>
              <p className="text-xs text-neutral-300 font-sans">
                Prestasi Lomba &amp; Pelatihan Vokasi
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Tingkat Nasional &amp; Daerah</span>
              <span className="text-[#38bdf8] font-bold">Terverifikasi</span>
            </div>
          </motion.div>

          {/* Stat 3: 2024 TRPL */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#142A44]/85 via-[#0e1d32]/95 to-[#081426] border border-[#4A74A7]/35 hover:border-sky-400 transition-all duration-500 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(74,116,167,0.15)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.25)] group select-none overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky-400/10 rounded-full blur-2xl group-hover:bg-sky-400/20 transition-colors pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-sky-400/30 animate-ping opacity-30" style={{ animationDuration: '3.4s' }} />
                <div className="absolute -inset-1 rounded-full border border-dashed border-[#4A74A7]/50 group-hover:border-sky-400 animate-[spin_8s_linear_infinite]" />
                
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#142A44] to-sky-600/80 flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.5)] group-hover:scale-110 transition-transform">
                  <GraduationCap size={18} className="text-sky-300" />
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#081426]/90 border border-[#4A74A7]/30 text-[10px] font-heading font-semibold text-sky-300 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>D4 VOKASI</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-br from-white via-[#DCEAF7] to-sky-400 tracking-tight">
                  2024
                </span>
                <span className="text-sm font-heading font-bold text-sky-400 uppercase tracking-wider">
                  TRPL
                </span>
              </div>
              <h4 className="text-base font-bold font-heading text-[#DCEAF7] pt-1">
                Polinela Lampung
              </h4>
              <p className="text-xs text-neutral-300 font-sans">
                D4 Rekayasa Perangkat Lunak
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Angkatan 2024</span>
              <span className="text-sky-300 font-bold">Mahasiswa Aktif</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

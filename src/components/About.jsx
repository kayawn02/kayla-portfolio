import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2, ArrowRight, Sparkles, Instagram, Flame, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/socials';

// Minimalist & Unique 3D Magnetic Stat Tile (Clean, Modern, Simple, Zero AI Slop)
function StatCard3D({ icon: Icon, number, suffix, title, subtitle, accentColor = '#38bdf8' }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false, mouseX: 0, mouseY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setTilt({
      x: x * 10,
      y: -y * 10,
      active: true,
      mouseX: e.clientX - rect.left,
      mouseY: e.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false, mouseX: 0, mouseY: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateY: tilt.active ? tilt.x : 0,
        rotateX: tilt.active ? tilt.y : 0,
        scale: tilt.active ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      style={{ perspective: 800, transformStyle: 'preserve-3d' }}
      className="relative rounded-2xl p-6 sm:p-7 bg-[#0b1728]/80 border border-[#4A74A7]/30 hover:border-[#38bdf8]/60 transition-colors backdrop-blur-xl shadow-lg group select-none overflow-hidden flex flex-col justify-between"
    >
      {/* Specular Spotlight Glow following cursor */}
      {tilt.active && (
        <div
          className="absolute pointer-events-none rounded-full blur-xl opacity-60"
          style={{
            width: '160px',
            height: '160px',
            left: `${tilt.mouseX}px`,
            top: `${tilt.mouseY}px`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Top Laser Shimmer */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content in 3D perspective layer */}
      <div style={{ transform: 'translateZ(15px)' }} className="space-y-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-[#142A44]/90 border border-[#4A74A7]/40 flex items-center justify-center text-[#38bdf8] shadow-md group-hover:scale-105 transition-transform">
          <Icon size={22} />
        </div>

        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight">
              {number}
            </span>
            {suffix && (
              <span className="text-xl sm:text-2xl font-bold font-heading text-[#38bdf8]">
                {suffix}
              </span>
            )}
          </div>
          <h4 className="text-base font-bold font-heading text-[#DCEAF7] pt-1">
            {title}
          </h4>
          <p className="text-xs text-neutral-400 font-sans mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

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

        {/* ===================== MINIMALIST & INTERACTIVE 3D STAT TILES ===================== */}
        <div className="grid sm:grid-cols-3 gap-5 pt-6">
          <StatCard3D
            icon={Code2}
            number="2"
            suffix="+"
            title="Projek Rekayasa"
            subtitle="Mobile Flutter & IoT Cerdas"
            accentColor="#38bdf8"
          />
          <StatCard3D
            icon={Award}
            number="7"
            suffix="+"
            title="Sertifikat Resmi"
            subtitle="Prestasi Lomba & Pelatihan"
            accentColor="#4A74A7"
          />
          <StatCard3D
            icon={GraduationCap}
            number="2024"
            title="D4 TRPL Polinela"
            subtitle="Rekayasa Perangkat Lunak"
            accentColor="#38bdf8"
          />
        </div>

      </div>
    </section>
  );
}

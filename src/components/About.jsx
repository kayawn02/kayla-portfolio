import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2, ArrowRight, Sparkles, Instagram } from 'lucide-react';
import { personalInfo } from '../data/socials';

function WordRevealText({ text, className = "" }) {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.25, y: 3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.25, delay: i * 0.012 }}
          className="inline-block mr-1.5 transition-colors"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

function StatCard({ tag, value, suffix, title, desc, icon: Icon, delay, accentColor = 'rgba(220,38,38,0.2)' }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 110, damping: 16, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative rounded-2xl p-6 sm:p-7 overflow-hidden border border-white/10 bg-gradient-to-b from-[#160d14]/80 via-[#0e080e]/90 to-[#070507] backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.7)] group cursor-default select-none"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, ${accentColor}, transparent 70%)`
        }}
      />

      {/* Top Edge Animated Shimmer Beam */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card Header: Micro Tag + Icon */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <span className="text-[10px] font-mono tracking-widest uppercase text-red-400 font-semibold px-2 py-0.5 rounded bg-red-950/50 border border-red-800/30">
          {tag}
        </span>
        <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-red-400 group-hover:text-white group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300 shadow-sm">
          <Icon size={18} />
        </div>
      </div>

      {/* Large Bold Animated Display Value */}
      <div className="relative z-10 flex items-baseline gap-1.5 my-1">
        <span className="text-4xl sm:text-5xl font-black font-display tracking-tight bg-gradient-to-br from-white via-neutral-100 to-red-400 bg-clip-text text-transparent group-hover:to-red-300 transition-all">
          {value}
        </span>
        {suffix && (
          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-red-950/40 border border-red-700/30 text-red-300">
            {suffix}
          </span>
        )}
      </div>

      {/* Label and Subtext */}
      <div className="relative z-10 pt-2 border-t border-white/5 space-y-0.5">
        <h3 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-neutral-400 font-medium">
          {desc}
        </p>
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
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Main About Row */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Kayla Photo with Spider-Man Interactive Hover Effect (100% Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
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
              className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-3xl overflow-hidden cursor-crosshair select-none group card-interactive bg-gradient-to-b from-neutral-900/60 via-black/80 to-black border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
              style={{ perspective: 1000 }}
            >
              {/* Subtle Ambient Red Glow behind cutout (No solid red background) */}
              <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
              <div className="absolute -inset-10 bg-gradient-to-t from-red-600/15 via-red-900/5 to-transparent blur-3xl rounded-full pointer-events-none" />

              {/* Layer 1: Kayla Cutout (100% Transparent Studio Background Removed) */}
              <img
                src="/images/kayla-cutout.png"
                alt="Kayla Alia Atarani"
                className="absolute inset-0 w-full h-full object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] z-10 transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Layer 2: Spider-Man Miles Morales Suit (Full Body & 100% Sejajar) */}
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

              {/* Subtle glass reflection highlight */}
              <div className="absolute inset-0 border border-red-500/25 rounded-3xl z-30 pointer-events-none shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]" />
            </div>

            {/* Hint Badge */}
            <div className="flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-700/30 text-[11px] text-neutral-300 shadow-sm transition-transform duration-300 hover:scale-105">
              <Sparkles size={12} className="text-red-400 animate-pulse" />
              <span>Arahkan kursor ke foto untuk melihat efek Spider-Man Miles Morales</span>
            </div>
          </motion.div>

          {/* Right: Bio & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="text-xs font-semibold tracking-wider text-red-500 uppercase">
              ABOUT ME
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I'm <span className="text-red-500">Kayla Alia Atarani</span>
            </h2>

            <WordRevealText
              text="Mahasiswa D4 Teknologi Rekayasa Perangkat Lunak di Politeknik Negeri Lampung dengan fokus perancangan antarmuka pengguna (UI/UX) dan pengembangan aplikasi mobile."
              className="text-neutral-300 text-sm sm:text-base leading-relaxed"
            />

            <WordRevealText
              text="Senang memadukan desain sistem di Figma, kode aplikasi Flutter, serta perangkat IoT ESP32 untuk membangun produk digital yang fungsional dan nyaman digunakan."
              className="text-neutral-400 text-sm leading-relaxed"
            />

            {/* Instagram Profile Badge in About Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="pt-1"
            >
              <a
                href={personalInfo.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-red-500/10 border border-pink-500/30 hover:border-pink-500/70 text-white text-xs font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.35)] group"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:rotate-12">
                  <Instagram size={13} />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-neutral-400 font-normal">Instagram:</span>
                  <span className="font-semibold text-white group-hover:text-pink-300 transition-colors">
                    {personalInfo.instagram.handle}
                  </span>
                </div>
                <span className="text-[10px] text-pink-400 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </motion.div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-[0_0_15px_rgba(220,38,38,0.35)] transition-all hover:scale-105"
              >
                <span>Hubungi Saya</span>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors hover:translate-x-1 duration-200"
              >
                <span>Lihat Projek &amp; Sertifikat</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* 3-Column Statistics Grid (Interactive Cursor Spotlight & Cyber Accents) */}
        <div className="grid sm:grid-cols-3 gap-5">
          <StatCard
            tag="01 · METRIK PROJEK"
            value="2"
            suffix="Unggulan"
            title="Projek Rekayasa"
            desc="Mobile Flutter & IoT ESP32"
            icon={Code2}
            delay={0.1}
            accentColor="rgba(220, 38, 38, 0.25)"
          />

          <StatCard
            tag="02 · DOKUMEN PRESTASI"
            value="7"
            suffix="Dokumen"
            title="Sertifikat Resmi"
            desc="Prestasi Lomba & Pelatihan Vokasi"
            icon={Award}
            delay={0.2}
            accentColor="rgba(245, 158, 11, 0.25)"
          />

          <StatCard
            tag="03 · REKAYASA SISTEM"
            value="2024"
            suffix="Aktif"
            title="TRPL Polinela"
            desc="D4 Rekayasa Perangkat Lunak"
            icon={GraduationCap}
            delay={0.3}
            accentColor="rgba(56, 189, 248, 0.25)"
          />
        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 5) + 3;
        return Math.min(prev + step, 100);
      });
    }, 32);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(8px)',
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#081426] select-none overflow-hidden"
    >
      {/* Ambient Cosmic Galaxy Glows */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#142A44]/40 via-[#4A74A7]/20 to-transparent blur-[120px] pointer-events-none animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <div className="absolute top-1/3 w-64 h-64 rounded-full bg-[#38bdf8]/10 blur-[90px] pointer-events-none" />

      {/* Floating Starlight Dust */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping"
          style={{ animationDuration: '3.5s' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-[#DCEAF7] animate-ping"
          style={{ animationDuration: '4s' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* ========================================================
            3D ROTATING GLASS CUBE / PRISM WITH GLOWING CORE
           ======================================================== */}
        <div className="relative w-36 h-36 flex items-center justify-center mb-8">
          {/* Subtle 3D Perspective Canvas */}
          <div
            className="w-20 h-20 relative flex items-center justify-center"
            style={{ perspective: 700 }}
          >
            <motion.div
              animate={{
                rotateX: [15, 375],
                rotateY: [25, 385],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                width: 68,
                height: 68,
                transformStyle: 'preserve-3d',
              }}
              className="relative"
            >
              {/* Front Face */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#142A44]/80 to-[#4A74A7]/50 border border-[#38bdf8]/60 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.35)] flex items-center justify-center"
                style={{ transform: 'translateZ(34px)' }}
              >
                <span className="text-xl font-black font-heading text-white drop-shadow-[0_0_8px_#38bdf8]">
                  K
                </span>
              </div>

              {/* Back Face */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#081426]/90 to-[#142A44]/80 border border-[#4A74A7]/40 backdrop-blur-md flex items-center justify-center"
                style={{ transform: 'rotateY(180deg) translateZ(34px)' }}
              >
                <span className="text-xs font-bold font-heading text-[#38bdf8]">
                  2026
                </span>
              </div>

              {/* Left Face */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#142A44]/80 to-[#38bdf8]/30 border border-[#4A74A7]/50 backdrop-blur-md"
                style={{ transform: 'rotateY(-90deg) translateZ(34px)' }}
              />

              {/* Right Face */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#142A44]/80 to-[#38bdf8]/30 border border-[#4A74A7]/50 backdrop-blur-md"
                style={{ transform: 'rotateY(90deg) translateZ(34px)' }}
              />

              {/* Top Face */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#38bdf8]/40 to-[#142A44]/80 border border-[#38bdf8]/60 backdrop-blur-md"
                style={{ transform: 'rotateX(90deg) translateZ(34px)' }}
              />

              {/* Bottom Face */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#081426]/90 to-[#142A44]/80 border border-[#4A74A7]/40 backdrop-blur-md"
                style={{ transform: 'rotateX(-90deg) translateZ(34px)' }}
              />

              {/* Inner Glowing Star Core */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#38bdf8] blur-[8px] animate-pulse"
                style={{ transform: 'translateZ(0px)' }}
              />
            </motion.div>
          </div>

          {/* Outer Orbital Rings */}
          <div
            className="absolute inset-0 rounded-full border border-[#4A74A7]/30 animate-[spin_12s_linear_infinite]"
            style={{ transform: 'rotateX(68deg)' }}
          />
          <div
            className="absolute -inset-2 rounded-full border border-dashed border-[#38bdf8]/30 animate-[spin_16s_linear_infinite_reverse]"
            style={{ transform: 'rotateY(68deg)' }}
          />
        </div>

        {/* ========================================================
            WELCOMING GREETING & KAYLA'S REAL NAME
           ======================================================== */}
        <div className="space-y-2 mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#38bdf8] font-heading font-semibold">
            Selamat Datang
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight drop-shadow-[0_0_20px_rgba(220,234,247,0.3)]">
            Kayla Alia Atarani
          </h1>
          <p className="text-xs text-neutral-400 font-sans">
            Portofolio Rekayasa Perangkat Lunak &amp; Desain
          </p>
        </div>

        {/* ========================================================
            CLEAN MINIMAL PROGRESS TRACK & PERCENTAGE
           ======================================================== */}
        <div className="w-56 space-y-2">
          <div className="flex items-center justify-between text-xs font-heading font-medium text-neutral-400">
            <span className="text-[11px] text-[#DCEAF7]/70">Memuat Pengalaman</span>
            <span className="text-white font-bold tabular-nums">{progress}%</span>
          </div>

          <div className="w-full bg-[#050c18] rounded-full h-1.5 overflow-hidden border border-[#142A44]/80 p-[1px]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#142A44] via-[#4A74A7] to-[#38bdf8] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(56,189,248,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

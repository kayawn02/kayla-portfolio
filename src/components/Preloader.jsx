import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Slightly organic speed increments
        const step = Math.floor(Math.random() * 5) + 3;
        return Math.min(prev + step, 100);
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  // Dynamic system status text
  const getStatusText = () => {
    if (progress < 25) return 'MENGAKSI INTEL KOSMIK & TELEMETRI...';
    if (progress < 55) return 'MENYINKRONKAN REPOSITORI & ASET VISUAL...';
    if (progress < 85) return 'MEMUAT SISTEM DESAIN & SHIELDS...';
    if (progress < 100) return 'MENGONFIGURASI ANTARMUKA GALAKSI...';
    return 'WARP DRIVE READY · SELAMAT DATANG';
  };

  // SVG circular radius & circumference
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#081426] select-none overflow-hidden"
    >
      {/* Dynamic Ambient Nebula Clouds */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#142A44]/40 via-[#4A74A7]/20 to-transparent blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#38bdf8]/10 blur-[100px] pointer-events-none" />

      {/* Floating Background Dust Points */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-[#DCEAF7] animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-2/3 left-1/5 w-1 h-1 rounded-full bg-[#4A74A7] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
        
        {/* ========================================================
            3D QUANTUM ORBITAL GYROSCOPE CORE
           ======================================================== */}
        <div className="relative w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center mb-8">
          
          {/* Outer Rotating Dashed Planetary Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#4A74A7]/40 animate-[spin_10s_linear_infinite]" />
          
          {/* Counter-Clockwise Dotted Nebula Ring with Satellite Pulse */}
          <div className="absolute inset-3 rounded-full border border-dotted border-[#38bdf8]/30 animate-[spin_16s_linear_infinite_reverse]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
          </div>

          {/* SVG Circular Precision Telemetry Progress Gauge */}
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
            {/* Background Track Ring */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#142A44"
              strokeWidth="4"
              fill="transparent"
              strokeOpacity="0.5"
            />
            {/* Active Drawing Neon Blue Arc */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="url(#preloaderGradient)"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-100 ease-out"
            />
            <defs>
              <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#142A44" />
                <stop offset="50%" stopColor="#4A74A7" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Epic Center Reactor Core (Kayla's Monogram & Digit Counter) */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#142A44] via-[#0e1d32] to-[#081426] border border-[#4A74A7]/50 shadow-[0_0_30px_rgba(56,189,248,0.35)] flex flex-col items-center justify-center p-3 overflow-hidden">
            
            {/* Inner Holographic Glow */}
            <div className="absolute inset-0 bg-[#38bdf8]/10 rounded-full animate-pulse pointer-events-none" />

            {/* Glowing Monogram 'K' */}
            <span className="text-sm font-black font-heading text-[#38bdf8] tracking-widest opacity-80">
              KAYLA.DEV
            </span>

            {/* Large Tabular Numerical Counter */}
            <div className="flex items-baseline gap-0.5 mt-0.5">
              <span className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-white tabular-nums drop-shadow-[0_0_15px_rgba(220,234,247,0.5)]">
                {progress}
              </span>
              <span className="text-xs font-bold font-heading text-[#38bdf8]">%</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            FUTURISTIC SYSTEM TELEMETRY BOOT TEXT
           ======================================================== */}
        <div className="space-y-2.5 w-full">
          {/* Micro Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#142A44]/70 border border-[#4A74A7]/40 text-[10px] font-heading font-semibold text-[#DCEAF7] backdrop-blur-md shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
            <span className="tracking-widest uppercase">KOSMIK BOOT PROTOCOL</span>
          </div>

          {/* Dynamic Console Status Log */}
          <p className="text-xs font-mono font-medium text-neutral-300 tracking-wider h-5 flex items-center justify-center transition-all">
            {getStatusText()}
          </p>

          {/* Slim Secondary Sub-Track */}
          <div className="w-48 mx-auto bg-[#050c18] rounded-full h-1 overflow-hidden border border-[#142A44]/60">
            <div
              className="h-full bg-gradient-to-r from-[#142A44] via-[#4A74A7] to-[#38bdf8] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Realistic smooth percentage increment like modern web apps
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 6) + 4;
        return Math.min(prev + step, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070507] select-none"
    >
      {/* Subtle ambient red glow behind loader */}
      <div className="absolute w-96 h-96 rounded-full bg-red-950/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6 text-center">
        {/* Large clean percentage counter */}
        <span className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6 tabular-nums">
          {progress}
          <span className="text-red-500 text-3xl font-normal ml-1">%</span>
        </span>

        {/* Clean progress bar track */}
        <div className="w-full bg-[#1c0f14] rounded-full h-1.5 p-0 overflow-hidden mb-3.5 border border-red-900/30">
          <div
            className="h-full bg-gradient-to-r from-red-700 to-red-500 rounded-full transition-all duration-100 ease-out shadow-[0_0_10px_rgba(220,38,38,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Minimal clean status */}
        <span className="text-xs text-neutral-400 tracking-wide font-normal">
          Memuat assets...
        </span>
      </div>
    </motion.div>
  );
}

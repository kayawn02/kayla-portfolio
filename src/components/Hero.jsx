import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, MessageSquare, Mail, Instagram } from 'lucide-react';
import { personalInfo } from '../data/socials';
import Lanyard3D from './Lanyard3D';

const roles = [
  'UI/UX Designer',
  'Mobile App Developer (Flutter)',
  'IoT & Embedded System Enthusiast',
  'Software Engineering Student'
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const speed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Subtle Ambient Galaxy Blue Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#142A44]/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#4A74A7]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Typewriter, Bio, CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1.5"
            >
              <p className="text-sm font-semibold tracking-wide text-neutral-400 uppercase font-heading">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] font-heading">
                Kayla Alia{' '}
                <span className="bg-gradient-to-r from-[#DCEAF7] via-[#4A74A7] to-[#38bdf8] bg-clip-text text-transparent">
                  Atarani
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 text-lg sm:text-xl font-medium text-neutral-300 h-8 font-heading"
            >
              <span className="font-bold text-white">{currentText}</span>
              <span className="w-1.5 h-5 bg-[#4A74A7] animate-pulse inline-block rounded-full shadow-[0_0_8px_rgba(74,116,167,0.8)]" />
            </motion.div>

            {/* Bio Description - Clean & Punchy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-lg font-sans"
            >
              UI/UX Designer &amp; Mobile Developer. Mahasiswa D4 Teknologi Rekayasa Perangkat Lunak Polinela yang berfokus membangun produk digital yang fungsional, intuitif, dan berdampak nyata.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2 font-heading"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#142A44] via-[#4A74A7] to-[#142A44] hover:from-[#1c395c] hover:to-[#5a86bc] text-white px-6 py-3.5 rounded-full font-semibold text-sm border border-[#4A74A7]/50 shadow-[0_0_20px_rgba(74,116,167,0.35)] hover:shadow-[0_0_28px_rgba(74,116,167,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Lihat Projek</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#142A44]/50 hover:bg-[#142A44]/90 border border-[#4A74A7]/30 text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:border-[#4A74A7] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Hubungi Saya</span>
              </a>
            </motion.div>

            {/* Social Links Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 text-xs text-neutral-400 font-heading"
            >
              <span className="font-medium tracking-wide">Find me</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#142A44]/60 border border-white/10 hover:border-pink-500/60 flex items-center justify-center text-neutral-400 hover:text-pink-400 hover:scale-110 transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://github.com/kayawn02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#142A44]/60 border border-white/10 hover:border-[#4A74A7] flex items-center justify-center text-neutral-400 hover:text-white hover:scale-110 transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/kaylaatarani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#142A44]/60 border border-white/10 hover:border-sky-500 flex items-center justify-center text-neutral-400 hover:text-white hover:scale-110 transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#142A44]/60 border border-white/10 hover:border-emerald-500/60 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:scale-110 transition-all shadow-sm"
                  aria-label="WhatsApp"
                >
                  <MessageSquare size={16} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-9 h-9 rounded-full bg-[#142A44]/60 border border-white/10 hover:border-[#4A74A7] flex items-center justify-center text-neutral-400 hover:text-[#DCEAF7] hover:scale-110 transition-all shadow-sm"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Interactive Lanyard (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <Lanyard3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

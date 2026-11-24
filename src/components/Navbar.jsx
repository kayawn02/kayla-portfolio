import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { personalInfo } from '../data/socials';
import { playNavClickSound, toggleSound, isSoundEnabled } from '../utils/sound';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hasSound, setHasSound] = useState(true);

  const handleNavClick = () => {
    playNavClickSound();
    if (onNavigate) onNavigate();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'portfolio', 'experience', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`pointer-events-auto max-w-4xl w-full mx-auto px-5 py-2.5 rounded-full flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'bg-[#0e090c]/85 backdrop-blur-xl border border-red-900/30 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(220,38,38,0.12)]'
              : 'bg-[#0e090c]/50 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={handleNavClick}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-bold text-sm text-white shadow-[0_0_12px_rgba(220,38,38,0.4)] group-hover:scale-105 transition-transform">
              K
            </div>
            <span className="font-bold text-sm tracking-tight text-white">
              Kayla<span className="text-red-500">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#160d13]/60 px-2 py-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-red-600/20 border border-red-500/35 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.25)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Available Status Pill, Sound Toggle & Download CV */}
          <div className="hidden sm:flex items-center gap-2.5">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 shadow-sm select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Collab</span>
            </div>

            <button
              onClick={() => {
                const next = toggleSound();
                setHasSound(next);
              }}
              title={hasSound ? 'Suara Navigasi Aktif (Klik untuk mute)' : 'Suara Navigasi Mati (Klik untuk aktifkan)'}
              className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 hover:border-red-500/50 flex items-center justify-center text-neutral-300 hover:text-white transition-all shadow-sm"
              aria-label="Toggle Sound"
            >
              {hasSound ? <Volume2 size={14} className="text-red-400" /> : <VolumeX size={14} className="text-neutral-500" />}
            </button>

            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playNavClickSound()}
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.35)] hover:shadow-[0_0_22px_rgba(220,38,38,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={13} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playNavClickSound();
              setMobileOpen(!mobileOpen);
            }}
            className="md:hidden w-8 h-8 rounded-full bg-red-950/60 border border-red-500/30 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#070507]/95 backdrop-blur-2xl flex flex-col justify-center px-8 pt-16"
          >
            <div className="flex flex-col gap-5 max-w-sm mx-auto w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    playNavClickSound();
                    setMobileOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="text-2xl font-bold text-neutral-300 hover:text-red-400 flex items-center justify-between border-b border-red-950/50 pb-3 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={18} className="text-red-500" />
                </motion.a>
              ))}

              <a
                href={personalInfo.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  playNavClickSound();
                  setMobileOpen(false);
                }}
                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3.5 rounded-full text-sm shadow-[0_0_20px_rgba(220,38,38,0.4)]"
              >
                <Download size={16} />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

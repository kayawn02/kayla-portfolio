import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Palette,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Compass,
  Eye,
  Check
} from 'lucide-react';
import { designCategories, logos, socialMediaPosts } from '../data/designs';
import { playNavClickSound, playCardHoverSound } from '../utils/sound';

export default function GraphicDesignShowcase() {
  const [activeCategory, setActiveCategory] = useState('Sosial Media');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [logoBgMode, setLogoBgMode] = useState('galaxy'); // 'galaxy' | 'navy' | 'light'

  const totalSlides = socialMediaPosts.length;
  const currentPost = socialMediaPosts[currentSlideIndex] || socialMediaPosts[0];

  const handlePrevSlide = () => {
    playNavClickSound();
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    playNavClickSound();
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleSelectSlide = (idx) => {
    playNavClickSound();
    setCurrentSlideIndex(idx);
  };

  // Keyboard navigation for slider
  useEffect(() => {
    if (activeCategory !== 'Sosial Media') return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrevSlide();
      if (e.key === 'ArrowRight') handleNextSlide();
      if (e.key === 'Escape') setLightboxImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCategory, totalSlides]);

  return (
    <div className="space-y-10">
      
      {/* 2-Category Pill Switcher: Sosial Media & Logo */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-full bg-[#081426]/90 border border-[#4A74A7]/30 backdrop-blur-xl shadow-lg">
          {designCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playNavClickSound();
                  setActiveCategory(cat);
                }}
                className={`relative px-6 py-2.5 rounded-full text-xs font-heading font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="graphicDesignCategoryPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#142A44] to-[#4A74A7] border border-[#38bdf8]/40 shadow-[0_0_15px_rgba(74,116,167,0.4)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat === 'Sosial Media' ? <ImageIcon size={14} /> : <Compass size={14} />}
                  <span>{cat}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          MODE 1: UNIFIED SOSIAL MEDIA & PUBLICATION SLIDER
          (All 15 works in ONE slideable showcase like user reference)
         ======================================================== */}
      {activeCategory === 'Sosial Media' && (
        <motion.div
          key="sosial-media-slider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Main Featured Showcase Stage */}
          <div className="rounded-3xl border border-[#4A74A7]/30 bg-gradient-to-b from-[#142A44]/80 via-[#0e1d32]/90 to-[#081426]/95 backdrop-blur-2xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
            
            {/* Ambient Background Nebulae */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A74A7]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#142A44]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Slide Visual Frame with Prev/Next Controls (7 cols) */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="relative w-full max-w-xl aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-[#050c18] border border-[#4A74A7]/30 shadow-2xl flex items-center justify-center p-3 sm:p-5 group select-none">
                  
                  {/* Active Slide Image */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPost.id}
                      src={currentPost.image}
                      alt={currentPost.title}
                      initial={{ opacity: 0, scale: 0.94, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 0.94, filter: 'blur(4px)' }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="max-w-full max-h-full object-contain filter drop-shadow-2xl cursor-zoom-in"
                      onClick={() => setLightboxImage(currentPost.image)}
                    />
                  </AnimatePresence>

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-heading font-semibold bg-[#081426]/90 border border-[#4A74A7]/40 text-[#DCEAF7] backdrop-blur-md shadow-lg">
                      {currentPost.category}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage(currentPost.image);
                      }}
                      className="p-2 rounded-full bg-[#081426]/85 border border-[#4A74A7]/30 text-neutral-300 hover:text-white hover:border-[#38bdf8] backdrop-blur-md pointer-events-auto transition-colors"
                      title="Perbesar gambar"
                    >
                      <Maximize2 size={14} />
                    </button>
                  </div>

                  {/* Embedded Prev / Next Buttons */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#081426]/90 hover:bg-[#142A44] border border-[#4A74A7]/40 hover:border-[#38bdf8] text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
                    title="Slide sebelumnya"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#081426]/90 hover:bg-[#142A44] border border-[#4A74A7]/40 hover:border-[#38bdf8] text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
                    title="Slide berikutnya"
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Counter & Action Hint */}
                <div className="mt-3 flex items-center justify-between w-full max-w-xl px-2 text-xs font-heading text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#38bdf8] font-bold">
                      {String(currentSlideIndex + 1).padStart(2, '0')}
                    </span>
                    <span>/</span>
                    <span>{String(totalSlides).padStart(2, '0')} Karya</span>
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    Gunakan tombol panah atau thumbnail di bawah
                  </span>
                </div>
              </div>

              {/* Right Column: Slide Context & Details (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-heading font-semibold bg-[#142A44]/80 border border-[#4A74A7]/30 text-[#DCEAF7]">
                      {currentPost.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-neutral-400 bg-[#081426]/80 border border-white/5">
                      {currentPost.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight leading-snug">
                    {currentPost.title}
                  </h3>

                  <p className="text-sm text-neutral-300 font-sans mt-3 leading-relaxed">
                    {currentPost.summary}
                  </p>
                </div>

                {/* Metadata Pod */}
                <div className="p-4 rounded-2xl bg-[#081426]/70 border border-[#4A74A7]/20 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-heading">
                    <span className="text-neutral-400">Software Desain:</span>
                    <span className="text-[#DCEAF7] font-semibold">{currentPost.tool}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-heading">
                    <span className="text-neutral-400">Format Publikasi:</span>
                    <span className="text-[#38bdf8] font-semibold">{currentPost.category}</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setLightboxImage(currentPost.image)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#142A44] to-[#4A74A7] hover:from-[#1b385a] hover:to-[#5a86bc] text-white text-xs font-heading font-semibold shadow-[0_0_15px_rgba(74,116,167,0.35)] transition-all hover:scale-105"
                  >
                    <Maximize2 size={13} />
                    <span>Lihat Ukuran Penuh</span>
                  </button>

                  <div className="flex items-center gap-1.5 ml-auto">
                    <button
                      onClick={handlePrevSlide}
                      className="p-2.5 rounded-xl bg-[#081426] border border-[#4A74A7]/30 hover:border-[#38bdf8] text-white transition-all hover:scale-105"
                      title="Sebelumnya"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="p-2.5 rounded-xl bg-[#081426] border border-[#4A74A7]/30 hover:border-[#38bdf8] text-white transition-all hover:scale-105"
                      title="Berikutnya"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Horizontal Thumbnails Rail (Like user reference Image 1) */}
            <div className="mt-8 pt-6 border-t border-[#4A74A7]/15 space-y-3">
              <div className="flex items-center justify-between text-xs font-heading text-neutral-400">
                <span className="font-semibold text-[#DCEAF7]">Koleksi Feed &amp; Publikasi Digital</span>
                <span>Klik thumbnail untuk beralih</span>
              </div>

              {/* Scrollable Thumbnails Strip */}
              <div className="flex gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-[#4A74A7]/40">
                {socialMediaPosts.map((post, idx) => {
                  const isSelected = idx === currentSlideIndex;
                  return (
                    <button
                      key={post.id}
                      onClick={() => handleSelectSlide(idx)}
                      className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border transition-all duration-300 p-1.5 bg-[#050c18] ${
                        isSelected
                          ? 'border-[#38bdf8] ring-2 ring-[#38bdf8]/40 scale-105 shadow-[0_0_15px_rgba(56,189,248,0.35)]'
                          : 'border-[#4A74A7]/25 hover:border-[#4A74A7]/70 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-contain filter drop-shadow-sm"
                        loading="lazy"
                      />
                      <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-[#081426]/90 text-[9px] font-mono font-bold text-white">
                        {idx + 1}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>
      )}

      {/* ========================================================
          MODE 2: 4 ROUND LOGOS CREATIVE 3D SHOWCASE
          (Kabinet Sankara, Techno Village 2026, FertiFlow, Innovation 4Force)
         ======================================================== */}
      {activeCategory === 'Logo' && (
        <motion.div
          key="logo-creative-showcase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Top Mood Ambient Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#081426]/80 border border-[#4A74A7]/30 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#38bdf8]" />
              <span className="text-xs font-heading font-semibold text-[#DCEAF7]">
                Koleksi Logo Bundar &amp; Identitas Vektor
              </span>
            </div>

            {/* Background Mood Pills */}
            <div className="flex items-center gap-1.5 bg-[#050c18] p-1 rounded-full border border-[#4A74A7]/20 text-[11px] font-heading">
              <span className="px-2.5 text-neutral-400">Latar:</span>
              {[
                { id: 'galaxy', label: 'Galaksi' },
                { id: 'navy', label: 'Deep Navy' },
                { id: 'light', label: 'Terang' }
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => {
                    playNavClickSound();
                    setLogoBgMode(mode.id);
                  }}
                  className={`px-3 py-1 rounded-full transition-all ${
                    logoBgMode === mode.id
                      ? 'bg-gradient-to-r from-[#142A44] to-[#4A74A7] text-white font-semibold shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Round Logo Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {logos.map((logo, idx) => {
              // Dynamic background style per selected mode
              const cardBgClass =
                logoBgMode === 'light'
                  ? 'bg-neutral-100 text-neutral-900 border-neutral-300 shadow-xl'
                  : logoBgMode === 'navy'
                  ? 'bg-[#102238] border-[#4A74A7]/40 text-[#DCEAF7]'
                  : 'bg-gradient-to-b from-[#142A44]/80 via-[#0e1d32]/90 to-[#081426]/95 border-[#4A74A7]/30 text-[#DCEAF7]';

              const imageBgClass =
                logoBgMode === 'light'
                  ? 'bg-white border-neutral-200'
                  : logoBgMode === 'navy'
                  ? 'bg-[#0b1726] border-[#4A74A7]/30'
                  : 'bg-[#050c18] border-[#4A74A7]/25';

              return (
                <motion.div
                  key={logo.id}
                  initial={{ opacity: 0, y: 25, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: idx * 0.1, type: 'spring', stiffness: 120, damping: 16 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onMouseEnter={() => playCardHoverSound()}
                  className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl relative overflow-hidden group select-none ${cardBgClass}`}
                >
                  {/* Top Edge Starlight Shimmer */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4A74A7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Header Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-heading font-semibold uppercase bg-[#081426]/70 border border-[#4A74A7]/30 text-[#38bdf8] backdrop-blur-md">
                      {logo.badge}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {logo.year}
                    </span>
                  </div>

                  {/* Circular Logo Visual Frame */}
                  <div className={`relative aspect-square w-full rounded-full overflow-hidden border p-6 flex items-center justify-center my-3 transition-transform duration-500 group-hover:scale-105 ${imageBgClass}`}>
                    
                    {/* Rotating Orbital Dashed Ring on Hover */}
                    <div className="absolute inset-2 rounded-full border border-dashed border-[#4A74A7]/40 group-hover:border-[#38bdf8] opacity-0 group-hover:opacity-100 animate-[spin_12s_linear_infinite] transition-opacity duration-300 pointer-events-none" />

                    <img
                      src={logo.image}
                      alt={logo.title}
                      className="w-full h-full object-contain filter drop-shadow-xl cursor-zoom-in"
                      onClick={() => setLightboxImage(logo.image)}
                    />
                  </div>

                  {/* Minimal Text Info */}
                  <div className="space-y-1.5 pt-3">
                    <h4 className="text-base font-extrabold font-heading text-white group-hover:text-[#38bdf8] transition-colors leading-snug">
                      {logo.title}
                    </h4>
                    <p className="text-xs text-neutral-300 font-sans line-clamp-2 leading-relaxed">
                      {logo.summary}
                    </p>
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-heading text-neutral-400">
                    <span>{logo.tool}</span>
                    <button
                      onClick={() => setLightboxImage(logo.image)}
                      className="text-[#38bdf8] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Eye size={12} />
                      <span>Detail</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* ========================================================
          FULLSCREEN LIGHTBOX MODAL (HIGH-RES PREVIEW)
         ======================================================== */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            >
              <img
                src={lightboxImage}
                alt="Enlarged design view"
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-[#4A74A7]/30 bg-[#050c18]"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#081426]/90 border border-white/20 text-white hover:bg-[#142A44] transition-all hover:scale-110"
                aria-label="Tutup preview"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

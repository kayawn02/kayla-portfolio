import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Compass,
  Image as ImageIcon,
  Sparkles,
  Eye
} from 'lucide-react';
import { designCategories, logos, socialMediaPosts } from '../data/designs';
import { playNavClickSound, playCardHoverSound } from '../utils/sound';

// 3D Center Artwork Card with Interactive Cursor Parallax Tilt & Specular Sheen
function CenterCard3D({ post, onZoom }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false, mouseX: 0, mouseY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setTilt({
      x: x * 8,
      y: -y * 8,
      active: true,
      mouseX: e.clientX - rect.left,
      mouseY: e.clientY - rect.top,
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
      style={{
        transformStyle: 'preserve-3d',
      }}
      className="relative w-full aspect-[4/5] sm:aspect-square max-w-[460px] max-h-[520px] rounded-2xl bg-[#060e1c] border-2 border-[#38bdf8]/50 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(56,189,248,0.25)] overflow-hidden flex items-center justify-center p-4 sm:p-6 cursor-zoom-in group select-none"
      onClick={onZoom}
    >
      {/* Specular Dynamic Sheen */}
      {tilt.active && (
        <div
          className="absolute pointer-events-none rounded-full blur-2xl opacity-50 z-20"
          style={{
            width: '200px',
            height: '200px',
            left: `${tilt.mouseX}px`,
            top: `${tilt.mouseY}px`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Top Laser Border Edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent z-20" />

      {/* 3D Image Layer */}
      <motion.img
        src={post.image}
        alt="Karya Desain Grafis"
        style={{ transform: 'translateZ(25px)' }}
        className="max-w-full max-h-full object-contain filter drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
      />

      {/* Zoom Indicator Icon on Hover */}
      <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-[#081426]/90 border border-[#38bdf8]/40 text-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md shadow-lg pointer-events-none z-30">
        <Maximize2 size={16} />
      </div>
    </motion.div>
  );
}

export default function GraphicDesignShowcase() {
  const [activeCategory, setActiveCategory] = useState('Sosial Media');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [logoBgMode, setLogoBgMode] = useState('galaxy'); // 'galaxy' | 'navy' | 'light'

  const totalSlides = socialMediaPosts.length;
  const currentPost = socialMediaPosts[currentSlideIndex] || socialMediaPosts[0];
  const prevSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  const nextSlideIndex = (currentSlideIndex + 1) % totalSlides;
  const prevPost = socialMediaPosts[prevSlideIndex] || socialMediaPosts[0];
  const nextPost = socialMediaPosts[nextSlideIndex] || socialMediaPosts[0];

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
    <div className="space-y-8">
      
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
          MODE 1: 3D HORIZON COVERFLOW GALLERY (ZERO TEXT / ZERO KETERANGAN)
          100% Focused on Kayla's Visual Artwork with 3D Depth
         ======================================================== */}
      {activeCategory === 'Sosial Media' && (
        <motion.div
          key="sosial-media-slider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="space-y-5"
        >
          {/* Main 3D Coverflow Container */}
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl border border-[#4A74A7]/30 bg-gradient-to-b from-[#142A44]/50 via-[#0a1526]/80 to-[#081426]/95 backdrop-blur-2xl p-4 sm:p-7 shadow-2xl overflow-hidden flex flex-col items-center">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4A74A7]/15 rounded-full blur-[120px] pointer-events-none" />

            {/* Top Bar: Slide Index Counter + Zoom */}
            <div className="w-full flex items-center justify-between px-2 mb-3 relative z-20">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#081426]/85 border border-[#4A74A7]/40 text-[#DCEAF7] backdrop-blur-md shadow-sm">
                {String(currentSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
              </span>
              <button
                onClick={() => setLightboxImage(currentPost.image)}
                className="p-2.5 rounded-full bg-[#081426]/85 border border-[#4A74A7]/40 text-neutral-300 hover:text-white hover:border-[#38bdf8] backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-md"
                title="Perbesar gambar"
                aria-label="Maximize View"
              >
                <Maximize2 size={15} />
              </button>
            </div>

            {/* 3D Perspective Gallery Area */}
            <div
              className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[520px] py-2 overflow-hidden"
              style={{ perspective: 1200 }}
            >
              {/* Left 3D Angled Neighbor Card (Previous) */}
              <div className="hidden md:block absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-10">
                <motion.div
                  onClick={handlePrevSlide}
                  initial={{ rotateY: 28, z: -80, scale: 0.82, opacity: 0.45 }}
                  animate={{ rotateY: 28, z: -80, scale: 0.82, opacity: 0.45 }}
                  whileHover={{ rotateY: 16, z: -30, scale: 0.88, opacity: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  style={{
                    transformOrigin: 'right center',
                    transformStyle: 'preserve-3d',
                  }}
                  className="w-[260px] lg:w-[320px] aspect-[4/5] sm:aspect-square rounded-2xl bg-[#060e1c]/95 border border-[#4A74A7]/40 shadow-2xl overflow-hidden flex items-center justify-center p-3 cursor-pointer select-none"
                  title="Klik untuk ke karya sebelumnya"
                >
                  <img
                    src={prevPost.image}
                    alt=""
                    className="max-w-full max-h-full object-contain filter drop-shadow-md pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#081426]/60 pointer-events-none" />
                </motion.div>
              </div>

              {/* Center Active 3D Card with Cursor Parallax Tilt */}
              <div className="relative z-30 flex items-center justify-center w-full max-w-[460px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPost.id}
                    initial={{ opacity: 0, scale: 0.92, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -12 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 25 }}
                    className="w-full flex justify-center"
                  >
                    <CenterCard3D
                      post={currentPost}
                      onZoom={() => setLightboxImage(currentPost.image)}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right 3D Angled Neighbor Card (Next) */}
              <div className="hidden md:block absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-10">
                <motion.div
                  onClick={handleNextSlide}
                  initial={{ rotateY: -28, z: -80, scale: 0.82, opacity: 0.45 }}
                  animate={{ rotateY: -28, z: -80, scale: 0.82, opacity: 0.45 }}
                  whileHover={{ rotateY: -16, z: -30, scale: 0.88, opacity: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  style={{
                    transformOrigin: 'left center',
                    transformStyle: 'preserve-3d',
                  }}
                  className="w-[260px] lg:w-[320px] aspect-[4/5] sm:aspect-square rounded-2xl bg-[#060e1c]/95 border border-[#4A74A7]/40 shadow-2xl overflow-hidden flex items-center justify-center p-3 cursor-pointer select-none"
                  title="Klik untuk ke karya berikutnya"
                >
                  <img
                    src={nextPost.image}
                    alt=""
                    className="max-w-full max-h-full object-contain filter drop-shadow-md pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#081426]/60 pointer-events-none" />
                </motion.div>
              </div>

              {/* Floating Prev Button */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#081426]/90 hover:bg-[#142A44] border border-[#4A74A7]/40 hover:border-[#38bdf8] text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 z-40"
                title="Slide sebelumnya"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Floating Next Button */}
              <button
                onClick={handleNextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#081426]/90 hover:bg-[#142A44] border border-[#4A74A7]/40 hover:border-[#38bdf8] text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 z-40"
                title="Slide berikutnya"
                aria-label="Next Slide"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Horizontal Thumbnails Rail (Quick Jump to any of the 15 edits) */}
            <div className="w-full mt-4 pt-4 border-t border-[#4A74A7]/20 relative z-20">
              <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#4A74A7]/40 px-1">
                {socialMediaPosts.map((post, idx) => {
                  const isSelected = idx === currentSlideIndex;
                  return (
                    <button
                      key={post.id}
                      onClick={() => handleSelectSlide(idx)}
                      className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border transition-all duration-300 p-1 bg-[#050c18] ${
                        isSelected
                          ? 'border-[#38bdf8] ring-2 ring-[#38bdf8]/60 scale-105 shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                          : 'border-[#4A74A7]/25 hover:border-[#4A74A7]/70 opacity-60 hover:opacity-100'
                      }`}
                      title={`Karya ${idx + 1}`}
                    >
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-contain filter drop-shadow-sm"
                        loading="lazy"
                      />
                      <div className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-[#081426]/90 text-[8px] font-mono font-bold text-white">
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
          transition={{ duration: 0.35 }}
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
                alt="Enlarged view"
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

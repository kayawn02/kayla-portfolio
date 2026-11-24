import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers, Palette, Eye, Download } from 'lucide-react';
import { FigmaLogo, CanvaLogo } from './TechLogos';

export default function DesignModal({ design, onClose }) {
  if (!design) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0e070d] border border-red-700/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] my-8 max-h-[90vh] flex flex-col relative"
        >
          {/* Top Glow Header Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent z-10" />

          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/50 backdrop-blur-sm shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-red-950/70 border border-red-600/40 text-red-300">
                {design.category}
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                {design.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-red-950/60 border border-white/10 hover:border-red-600/40 text-neutral-400 hover:text-white transition-all duration-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Title & Badge */}
            <div>
              {design.award && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/30 border border-amber-600/30 text-amber-300 text-xs font-semibold mb-3">
                  <Sparkles size={13} className="text-amber-400" />
                  <span>{design.award}</span>
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {design.title}
              </h2>
              <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                {design.summary}
              </p>
            </div>

            {/* Design Showcase Visual Preview Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl group">
              <img
                src={design.image}
                alt={design.title}
                className="w-full max-h-[380px] object-contain p-4 bg-[#0a0509]"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/80 border border-white/15 text-[11px] font-mono text-white backdrop-blur-md flex items-center gap-1.5">
                  <Layers size={13} className="text-red-400" />
                  <span>{design.screensCount}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-black/80 border border-white/15 text-[11px] font-mono text-white backdrop-blur-md flex items-center gap-1.5">
                  {design.tool.includes('Figma') ? <FigmaLogo className="w-3.5 h-3.5" /> : <CanvaLogo className="w-3.5 h-3.5" />}
                  <span>{design.tool}</span>
                </span>
              </div>
            </div>

            {/* Highlights Chips */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2.5">
                Karakteristik &amp; Fokus Desain
              </p>
              <div className="flex flex-wrap gap-2">
                {design.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-red-950/30 border border-red-700/30 text-red-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Detail Problem & Solution Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <p className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  Tantangan Desain
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {design.details.problem}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Solusi Antarmuka
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {design.details.solution}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2.5">
                Output Karya (Deliverables)
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {design.details.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 size={14} className="text-red-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:px-8 sm:py-5 border-t border-white/10 bg-black/60 flex items-center justify-between shrink-0">
            <span className="text-xs text-neutral-400 font-mono">
              Peran: <strong className="text-white">{design.role}</strong>
            </span>
            <div className="flex items-center gap-3">
              {design.figmaUrl && (
                <a
                  href={design.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-red-900/40 transition-all hover:scale-105"
                >
                  <ExternalLink size={14} />
                  <span>Buka di Figma</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 hover:text-white text-xs font-medium transition-all"
              >
                Tutup
              </button>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

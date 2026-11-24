import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/socials';
import { playNavClickSound } from '../utils/sound';

export default function CVSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ type: 'spring', stiffness: 90, damping: 16 }}
          className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-[#142A44]/60 via-[#0e1d32]/80 to-[#081426] border border-[#4A74A7]/30 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(74,116,167,0.15)] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#4A74A7]/20 blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#142A44] to-[#4A74A7] flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(74,116,167,0.5)]">
              <FileText size={30} />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-widest text-[#4A74A7] uppercase font-bold">
                  Curriculum Vitae
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#142A44] border border-[#4A74A7]/40 text-[#DCEAF7]">
                  PDF TERVERIFIKASI
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#DCEAF7] tracking-tight">
                Unduh Profil &amp; Riwayat Lengkap
              </h3>
              <p className="text-sm text-neutral-300 max-w-lg">
                Dokumen resmi memuat riwayat akademik, projek rekayasa, keahlian teknis, dan kontak.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 relative z-10 w-full md:w-auto">
            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playNavClickSound()}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#142A44] to-[#4A74A7] hover:from-[#1b385a] hover:to-[#5a86bc] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-[0_0_20px_rgba(74,116,167,0.4)] hover:shadow-[0_0_30px_rgba(74,116,167,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <Download size={16} />
              <span>Download CV (PDF)</span>
            </a>

            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playNavClickSound()}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-[#081426] hover:bg-[#142A44]/60 border border-[#4A74A7]/30 text-neutral-300 hover:text-white font-medium text-sm px-5 py-3.5 rounded-full transition-colors whitespace-nowrap"
            >
              <Eye size={16} />
              <span>Buka di Tab Baru</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

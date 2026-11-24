import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Award, CheckCircle2, Layers } from 'lucide-react';
import {
  FigmaLogo,
  FlutterLogo,
  DartLogo,
  Esp32Logo,
  ArduinoLogo,
  Html5Logo,
  Css3Logo,
  WordPressLogo,
  GitLogo,
  GitHubLogo,
  CanvaLogo,
  VSCodeLogo
} from './TechLogos';

const toolLogoMap = {
  'Figma': FigmaLogo,
  'Flutter': FlutterLogo,
  'Dart': DartLogo,
  'ESP32': Esp32Logo,
  'Arduino': ArduinoLogo,
  'Canva': CanvaLogo,
  'HTML5': Html5Logo,
  'CSS3': Css3Logo,
  'Git': GitLogo,
  'GitHub': GitHubLogo,
  'WordPress': WordPressLogo,
  'VS Code': VSCodeLogo,
};

export default function ProjectModal({ project, isOpen = true, onClose }) {
  if (!project) return null;

  const d = project.details;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-[4%] bottom-[4%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-2xl md:w-full z-50 overflow-y-auto rounded-3xl bg-[#081426] border border-[#4A74A7]/35 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(74,116,167,0.25)]"
          >
            {/* Header Bar */}
            <div className="sticky top-0 bg-[#081426]/95 backdrop-blur-md border-b border-[#4A74A7]/20 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4A74A7] animate-pulse" />
                <span className="text-xs font-mono text-[#DCEAF7] uppercase tracking-wider">
                  Detail Studi Kasus
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#142A44]/60 border border-[#4A74A7]/30 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-[#142A44] transition-colors"
                aria-label="Tutup"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-7">
              {/* Title & Metadata */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#142A44]/80 border border-[#4A74A7]/40 text-[#DCEAF7]">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#081426] border border-white/10 text-neutral-300">
                    {project.year}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#081426] border border-white/10 text-neutral-300">
                    {project.role}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  {project.title}
                </h2>
              </div>

              {/* Award Callout */}
              {project.award && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#142A44] via-[#0e1d32] to-[#081426] border border-[#38bdf8]/40 flex items-start gap-3 shadow-lg">
                  <Award size={20} className="text-[#38bdf8] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] font-bold">Pencapaian Juara</p>
                    <p className="text-sm font-semibold text-[#DCEAF7]">{project.award}</p>
                  </div>
                </div>
              )}

              {/* Overview / Ringkasan */}
              <div>
                <h3 className="text-xs font-mono text-[#4A74A7] uppercase tracking-widest mb-2">Ringkasan Proyek</h3>
                <p className="text-sm text-neutral-300 leading-relaxed bg-[#142A44]/30 p-4 rounded-2xl border border-[#4A74A7]/20">
                  {project.summary}
                </p>
              </div>

              {/* Background & Goals */}
              {d?.latarBelakang && (
                <div>
                  <h3 className="text-xs font-mono text-[#4A74A7] uppercase tracking-widest mb-2">Latar Belakang &amp; Masalah</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {d.latarBelakang}
                  </p>
                </div>
              )}

              {d?.tujuan && (
                <div>
                  <h3 className="text-xs font-mono text-[#4A74A7] uppercase tracking-widest mb-2">Tujuan Proyek</h3>
                  <div className="space-y-2">
                    {d.tujuan.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <CheckCircle2 size={16} className="text-[#4A74A7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* My Role */}
              {d?.peranSaya && (
                <div>
                  <h3 className="text-xs font-mono text-[#4A74A7] uppercase tracking-widest mb-2">Peran &amp; Tanggung Jawab</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {d.peranSaya}
                  </p>
                </div>
              )}

              {/* Key Features */}
              {d?.fiturUtama && (
                <div>
                  <h3 className="text-xs font-mono text-[#4A74A7] uppercase tracking-widest mb-3">Fitur Utama</h3>
                  <div className="space-y-3">
                    {d.fiturUtama.map((f, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-[#142A44]/40 border border-[#4A74A7]/25">
                        <p className="text-sm font-bold text-white mb-1">{f.judul}</p>
                        <p className="text-xs text-neutral-400 leading-relaxed">{f.deskripsi}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contribution Points */}
              {project.points && (
                <div>
                  <h3 className="text-xs font-mono text-[#4A74A7] uppercase tracking-widest mb-2">Kontribusi Utama</h3>
                  <div className="space-y-2">
                    {project.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <span className="text-[#4A74A7] mt-0.5 font-bold">&bull;</span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcome */}
              {d?.hasilPencapaian && (
                <div>
                  <h3 className="text-xs font-mono text-[#4A74A7] uppercase tracking-widest mb-2">Hasil &amp; Dampak</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {d.hasilPencapaian}
                  </p>
                </div>
              )}

              {/* Tech Stack Chips with Official Vector Logos */}
              <div>
                <h3 className="text-xs font-mono text-[#4A74A7] uppercase tracking-widest mb-3">Alat &amp; Teknologi yang Digunakan</h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.tools?.map((toolName) => {
                    const IconComponent = toolLogoMap[toolName];
                    return (
                      <span
                        key={toolName}
                        className="inline-flex items-center gap-2 text-xs font-medium text-neutral-200 bg-white/[0.04] border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-sm"
                      >
                        {IconComponent && <IconComponent className="w-4 h-4" />}
                        <span>{toolName}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Links Action */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#4A74A7]/20">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#142A44]/60 hover:bg-[#142A44] border border-[#4A74A7]/40 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors font-heading"
                  >
                    <Github size={14} />
                    <span>Lihat Repository GitHub</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#142A44] to-[#4A74A7] hover:from-[#1b385a] hover:to-[#5a86bc] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(74,116,167,0.4)] transition-all hover:scale-[1.02] font-heading"
                  >
                    <ExternalLink size={14} />
                    <span>{project.demo.includes('figma.com') ? 'Buka Prototype Figma' : 'Buka Demo Projek'}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

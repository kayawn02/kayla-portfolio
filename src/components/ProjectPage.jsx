import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Award, CheckCircle2, Cpu, Smartphone, Cloud, Layers, Compass } from 'lucide-react';
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
import { playNavClickSound } from '../utils/sound';

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

export default function ProjectPage({ project, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) return null;

  const handleBack = () => {
    playNavClickSound();
    onBack();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen bg-[#070507] text-[#f1f5f9] pt-24 pb-28 px-6 relative z-30"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Top Floating Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-red-500/50 text-neutral-300 hover:text-white text-xs font-semibold backdrop-blur-md transition-all hover:scale-105"
          >
            <ArrowLeft size={14} className="text-red-400" />
            <span>Kembali ke Portofolio</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="px-3 py-1 rounded-full bg-red-950/40 border border-red-700/30 text-red-300">
              {project.category}
            </span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 text-left">
          {project.award && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/30 border border-amber-600/40 text-amber-300 text-xs font-semibold">
              <Award size={14} className="text-amber-400" />
              <span>{project.award}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            {project.summary}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
            <div>
              <span className="text-neutral-500">Peran:</span>{' '}
              <span className="text-white font-medium">{project.role}</span>
            </div>
            <span>&bull;</span>
            <div>
              <span className="text-neutral-500">Kategori:</span>{' '}
              <span className="text-white font-medium">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Featured Showcase Visual */}
        <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black/60 relative group">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-glass p-7 rounded-2xl space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-red-400">
              Latar Belakang &amp; Tantangan
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.details?.latarBelakang || project.summary}
            </p>
          </div>

          <div className="card-glass p-7 rounded-2xl space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-red-400">
              Solusi &amp; Kontribusi Saya
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.details?.peranSaya || 'Mengembangkan aplikasi dan perancangan antarmuka pengguna secara end-to-end.'}
            </p>
          </div>
        </div>

        {/* Key Features */}
        {project.details?.fiturUtama && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white tracking-tight">
              Fitur &amp; Kemampuan Utama
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {project.details.fiturUtama.map((feat, i) => (
                <div key={i} className="card-glass p-5 rounded-2xl space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-red-950/50 border border-red-700/30 flex items-center justify-center text-red-400 text-xs font-bold">
                    0{i + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white">{feat.judul}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{feat.deskripsi}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools & Technologies Used */}
        <div className="card-glass p-7 rounded-2xl space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-red-400">
            Alat &amp; Teknologi
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tools?.map((toolName) => {
              const Icon = toolLogoMap[toolName];
              return (
                <div
                  key={toolName}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-sm"
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  <span className="text-xs font-semibold text-neutral-200">{toolName}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* External Links & Back Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-semibold transition-all hover:scale-105"
          >
            <ArrowLeft size={14} />
            <span>Kembali ke Portofolio</span>
          </button>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-semibold transition-colors"
              >
                <Github size={14} />
                <span>Repositori GitHub</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
              >
                <ExternalLink size={14} />
                <span>Buka Prototipe</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

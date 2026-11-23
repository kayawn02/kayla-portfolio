import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, ExternalLink, ArrowUpRight, CheckCircle2, Code2, Eye, Download, X, Calendar, MapPin, FileCheck, Layers, Cpu, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { certificates, achievements } from '../data/certificates';
import { playNavClickSound } from '../utils/sound';
import {
  FigmaLogo,
  FlutterLogo,
  DartLogo,
  Esp32Logo,
  ArduinoLogo,
  Html5Logo,
  Css3Logo,
  TailwindLogo,
  FirebaseLogo,
  WordPressLogo,
  GitLogo,
  GitHubLogo,
  CanvaLogo,
  VSCodeLogo
} from './TechLogos';

// Clean minimalist tech stack strictly from Kayla's CV with official vector logos & brand glow
const cvTechStack = [
  { name: 'Figma', Logo: FigmaLogo, glow: 'rgba(162, 89, 255, 0.45)' },
  { name: 'Flutter', Logo: FlutterLogo, glow: 'rgba(2, 117, 194, 0.45)' },
  { name: 'Dart', Logo: DartLogo, glow: 'rgba(0, 180, 171, 0.45)' },
  { name: 'ESP32', Logo: Esp32Logo, glow: 'rgba(239, 68, 68, 0.45)' },
  { name: 'Arduino', Logo: ArduinoLogo, glow: 'rgba(0, 151, 157, 0.45)' },
  { name: 'HTML5', Logo: Html5Logo, glow: 'rgba(241, 101, 41, 0.45)' },
  { name: 'CSS3', Logo: Css3Logo, glow: 'rgba(41, 101, 241, 0.45)' },
  { name: 'Tailwind CSS', Logo: TailwindLogo, glow: 'rgba(56, 189, 248, 0.45)' },
  { name: 'Firebase', Logo: FirebaseLogo, glow: 'rgba(245, 124, 0, 0.45)' },
  { name: 'WordPress', Logo: WordPressLogo, glow: 'rgba(33, 117, 155, 0.45)' },
  { name: 'Git', Logo: GitLogo, glow: 'rgba(240, 80, 50, 0.45)' },
  { name: 'GitHub', Logo: GitHubLogo, glow: 'rgba(255, 255, 255, 0.35)' },
  { name: 'Canva', Logo: CanvaLogo, glow: 'rgba(125, 42, 232, 0.45)' },
  { name: 'VS Code', Logo: VSCodeLogo, glow: 'rgba(0, 122, 204, 0.45)' },
];

const toolLogoMap = {
  'Figma': FigmaLogo,
  'Flutter': FlutterLogo,
  'Dart': DartLogo,
  'ESP32': Esp32Logo,
  'Arduino': ArduinoLogo,
  'Canva': CanvaLogo,
  'HTML5': Html5Logo,
  'CSS3': Css3Logo,
  'Tailwind CSS': TailwindLogo,
  'Firebase': FirebaseLogo,
  'Git': GitLogo,
  'GitHub': GitHubLogo,
  'WordPress': WordPressLogo,
  'VS Code': VSCodeLogo,
};

const tabsConfig = [
  { id: 'Projects', label: 'Projects', icon: Code2 },
  { id: 'Certificates', label: 'Certificates', icon: Award },
  { id: 'Achievements', label: 'Achievements', icon: Trophy },
  { id: 'Tech Stack', label: 'Tech Stack', icon: Cpu },
];

export default function PortfolioShowcase({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('Projects');
  const [selectedCert, setSelectedCert] = useState(null);

  const handleTabChange = (tabId) => {
    playNavClickSound();
    setActiveTab(tabId);
  };

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-2">
            Portofolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projek, Prestasi &amp; Sertifikat
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5 max-w-md mx-auto">
            Karya aplikasi nyata, dokumen prestasi resmi, dan keahlian teknologi.
          </p>
        </div>

        {/* Tab Selector Capsule (Identical layout to Alfari reference with subtab icons) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl sm:rounded-full bg-[#120a13]/80 border border-white/10 shadow-lg backdrop-blur-md flex-wrap justify-center gap-1">
            {tabsConfig.map((tab) => {
              const isActive = activeTab === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive ? 'text-white font-semibold shadow-md' : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-tab-pill"
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-xl sm:rounded-full shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <TabIcon size={14} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          
          {/* ===================== PROJECTS TAB ===================== */}
          {activeTab === 'Projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {projects.map((proj, idx) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ type: 'spring', stiffness: 110, damping: 18, delay: idx * 0.15 }}
                  whileHover={{ y: -8 }}
                  onClick={() => onSelectProject && onSelectProject(proj)}
                  className="card-glass card-interactive rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-red-600/50 flex flex-col"
                >
                  {/* Thumbnail Container */}
                  <div className="h-56 w-full relative overflow-hidden bg-black/40">
                    <img
                      src={proj.thumbnail}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d080c] via-transparent to-transparent opacity-90" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-red-950/80 text-red-300 border border-red-700/40 backdrop-blur-md">
                      {proj.category}
                    </span>
                    <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-red-600 transition-all">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  {/* Clean Minimalist Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      {proj.award && (
                        <p className="text-[11px] font-semibold text-amber-400/90 flex items-center gap-1.5 mb-1.5">
                          <span>🏆</span>
                          <span className="truncate">{proj.award}</span>
                        </p>
                      )}
                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {proj.title}
                      </h3>
                    </div>

                    {/* Bottom Row: Official Tool Vector Logos & Detail Button */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      {/* Tools Used (Logos Only, Simple & Modern) */}
                      <div className="flex items-center gap-2">
                        {proj.tools?.map((toolName) => {
                          const IconComponent = toolLogoMap[toolName];
                          if (!IconComponent) return null;
                          return (
                            <div
                              key={toolName}
                              title={toolName}
                              className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center p-1.5 transition-transform duration-200 hover:scale-110 shadow-inner"
                            >
                              <IconComponent className="w-5 h-5" />
                            </div>
                          );
                        })}
                      </div>

                      <span className="text-xs font-semibold text-red-400 group-hover:text-red-300 group-hover:translate-x-1 transition-all flex items-center gap-1">
                        Detail Projek &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ===================== CERTIFICATES TAB (ALL 7 REAL CERTIFICATES) ===================== */}
          {activeTab === 'Certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ type: 'spring', stiffness: 110, damping: 16, delay: (idx % 3) * 0.08 }}
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedCert(cert)}
                    className="card-glass card-interactive rounded-2xl overflow-hidden border border-white/5 hover:border-red-600/50 flex flex-col group cursor-pointer"
                  >
                    {/* Certificate Thumbnail with Hover Eye Overlay */}
                    <div className="relative h-52 w-full bg-black/60 overflow-hidden border-b border-white/5 flex items-center justify-center p-2">
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 rounded"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                        <span className="px-3.5 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                          <Eye size={14} />
                          <span>Perbesar Sertifikat</span>
                        </span>
                      </div>
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/80 text-amber-300 border border-amber-500/30 backdrop-blur-md shadow-sm">
                        {cert.badge}
                      </span>
                    </div>

                    {/* Certificate Meta */}
                    <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                            {cert.category}
                          </span>
                          <span className="text-neutral-600">&bull;</span>
                          <span className="text-[11px] text-neutral-400">{cert.year}</span>
                        </div>
                        <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-neutral-300 mt-1 line-clamp-1 font-medium">{cert.organizer}</p>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                        <span className="text-neutral-400 font-mono text-[11px] truncate max-w-[170px]">{cert.regNumber}</span>
                        <span className="text-red-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                          Lihat Scan &rarr;
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ===================== ACHIEVEMENTS TAB ===================== */}
          {activeTab === 'Achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {achievements.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ type: 'spring', stiffness: 110, damping: 16, delay: (idx % 3) * 0.08 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedCert(item)}
                  className="card-glass card-interactive p-6 rounded-2xl relative overflow-hidden border border-white/5 hover:border-red-600/50 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-950 to-red-900/40 border border-red-700/30 flex items-center justify-center text-red-400 shrink-0 group-hover:scale-110 transition-transform">
                        <Trophy size={24} />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-950/80 text-red-300 border border-red-700/40">
                            {item.badge}
                          </span>
                          <span className="text-xs text-neutral-400">{item.year}</span>
                        </div>
                        <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-red-400/90 font-medium">{item.event}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                    <span className="truncate max-w-[180px]">{item.organizer}</span>
                    <span className="text-red-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Pratinjau &rarr;
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ===================== TECH STACK TAB (DYNAMIC GLASSMORPHISM) ===================== */}
          {activeTab === 'Tech Stack' && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
                {cvTechStack.map((tech, idx) => {
                  const LogoComponent = tech.Logo;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{
                        type: 'spring',
                        stiffness: 130,
                        damping: 15,
                        delay: (idx % 6) * 0.05
                      }}
                      whileHover={{
                        scale: 1.07,
                        y: -6,
                        boxShadow: `0 14px 28px -6px ${tech.glow}`,
                        borderColor: tech.glow
                      }}
                      whileTap={{ scale: 0.96 }}
                      className="tech-glass-tile p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center gap-3.5 group cursor-pointer select-none relative overflow-hidden"
                    >
                      {/* Subtle ambient colored glow on hover */}
                      <div
                        className="absolute -inset-6 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: tech.glow }}
                      />

                      <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-md relative z-10">
                        <LogoComponent className="w-11 h-11" />
                      </div>
                      <span className="text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors tracking-wide text-center relative z-10">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Fullscreen Certificate Preview Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#12080c] border border-red-800/40 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-4 sm:px-6 sm:py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-950 text-red-300 border border-red-800/40 uppercase tracking-wider">
                      {selectedCert.badge} &bull; {selectedCert.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{selectedCert.organizer} &bull; {selectedCert.date || selectedCert.year}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-red-600 text-neutral-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Certificate High-Res Image Display */}
                <div className="p-4 sm:p-6 bg-black/70 flex items-center justify-center overflow-auto max-h-[70vh]">
                  <img
                    src={selectedCert.thumbnail}
                    alt={selectedCert.title}
                    className="max-h-[62vh] w-auto object-contain rounded-lg border border-red-900/30 shadow-2xl"
                  />
                </div>

                {/* Modal Footer with Actions */}
                <div className="p-4 sm:px-6 sm:py-3 border-t border-white/10 bg-[#0d060a] flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-neutral-400 space-y-0.5">
                    <p>No. Registrasi: <span className="font-mono text-neutral-200">{selectedCert.regNumber || 'TERVERIFIKASI'}</span></p>
                    {selectedCert.theme && <p className="text-[11px] text-neutral-500 italic">Tema: "{selectedCert.theme}"</p>}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={selectedCert.downloadUrl || selectedCert.thumbnail}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
                    >
                      <Download size={14} />
                      <span>Unduh Dokumen Asli</span>
                    </a>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-semibold transition-colors"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

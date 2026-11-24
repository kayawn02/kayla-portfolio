import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Trophy,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Eye,
  Download,
  X,
  Calendar,
  Layers,
  Cpu,
  Sparkles,
  Palette,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { projects } from '../data/projects';
import { certificates, achievements } from '../data/certificates';
import { designs, designCategories } from '../data/designs';
import DesignModal from './DesignModal';
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

// Clean Tools Stack (Visual-First, Simple, Modern)
const myTechTools = [
  { name: 'Figma', Logo: FigmaLogo, glow: 'rgba(162, 89, 255, 0.45)', border: 'hover:border-purple-500/50' },
  { name: 'Canva', Logo: CanvaLogo, glow: 'rgba(125, 42, 232, 0.45)', border: 'hover:border-purple-400/50' },
  { name: 'Flutter', Logo: FlutterLogo, glow: 'rgba(2, 117, 194, 0.45)', border: 'hover:border-sky-500/50' },
  { name: 'Dart', Logo: DartLogo, glow: 'rgba(0, 180, 171, 0.45)', border: 'hover:border-teal-500/50' },
  { name: 'ESP32', Logo: Esp32Logo, glow: 'rgba(239, 68, 68, 0.45)', border: 'hover:border-red-500/50' },
  { name: 'Arduino', Logo: ArduinoLogo, glow: 'rgba(0, 151, 157, 0.45)', border: 'hover:border-teal-500/50' },
  { name: 'HTML5', Logo: Html5Logo, glow: 'rgba(241, 101, 41, 0.45)', border: 'hover:border-orange-500/50' },
  { name: 'CSS3', Logo: Css3Logo, glow: 'rgba(41, 101, 241, 0.45)', border: 'hover:border-blue-500/50' },
  { name: 'Tailwind CSS', Logo: TailwindLogo, glow: 'rgba(56, 189, 248, 0.45)', border: 'hover:border-sky-400/50' },
  { name: 'WordPress', Logo: WordPressLogo, glow: 'rgba(33, 117, 155, 0.45)', border: 'hover:border-blue-600/50' },
  { name: 'Firebase', Logo: FirebaseLogo, glow: 'rgba(245, 124, 0, 0.45)', border: 'hover:border-amber-500/50' },
  { name: 'Git', Logo: GitLogo, glow: 'rgba(240, 80, 50, 0.45)', border: 'hover:border-red-500/50' },
  { name: 'GitHub', Logo: GitHubLogo, glow: 'rgba(255, 255, 255, 0.35)', border: 'hover:border-white/50' },
  { name: 'VS Code', Logo: VSCodeLogo, glow: 'rgba(0, 122, 204, 0.45)', border: 'hover:border-blue-500/50' },
];

const tabsConfig = [
  { id: 'Projects', label: 'Projects', icon: Code2 },
  { id: 'Designs', label: 'Graphic Design', icon: Palette },
  { id: 'Certificates', label: 'Certificates', icon: Award },
  { id: 'Achievements', label: 'Achievements', icon: Trophy },
  { id: 'Tech Stack', label: 'Tech Stack', icon: Cpu },
];

const certCategories = [
  'Semua',
  'Prestasi & Lomba',
  'Pelatihan & Bootcamp',
  'Kepanitiaan & Organisasi'
];

export default function PortfolioShowcase({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('Projects');
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [activeCertCategory, setActiveCertCategory] = useState('Semua');
  const [activeDesignCategory, setActiveDesignCategory] = useState('Semua');

  const handleTabChange = (tabId) => {
    playNavClickSound();
    setActiveTab(tabId);
  };

  const filteredCerts = certificates.filter(
    (c) => activeCertCategory === 'Semua' || c.category === activeCertCategory
  );

  const filteredDesigns = designs.filter(
    (d) => activeDesignCategory === 'Semua' || d.category === activeDesignCategory
  );

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-heading font-semibold tracking-wider text-red-500 uppercase mb-2">
            Portofolio &amp; Karya
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Projek, Desain &amp; Prestasi
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5 max-w-md mx-auto font-sans">
            Karya aplikasi nyata, karya grafis &amp; pamflet, dokumen prestasi resmi, dan tools teknologi.
          </p>
        </div>

        {/* Tab Selector Capsule (Clean Minimalist Glass Pill) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl sm:rounded-full bg-[#120a13]/80 border border-white/10 shadow-lg backdrop-blur-md flex-wrap justify-center gap-1">
            {tabsConfig.map((tab) => {
              const isActive = activeTab === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs font-medium font-heading transition-all duration-200 ${
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

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          
          {/* ===================== PROJECTS TAB (DYNAMIC 3D TILT & EYE-CATCHING MINIMALIST) ===================== */}
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
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 16, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  onClick={() => onSelectProject(proj)}
                  className="rounded-3xl border border-white/10 hover:border-red-500/50 bg-gradient-to-b from-[#140b15]/95 to-[#090509]/95 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xl group cursor-pointer select-none relative"
                >
                  {/* Top Edge Animated Shimmer Beam */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                  <div>
                    {/* Visual Mockup Frame with Interactive Hover Zoom */}
                    <div className="relative h-60 sm:h-64 w-full bg-[#080408] overflow-hidden flex items-center justify-center border-b border-white/5 p-4">
                      <img
                        src={proj.thumbnail}
                        alt={proj.title}
                        className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Floating Glass Badges in Image Header */}
                      <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full text-xs font-heading font-semibold uppercase bg-black/80 text-white border border-white/15 backdrop-blur-md shadow-md">
                          {proj.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-heading font-semibold text-neutral-300 bg-black/80 border border-white/15 backdrop-blur-md">
                          {proj.year}
                        </span>
                      </div>

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-4 py-2 rounded-full bg-red-600 text-white text-xs font-heading font-semibold flex items-center gap-2 shadow-xl scale-95 group-hover:scale-100 transition-transform">
                          <Eye size={14} />
                          <span>Eksplorasi Detail Projek</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Body: Clean, Bold, No Text Clutter */}
                    <div className="p-6 sm:p-7 space-y-3.5">
                      {proj.award && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-600/30 text-amber-300 text-xs font-heading font-medium">
                          <Award size={13} className="text-amber-400 shrink-0" />
                          <span className="truncate">{proj.award}</span>
                        </div>
                      )}

                      <h3 className="text-2xl font-extrabold text-white group-hover:text-red-400 transition-colors font-heading leading-snug">
                        {proj.id === 'fertiflow' ? 'FertiFlow — Smart Irrigation System' : 'SangSmart — Agriculture Platform'}
                      </h3>

                      {/* Concise 1-Line Tagline */}
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans line-clamp-2">
                        {proj.summary}
                      </p>

                      {/* Tools Used (Clean Logo Icons Only) */}
                      <div className="pt-1 flex items-center gap-2">
                        <span className="text-[11px] font-heading font-medium text-neutral-400 mr-1">
                          Tools:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {proj.tools?.map((toolName) => {
                            const IconComponent = toolLogoMap[toolName];
                            return (
                              <div
                                key={toolName}
                                title={toolName}
                                className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-1.5 group-hover:border-red-500/40 group-hover:scale-110 transition-all shadow-sm"
                              >
                                {IconComponent ? (
                                  <IconComponent className="w-full h-full object-contain" />
                                ) : (
                                  <span className="text-[10px] font-bold text-neutral-400">{toolName[0]}</span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-6 sm:p-7 pt-0 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-heading">
                      Peran: <strong className="text-white">{proj.role}</strong>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-red-400 font-heading font-semibold group-hover:translate-x-1 transition-transform">
                      <span>Detail Lengkap</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ===================== GRAPHIC DESIGN TAB (POSTER, PAMFLET & VISUAL WORKS) ===================== */}
          {activeTab === 'Designs' && (
            <motion.div
              key="designs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Category Filter Pills (Aligned with Heading Font - Poppins) */}
              <div className="flex flex-wrap justify-center gap-2">
                {designCategories.map((cat) => {
                  const isSelected = activeDesignCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        playNavClickSound();
                        setActiveDesignCategory(cat);
                      }}
                      className={`px-4 py-2 rounded-full text-xs font-heading font-medium transition-all duration-200 ${
                        isSelected
                          ? 'bg-red-600 text-white font-semibold shadow-md'
                          : 'bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Designs Bento Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDesigns.map((des, idx) => (
                  <motion.div
                    key={des.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 16, delay: (idx % 3) * 0.08 }}
                    whileHover={{ y: -6, scale: 1.015 }}
                    onClick={() => setSelectedDesign(des)}
                    className="group rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 bg-gradient-to-b from-[#140c13]/90 via-[#0d070c]/90 to-black backdrop-blur-xl flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-xl select-none"
                  >
                    <div>
                      {/* Image Preview Frame */}
                      <div className="relative h-52 w-full bg-[#0a0509] overflow-hidden flex items-center justify-center p-3 border-b border-white/5">
                        <img
                          src={des.image}
                          alt={des.title}
                          className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105 filter drop-shadow-md"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg scale-95 group-hover:scale-100 transition-transform font-heading">
                            <Eye size={14} />
                            <span>Buka Preview Karya</span>
                          </span>
                        </div>
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-heading font-semibold uppercase bg-black/85 text-red-300 border border-red-700/30 backdrop-blur-md">
                            {des.category}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-heading font-medium text-neutral-400 bg-black/75 border border-white/10 backdrop-blur-md">
                            {des.screensCount}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-2.5">
                        {des.award && (
                          <p className="text-[11px] font-semibold text-amber-400/90 flex items-center gap-1.5 font-sans">
                            <Sparkles size={12} className="text-amber-400 shrink-0" />
                            <span className="truncate">{des.award}</span>
                          </p>
                        )}
                        <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1 font-heading">
                          {des.title}
                        </h4>
                        <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-sans">
                          {des.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {des.highlights.slice(0, 3).map((h, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded text-[10px] font-heading font-medium bg-white/[0.03] border border-white/10 text-neutral-300"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-neutral-400 font-heading">
                        Tool: <strong className="text-white">{des.tool}</strong>
                      </span>
                      <span className="text-red-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1 font-heading">
                        <span>Lihat Detail</span>
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ===================== CERTIFICATES TAB ===================== */}
          {activeTab === 'Certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Category Filter Pills (Aligned with Heading Font - Poppins) */}
              <div className="flex flex-wrap justify-center gap-2">
                {certCategories.map((cat) => {
                  const isSelected = activeCertCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        playNavClickSound();
                        setActiveCertCategory(cat);
                      }}
                      className={`px-4 py-2 rounded-full text-xs font-heading font-medium transition-all duration-200 ${
                        isSelected
                          ? 'bg-red-600 text-white font-semibold shadow-md'
                          : 'bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Cards Grid: Staggered with Holographic Sheen on Top Prestasi */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCerts.map((cert, idx) => {
                  const isTopAward = cert.badge.includes('Juara 1') || cert.badge.includes('Juara 3');
                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ type: 'spring', stiffness: 120, damping: 16, delay: (idx % 3) * 0.08 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      onClick={() => setSelectedCert(cert)}
                      className={`group relative rounded-2xl overflow-hidden backdrop-blur-xl flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-2xl select-none ${
                        isTopAward
                          ? 'border-2 border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-[#1c1214] via-[#10080d] to-black shadow-[0_15px_40px_rgba(245,158,11,0.15)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.3)]'
                          : 'border border-white/10 hover:border-red-500/50 bg-gradient-to-b from-[#140c13]/90 via-[#0d070c]/90 to-black hover:shadow-[0_20px_45px_rgba(220,38,38,0.25)]'
                      }`}
                    >
                      {/* Top Edge Beam */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 ${
                          isTopAward
                            ? 'bg-gradient-to-r from-transparent via-amber-400 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-red-500 to-transparent'
                        }`}
                      />

                      {/* Top Prestige Gold Watermark for Juara 1 & 3 */}
                      {isTopAward && (
                        <div className="absolute top-2 right-2 text-7xl font-heading font-black text-amber-500/[0.05] pointer-events-none select-none">
                          {cert.year}
                        </div>
                      )}

                      <div>
                        {/* Certificate Thumbnail Frame */}
                        <div className="relative h-56 w-full bg-[#0a0509] overflow-hidden flex items-center justify-center p-3 border-b border-white/5">
                          <img
                            src={cert.thumbnail}
                            alt={cert.title}
                            className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105 filter drop-shadow-md"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <span className="px-4 py-1.5 rounded-full bg-red-600/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg scale-95 group-hover:scale-100 transition-transform font-heading">
                              <Eye size={14} />
                              <span>Lihat Dokumen Asli</span>
                            </span>
                          </div>

                          {/* Minimalist Clean Badges */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                            <span
                              className={`px-2.5 py-1 rounded-md text-[10px] font-heading font-semibold tracking-wide uppercase border backdrop-blur-md shadow-sm ${
                                isTopAward
                                  ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                                  : 'bg-black/85 text-neutral-200 border-white/15'
                              }`}
                            >
                              {cert.badge}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-heading font-medium text-neutral-400 bg-black/75 border border-white/10 backdrop-blur-md">
                              {cert.year}
                            </span>
                          </div>
                        </div>

                        {/* Information Body */}
                        <div className="p-5 space-y-2">
                          <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1 leading-snug font-heading">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-neutral-400 line-clamp-1 font-medium font-sans">
                            {cert.event || cert.organizer}
                          </p>
                          <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-heading pt-1">
                            <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
                            <span className="truncate">{cert.level}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Action */}
                      <div className="p-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-neutral-500 font-heading">
                          {cert.category}
                        </span>
                        <span className="text-red-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0 font-heading">
                          <span>Perbesar</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ===================== ACHIEVEMENTS TAB (TROPHY PODIUM / HONOR SHOWCASE) ===================== */}
          {activeTab === 'Achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {achievements.map((item, idx) => {
                const targetCert = certificates.find((c) => c.id === item.certId) || item;
                const isFirst = item.rank === '01';

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 35, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 16, delay: idx * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setSelectedCert(targetCert)}
                    className={`group relative rounded-3xl p-6 sm:p-7 overflow-hidden backdrop-blur-xl cursor-pointer select-none flex flex-col justify-between transition-all duration-300 shadow-2xl ${
                      isFirst
                        ? 'border-2 border-amber-500/50 hover:border-amber-400 bg-gradient-to-b from-[#1e1310]/95 via-[#120a0b]/95 to-black shadow-[0_20px_50px_rgba(245,158,11,0.2)]'
                        : 'border border-white/10 hover:border-red-500/50 bg-gradient-to-b from-[#160d15]/95 via-[#0e080e]/95 to-[#070507]'
                    }`}
                  >
                    {/* Top Radiant Beam */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)` }}
                    />

                    {/* Top Ambient Glow */}
                    <div
                      className="absolute -top-16 -right-16 w-36 h-36 rounded-full opacity-25 group-hover:opacity-45 blur-2xl transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundColor: item.accentColor }}
                    />

                    <div>
                      {/* Header Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-xs font-heading font-semibold px-3 py-1 rounded-full tracking-wider uppercase border"
                          style={{
                            color: item.accentColor,
                            borderColor: `${item.accentColor}40`,
                            backgroundColor: `${item.accentColor}15`
                          }}
                        >
                          {item.rankBadge}
                        </span>
                        <span className="text-xs font-heading font-medium text-neutral-400">
                          {item.year}
                        </span>
                      </div>

                      {/* Embedded Visual Certificate Preview Box */}
                      <div className="relative h-40 w-full rounded-2xl bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center p-2 my-3 group-hover:border-white/20 transition-all">
                        <img
                          src={targetCert.thumbnail}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain rounded-lg filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-semibold flex items-center gap-1 font-heading">
                            <Eye size={12} />
                            <span>Lihat Sertifikat</span>
                          </span>
                        </div>
                      </div>

                      {/* Rank & Scope */}
                      <div className="flex items-baseline justify-between mt-3 mb-1">
                        <span
                          className="text-4xl sm:text-5xl font-black tracking-tight font-heading"
                          style={{ color: item.accentColor }}
                        >
                          {item.rank === '01' ? '#1' : item.rank === '03' ? '#3' : 'OC'}
                        </span>
                        <span className="text-[11px] font-heading font-semibold text-neutral-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10">
                          {item.scope}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <div className="space-y-1 mt-2">
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-red-300 transition-colors leading-snug font-heading">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-400 font-medium leading-relaxed font-sans">
                          {item.event} &middot; {item.organizer}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Project Tag & Button */}
                    <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-semibold text-neutral-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-lg font-heading">
                        {item.project}
                      </span>
                      <span className="text-red-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0 font-heading">
                        <span>Dokumen Asli</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* ===================== TECH STACK (PURE VISUAL TOOLS + CONTINUOUS RUNNING TICKER) ===================== */}
          {activeTab === 'Tech Stack' && (
            <motion.div
              key="techarsenal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              {/* Clean Minimalist Grid of Used Tools (No Text Clutter, Sleek Glassmorphism) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {myTechTools.map((tool, idx) => {
                  const ToolLogo = tool.Logo;
                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: idx * 0.04 }}
                      whileHover={{ y: -6, scale: 1.04 }}
                      className={`p-5 rounded-2xl bg-gradient-to-b from-[#140b15]/90 to-[#0a050a]/90 border border-white/10 ${tool.border} flex flex-col items-center justify-center gap-3 backdrop-blur-xl shadow-lg transition-all duration-300 group cursor-default select-none relative overflow-hidden`}
                    >
                      {/* Ambient hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: tool.glow }}
                      />

                      <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 drop-shadow-md relative z-10">
                        <ToolLogo className="w-full h-full object-contain" />
                      </div>
                      <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors font-heading relative z-10">
                        {tool.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Dual Infinite Running Marquee Ticker at the Bottom (Preserved as Requested) */}
              <div className="p-6 sm:p-7 rounded-3xl bg-black/40 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-heading font-semibold tracking-wider text-neutral-400 uppercase">
                    Continuous Ecosystem &amp; Workflow
                  </span>
                  <span className="text-[11px] font-heading font-medium text-neutral-500">
                    Live Ticker
                  </span>
                </div>

                {/* Marquee Row 1 */}
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
                  <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                    className="flex shrink-0 items-center gap-3 py-1"
                  >
                    {[
                      { name: 'Flutter', Logo: FlutterLogo },
                      { name: 'CSS3', Logo: Css3Logo },
                      { name: 'Figma', Logo: FigmaLogo },
                      { name: 'Canva Pro', Logo: CanvaLogo },
                      { name: 'Git', Logo: GitLogo },
                      { name: 'GitHub', Logo: GitHubLogo },
                      { name: 'VS Code', Logo: VSCodeLogo },
                      { name: 'Firebase RTDB', Logo: FirebaseLogo },
                      { name: 'Tailwind CSS', Logo: TailwindLogo },
                      { name: 'WordPress CMS', Logo: WordPressLogo },
                      // Duplicate for seamless infinite loop
                      { name: 'Flutter', Logo: FlutterLogo },
                      { name: 'CSS3', Logo: Css3Logo },
                      { name: 'Figma', Logo: FigmaLogo },
                      { name: 'Canva Pro', Logo: CanvaLogo },
                      { name: 'Git', Logo: GitLogo },
                      { name: 'GitHub', Logo: GitHubLogo },
                      { name: 'VS Code', Logo: VSCodeLogo },
                      { name: 'Firebase RTDB', Logo: FirebaseLogo },
                      { name: 'Tailwind CSS', Logo: TailwindLogo },
                      { name: 'WordPress CMS', Logo: WordPressLogo },
                    ].map((item, i) => {
                      const IconComp = item.Logo;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/40 hover:bg-white/[0.08] transition-all cursor-default select-none group"
                        >
                          <IconComp className="w-4 h-4 object-contain group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-heading font-medium text-neutral-300 group-hover:text-white transition-colors">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Marquee Row 2 (Reverse direction) */}
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
                  <motion.div
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
                    className="flex shrink-0 items-center gap-3 py-1"
                  >
                    {[
                      'Pamflet & Poster Design',
                      'Instagram Feed Carousel',
                      'Design Systems & Tokens',
                      'Clickable Prototyping',
                      'Hardware Actuation',
                      'Sensor Telemetry',
                      'Clean Architecture',
                      'Responsive Viewports',
                      // Duplicate for seamless loop
                      'Pamflet & Poster Design',
                      'Instagram Feed Carousel',
                      'Design Systems & Tokens',
                      'Clickable Prototyping',
                      'Hardware Actuation',
                      'Sensor Telemetry',
                      'Clean Architecture',
                      'Responsive Viewports',
                    ].map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-red-950/20 border border-red-800/30 text-neutral-300 text-xs font-heading font-medium select-none"
                      >
                        <Zap size={11} className="text-red-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
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
                className="bg-[#12080c] border border-red-800/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-4 sm:px-6 sm:py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
                  <div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-heading font-semibold bg-red-950 text-red-300 border border-red-800/40 uppercase tracking-wider">
                      {selectedCert.badge} &bull; {selectedCert.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-1.5 font-heading">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5 font-sans">{selectedCert.organizer} &bull; {selectedCert.date || selectedCert.year}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-red-600 text-neutral-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Certificate High-Res Image Display */}
                <div className="p-4 sm:p-6 bg-black/70 flex items-center justify-center overflow-auto max-h-[70vh]">
                  <img
                    src={selectedCert.thumbnail}
                    alt={selectedCert.title}
                    className="max-h-[62vh] w-auto object-contain rounded-xl border border-red-900/30 shadow-2xl"
                  />
                </div>

                {/* Modal Footer with Actions */}
                <div className="p-4 sm:px-6 sm:py-3.5 border-t border-white/10 bg-[#0d060a] flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-neutral-400 space-y-0.5 font-sans">
                    <p>No. Registrasi: <span className="font-heading font-semibold text-neutral-200">{selectedCert.regNumber || 'TERVERIFIKASI'}</span></p>
                    {selectedCert.theme && <p className="text-[11px] text-neutral-500 italic">Tema: "{selectedCert.theme}"</p>}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={selectedCert.downloadUrl || selectedCert.thumbnail}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-md transition-all hover:scale-105 font-heading"
                    >
                      <Download size={14} />
                      <span>Unduh Dokumen Asli</span>
                    </a>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-semibold transition-colors font-heading"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fullscreen Design Modal */}
        <DesignModal
          design={selectedDesign}
          onClose={() => setSelectedDesign(null)}
        />

      </div>
    </section>
  );
}

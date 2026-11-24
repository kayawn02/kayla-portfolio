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

const tabsConfig = [
  { id: 'Projects', label: 'Projects', icon: Code2 },
  { id: 'Designs', label: 'UI/UX Designs', icon: Palette },
  { id: 'Certificates', label: 'Certificates', icon: Award },
  { id: 'Achievements', label: 'Achievements', icon: Trophy },
  { id: 'Tech Stack', label: 'Tech Arsenal', icon: Cpu },
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
          <p className="text-xs font-semibold tracking-wider text-red-500 uppercase mb-2">
            Portofolio &amp; Karya
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Karya Rekayasa, Desain &amp; Prestasi
          </h2>
          <p className="text-neutral-400 text-sm mt-1.5 max-w-md mx-auto">
            Eksplorasi kode aplikasi, perancangan antarmuka visual, dan rekam jejak prestasi resmi.
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

        {/* Tab Content Display */}
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
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 16, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 hover:border-red-500/50 bg-[#120a13]/80 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl group"
                >
                  <div>
                    {/* Thumbnail Frame */}
                    <div className="relative h-56 sm:h-64 w-full bg-[#0a0509] overflow-hidden flex items-center justify-center border-b border-white/5">
                      <img
                        src={proj.thumbnail}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wide uppercase bg-black/80 text-white border border-white/10 backdrop-blur-md">
                          {proj.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono text-neutral-300 bg-black/80 border border-white/10 backdrop-blur-md">
                          {proj.year}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <div>
                        {proj.award && (
                          <p className="text-[11px] font-semibold text-amber-400/90 flex items-center gap-1.5 mb-1.5">
                            <Award size={13} className="text-amber-400 shrink-0" />
                            <span className="truncate">{proj.award}</span>
                          </p>
                        )}
                        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                          {proj.title}
                        </h3>
                      </div>

                      <p className="text-neutral-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {proj.summary}
                      </p>

                      {/* Tools Used (Logos Only) */}
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                          Tools &amp; Stack:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {proj.tools?.map((toolName) => {
                            const IconComponent = toolLogoMap[toolName];
                            return (
                              <div
                                key={toolName}
                                title={toolName}
                                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center p-1.5 hover:border-red-500/40 hover:scale-110 transition-all shadow-sm"
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
                  <div className="p-6 sm:p-7 pt-0 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-mono">
                      Peran: <strong className="text-neutral-200">{proj.role}</strong>
                    </span>
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="px-4 py-2 rounded-xl bg-red-600/90 hover:bg-red-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all hover:scale-105"
                    >
                      <span>Lihat Detail</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ===================== DESIGNS TAB (NEW UI/UX SHOWCASE) ===================== */}
          {activeTab === 'Designs' && (
            <motion.div
              key="designs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Category Filter Pills */}
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
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                        isSelected
                          ? 'bg-red-600 text-white font-semibold shadow-md'
                          : 'bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:bg-white/[0.08]'
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
                          <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg scale-95 group-hover:scale-100 transition-transform">
                            <Eye size={14} />
                            <span>Buka Galeri Desain</span>
                          </span>
                        </div>
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-black/85 text-red-300 border border-red-700/30 backdrop-blur-md">
                            {des.category}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-400 bg-black/75 border border-white/10 backdrop-blur-md">
                            {des.screensCount}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 space-y-3">
                        {des.award && (
                          <p className="text-[11px] font-semibold text-amber-400/90 flex items-center gap-1.5">
                            <Sparkles size={12} className="text-amber-400 shrink-0" />
                            <span className="truncate">{des.award}</span>
                          </p>
                        )}
                        <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                          {des.title}
                        </h4>
                        <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                          {des.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {des.highlights.slice(0, 3).map((h, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/10 text-neutral-300"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-neutral-400 font-mono">
                        Tool: <strong className="text-white">{des.tool}</strong>
                      </span>
                      <span className="text-red-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>Lihat Detail</span>
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ===================== CERTIFICATES TAB (EYE-CATCHING & PRESTIGE) ===================== */}
          {activeTab === 'Certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Category Filter Pills */}
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
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                        isSelected
                          ? 'bg-red-600 text-white font-semibold shadow-md'
                          : 'bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:bg-white/[0.08]'
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
                        <div className="absolute top-2 right-2 text-7xl font-mono font-black text-amber-500/[0.05] pointer-events-none select-none">
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
                            <span className="px-4 py-1.5 rounded-full bg-red-600/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg scale-95 group-hover:scale-100 transition-transform">
                              <Eye size={14} />
                              <span>Lihat Dokumen Asli</span>
                            </span>
                          </div>

                          {/* Minimalist Clean Badges (NO EMOJIS) */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                            <span
                              className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wide uppercase border backdrop-blur-md shadow-sm ${
                                isTopAward
                                  ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                                  : 'bg-black/85 text-neutral-200 border-white/15'
                              }`}
                            >
                              {cert.badge}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-400 bg-black/75 border border-white/10 backdrop-blur-md">
                              {cert.year}
                            </span>
                          </div>
                        </div>

                        {/* Information Body */}
                        <div className="p-5 space-y-2">
                          <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1 leading-snug">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-neutral-400 line-clamp-1 font-medium">
                            {cert.event || cert.organizer}
                          </p>
                          <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 font-mono pt-1">
                            <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
                            <span className="truncate">{cert.level}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Action */}
                      <div className="p-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-neutral-500 font-mono">
                          {cert.category}
                        </span>
                        <span className="text-red-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
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

          {/* ===================== ACHIEVEMENTS TAB ===================== */}
          {activeTab === 'Achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {achievements.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 35, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 16, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => {
                    const target = certificates.find((c) => c.id === item.certId) || item;
                    setSelectedCert(target);
                  }}
                  className="group relative rounded-2xl p-6 sm:p-7 overflow-hidden border border-white/10 hover:border-red-500/50 bg-gradient-to-b from-[#160d15]/95 via-[#0e080e]/95 to-[#070507] backdrop-blur-xl cursor-pointer select-none flex flex-col justify-between shadow-2xl transition-all duration-300"
                >
                  <div
                    className="absolute -top-16 -right-16 w-36 h-36 rounded-full opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: item.accentColor }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-mono font-bold px-2.5 py-1 rounded-md tracking-wider uppercase border"
                        style={{
                          color: item.accentColor,
                          borderColor: `${item.accentColor}40`,
                          backgroundColor: `${item.accentColor}15`
                        }}
                      >
                        {item.rankBadge}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {item.year}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between my-2">
                      <span
                        className="text-5xl font-black tracking-tight font-mono opacity-85 group-hover:opacity-100 transition-opacity"
                        style={{ color: item.accentColor }}
                      >
                        {item.rank}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10">
                        {item.scope}
                      </span>
                    </div>

                    <div className="space-y-1.5 mt-3">
                      <h4 className="text-lg font-extrabold text-white group-hover:text-red-300 transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                        {item.event} &middot; {item.organizer}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-neutral-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-lg">
                      {item.project}
                    </span>
                    <span className="text-red-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                      <span>Dokumen Asli</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ===================== TECH ARSENAL (ASYMMETRICAL BENTO + DUAL TICKER - INSPIRED BY ARMAN.MY.ID) ===================== */}
          {activeTab === 'Tech Stack' && (
            <motion.div
              key="techarsenal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              {/* Tier 1: Asymmetrical Craft Bento Cluster (4 Major Pillars) */}
              <div className="grid md:grid-cols-12 gap-6">
                
                {/* Pillar 1: UI/UX & Design Systems (7 Cols) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="md:col-span-7 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#180d19]/90 via-[#100711]/90 to-black border border-purple-900/30 hover:border-purple-500/50 shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl pointer-events-none group-hover:bg-purple-600/20 transition-all duration-500" />
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                      <span className="text-xs font-mono font-bold tracking-widest text-purple-300 uppercase">
                        Primary Craft &middot; UI/UX Design
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                      Figma Specialist
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 my-6 relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-black/60 border border-purple-500/30 flex items-center justify-center p-3.5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <FigmaLogo className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">
                        Figma &amp; Design Systems
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                        Perancangan antarmuka intuitif, alur pengguna terstruktur, wireframing, dan prototipe interaktif siap produksi.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 relative z-10">
                    {['Design Systems', 'Auto Layout', 'Interactive Prototype', 'User Flow', 'Information Architecture'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-purple-950/40 border border-purple-700/30 text-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Pillar 2: Cross-Platform Mobile Dev (5 Cols) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ y: -6 }}
                  className="md:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0c1322]/90 via-[#070b14]/90 to-black border border-sky-900/30 hover:border-sky-500/50 shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-sky-500/10 blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all duration-500" />
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span className="text-xs font-mono font-bold tracking-widest text-sky-300 uppercase">
                      Mobile Engineering
                    </span>
                    <span className="text-xs font-mono text-neutral-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                      Cross-Platform
                    </span>
                  </div>

                  <div className="flex items-center gap-4 my-6 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-black/60 border border-sky-500/30 flex items-center justify-center p-3 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <FlutterLogo className="w-full h-full object-contain" />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-black/60 border border-sky-500/30 flex items-center justify-center p-3 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <DartLogo className="w-full h-full object-contain" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white relative z-10">
                    Flutter &amp; Dart
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 mb-4 relative z-10 leading-relaxed">
                    Aplikasi mobile multi-platform responsif terintegrasi backend dan telemetri perangkat IoT.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 relative z-10">
                    {['State Management', 'Widget Architecture', 'API Integration'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-sky-950/40 border border-sky-700/30 text-sky-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Pillar 3: Hardware, Firmware & IoT (5 Cols) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  whileHover={{ y: -6 }}
                  className="md:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1a0f0d]/90 via-[#100705]/90 to-black border border-red-900/30 hover:border-red-500/50 shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-red-600/10 blur-3xl pointer-events-none group-hover:bg-red-600/20 transition-all duration-500" />
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                      Physical Computing
                    </span>
                    <span className="text-xs font-mono text-neutral-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                      Smart Hardware
                    </span>
                  </div>

                  <div className="flex items-center gap-4 my-6 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-black/60 border border-red-500/30 flex items-center justify-center p-2.5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Esp32Logo className="w-full h-full object-contain" />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-black/60 border border-teal-500/30 flex items-center justify-center p-2.5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <ArduinoLogo className="w-full h-full object-contain" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white relative z-10">
                    ESP32 &amp; IoT Architecture
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 mb-4 relative z-10 leading-relaxed">
                    Mikrokontroler, telemetri sensor lingkungan, dan kendali aktuator relay otomatis.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 relative z-10">
                    {['Sensor Telemetry', 'Relay Actuation', 'Firebase RTDB'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-red-950/40 border border-red-700/30 text-red-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Pillar 4: Modern Web & Semantic Layout (7 Cols) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ y: -6 }}
                  className="md:col-span-7 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#18130c]/90 via-[#0e0b07]/90 to-black border border-amber-900/30 hover:border-amber-500/50 shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-amber-600/10 blur-3xl pointer-events-none group-hover:bg-amber-600/20 transition-all duration-500" />
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span className="text-xs font-mono font-bold tracking-widest text-amber-300 uppercase">
                      Web Development
                    </span>
                    <span className="text-xs font-mono text-neutral-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                      Standards &amp; Responsive
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 my-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-black/60 border border-orange-500/30 flex items-center justify-center p-2.5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Html5Logo className="w-full h-full object-contain" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-black/60 border border-blue-500/30 flex items-center justify-center p-2.5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Css3Logo className="w-full h-full object-contain" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-black/60 border border-sky-500/30 flex items-center justify-center p-2.5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <TailwindLogo className="w-full h-full object-contain" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-black/60 border border-slate-500/30 flex items-center justify-center p-2.5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <WordPressLogo className="w-full h-full object-contain" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white relative z-10">
                    HTML5, CSS3, Tailwind &amp; WordPress CMS
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1 mb-4 relative z-10 leading-relaxed">
                    Pengembangan antarmuka website berbasis komponen utilitas, tata letak adaptif modern, dan manajemen konten.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 relative z-10">
                    {['Semantic HTML', 'CSS3 Layouts', 'Tailwind CSS', 'WordPress CMS', 'Responsive Design'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-amber-950/40 border border-amber-700/30 text-amber-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </div>

              {/* Tier 2: Dual Infinite Running Marquee (Supporting Arsenal - Inspired by arman.my.id) */}
              <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-white/10 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase">
                    Supporting Toolchain &amp; Workflow
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">
                    Continuous Ecosystem
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
                      { name: 'Git', Logo: GitLogo, color: '#f05032' },
                      { name: 'GitHub', Logo: GitHubLogo, color: '#ffffff' },
                      { name: 'Canva Pro', Logo: CanvaLogo, color: '#7d2ae8' },
                      { name: 'VS Code', Logo: VSCodeLogo, color: '#007acc' },
                      { name: 'Firebase RTDB', Logo: FirebaseLogo, color: '#f57c00' },
                      { name: 'Tailwind CSS', Logo: TailwindLogo, color: '#38bdf8' },
                      { name: 'WordPress CMS', Logo: WordPressLogo, color: '#21759b' },
                      // Duplicate for seamless infinite loop
                      { name: 'Git', Logo: GitLogo, color: '#f05032' },
                      { name: 'GitHub', Logo: GitHubLogo, color: '#ffffff' },
                      { name: 'Canva Pro', Logo: CanvaLogo, color: '#7d2ae8' },
                      { name: 'VS Code', Logo: VSCodeLogo, color: '#007acc' },
                      { name: 'Firebase RTDB', Logo: FirebaseLogo, color: '#f57c00' },
                      { name: 'Tailwind CSS', Logo: TailwindLogo, color: '#38bdf8' },
                      { name: 'WordPress CMS', Logo: WordPressLogo, color: '#21759b' },
                    ].map((item, i) => {
                      const IconComp = item.Logo;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/40 hover:bg-white/[0.08] transition-all cursor-default select-none group"
                        >
                          <IconComp className="w-4 h-4 object-contain group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-mono font-medium text-neutral-300 group-hover:text-white transition-colors">
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
                      'Atomic Design System',
                      'High-Fidelity Wireframes',
                      'Clickable Prototyping',
                      'Hardware Actuation',
                      'Sensor Telemetry',
                      'Clean Architecture',
                      'Responsive Viewports',
                      'User Journey Mapping',
                      // Duplicate for seamless loop
                      'Atomic Design System',
                      'High-Fidelity Wireframes',
                      'Clickable Prototyping',
                      'Hardware Actuation',
                      'Sensor Telemetry',
                      'Clean Architecture',
                      'Responsive Viewports',
                      'User Journey Mapping',
                    ].map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-red-950/20 border border-red-800/30 text-neutral-300 text-xs font-mono select-none"
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
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-red-950 text-red-300 border border-red-800/40 uppercase tracking-wider">
                      {selectedCert.badge} &bull; {selectedCert.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-1.5">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{selectedCert.organizer} &bull; {selectedCert.date || selectedCert.year}</p>
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
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
                    >
                      <Download size={14} />
                      <span>Unduh Dokumen Asli</span>
                    </a>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-semibold transition-colors"
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

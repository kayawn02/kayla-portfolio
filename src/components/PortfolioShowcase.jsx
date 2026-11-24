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
import ProjectModal from './ProjectModal';
import GraphicDesignShowcase from './GraphicDesignShowcase';
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

// Interactive 3D Holographic Certificate Card (Antimainstream, Parallax Depth, Minimalist Text)
function CertificateCard3D({ cert, idx, onSelect }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const isTopAward = cert.badge.includes('Juara 1') || cert.badge.includes('Juara 3');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 11;
    const rotateY = ((x - centerX) / centerX) * 11;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: (idx % 3) * 0.06 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(cert)}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`group relative rounded-2xl overflow-hidden backdrop-blur-xl flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-xl select-none ${
          isTopAward
            ? 'border-2 border-[#38bdf8]/40 hover:border-[#38bdf8] bg-gradient-to-b from-[#142A44]/90 via-[#0e1d32]/90 to-[#081426] shadow-[0_15px_40px_rgba(56,189,248,0.18)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.35)]'
            : 'border border-[#4A74A7]/30 hover:border-[#4A74A7]/70 bg-gradient-to-b from-[#142A44]/75 via-[#0e1d32]/85 to-[#081426]/95 hover:shadow-[0_20px_45px_rgba(74,116,167,0.25)]'
        }`}
      >
        {/* Dynamic Holographic Glare Sheen Sweep */}
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(220, 234, 247, 0.35) 0%, rgba(56, 189, 248, 0.15) 30%, transparent 70%)`,
          }}
        />

        {/* Top Edge Animated Shimmer Beam */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 ${
            isTopAward
              ? 'bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent'
              : 'bg-gradient-to-r from-transparent via-[#4A74A7] to-transparent'
          }`}
        />

        {/* 3D Certificate Visual Frame with Floating translateZ */}
        <div
          className="relative h-52 sm:h-56 w-full bg-[#050c18] overflow-hidden flex items-center justify-center p-3.5 border-b border-[#DCEAF7]/5"
          style={{ transform: 'translateZ(20px)' }}
        >
          <img
            src={cert.thumbnail}
            alt={cert.title}
            className="max-h-full max-w-full object-contain rounded-lg filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Hover View Fullscreen Icon */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#142A44] to-[#4A74A7] text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg font-heading border border-[#38bdf8]/50">
              <Eye size={14} />
              <span>Lihat Dokumen Asli</span>
            </span>
          </div>

          {/* Floating Badges */}
          <div
            className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none"
            style={{ transform: 'translateZ(30px)' }}
          >
            <span
              className={`px-2.5 py-1 rounded-md text-[10px] font-heading font-semibold tracking-wide uppercase border backdrop-blur-md shadow-sm ${
                isTopAward
                  ? 'bg-[#142A44] text-[#DCEAF7] border-[#38bdf8]/50'
                  : 'bg-[#081426]/90 text-neutral-200 border-[#4A74A7]/30'
              }`}
            >
              {cert.badge}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-heading font-medium text-neutral-300 bg-[#081426]/80 border border-white/10 backdrop-blur-md">
              {cert.year}
            </span>
          </div>
        </div>

        {/* Minimal Information Body */}
        <div
          className="p-5 space-y-1.5"
          style={{ transform: 'translateZ(15px)' }}
        >
          <h4 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors line-clamp-1 leading-snug font-heading">
            {cert.title}
          </h4>
          <p className="text-xs text-neutral-400 line-clamp-1 font-medium font-sans">
            {cert.event || cert.organizer}
          </p>
          <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-heading pt-0.5">
            <ShieldCheck size={13} className="text-[#38bdf8] shrink-0" />
            <span className="truncate">{cert.level}</span>
          </div>
        </div>

        {/* Card Footer Action */}
        <div
          className="p-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs"
          style={{ transform: 'translateZ(10px)' }}
        >
          <span className="text-[11px] text-neutral-500 font-heading">
            {cert.category}
          </span>
          <span className="text-[#38bdf8] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0 font-heading">
            <span>Perbesar</span>
            <span>&rarr;</span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioShowcase({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('Projects');
  const [modalProject, setModalProject] = useState(null);
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
          <p className="text-xs font-heading font-semibold tracking-wider text-[#4A74A7] uppercase mb-2">
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
          <div className="inline-flex p-1.5 rounded-2xl sm:rounded-full bg-[#081426]/80 border border-[#4A74A7]/30 shadow-lg backdrop-blur-md flex-wrap justify-center gap-1">
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
                      className="absolute inset-0 bg-gradient-to-r from-[#142A44] to-[#4A74A7] rounded-xl sm:rounded-full shadow-[0_0_15px_rgba(74,116,167,0.45)] border border-[#4A74A7]"
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
        <div className="relative min-h-[480px]">
          <AnimatePresence>
            
            {/* ===================== PROJECTS TAB (DYNAMIC 3D TILT & EYE-CATCHING MINIMALIST) ===================== */}
            {activeTab === 'Projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {projects.map((proj, idx) => (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 18, delay: idx * 0.08 }}
                    whileHover={{ y: -8, scale: 1.015 }}
                    onClick={() => setModalProject(proj)}
                  className="rounded-3xl border border-[#4A74A7]/30 hover:border-[#38bdf8] bg-gradient-to-b from-[#142A44]/80 via-[#0e1d32]/90 to-[#081426]/95 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xl group cursor-pointer select-none relative"
                >
                  {/* Top Edge Animated Shimmer Beam */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                  <div>
                    {/* Visual Mockup Frame with Interactive Hover Zoom */}
                    <div className="relative h-56 sm:h-60 w-full bg-[#050c18] overflow-hidden flex items-center justify-center border-b border-[#DCEAF7]/5 p-4">
                      <img
                        src={proj.thumbnail}
                        alt={proj.title}
                        className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Floating Glass Badges in Image Header */}
                      <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full text-xs font-heading font-semibold uppercase bg-[#081426]/90 text-[#DCEAF7] border border-[#4A74A7]/40 backdrop-blur-md shadow-md">
                          {proj.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-heading font-semibold text-[#DCEAF7] bg-[#081426]/85 border border-[#4A74A7]/30 backdrop-blur-md">
                          {proj.year}
                        </span>
                      </div>

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#142A44] to-[#4A74A7] text-white text-xs font-heading font-semibold flex items-center gap-2 shadow-xl scale-95 group-hover:scale-100 transition-transform border border-[#38bdf8]/50">
                          <Eye size={14} />
                          <span>Buka Detail Studi Kasus</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Body: Clean, Bold, Minimal Text */}
                    <div className="p-6 space-y-3">
                      {proj.award && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142A44] border border-[#4A74A7]/60 text-[#DCEAF7] text-xs font-heading font-semibold shadow-sm">
                          <Award size={13} className="text-[#38bdf8] shrink-0" />
                          <span>{proj.id === 'fertiflow' ? 'Juara 3 AITEC Nasional' : 'Juara 1 UI/UX Point Project 3.0'}</span>
                        </div>
                      )}

                      <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#38bdf8] transition-colors font-heading leading-snug">
                        {proj.id === 'fertiflow' ? 'FertiFlow — Smart Irrigation System' : 'SangSmart — Agriculture Platform'}
                      </h3>

                      {/* Concise 1-Line Tagline */}
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans line-clamp-2">
                        {proj.id === 'fertiflow'
                          ? 'Sistem otomasi irigasi dan telemetri kelembapan tanah presisi berbasis IoT ESP32 & Flutter.'
                          : 'Platform digital agrikultur transparansi harga komoditas dan rental alat mesin tani modern.'}
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
                                className="w-8 h-8 rounded-xl bg-white/[0.04] border border-[#4A74A7]/30 flex items-center justify-center p-1.5 group-hover:border-[#38bdf8] group-hover:scale-110 transition-all shadow-sm"
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
                  <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-heading">
                      Peran: <strong className="text-white">{proj.role}</strong>
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalProject(proj);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#081426] hover:bg-[#142A44] border border-[#4A74A7]/40 text-[#DCEAF7] font-heading font-semibold transition-all hover:scale-105"
                    >
                      <span>Detail Lengkap</span>
                      <ArrowRight size={13} className="text-[#38bdf8]" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ===================== GRAPHIC DESIGN TAB (INTERACTIVE MULTI-SLIDER & CREATIVE LOGOS) ===================== */}
          {activeTab === 'Designs' && (
            <motion.div
              key="designs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <GraphicDesignShowcase />
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
                          ? 'bg-gradient-to-r from-[#142A44] to-[#4A74A7] text-[#DCEAF7] font-semibold shadow-[0_0_15px_rgba(74,116,167,0.45)] border border-[#4A74A7]'
                          : 'bg-[#142A44]/40 border border-[#DCEAF7]/10 text-neutral-300 hover:text-white hover:border-[#4A74A7]/50'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Cards Grid: 3D Parallax Tilt with Dynamic Holographic Glare */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCerts.map((cert, idx) => (
                  <CertificateCard3D
                    key={cert.id}
                    cert={cert}
                    idx={idx}
                    onSelect={setSelectedCert}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* ===================== ACHIEVEMENTS TAB (TROPHY PODIUM / HONOR SHOWCASE) ===================== */}
          {activeTab === 'Achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {achievements.map((item, idx) => {
                const targetCert = certificates.find((c) => c.id === item.certId) || item;
                const isFirst = item.rank === '01';

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 18, delay: idx * 0.08 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setSelectedCert(targetCert)}
                    className={`group relative rounded-3xl p-6 sm:p-7 overflow-hidden backdrop-blur-xl cursor-pointer select-none flex flex-col justify-between transition-all duration-300 shadow-2xl ${
                      isFirst
                        ? 'border-2 border-[#38bdf8]/40 hover:border-[#38bdf8] bg-gradient-to-b from-[#142A44]/90 via-[#0e1d32]/95 to-[#081426] shadow-[0_20px_50px_rgba(56,189,248,0.2)]'
                        : 'border border-[#4A74A7]/25 hover:border-[#4A74A7]/60 bg-gradient-to-b from-[#142A44]/80 via-[#0e1d32]/90 to-[#081426]/95'
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
                      <div className="relative h-40 w-full rounded-2xl bg-[#050c18] border border-[#DCEAF7]/10 overflow-hidden flex items-center justify-center p-2 my-3 group-hover:border-[#4A74A7]/40 transition-all">
                        <img
                          src={targetCert.thumbnail}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain rounded-lg filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#142A44] to-[#4A74A7] text-white text-[11px] font-semibold flex items-center gap-1 font-heading border border-[#4A74A7]/50">
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
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#DCEAF7] transition-colors leading-snug font-heading">
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
                      <span className="text-[#4A74A7] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0 font-heading">
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              {/* Clean Minimalist Grid of Used Tools (No Text Clutter, Sleek Glassmorphism) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {myTechTools.map((tool, idx) => {
                  const ToolLogo = tool.Logo;
                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      whileHover={{ y: -6, scale: 1.04 }}
                      className={`p-5 rounded-2xl bg-gradient-to-b from-[#142A44]/75 to-[#081426]/90 border border-[#4A74A7]/25 ${tool.border} flex flex-col items-center justify-center gap-3 backdrop-blur-xl shadow-lg transition-all duration-300 group cursor-default select-none relative overflow-hidden`}
                    >
                      {/* Ambient hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"
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

              {/* Dual Infinite Running Marquee Ticker at the Bottom */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#081426]/60 border border-[#4A74A7]/25 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-heading font-semibold tracking-wider text-neutral-400 uppercase">
                    Continuous Ecosystem &amp; Workflow
                  </span>
                  <span className="text-[11px] font-heading font-medium text-[#4A74A7]">
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
                          className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#142A44]/40 border border-[#4A74A7]/20 hover:border-[#4A74A7] hover:bg-[#142A44]/70 transition-all cursor-default select-none group"
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
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#142A44]/50 border border-[#4A74A7]/30 text-[#DCEAF7] text-xs font-heading font-medium select-none"
                      >
                        <Zap size={11} className="text-[#38bdf8]" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
        </div>

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
                className="bg-[#081426] border border-[#4A74A7]/50 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-4 sm:px-6 sm:py-4 border-b border-[#DCEAF7]/10 flex items-center justify-between bg-[#081426]/90">
                  <div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-heading font-semibold bg-[#142A44] text-[#DCEAF7] border border-[#4A74A7]/40 uppercase tracking-wider">
                      {selectedCert.badge} &bull; {selectedCert.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-1.5 font-heading">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5 font-sans">{selectedCert.organizer} &bull; {selectedCert.date || selectedCert.year}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-[#4A74A7] text-neutral-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Certificate High-Res Image Display */}
                <div className="p-4 sm:p-6 bg-black/70 flex items-center justify-center overflow-auto max-h-[70vh]">
                  <img
                    src={selectedCert.thumbnail}
                    alt={selectedCert.title}
                    className="max-h-[62vh] w-auto object-contain rounded-xl border border-[#4A74A7]/30 shadow-2xl"
                  />
                </div>

                {/* Modal Footer with Actions */}
                <div className="p-4 sm:px-6 sm:py-3.5 border-t border-[#DCEAF7]/10 bg-[#081426] flex flex-wrap items-center justify-between gap-3">
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
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#142A44] to-[#4A74A7] hover:from-[#1c395c] hover:to-[#5a86bc] text-white text-xs font-semibold shadow-md transition-all hover:scale-105 font-heading border border-[#4A74A7]/50"
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

        {/* Fullscreen Project Case Study Modal */}
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />

      </div>
    </section>
  );
}

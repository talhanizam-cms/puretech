import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  LayoutGrid, 
  Sparkles, 
  Play, 
  ArrowRight,
  Maximize2,
  Columns,
  Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy, ProjectCategory } from '../types';
import { fadeInUp, fadeInScale } from './MotionWrappers';

interface WorkSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

// Sub-component: Clean One-Sided 3D Video Showcase Container with Interactive Tilt
const CleanVideoShowcase: React.FC<{
  project: CaseStudy;
  reversed?: boolean;
  onSelect: () => void;
}> = ({ project, reversed, onSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -(y * 10), y: x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const baseRotateY = reversed ? 6 : -6;
  const baseRotateX = 3;

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Dynamic Colored Backlight Glow */}
      <div 
        className="absolute -inset-4 rounded-[40px] blur-3xl opacity-40 pointer-events-none transition-all duration-700 group-hover:opacity-70"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${project.accentColor}35, transparent 70%)`
        }}
      />

      {/* Floating Top-Right Metric Tag */}
      <div className="absolute -top-3 -right-2 z-30 px-3.5 py-1.5 rounded-2xl bg-black/90 border border-white/20 backdrop-blur-xl shadow-2xl flex items-center gap-2 text-[11px] font-mono-tech text-cyan-300 pointer-events-none">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span className="font-bold">{project.metrics[0].value} {project.metrics[0].label}</span>
      </div>

      {/* 3D Tilted Video Showcase */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onSelect}
        style={{
          transform: `perspective(1100px) rotateY(${baseRotateY + tilt.y}deg) rotateX(${baseRotateX + tilt.x}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.16s cubic-bezier(0.2, 0, 0, 1)'
        }}
        className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-white/[0.12] bg-[#080a10] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] group cursor-pointer w-full aspect-[16/10]"
      >
        {/* Native 3D Product Video Loop */}
        {project.videoUrl ? (
          <video
            ref={(el) => {
              if (el) {
                el.defaultMuted = true;
                el.muted = true;
                el.playbackRate = 0.8;
              }
            }}
            onLoadedMetadata={(e) => {
              const v = e.currentTarget;
              v.defaultMuted = true;
              v.muted = true;
              v.playbackRate = 0.8;
              v.play().catch(() => {});
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={project.heroImage}
            className="w-full h-full object-cover filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
        )}

        {/* Subtle glass reflection & vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 pointer-events-none" />

        {/* Top category pill */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
          <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono-tech uppercase tracking-wider text-white">
            {project.categoryLabel}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono-tech text-cyan-400 font-bold">
            {project.year}
          </span>
        </div>

        {/* Center Hover Action Pill */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <div className="px-5 py-2.5 rounded-full bg-white text-slate-950 flex items-center gap-2 font-display font-bold text-xs uppercase tracking-wider shadow-2xl transform scale-95 group-hover:scale-100 transition-transform">
            <Play className="w-3.5 h-3.5 fill-current text-slate-950" />
            <span>View Case Study</span>
            <Maximize2 className="w-3 h-3 text-slate-600 ml-1" />
          </div>
        </div>

        {/* Bottom HUD */}
        <div className="absolute bottom-3.5 inset-x-3.5 z-20 pointer-events-none">
          <div className="p-3 rounded-xl bg-black/80 border border-white/15 backdrop-blur-md flex items-center justify-between">
            <div>
              <div className="text-[9px] font-mono-tech text-cyan-400 font-bold uppercase tracking-wider">
                {project.client}
              </div>
              <div className="text-sm font-display font-bold text-white tracking-tight">
                {project.title}
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono-tech border border-cyan-500/30">
              {project.metrics[0].value}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [viewMode, setViewMode] = useState<'sticky' | 'alternating' | 'grid'>('sticky');
  const [activeStickyIndex, setActiveStickyIndex] = useState(0);

  const filteredProjects = selectedCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(p => p.category === selectedCategory);

  const activeStickyProject = filteredProjects[activeStickyIndex] || filteredProjects[0];

  // Scroll listener for the Fantasy.co Sticky Split-Screen mode:
  // Detects which project story is currently centered in viewport and updates the pinned video
  useEffect(() => {
    if (viewMode !== 'sticky') return;

    const handleScroll = () => {
      const storyElements = filteredProjects.map((p) =>
        document.getElementById(`sticky-story-${p.id}`)
      );

      const targetY = window.innerHeight * 0.42;
      let closestIdx = 0;
      let minDistance = Infinity;

      storyElements.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - targetY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveStickyIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProjects, viewMode]);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Work (6)' },
    { id: 'ai', label: 'AI & Intelligence' },
    { id: 'mobile', label: 'Mobile Flagships' },
    { id: 'web', label: 'Web & Digital Platforms' },
    { id: 'enterprise', label: 'Enterprise & Systems' }
  ];

  return (
    <section id="work" className="relative bg-[#06080d]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* 1. FULL-WIDTH EDGE-TO-EDGE STICKY BACKGROUND VIDEO (FANTASY.CO STYLE)     */}
      {/* ========================================================================= */}
      {viewMode === 'sticky' && (
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none -z-0">
          {/* Preloaded simultaneous cross-fading background videos (Instant zero-delay switch) */}
          {filteredProjects.map((p, idx) => {
            const isActive = activeStickyIndex === idx;
            return (
              <div
                key={p.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {p.videoUrl ? (
                  <video
                    ref={(el) => {
                      if (el) {
                        el.defaultMuted = true;
                        el.muted = true;
                        el.playbackRate = 0.8;
                        if (isActive) {
                          el.play().catch(() => {});
                        } else {
                          el.pause();
                        }
                      }
                    }}
                    onLoadedMetadata={(e) => {
                      const v = e.currentTarget;
                      v.defaultMuted = true;
                      v.muted = true;
                      if (isActive) v.play().catch(() => {});
                    }}
                    src={p.videoUrl}
                    autoPlay={isActive}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={p.heroImage}
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.68] saturate-[1.1]"
                  />
                ) : (
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="w-full h-full object-cover filter brightness-[0.6]"
                  />
                )}
              </div>
            );
          })}

          {/* Full-bleed seamless gradient fades: softened cinema vignettes */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#06080d] via-[#06080d]/50 to-transparent pointer-events-none z-20" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#06080d] via-[#06080d]/50 to-transparent pointer-events-none z-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06080d]/50 via-transparent to-[#06080d]/50 pointer-events-none z-20" />
          <div className="absolute inset-0 bg-[#06080d]/10 pointer-events-none z-20" />

          {/* Minimalist floating project indicator at bottom right */}
          <div className="absolute bottom-8 right-8 z-30 pointer-events-auto hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 text-xs font-mono-tech shadow-2xl">
            <span 
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: activeStickyProject.accentColor }}
            />
            <span className="text-white font-bold">
              0{activeStickyIndex + 1} <span className="text-slate-500">/</span> 0{filteredProjects.length}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400 font-semibold">{activeStickyProject.client}</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. FOREGROUND CONTENT (SCROLLING OVER THE FULL-WIDTH BACKGROUND)          */}
      {/* ========================================================================= */}
      <div className={viewMode === 'sticky' ? "-mt-[100vh] relative z-10 pt-28 sm:pt-36 pb-36 sm:pb-48" : "relative z-10 py-24 sm:py-36"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
          >
            <div>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.2em] text-cyan-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                SELECTED WORK &amp; CLIENT IMPACT
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl lg:text-7xl font-display font-black text-white tracking-tighter leading-tight">
                Intelligent products. <br />
                <span className="text-slate-400">Measurable impact.</span>
              </motion.h2>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <motion.p variants={fadeInUp} className="text-sm sm:text-base text-slate-300 max-w-md font-light leading-relaxed">
                Every case study represents an end-to-end partnership from discovery and technical design to deployment, automated QA, and high-concurrency scale.
              </motion.p>

              {/* Layout Toggle: Sticky Stream vs Alternating vs Grid */}
              <div className="inline-flex items-center p-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
                <button
                  onClick={() => setViewMode('sticky')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono-tech uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'sticky'
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-400/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Full-width background video with alternating cards"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Sticky View</span>
                </button>
                <button
                  onClick={() => setViewMode('alternating')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono-tech uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'alternating'
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-400/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Full-width alternating showcases"
                >
                  <Columns className="w-3.5 h-3.5" />
                  <span>Alternating</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono-tech uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-400/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Compact 2-column cards"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Grid View</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.06 }
              }
            }}
            className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-14 sm:mb-20 scrollbar-none"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                variants={fadeInScale}
                id={`filter-work-${cat.id}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveStickyIndex(0);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-950 font-bold shadow-lg shadow-white/10'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* ========================================================================= */}
          {/* VIEW MODE 1: ALTERNATING STICKY VIEW WITH DYNAMIC FULL-WIDTH BG VIDEO SYNC */}
          {/* ========================================================================= */}
          {viewMode === 'sticky' && (
            <div className="space-y-48 sm:space-y-64 py-12 sm:py-20">
              {filteredProjects.map((project, idx) => {
                const isRight = idx % 2 === 1; // 0 = Left, 1 = Right, 2 = Left, 3 = Right, etc.
                const isActive = activeStickyIndex === idx;
                const formattedIndex = `0${idx + 1}`;

                return (
                  <div
                    key={project.id}
                    id={`sticky-story-${project.id}`}
                    onClick={() => setActiveStickyIndex(idx)}
                    className={`w-full flex ${isRight ? 'lg:justify-end' : 'lg:justify-start'} transition-all duration-700`}
                  >
                    <div
                      className={`w-full lg:max-w-[560px] xl:max-w-[620px] rounded-[32px] p-7 sm:p-10 transition-all duration-500 cursor-pointer relative overflow-hidden ${
                        isActive
                          ? 'opacity-100 bg-slate-950/45 border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.7)] backdrop-blur-sm scale-[1.02]'
                          : 'opacity-35 hover:opacity-75 bg-slate-950/25 border border-white/10 backdrop-blur-sm scale-100'
                      }`}
                    >
                      {/* Dynamic Backlight Halo when active */}
                      {isActive && (
                        <div
                          className="absolute -inset-1 rounded-[34px] blur-2xl opacity-40 pointer-events-none -z-10 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at ${isRight ? '85%' : '15%'} 30%, ${project.accentColor}60, transparent 70%)`
                          }}
                        />
                      )}

                      {/* Top Eyebrow Header */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor: isActive ? project.accentColor : '#94a3b8'
                            }}
                          />
                          <span
                            className={`text-xs font-mono-tech font-bold tracking-wider uppercase ${
                              isActive ? 'text-cyan-400' : 'text-slate-400'
                            }`}
                          >
                            {formattedIndex} // {project.categoryLabel}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400">
                          <span>{project.year}</span>
                          <span>·</span>
                          <span>{project.duration}</span>
                        </div>
                      </div>

                      {/* Client Name & Project Headline */}
                      <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 mb-1.5">
                        {project.client}
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white tracking-tight leading-tight mb-4">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                        {project.tagline}
                      </p>

                      {/* Key Impact Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                        {project.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
                          >
                            <div className="text-lg sm:text-xl font-display font-bold text-cyan-300">
                              {m.value}
                            </div>
                            <div className="text-[10px] font-mono-tech text-slate-400 truncate mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex items-center gap-1.5 flex-wrap mb-8">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono-tech text-slate-300 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA Action Bar */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectCaseStudy(project);
                          }}
                          className="px-6 py-3 rounded-full bg-white text-slate-950 hover:bg-slate-200 font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-xl shadow-white/10 cursor-pointer active:scale-95 group"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <span className="text-[11px] font-mono-tech text-slate-400">
                          {isRight ? 'Right Side Showcase' : 'Left Side Showcase'} · 0{idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        {/* ========================================================================= */}
        {/* VIEW MODE 2: ALTERNATING FULL-WIDTH SHOWCASES                             */}
        {/* ========================================================================= */}
        {viewMode === 'alternating' && (
          <div className="space-y-20 sm:space-y-28">
            {filteredProjects.map((project, idx) => {
              const isReversed = idx % 2 === 1;
              const formattedIndex = `0${idx + 1}`;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative p-6 sm:p-10 lg:p-12 rounded-[32px] bg-[#0a0d14]/70 border border-white/[0.08] backdrop-blur-sm hover:border-white/20 transition-all duration-500 shadow-2xl"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}>
                    
                    {/* Editorial Text Column */}
                    <div className={`lg:col-span-7 flex flex-col justify-between ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      {/* Top Eyebrow */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono-tech font-bold text-cyan-400 tracking-wider">
                          {formattedIndex} // {project.categoryLabel}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-xs font-mono-tech text-slate-400">
                          {project.year} · {project.duration}
                        </span>
                      </div>

                      {/* Client & Display Headline */}
                      <div className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 mb-1">
                        {project.client}
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-tight mb-4">
                        {project.title}
                      </h3>

                      <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
                        {project.tagline}
                      </p>

                      {/* Key Metrics Chips */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                        {project.metrics.map((m, mIdx) => (
                          <div 
                            key={mIdx}
                            className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm"
                          >
                            <div className="text-xl sm:text-2xl font-display font-bold text-cyan-300">
                              {m.value}
                            </div>
                            <div className="text-[11px] font-mono-tech text-slate-400 truncate mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex items-center gap-2 flex-wrap mb-8">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono-tech text-slate-300 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA Action */}
                      <div>
                        <button
                          onClick={() => onSelectCaseStudy(project)}
                          className="px-6 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-200 font-display font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-xl shadow-white/10 cursor-pointer active:scale-95 group w-fit"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>

                    {/* One-Sided 3D Video Showcase Column */}
                    <div className={`lg:col-span-5 flex items-center justify-center ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <CleanVideoShowcase 
                        project={project} 
                        reversed={isReversed}
                        onSelect={() => onSelectCaseStudy(project)}
                      />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 3: COMPACT GRID VIEW                                            */}
        {/* ========================================================================= */}
        {viewMode === 'grid' && (
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInScale}
                layout
                id={`project-card-${project.id}`}
                onClick={() => onSelectCaseStudy(project)}
                className="group relative rounded-3xl overflow-hidden border border-white/[0.1] bg-[#0c0e15]/90 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer flex flex-col"
              >
                {/* Media Container with Looping Video */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  {project.videoUrl ? (
                    <video
                      ref={(el) => {
                        if (el) {
                          el.defaultMuted = true;
                          el.muted = true;
                        }
                      }}
                      onLoadedMetadata={(e) => {
                        const v = e.currentTarget;
                        v.defaultMuted = true;
                        v.muted = true;
                        v.playbackRate = 0.8;
                        v.play().catch(() => {});
                      }}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster={project.heroImage}
                      className="absolute inset-0 w-full h-full object-cover filter brightness-95 group-hover:brightness-110 transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-85 group-hover:brightness-95"
                      loading="lazy"
                    />
                  )}

                  {/* Dark vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15] via-black/20 to-black/50" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono-tech uppercase tracking-wider text-white">
                      {project.categoryLabel}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono-tech text-cyan-400 font-bold">
                      {project.year}
                    </span>
                  </div>

                  {/* Highlight Metric Pill */}
                  <div className="absolute bottom-4 left-4 pointer-events-none">
                    <div className="px-4 py-2 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-2.5 shadow-xl">
                      <span className="text-base sm:text-lg font-display font-extrabold text-cyan-400">
                        {project.metrics[0].value}
                      </span>
                      <span className="text-[11px] font-mono-tech text-slate-300">
                        {project.metrics[0].label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
                      {project.client}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-light line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech stack chips */}
                  <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.techStack.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[11px] font-mono-tech text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono-tech uppercase tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors shrink-0">
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        </div>
      </div>
    </section>
  );
};

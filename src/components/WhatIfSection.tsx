import React, { useState, useRef } from 'react';
import { Sparkles, ArrowUpRight, Activity, ArrowDown, Shield, Zap, Cpu } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { WHAT_IF_CONCEPTS } from '../data/content';
import { WhatIfConcept } from '../types';

interface WhatIfProps {
  onPartnerOnConcept: (conceptTitle: string) => void;
}

// 4 Columns of Futuristic Devices, R&D Prototypes & Video Loops (Fantasy.co Signature)
const PARALLAX_COLUMNS = [
  // Column 1: Spatial Wearables, Enterprise Cloud & Avatars
  [
    {
      title: 'Spatial Touch Experience',
      tag: '01 // WEARABLE OS',
      videoUrl: '/videos/bg-slowmo-interfaces.mp4'
    },
    {
      title: 'Enterprise Headless Platform',
      tag: '02 // SCALABLE SAAS',
      videoUrl: '/videos/fantasy-web-salesforce.mp4'
    },
    {
      title: 'Autonomous Neural Agent',
      tag: '03 // COGNITIVE AI',
      videoUrl: '/videos/fantasy-ai-eliza.mp4'
    }
  ],
  // Column 2: Mobile Flagships, Cockpits & Cloud Build
  [
    {
      title: 'Intelligent Mobile Flagship',
      tag: '04 // MOBILE EXPERIENCE',
      videoUrl: '/videos/fantasy-what-is-an-app.mp4'
    },
    {
      title: 'Curved Spatial Cockpit UI',
      tag: '05 // AUTOMOTIVE OS',
      videoUrl: '/videos/solaris-os.mp4'
    },
    {
      title: 'High-Throughput Dev Cloud',
      tag: '06 // CLOUD ARCHITECTURE',
      videoUrl: '/videos/fantasy-software-build.mp4'
    }
  ],
  // Column 3: AI Neural Core, Native Touch & Master Sizzle
  [
    {
      title: 'Generative AI Interface',
      tag: '07 // NEURAL CORE',
      videoUrl: '/videos/fantasy-ai-eliza.mp4'
    },
    {
      title: 'Tactile Motion Micro-Interactions',
      tag: '08 // 60 FPS FLUIDITY',
      videoUrl: '/videos/fantasy-mobile-app.mp4'
    },
    {
      title: 'PureTech 3D Innovations Sizzle',
      tag: '09 // 4K SHOWREEL',
      videoUrl: '/videos/fantasy-master-sizzle.mp4'
    }
  ],
  // Column 4: Connected Ambient Devices & Multimodal Runtimes
  [
    {
      title: 'Connected Healthcare Device',
      tag: '10 // BIOMEDICAL AI',
      videoUrl: '/videos/omnihealth-ai.mp4'
    },
    {
      title: 'Headless Global Platform',
      tag: '11 // DISTRIBUTED EDGE',
      videoUrl: '/videos/bg-web-platforms.mp4'
    },
    {
      title: 'Real-Time Multimodal Copilot',
      tag: '12 // COPILOT RUNTIME',
      videoUrl: '/videos/synapse-copilot.mp4'
    }
  ]
];

export const WhatIfSection: React.FC<WhatIfProps> = ({ onPartnerOnConcept }) => {
  const [activeConcept, setActiveConcept] = useState<WhatIfConcept>(WHAT_IF_CONCEPTS[0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position through the tall scrollytelling container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  // Scrollytelling scroll ranges (Fantasy.co exact architecture)
  // Stage 0: Initial centered device card visible in intro view.
  // When scrolling begins (0 -> 0.15), the whole multi-column grid begins moving upward.
  // The center card (column 2 middle) is initially centered on screen, and moves along with its column.
  
  // Parallax columns travel speeds
  const col1Y = useTransform(scrollYProgress, [0, 1], ['15%', '-75%']);
  const col2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-90%']);
  const col3Y = useTransform(scrollYProgress, [0, 1], ['25%', '-65%']);
  const col4Y = useTransform(scrollYProgress, [0, 1], ['10%', '-80%']);

  // Phase 1 (0.08 to 0.45): "What if? Launching the next generation of Intelligent Experiences"
  const phase1Opacity = useTransform(scrollYProgress, [0.04, 0.12, 0.38, 0.46], [0, 1, 1, 0]);
  const phase1Scale = useTransform(scrollYProgress, [0.04, 0.12, 0.38, 0.46], [0.94, 1, 1, 0.94]);
  const phase1Y = useTransform(scrollYProgress, [0.04, 0.12, 0.38, 0.46], ['40px', '0px', '0px', '-40px']);

  // Phase 2 (0.47 to 0.76): "As technology radically changes our world, we help our clients adapt and accelerate..."
  const phase2Opacity = useTransform(scrollYProgress, [0.47, 0.54, 0.70, 0.76], [0, 1, 1, 0]);
  const phase2Scale = useTransform(scrollYProgress, [0.47, 0.54, 0.70, 0.76], [0.94, 1, 1, 0.94]);
  const phase2Y = useTransform(scrollYProgress, [0.47, 0.54, 0.70, 0.76], ['40px', '0px', '0px', '-40px']);

  // Phase 3 (0.76 to 1.0): Interactive R&D Concept Prototypes & Build Action
  const phase3Opacity = useTransform(scrollYProgress, [0.77, 0.84, 1], [0, 1, 1]);
  const phase3Scale = useTransform(scrollYProgress, [0.77, 0.84, 1], [0.94, 1, 1]);
  const phase3Y = useTransform(scrollYProgress, [0.77, 0.84, 1], ['40px', '0px', '0px']);

  // Background overlay dimming as you scroll down
  const gridDimOpacity = useTransform(
    scrollYProgress, 
    [0, 0.06, 0.42, 0.48, 0.74, 0.82, 1], 
    [0.2, 0.85, 0.85, 0.9, 0.9, 0.96, 0.96]
  );

  return (
    <section
      id="what-if"
      ref={sectionRef}
      className="relative bg-black min-h-[400vh] select-none"
    >
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* STICKY FULL-SCREEN SCROLLYTELLING STAGE                                    */}
      {/* ========================================================================= */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">

        {/* ----------------------------------------------------------------------- */}
        {/* MULTI-COLUMN PARALLAX CARDS STREAM (FANTASY.CO SIGNATURE EFFECT)        */}
        {/* ----------------------------------------------------------------------- */}
        <div className="absolute inset-0 flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 px-4 pointer-events-none">
          {/* Column 1 */}
          <motion.div style={{ y: col1Y }} className="flex flex-col gap-6 sm:gap-8 w-56 sm:w-64 lg:w-72 shrink-0">
            {PARALLAX_COLUMNS[0].map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[3/4] rounded-[24px] overflow-hidden border border-white/10 bg-zinc-900/90 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              >
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
                    v.play().catch(() => {});
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.75] saturate-[1.1]"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[9px] font-mono-tech text-cyan-300 font-bold uppercase tracking-wider">
                  {item.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-display font-bold text-white tracking-tight">
                  {item.title}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column 2 (Features the main smartphone hero card) */}
          <motion.div style={{ y: col2Y }} className="flex flex-col gap-6 sm:gap-8 w-56 sm:w-64 lg:w-72 shrink-0">
            {PARALLAX_COLUMNS[1].map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-[24px] overflow-hidden border bg-zinc-900/90 shadow-[0_25px_60px_rgba(0,0,0,0.95)] ${
                  idx === 0
                    ? 'aspect-[16/10] sm:aspect-[4/3] border-cyan-500/40 ring-1 ring-cyan-400/30'
                    : 'aspect-[3/4] border-white/10'
                }`}
              >
                <video
                  ref={(el) => {
                    if (el) {
                      el.defaultMuted = true;
                      el.muted = true;
                      el.playbackRate = 0.85;
                    }
                  }}
                  onLoadedMetadata={(e) => {
                    const v = e.currentTarget;
                    v.defaultMuted = true;
                    v.muted = true;
                    v.play().catch(() => {});
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.85] saturate-[1.2]"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[9px] font-mono-tech text-cyan-300 font-bold uppercase tracking-wider">
                  {item.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-display font-bold text-white tracking-tight">
                  {item.title}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: col3Y }} className="flex flex-col gap-6 sm:gap-8 w-56 sm:w-64 lg:w-72 shrink-0">
            {PARALLAX_COLUMNS[2].map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[3/4] rounded-[28px] overflow-hidden border border-white/10 bg-[#090c15]/80 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-md"
              >
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
                    v.play().catch(() => {});
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.7] saturate-[1.15]"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[9px] font-mono-tech text-cyan-300 font-bold uppercase tracking-wider">
                  {item.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-display font-bold text-white tracking-tight">
                  {item.title}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column 4 (Visible on Desktop) */}
          <motion.div style={{ y: col4Y }} className="hidden xl:flex flex-col gap-6 sm:gap-8 w-56 sm:w-64 lg:w-72 shrink-0">
            {PARALLAX_COLUMNS[3].map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[3/4] rounded-[28px] overflow-hidden border border-white/10 bg-[#090c15]/80 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-md"
              >
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
                    v.play().catch(() => {});
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.7] saturate-[1.15]"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[9px] font-mono-tech text-cyan-300 font-bold uppercase tracking-wider">
                  {item.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-display font-bold text-white tracking-tight">
                  {item.title}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* CINEMA BLEND VIGNETTES & DYNAMIC DARKENING SCRIM                       */}
        {/* ----------------------------------------------------------------------- */}
        <motion.div 
          style={{ opacity: gridDimOpacity }}
          className="absolute inset-0 bg-[#04060c] pointer-events-none z-10 backdrop-blur-[4px]"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#06080d]/50 to-[#06080d]/90 pointer-events-none z-10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#06080d] via-[#06080d]/70 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06080d] via-[#06080d]/70 to-transparent pointer-events-none z-10" />

        {/* ----------------------------------------------------------------------- */}
        {/* LAYER 2: PINNED CENTER STATEMENTS (FANTASY.CO SIGNATURE PHASES)         */}
        {/* ----------------------------------------------------------------------- */}
        
        {/* PHASE 1: "What if? Launching the next generation of Intelligent Experiences" */}
        <motion.div
          style={{ opacity: phase1Opacity, scale: phase1Scale, y: phase1Y }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 pointer-events-auto p-6 sm:p-10 rounded-[32px] bg-[#070912]/80 backdrop-blur-2xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono-tech uppercase tracking-[0.2em] text-cyan-400 px-4 py-1.5 rounded-full bg-black/70 border border-cyan-500/30 backdrop-blur-xl shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>PURETECH R&amp;D LABS // VISIONARY CONCEPTS</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black text-white tracking-tighter leading-[0.98]">
              What if?
            </h2>

            <p className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 tracking-tight leading-tight max-w-3xl mx-auto">
              Launching the next generation of Intelligent Experiences.
            </p>

            <p className="text-sm sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              We don’t wait for tech standards to be defined. In our Alpharetta R&amp;D labs, we prototype tomorrow’s hardest software, spatial AI, and human experiences.
            </p>

            {/* Scroll Indicator */}
            <div className="pt-4 flex items-center justify-center gap-2 text-[11px] font-mono-tech text-cyan-400 uppercase tracking-widest animate-bounce">
              <span>Scroll To Explore R&amp;D Vision</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </motion.div>

        {/* PHASE 2: "As technology radically changes our world, we help our clients adapt and accelerate..." */}
        <motion.div
          style={{ opacity: phase2Opacity, scale: phase2Scale, y: phase2Y }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6 pointer-events-auto p-6 sm:p-12 rounded-[32px] bg-[#070912]/85 backdrop-blur-2xl border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.95)]">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono-tech uppercase tracking-[0.2em] text-emerald-400 px-4 py-1.5 rounded-full bg-black/70 border border-emerald-500/30 backdrop-blur-xl shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ADAPT &amp; ACCELERATE // VISION 2026</span>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
              As technology radically changes our world, we help our clients adapt and accelerate—transforming their platforms, systems, and intelligence to lead.
            </h3>

            {/* Futuristic Telemetry Micro-Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 text-xs font-mono-tech text-cyan-300 backdrop-blur-md flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Autonomous Multi-Agent Swarms</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 text-xs font-mono-tech text-indigo-300 backdrop-blur-md flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-indigo-400" />
                <span>Sub-8ms Spatial Runtimes</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 text-xs font-mono-tech text-emerald-300 backdrop-blur-md flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Defect Reliability</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* PHASE 3: INTERACTIVE R&D CONCEPT PROTOTYPES SPOTLIGHT */}
        <motion.div
          style={{ opacity: phase3Opacity, scale: phase3Scale, y: phase3Y }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none"
        >
          <div className="w-full max-w-5xl mx-auto pointer-events-auto">
            {/* Header & Concept Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
              <div>
                <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 block font-bold mb-1">
                  PROTOTYPE SPOTLIGHT // ALPHA-09
                </span>
                <h4 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                  Visionary R&amp;D Blueprints
                </h4>
              </div>

              {/* Concept Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-full bg-black/70 border border-white/15 backdrop-blur-xl">
                {WHAT_IF_CONCEPTS.map((concept, idx) => (
                  <button
                    key={concept.id}
                    onClick={() => setActiveConcept(concept)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono-tech uppercase tracking-wider transition-all cursor-pointer ${
                      activeConcept.id === concept.id
                        ? 'bg-white text-slate-950 font-bold shadow-lg'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Concept 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Spotlight Concept Card */}
            <div className="rounded-3xl border border-white/20 bg-slate-950/70 backdrop-blur-2xl p-6 sm:p-9 shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeConcept.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech uppercase tracking-wider">
                        {activeConcept.tag}
                      </span>
                      <span className="text-xs font-mono-tech text-slate-400">
                        {activeConcept.category}
                      </span>
                    </div>

                    <span className="text-xs font-mono-tech text-emerald-400 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 animate-pulse" />
                      FEASIBILITY: 100% PROVEN
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight leading-snug">
                      {activeConcept.question}
                    </h5>
                    <p className="text-xs sm:text-sm font-mono-tech text-cyan-300">
                      → Solution Architecture: {activeConcept.solutionTitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1 backdrop-blur-md">
                      <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                        ARCHITECTURAL HYPOTHESIS
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                        {activeConcept.hypothesis}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1 backdrop-blur-md">
                      <span className="text-[11px] font-mono-tech text-indigo-400 uppercase tracking-wider block">
                        PROJECTED ENTERPRISE VALUE
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                        {activeConcept.impactPotential}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-xs font-mono-tech text-slate-400">
                      PROPRIETARY R&amp;D UNDER BILATERAL NDA
                    </div>

                    <button
                      onClick={() => onPartnerOnConcept(activeConcept.solutionTitle)}
                      className="px-6 py-3 rounded-full bg-white hover:bg-slate-200 text-slate-950 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xl active:scale-95"
                    >
                      <span>Build This Concept</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

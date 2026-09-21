import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Smartphone, 
  Globe, 
  LayoutGrid, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CAPABILITIES } from '../data/content';
import { Capability } from '../types';
import { fadeInUp } from './MotionWrappers';

const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />,
  Smartphone: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
  Globe: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6 text-[#f6891f]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
  Terminal: <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
};

// Video showcases mapped directly to engineering capabilities
const CAPABILITY_VIDEOS: Record<string, string> = {
  'mobile-app-development': '/videos/fantasy-mobile-app.mp4',
  'custom-website-development': '/videos/fantasy-web-salesforce.mp4',
  'corporate-branding-engineering': '/videos/fantasy-software-build.mp4',
  'web-desktop-development': '/videos/fantasy-what-is-an-app.mp4',
  'digital-marketing': '/videos/fantasy-master-sizzle.mp4',
  'ui-ux-design': '/videos/bg-web-platforms.mp4',
  'quality-assurance': '/videos/fantasy-ai-eliza.mp4',
};

interface CapabilitiesProps {
  onStartProjectWithCapability: (capabilityName: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesProps> = ({
  onStartProjectWithCapability
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCapability = CAPABILITIES[activeIndex] || CAPABILITIES[0];

  // Fantasy.co Scroll Synchronizer:
  // Detects which discipline title is currently centered on the left side and updates the sticky right showcase
  useEffect(() => {
    const handleScroll = () => {
      const elements = CAPABILITIES.map((c) =>
        document.getElementById(`cap-step-${c.id}`)
      );

      const targetY = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      elements.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - targetY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDiscipline = (index: number, id: string) => {
    setActiveIndex(index);
    const el = document.getElementById(`cap-step-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="capabilities" className="relative bg-[#06080d]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* 1. FULL-WIDTH EDGE-TO-EDGE STICKY BACKGROUND VIDEO (FANTASY.CO STYLE)     */}
      {/* ========================================================================= */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none -z-0">
        {/* Preloaded simultaneous cross-fading background videos (Instant zero-delay switch) */}
        {CAPABILITIES.map((cap, idx) => {
          const isActive = activeIndex === idx;
          const vidSrc = CAPABILITY_VIDEOS[cap.id] || '/videos/capabilities-bg.mp4';
          return (
            <div
              key={cap.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <video
                ref={(el) => {
                  if (el) {
                    el.playbackRate = 0.8;
                    if (isActive) {
                      el.play().catch(() => {});
                    } else {
                      el.pause();
                    }
                  }
                }}
                src={vidSrc}
                autoPlay={isActive}
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.68] saturate-[1.1]"
              />
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
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-white font-bold">
            0{activeIndex + 1} <span className="text-slate-500">/</span> 0{CAPABILITIES.length}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 font-semibold">{activeCapability.title}</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FOREGROUND CONTENT (SCROLLING OVER THE FULL-WIDTH BACKGROUND)          */}
      {/* ========================================================================= */}
      <div className="-mt-[100vh] relative z-10 pt-28 sm:pt-36 pb-36 sm:pb-48">
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
            className="max-w-3xl mb-16 sm:mb-24"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.2em] text-cyan-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              SERVICES &amp; DISCIPLINES
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl lg:text-7xl font-display font-black text-white tracking-tighter leading-tight mb-4">
              Lead by design. <br />
              <span className="text-slate-400">Engineered to scale.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              From autonomous AI systems and flagship mobile apps to enterprise web architectures and mission-critical cloud infrastructure.
            </motion.p>
          </motion.div>

          {/* ========================================================================= */}
          {/* FANTASY.CO SCROLLYTELLING SERVICES (LEFT TITLES SCROLL, RIGHT STICKS)      */}
          {/* ========================================================================= */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: SCROLLING SERVICE TITLES (FANTASY.CO STYLE) */}
            <div className="lg:col-span-6 space-y-40 sm:space-y-56 py-12 sm:py-20">
              {CAPABILITIES.map((cap, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={cap.id}
                    id={`cap-step-${cap.id}`}
                    onClick={() => scrollToDiscipline(idx, cap.id)}
                    className={`cursor-pointer transition-all duration-500 group relative ${
                      isActive ? 'opacity-100' : 'opacity-25 hover:opacity-60'
                    }`}
                  >
                    {/* Number & Category Eyebrow */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`font-mono-tech text-xs sm:text-sm font-bold tracking-widest px-3 py-1 rounded-full border transition-all ${
                          isActive
                            ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 shadow-lg shadow-cyan-400/20'
                            : 'text-slate-500 bg-white/[0.02] border-white/5'
                        }`}
                      >
                        {cap.number}
                      </span>
                      <span className="text-xs font-mono-tech uppercase tracking-widest text-slate-500">
                        DISCIPLINE {cap.number} // 07
                      </span>
                    </div>

                    {/* Giant Bold Fantasy.co Typography Title */}
                    <h3 className={`text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.1] transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 group-hover:text-slate-200'
                    }`}>
                      {cap.title}
                    </h3>

                    {/* Dynamic Tagline Snippet visible on active */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                      }`}
                    >
                      <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-lg">
                        {cap.tagline}
                      </p>
                    </div>

                    {/* Interactive Glowing Indicator Bar */}
                    <div className="mt-6 flex items-center gap-3">
                      <div
                        className={`h-0.5 rounded-full transition-all duration-500 ${
                          isActive
                            ? 'w-24 bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-400/50'
                            : 'w-8 bg-white/10 group-hover:w-12'
                        }`}
                      />
                      {isActive && (
                        <span className="text-[11px] font-mono-tech uppercase tracking-wider text-cyan-400 animate-pulse font-semibold">
                          CURRENT VIEW
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: STICKY SHOWCASE COCKPIT (PINNED IN VIEWPORT) */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 lg:self-start">
              <div className="relative rounded-[32px] overflow-hidden border border-white/20 bg-slate-950/40 shadow-[0_30px_100px_rgba(0,0,0,0.7)] backdrop-blur-xl p-7 sm:p-10">
                
                {/* Dynamic Content Panel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCapability.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6 sm:space-y-7"
                  >
                    {/* Top Bar with Icon & Counter */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-5">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-md shadow-lg">
                          {ICON_MAP[activeCapability.iconName] || <Cpu className="w-6 h-6 text-cyan-400" />}
                        </div>
                        <div>
                          <span className="text-[11px] font-mono-tech uppercase tracking-widest text-cyan-400 block font-bold">
                            DISCIPLINE {activeCapability.number} // 07
                          </span>
                          <h4 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight">
                            {activeCapability.title}
                          </h4>
                        </div>
                      </div>

                      <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-black/40 border border-white/15 text-xs font-mono-tech text-slate-200 backdrop-blur-md">
                        {activeCapability.technologies.length} Technologies
                      </span>
                    </div>

                    {/* Tagline & Architectural Overview */}
                    <div className="space-y-2">
                      <p className="text-base sm:text-lg font-medium text-white leading-snug">
                        {activeCapability.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-3">
                        {activeCapability.description}
                      </p>
                    </div>

                    {/* Specialized Scopes & Architecture Checklist */}
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-mono-tech uppercase tracking-widest text-cyan-300/90 block font-semibold">
                        SPECIALIZED SCOPES &amp; ARCHITECTURES
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeCapability.subServices.slice(0, 4).map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-200 bg-black/35 p-2.5 rounded-xl border border-white/10 backdrop-blur-md"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-tight font-medium">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Frameworks & Technologies Pills */}
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-mono-tech uppercase tracking-widest text-cyan-300/90 block font-semibold">
                        FRAMEWORKS, RUNTIMES &amp; CLOUDS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeCapability.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-black/35 border border-white/10 text-xs font-mono-tech text-slate-200 backdrop-blur-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-mono-tech text-emerald-400 flex items-center gap-1.5 uppercase font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Senior Squad Delivery
                        </span>
                        <span className="text-[11px] text-slate-400 font-light block">
                          Direct architect Slack &amp; MS Teams integration
                        </span>
                      </div>

                      <button
                        onClick={() => onStartProjectWithCapability(activeCapability.title)}
                        className="px-6 py-3 rounded-full bg-white hover:bg-slate-200 text-slate-950 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl cursor-pointer active:scale-95"
                      >
                        <span>Engage This Discipline</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Timeline Quick Jump Dots */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                  <span className="text-[11px] uppercase tracking-wider">0{activeIndex + 1} // 07 Disciplines</span>
                  <div className="flex items-center gap-1.5">
                    {CAPABILITIES.map((c, dotIdx) => (
                      <button
                        key={c.id}
                        onClick={() => scrollToDiscipline(dotIdx, c.id)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          activeIndex === dotIdx
                            ? 'w-6 bg-cyan-400 shadow-md shadow-cyan-400/50'
                            : 'w-1.5 bg-white/20 hover:bg-white/50'
                        }`}
                        title={c.title}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

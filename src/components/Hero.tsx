import React from 'react';
import { 
  Play, 
  ArrowDown, 
  Sparkles, 
  Shield, 
  Zap, 
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { staggerContainer, fadeInUp, fadeInScale } from './MotionWrappers';
import { HeroWebGL } from './HeroWebGL';

interface HeroProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
  onExploreWork: () => void;
  onOpenReel: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEstimator,
  onOpenContact,
  onExploreWork,
  onOpenReel
}) => {
  return (
    <section className="relative min-h-[96vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Interactive Three.js WebGL kinetic element in background */}
      <HeroWebGL />

      {/* Subtle architectural grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* ======================================================== */}
          {/* 60% WIDTH TEXT AREA (FANTASY.CO CLEAN MINIMALIST RATIO)  */}
          {/* ======================================================== */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-[60%] lg:max-w-[60%] flex flex-col justify-center"
          >
            {/* Minimalist Positioning Eyebrow */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.12] backdrop-blur-xl mb-5 sm:mb-6 w-fit shadow-lg shadow-black/40"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono-tech tracking-wider text-slate-200 uppercase font-semibold">
                AI-NATIVE DIGITAL PRODUCT ATELIER
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-[10px] sm:text-xs font-mono-tech text-cyan-400 font-bold uppercase">
                PURETECH 2026
              </span>
            </motion.div>

            {/* Short, Iconic Display Headline (Low Word Count, Sleek Size) */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-display font-black tracking-[-0.035em] text-white leading-[1.08] mb-5"
            >
              We build what’s next in{' '}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-slate-300 bg-clip-text text-transparent">
                digital products.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-slate-300 font-light max-w-xl leading-relaxed mb-8 sm:mb-10"
            >
              From Alpharetta to global enterprises, PureTech engineers intelligent platforms, spatial AI experiences, and high-performance mobile flagships.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <motion.button
                variants={fadeInScale}
                id="hero-watch-reel-btn"
                onClick={onOpenReel}
                className="px-8 py-4.5 rounded-full bg-white hover:bg-slate-200 text-slate-950 font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_20px_50px_rgba(255,255,255,0.25)] cursor-pointer active:scale-95"
              >
                <Play className="w-4 h-4 fill-current text-slate-950" />
                <span>Watch Showreel</span>
              </motion.button>

              <motion.button
                variants={fadeInScale}
                id="hero-explore-work-btn"
                onClick={onExploreWork}
                className="px-7 py-4.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-display font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 border border-white/[0.16] flex items-center justify-center gap-2 backdrop-blur-xl cursor-pointer active:scale-95"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4 text-cyan-400" />
              </motion.button>

              <motion.button
                variants={fadeInScale}
                id="hero-estimator-btn"
                onClick={onOpenEstimator}
                className="px-7 py-4.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-display font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 border border-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Estimate Project</span>
              </motion.button>
            </motion.div>

            {/* Credibility Micro-Badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-y-2.5 gap-x-8 text-[11px] font-mono-tech text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>100% IP CONFIDENTIALITY &amp; NDA</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>ZERO-DEFECT QA GUARANTEE</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                <span>SUB-8MS RUNTIMES</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right 40% open space allowing the kinetic 3D WebGL background to breathe */}
          <div className="hidden lg:block w-[35%]" />

        </div>

        {/* Live Metrics Grid & Telemetry Banner (Fantasy.co Dark Glass HUD) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            }
          }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-10 sm:pt-14 mt-12 sm:mt-16 border-t border-white/[0.1]"
        >
          <motion.div variants={fadeInUp} className="p-4 sm:p-5 rounded-2xl bg-zinc-950/60 border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <div className="text-[10px] font-mono-tech text-cyan-400 uppercase tracking-widest font-bold">
                IP PROTECTION
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              100% NDA
            </div>
            <div className="text-xs text-slate-400 font-light">
              Bilateral confidentiality for all client IP
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-4 sm:p-5 rounded-2xl bg-zinc-950/60 border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="text-[10px] font-mono-tech text-emerald-400 uppercase tracking-widest font-bold">
                ENGINEERING LATENCY
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              &lt; 8ms
            </div>
            <div className="text-xs text-slate-400 font-light">
              High-throughput edge &amp; AI runtimes
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-4 sm:p-5 rounded-2xl bg-zinc-950/60 border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <div className="text-[10px] font-mono-tech text-indigo-400 uppercase tracking-widest font-bold">
                ZERO-DEFECT QA
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              99.99%
            </div>
            <div className="text-xs text-slate-400 font-light">
              Automated multi-device test verification
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-4 sm:p-5 rounded-2xl bg-zinc-950/60 border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f6891f] animate-pulse" />
              <div className="text-[10px] font-mono-tech text-[#f6891f] uppercase tracking-widest font-bold">
                DELIVERY HUBS
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              3 NODES
            </div>
            <div className="text-xs text-slate-400 font-light">
              Alpharetta GA, San Francisco, London UK
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator - Fantasy.co signature */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-8 flex items-center justify-between text-xs font-mono-tech text-slate-400"
      >
        <button
          onClick={onExploreWork}
          className="hover:text-white flex items-center gap-2 cursor-pointer transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
          <span>SCROLL TO EXPLORE WORK</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>

        <div className="hidden sm:flex items-center gap-4">
          <span>ALPHARETTA, GA EST</span>
          <span>•</span>
          <span>AI-NATIVE PRODUCT ATELIER</span>
        </div>
      </motion.div>
    </section>
  );
};

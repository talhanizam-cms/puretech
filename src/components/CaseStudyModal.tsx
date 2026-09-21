import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Play, Image as ImageIcon, Calendar, Clock, Layers, Sparkles } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onInquire
}) => {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [viewMode, setViewMode] = useState<'video' | 'gallery'>('video');

  useEffect(() => {
    if (caseStudy) {
      setSelectedImage(caseStudy.heroImage);
      setViewMode(caseStudy.youtubeId || caseStudy.videoUrl ? 'video' : 'gallery');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [caseStudy]);

  if (!caseStudy) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/92 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#0b0c13] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Sticky top header bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/10 bg-[#0e101a]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400">
              {caseStudy.categoryLabel}
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-xs font-mono-tech text-white font-semibold">
              {caseStudy.client}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {(caseStudy.youtubeId || caseStudy.videoUrl) && (
              <div className="flex items-center bg-white/[0.06] p-1 rounded-full border border-white/10 text-xs font-mono-tech">
                <button
                  onClick={() => setViewMode('video')}
                  className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer ${
                    viewMode === 'video' ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>MOTION REEL</span>
                </button>

                <button
                  onClick={() => setViewMode('gallery')}
                  className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer ${
                    viewMode === 'gallery' ? 'bg-white text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>GALLERY</span>
                </button>
              </div>
            )}

            <button
              id="close-case-study-modal-btn"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Header titles */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight mb-4">
              {caseStudy.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
              {caseStudy.tagline}
            </p>
          </div>

          {/* Key verified metrics strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-black text-white">
                  {m.value}
                </div>
                <div className="text-xs font-mono-tech text-cyan-400 uppercase tracking-wider">
                  {m.label}
                </div>
                <div className="text-xs text-slate-400">
                  {m.description}
                </div>
              </div>
            ))}
          </div>

          {/* Main Visual Display (Video or Gallery) */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
              {viewMode === 'video' && (caseStudy.youtubeId || caseStudy.videoUrl) ? (
                caseStudy.youtubeId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${caseStudy.youtubeId}?autoplay=1&mute=0&controls=1&loop=1&playlist=${caseStudy.youtubeId}&rel=0&modestbranding=1`}
                    title={caseStudy.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    poster={caseStudy.heroImage}
                    className="w-full h-full object-cover"
                  >
                    <source src={caseStudy.videoUrl} type="video/mp4" />
                  </video>
                )
              ) : (
                <img
                  src={selectedImage}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Thumbnail switcher for gallery */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              <button
                onClick={() => {
                  setSelectedImage(caseStudy.heroImage);
                  setViewMode('gallery');
                }}
                className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  viewMode === 'gallery' && selectedImage === caseStudy.heroImage
                    ? 'border-cyan-400 scale-105'
                    : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={caseStudy.heroImage} alt="Hero View" className="w-full h-full object-cover" />
              </button>

              {caseStudy.galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedImage(img);
                    setViewMode('gallery');
                  }}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    viewMode === 'gallery' && selectedImage === img
                      ? 'border-cyan-400 scale-105'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Gallery view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-slate-400 block">
                THE CHALLENGE
              </span>
              <p className="text-base text-slate-300 font-light leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 block">
                ENGINEERED SOLUTION
              </span>
              <p className="text-base text-slate-200 font-light leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pillars */}
          <div className="space-y-4">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-slate-400 block">
              SYSTEM ARCHITECTURE & QA PROTOCOLS
            </span>
            <div className="grid grid-cols-1 gap-3">
              {caseStudy.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 font-light leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-slate-400 block">
              TECH STACK & RUNTIMES
            </span>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono-tech text-slate-300 bg-white/[0.05] border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Quote if available */}
          {caseStudy.testimonial && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[#10121b] to-cyan-950/40 border border-white/10 space-y-4">
              <p className="text-base sm:text-lg text-slate-200 font-light italic leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </p>
              <div>
                <div className="text-sm font-display font-bold text-white">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-xs font-mono-tech text-cyan-400">
                  {caseStudy.testimonial.role}
                </div>
              </div>
            </div>
          )}

          {/* Footer Call to Action */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono-tech text-slate-400">
              ENGAGEMENT TIMELINE: {caseStudy.duration} · DELIVERED IN {caseStudy.year}
            </div>

            <button
              id="modal-inquire-btn"
              onClick={() => {
                onClose();
                onInquire(caseStudy.title);
              }}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-200 text-slate-950 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xl active:scale-95"
            >
              <span>Build Similar Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

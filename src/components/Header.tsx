import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, Volume2, VolumeX, Play, Sparkles } from 'lucide-react';
import { COMPANY_FACTS } from '../data/content';
import { ambientAudio } from '../utils/audio';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenEstimator: () => void;
  onOpenContact: () => void;
  onOpenReel: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenEstimator,
  onOpenContact,
  onOpenReel
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['work', 'capabilities', 'what-if', 'estimator', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 240) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = ambientAudio.toggle();
    setAudioActive(state);
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#08090d]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl'
            : 'py-5 sm:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Official PureTech Innovations Vector */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 cursor-pointer"
              id="brand-logo"
            >
              <img
                src="/puretech-logo.svg"
                alt="PureTech Innovations"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Center Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-mono-tech uppercase tracking-wider text-slate-300">
              {[
                { id: 'work', label: 'WORK' },
                { id: 'capabilities', label: 'SERVICES' },
                { id: 'pillars', label: 'PROCESS' },
                { id: 'about', label: 'ABOUT' },
                { id: 'team', label: 'TEAM' },
                { id: 'testimonials', label: 'REVIEWS' },
                { id: 'estimator', label: 'ESTIMATOR' },
                { id: 'contact', label: 'CONTACT' }
              ].map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors cursor-pointer py-1 relative ${
                    activeSection === item.id
                      ? 'text-white font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#f6891f]" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Side: Sound Toggle + Menu Button */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                id="fantasy-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                className="px-4 sm:px-5 py-2 rounded-full bg-white text-slate-950 font-display font-bold text-xs uppercase tracking-wider hover:bg-[#f6891f] hover:text-white transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg shadow-white/10 active:scale-95"
              >
                {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Cinematic Menu Drawer (Desktop & Mobile) */}
      {menuOpen && (
        <div
          id="fantasy-fullscreen-menu"
          className="fixed inset-0 z-40 bg-[#06070a]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 lg:px-20 overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="/puretech-logo.svg"
                alt="PureTech Innovations"
                className="h-7 w-auto object-contain"
              />
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#f6891f] animate-pulse" />
              <span className="hidden sm:inline-block text-xs font-mono-tech text-slate-300 uppercase tracking-widest">
                ALPHARETTA STUDIO · READY FOR ENGAGEMENTS
              </span>
            </div>

            <button
              onClick={toggleSound}
              className="text-xs font-mono-tech text-[#f6891f] flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              {audioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{audioActive ? 'SOUND: ON' : 'ENABLE AMBIENT AUDIO'}</span>
            </button>
          </div>

          {/* Main Giant Menu Links */}
          <div className="py-8 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col space-y-3 sm:space-y-4">
              {[
                { id: 'work', num: '01', title: 'SELECTED WORK', subtitle: 'AI, Mobile, Fintech, Logistics' },
                { id: 'capabilities', num: '02', title: 'SERVICES & LABS', subtitle: '06 Core Engineering Disciplines' },
                { id: 'pillars', num: '03', title: 'WORK PROCESS', subtitle: '05 Pillars of PureTech Engineering' },
                { id: 'about', num: '04', title: 'ABOUT PURETECH', subtitle: 'Alpharetta, GA · Principles & Methodologies' },
                { id: 'team', num: '05', title: 'LEADERSHIP & TEAM', subtitle: 'Principals, Architects & Researchers' },
                { id: 'testimonials', num: '06', title: 'CLIENT REVIEWS', subtitle: 'What Founders & CTOs Say About Us' },
                { id: 'faq', num: '07', title: 'POPULAR QUESTIONS', subtitle: 'Engineering, Sprints, IP & Delivery SLAs' },
                { id: 'estimator', num: '08', title: 'SCOPE ESTIMATOR', subtitle: 'Interactive Sprint Pod Blueprint' },
                { id: 'contact', num: '09', title: 'LET’S TALK', subtitle: 'Start an Engagement Under Bilateral NDA' }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-baseline gap-4 sm:gap-6 cursor-pointer text-left py-1"
                >
                  <span className="text-xs sm:text-sm font-mono-tech text-[#f6891f]/90 group-hover:text-[#f6891f] tracking-wider font-bold">
                    {item.num}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-2xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white group-hover:text-[#f6891f] group-hover:translate-x-2 transition-all duration-200">
                      {item.title}
                    </span>
                    <span className="text-xs font-mono-tech text-slate-400 group-hover:text-slate-300 transition-colors">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Office Hubs & Direct Inquiry */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs font-mono-tech uppercase tracking-widest text-[#f6891f] font-bold block">
                  GLOBAL HEADQUARTERS
                </span>
                <p className="text-sm text-slate-200 font-light">
                  {COMPANY_FACTS.headquarters}
                </p>
                <span className="text-xs font-mono-tech text-slate-400 block pt-1">
                  PHONE: {COMPANY_FACTS.phone}
                </span>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs font-mono-tech uppercase tracking-widest text-slate-400 block">
                  DIRECT PARTNERSHIP
                </span>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#f6891f] to-[#ff9d3b] hover:from-[#e07310] hover:to-[#f6891f] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#f6891f]/20"
                >
                  <span>Initiate Inquiry Under NDA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer inside Menu */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-400">
            <div>© {new Date().getFullYear()} PURETECH INNOVATIONS · ALL RIGHTS RESERVED</div>
            <div className="flex items-center gap-4">
              <span>ALPHARETTA</span>
              <span>•</span>
              <span>SAN FRANCISCO</span>
              <span>•</span>
              <span>LONDON</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ChevronRight, 
  Sparkles, 
  Smartphone, 
  Globe, 
  Cpu, 
  ShieldCheck, 
  DollarSign, 
  Layers, 
  Code2, 
  Palette, 
  TrendingUp, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY_FACTS } from '../data/content';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenEstimator: () => void;
  onOpenContact: () => void;
  onOpenReel: () => void;
}

type MenuCategory = 'home' | 'about' | 'services' | 'pricing' | 'contact';

interface SubMenuItem {
  title: string;
  tagline: string;
  hash: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface MainMenuItem {
  id: MenuCategory;
  num: string;
  title: string;
  subtitle: string;
  hash: string;
  submenuHeader: string;
  submenuDesc: string;
  submenuItems: SubMenuItem[];
}

const MENU_DATA: MainMenuItem[] = [
  {
    id: 'home',
    num: '01',
    title: 'HOME',
    subtitle: 'Main Flagship Experience & Overview',
    hash: '#',
    submenuHeader: 'HOME PAGE DIRECTORY',
    submenuDesc: 'Explore the core highlights and interactive experiences of PureTech Innovations.',
    submenuItems: [
      { 
        title: 'Selected Client Work', 
        tagline: 'AI, Mobile Flagships, Fintech & Enterprise Logistics', 
        hash: '#work',
        icon: <Layers className="w-4 h-4 text-cyan-400" />
      },
      { 
        title: 'Visionary R&D Labs', 
        tagline: 'Interactive "What If?" Spatial AI & Systems Prototypes', 
        hash: '#what-if',
        icon: <Sparkles className="w-4 h-4 text-purple-400" />
      },
      { 
        title: 'Executive Engineering Team', 
        tagline: 'Top 2% Senior Product Architects & Researchers', 
        hash: '#team',
        icon: <Building2 className="w-4 h-4 text-indigo-400" />
      },
      { 
        title: 'Client Reviews & Endorsements', 
        tagline: 'Verified Testimonials from Founders & Tech Leaders', 
        hash: '#testimonials',
        icon: <CheckCircle2 className="w-4 h-4 text-[#f6891f]" />
      }
    ]
  },
  {
    id: 'about',
    num: '02',
    title: 'ABOUT',
    subtitle: 'Alpharetta, GA · Principles & Global Delivery',
    hash: '#about',
    submenuHeader: 'ABOUT PURETECH // COMPANY OVERVIEW',
    submenuDesc: 'Founded in Alpharetta, Georgia, building sustainable, high-velocity digital products.',
    submenuItems: [
      { 
        title: 'Agency Philosophy & Vision', 
        tagline: 'Technology that moves your business forward with zero waste', 
        hash: '#about',
        icon: <Building2 className="w-4 h-4 text-cyan-400" />
      },
      { 
        title: 'Leadership & Research Pods', 
        tagline: 'Dedicated senior architects with ex-FAANG & research credentials', 
        hash: '#team',
        icon: <Cpu className="w-4 h-4 text-indigo-400" />
      },
      { 
        title: 'Foundational 5 Pillars', 
        tagline: 'Core methodologies & architectural standards for code longevity', 
        hash: '#pillars',
        icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />
      },
      { 
        title: 'Follow-the-Sun Delivery Nodes', 
        tagline: 'Alpharetta GA, San Francisco, London UK engineering presence', 
        hash: '#about',
        icon: <MapPin className="w-4 h-4 text-[#f6891f]" />
      }
    ]
  },
  {
    id: 'services',
    num: '03',
    title: 'SERVICES',
    subtitle: '08 Core Digital Product Disciplines',
    hash: '#services',
    submenuHeader: 'ENGINEERING SERVICES // 08 DISCIPLINES',
    submenuDesc: 'Select an engineering discipline to review specialized capabilities and technologies.',
    submenuItems: [
      { 
        title: 'Mobile App Development', 
        tagline: 'Native iOS (SwiftUI) & Android (Kotlin Compose) applications', 
        hash: '#services-mobile',
        badge: 'POPULAR',
        icon: <Smartphone className="w-4 h-4 text-sky-400" />
      },
      { 
        title: 'Custom Website Development', 
        tagline: 'High-concurrency React 19, Next.js & TypeScript platforms', 
        hash: '#services-web',
        icon: <Globe className="w-4 h-4 text-emerald-400" />
      },
      { 
        title: 'Corporate Branding & Software', 
        tagline: 'Comprehensive design systems & corporate software architectures', 
        hash: '#services-branding',
        icon: <Palette className="w-4 h-4 text-purple-400" />
      },
      { 
        title: 'Web & Desktop Applications', 
        tagline: 'Full-stack cloud SaaS platforms & cross-platform desktop tools', 
        hash: '#services-desktop',
        icon: <Code2 className="w-4 h-4 text-cyan-400" />
      },
      { 
        title: 'UI/UX Design & Prototyping', 
        tagline: 'Human-centered interfaces, spatial UI & interactive wireframes', 
        hash: '#services-uiux',
        icon: <Layers className="w-4 h-4 text-indigo-400" />
      },
      { 
        title: 'Quality Assurance & Testing', 
        tagline: 'Automated multi-device CI/CD test harnesses (Appium, Selenium)', 
        hash: '#services-qa',
        icon: <ShieldCheck className="w-4 h-4 text-amber-400" />
      },
      { 
        title: 'Applied AI & Autonomous Agents', 
        tagline: 'Vector RAG, LLM Tooling, multimodal vision & multi-agent swarms', 
        hash: '#services-ai',
        badge: 'NEW',
        icon: <Cpu className="w-4 h-4 text-[#f6891f]" />
      },
      { 
        title: 'Digital Marketing & Growth', 
        tagline: 'Conversion rate architecture, analytics pipelines & market scale', 
        hash: '#services-marketing',
        icon: <TrendingUp className="w-4 h-4 text-rose-400" />
      }
    ]
  },
  {
    id: 'pricing',
    num: '04',
    title: 'PRICING',
    subtitle: 'Sprint Cadences & Scope Blueprints',
    hash: '#pricing',
    submenuHeader: 'PRICING & SPRINT POD BLUEPRINTS',
    submenuDesc: 'Transparent engineering sprint structures and resource allocations tailored to your stage.',
    submenuItems: [
      { 
        title: 'Interactive Scope Estimator', 
        tagline: 'Configure sprint duration, squad sizing & architectural frameworks', 
        hash: '#estimator',
        badge: 'INTERACTIVE',
        icon: <DollarSign className="w-4 h-4 text-[#f6891f]" />
      },
      { 
        title: 'Validated MVP Sprint Pod', 
        tagline: 'Rapid 6-8 week deployment for validated product concepts', 
        hash: '#estimator',
        icon: <Sparkles className="w-4 h-4 text-cyan-400" />
      },
      { 
        title: 'Dedicated Scale Flagship', 
        tagline: 'Dedicated squads of senior architects for high-traffic platforms', 
        hash: '#estimator',
        icon: <Layers className="w-4 h-4 text-indigo-400" />
      },
      { 
        title: 'Enterprise Retainers & SLAs', 
        tagline: 'Mission-critical continuous modernization with guaranteed SLAs', 
        hash: '#estimator',
        icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />
      }
    ]
  },
  {
    id: 'contact',
    num: '05',
    title: 'CONTACT US',
    subtitle: 'Start an Engagement Under Bilateral NDA',
    hash: '#contact',
    submenuHeader: 'DIRECT PARTNERSHIP & INQUIRY',
    submenuDesc: 'Direct access to our senior engineering directors under strict bilateral mutual NDA.',
    submenuItems: [
      { 
        title: 'Initiate Inquiry Under NDA', 
        tagline: 'Guaranteed mutual NDA execution prior to architectural exchange', 
        hash: '#contact',
        badge: 'CONFIDENTIAL',
        icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />
      },
      { 
        title: 'Alpharetta Headquarters Desk', 
        tagline: COMPANY_FACTS.headquarters, 
        hash: '#contact',
        icon: <MapPin className="w-4 h-4 text-[#f6891f]" />
      },
      { 
        title: 'Direct Phone Lines', 
        tagline: `${COMPANY_FACTS.phone} · +1 (347) 783-9296`, 
        hash: 'tel:+19723259561',
        icon: <Phone className="w-4 h-4 text-cyan-400" />
      },
      { 
        title: 'Official Communications', 
        tagline: COMPANY_FACTS.email, 
        hash: 'mailto:info@puretechinnovations.com',
        icon: <Mail className="w-4 h-4 text-indigo-400" />
      }
    ]
  }
];

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
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('services');

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

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const cleanId = id.replace('#', '');
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmenuClick = (hash: string) => {
    setMenuOpen(false);
    if (hash.startsWith('#')) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.location.hash = hash;
  };

  const currentCategoryData = MENU_DATA.find((m) => m.id === activeCategory) || MENU_DATA[2];

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

            {/* Right Side: Menu Button */}
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

      {/* Fullscreen Cinematic Inner Pages Menu Drawer (Desktop & Mobile) */}
      {menuOpen && (
        <div
          id="fantasy-fullscreen-menu"
          className="fixed inset-0 z-40 bg-[#06070a]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-5 sm:px-10 lg:px-16 overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Top Bar inside Menu: Studio Status & Direct Close */}
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

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-cyan-400 hidden sm:inline-block">
                SELECT PAGE OR DISCIPLINE
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Content Area: Split Navigation & Dynamic Sub-Menu Panel */}
          <div className="py-8 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (Main Inner Page Links) */}
            <div className="lg:col-span-5 flex flex-col space-y-2 sm:space-y-3">
              <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-slate-400 mb-2">
                NAVIGATION DIRECTORY
              </div>

              {MENU_DATA.map((item) => {
                const isSelected = activeCategory === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveCategory(item.id)}
                    className={`group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isSelected
                        ? 'bg-gradient-to-r from-white/[0.08] to-white/[0.02] border-[#f6891f]/60 shadow-[0_10px_30px_rgba(246,137,31,0.15)] translate-x-1'
                        : 'bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-baseline gap-3.5 sm:gap-5">
                      <span className={`text-xs sm:text-sm font-mono-tech tracking-wider font-bold transition-colors ${
                        isSelected ? 'text-[#f6891f]' : 'text-slate-500 group-hover:text-slate-300'
                      }`}>
                        {item.num}
                      </span>
                      <div className="flex flex-col">
                        <span className={`text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                          {item.title}
                        </span>
                        <span className="text-xs font-mono-tech text-slate-400">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.id === 'services' && (
                        <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#f6891f]/15 border border-[#f6891f]/40 text-[10px] font-mono-tech text-[#f6891f] font-bold">
                          08 SUB-PAGES
                        </span>
                      )}
                      <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                        isSelected ? 'text-[#f6891f] translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Dynamic Sub-Menu Details Panel */}
            <div className="lg:col-span-7 bg-[#0c101c]/90 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
              {/* Submenu Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                <div>
                  <span className="text-xs font-mono-tech uppercase tracking-widest text-[#f6891f] font-bold block mb-1">
                    {currentCategoryData.submenuHeader}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 font-light">
                    {currentCategoryData.submenuDesc}
                  </p>
                </div>
                <span className="text-[11px] font-mono-tech text-slate-400 shrink-0">
                  {currentCategoryData.submenuItems.length} ITEMS
                </span>
              </div>

              {/* Sub-menu Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {currentCategoryData.submenuItems.map((sub, sIdx) => (
                  <a
                    key={sIdx}
                    href={sub.hash}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick(sub.hash);
                    }}
                    className="group p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#f6891f]/50 transition-all duration-200 flex flex-col justify-between cursor-pointer space-y-2 relative"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {sub.icon}
                        <span className="text-sm sm:text-base font-display font-bold text-white group-hover:text-[#f6891f] transition-colors">
                          {sub.title}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#f6891f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </div>

                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {sub.tagline}
                    </p>

                    {sub.badge && (
                      <div className="pt-1">
                        <span className="inline-block px-2 py-0.5 rounded-md bg-[#f6891f]/10 border border-[#f6891f]/30 text-[9px] font-mono-tech text-[#f6891f] font-bold uppercase tracking-wider">
                          {sub.badge}
                        </span>
                      </div>
                    )}
                  </a>
                ))}
              </div>

              {/* Bottom Quick Action Banner inside Sub-menu */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono-tech text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ALPHARETTA ENGINEERING HUB · ENGAGEMENTS OPEN</span>
                </div>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f6891f] to-[#ff9d3b] hover:from-[#e07310] hover:to-[#f6891f] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#f6891f]/20 active:scale-95"
                >
                  <span>Initiate Inquiry Under NDA</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
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


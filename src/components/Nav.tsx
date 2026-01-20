import { MouseEvent, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Github, Languages, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavProps {
  sections: ReadonlyArray<{ id: string; label: string }>;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Nav({ sections, activeSection, onNavigate }: NavProps) {
  const { language, setLanguage } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(scrolled > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    event.preventDefault();
    if (sectionId) {
      onNavigate(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-slate-950/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'py-6'
        }`}>
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-[60]"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href={`#${sections[0]?.id ?? ''}`}
              className="flex items-center gap-4 group relative"
              onClick={(event) => handleClick(event, sections[0]?.id ?? '')}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-widest uppercase mb-[-4px]">
                  Zoran
                </span>
                <span className="text-[10px] font-black text-cyan-400 tracking-[0.4em] uppercase opacity-80">
                  Portfolio
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center p-1.5 rounded-[1.5rem] bg-white/5 border border-white/5 backdrop-blur-xl">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(event) => handleClick(event, section.id)}
                    className={`relative px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/10 rounded-2xl border border-white/10 shadow-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{section.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'sr' : 'en')}
                className="group relative h-12 px-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-2 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <Languages className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-black text-white">{language.toUpperCase()}</span>
                {/* Subtle Glow */}
                <div className="absolute -inset-1 bg-cyan-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <a
                href="https://github.com/zoxknez"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 items-center justify-center hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[40] bg-slate-950/95 backdrop-blur-3xl pt-32 px-6"
          >
            <div className="space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={(e) => handleClick(e as any, section.id)}
                  className={`w-full p-6 rounded-3xl text-left border ${activeSection === section.id
                    ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400'
                    : 'border-white/5 bg-white/5 text-slate-400'
                    }`}
                >
                  <span className="text-2xl font-black uppercase tracking-widest">{section.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

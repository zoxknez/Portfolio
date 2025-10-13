import { MouseEvent, useState, useEffect } from 'react';
import { Rocket, Github, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavProps {
  sections: ReadonlyArray<{ id: string; label: string }>;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Nav({ sections, activeSection, onNavigate }: NavProps) {
  const { language, setLanguage, t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    event.preventDefault();
    if (sectionId) {
      onNavigate(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/30 border-b border-white/10">
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a
            href={`#${sections[0]?.id ?? ''}`}
            className="flex items-center gap-3 group"
            onClick={(event) => handleClick(event, sections[0]?.id ?? '')}
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
              <Rocket className="w-5 h-5" />
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(event) => handleClick(event, section.id)}
                className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30 shadow-lg shadow-cyan-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'sr' : 'en')}
              className="relative px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center gap-2 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              title={t?.nav?.language || 'Language'}
            >
              <Languages className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">
                {language === 'en' ? 'EN' : 'SR'}
              </span>
              <div className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
            </button>
            <a
              href="https://github.com/zoxknez"
              className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              target="_blank" rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

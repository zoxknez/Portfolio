import { MouseEvent } from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

interface NavProps {
  sections: ReadonlyArray<{ id: string; label: string }>;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Nav({ sections, activeSection, onNavigate }: NavProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    event.preventDefault();
    if (sectionId) {
      onNavigate(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/30 border-b border-white/10">
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
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(event) => handleClick(event, section.id)}
                className={`relative px-4 py-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
                {activeSection === section.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
                )}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              target="_blank" rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
              target="_blank" rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { ExternalLink, BookOpen, CircleDollarSign, Download, Dumbbell, FileSpreadsheet, FileText, Globe, ScanText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PortfolioProps {
  sectionId?: string;
}

type ProjectLinkLabels = {
  live?: string;
  repo?: string;
};

interface ProjectItem {
  id: string;
  category?: string;
  title: string;
  description: string;
  stack?: string[];
  url?: string;
  repo?: string;
  demoAccounts?: string[];
  links?: ProjectLinkLabels;
}

export default function Portfolio({ sectionId }: PortfolioProps) {
  const { t } = useLanguage();

  type IconComponent = typeof Globe;

  const iconMap: Record<string, IconComponent> = {
    'fiskalni-racun': FileText,
    osnovci: BookOpen,
    'balkan-remote': Globe,
    'pumpaj': Download,
    'sef-efakture': FileSpreadsheet,
    'pdf-scraper': ScanText,
    'mma-balkan': Dumbbell,
    'efina': CircleDollarSign,
  };
  
  const gradients = [
    'from-amber-400 via-orange-500 to-rose-500',
    'from-sky-400 via-blue-500 to-indigo-500',
    'from-cyan-500 via-blue-500 to-purple-600',
    'from-emerald-500 via-teal-500 to-cyan-500',
    'from-violet-500 via-purple-500 to-fuchsia-600',
    'from-rose-500 via-red-500 to-orange-500',
    'from-emerald-500 via-sky-500 to-indigo-500',
    'from-amber-500 via-orange-500 to-yellow-500',
  ];
  
  const projects = (t?.projects?.items as ProjectItem[]) || [];
  return (
    <section id={sectionId} className="min-h-screen md:min-h-0 flex items-center justify-center px-4 md:px-6 py-16 md:py-20">
      <div className="max-w-7xl w-full">
        <div className="relative mb-10 md:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/10 to-blue-500/20 blur-3xl -z-10" />
          <div className="relative p-6 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl text-center shadow-[0_30px_90px_-45px_rgba(147,51,234,0.6)]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2">
              {t?.projects?.heading || 'Portfolio'}
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t?.projects?.intro}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const Icon = iconMap[project.id] || Globe;
            const gradient = gradients[index] || gradients[0];
            const demoAccounts = project.demoAccounts ?? [];
            const hasDemoAccounts = demoAccounts.length > 0;
            return (
              <div
                key={project.id}
                className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-15 transition-all duration-500 rounded-2xl pointer-events-none`} />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
                <div className="relative z-10 flex items-start justify-between mb-3 md:mb-4">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <span className="px-2 md:px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="relative z-10 text-xl md:text-2xl font-bold mb-2 md:mb-3">{project.title}</h3>
                <p className="relative z-10 text-sm md:text-base text-gray-400 mb-3 md:mb-4 leading-relaxed">{project.description}</p>
                {hasDemoAccounts && (
                  <div className="relative z-10 mb-3 md:mb-4 space-y-2 text-left">
                    <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      {t?.projects?.demoAccessLabel || 'Demo Access'}
                    </div>
                    <div className="grid gap-1.5">
                      {demoAccounts.map((account) => (
                        <div
                          key={account}
                          className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm text-gray-200 leading-snug"
                        >
                          {account}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="relative z-10 flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.stack?.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 md:px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="relative z-10 flex flex-wrap items-center gap-3 md:gap-4 mt-4 md:mt-6">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-100 hover:bg-cyan-500/20 transition-colors text-sm md:text-base cursor-pointer"
                    >
                      {project.links?.live || 'Live'}
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:border-cyan-400/50 transition-colors text-sm md:text-base cursor-pointer"
                    >
                      {project.links?.repo || 'Repo'}
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

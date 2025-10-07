import { ExternalLink, LucideIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  technologies: string[];
  gradient: string;
  icon: LucideIcon;
  url?: string;
  repo?: string;
}

interface PortfolioProps {
  projects: Project[];
  sectionId?: string;
}

export default function Portfolio({ projects, sectionId }: PortfolioProps) {
  return (
    <section id={sectionId} className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl w-full">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/10 to-blue-500/20 blur-3xl -z-10" />
          <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl text-center shadow-[0_30px_90px_-45px_rgba(147,51,234,0.6)]">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2">
              Portfolio
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Projekti u nastavku nastali su kroz kombinaciju gotovih servisa, AI asistencije i samostalnog rada.
              Biram rešenja koja donose najveću vrednost korisnicima, dok kodiranje prilagođavam nivou koji je potreban da ideja proradi.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-100 hover:bg-cyan-500/20 transition-colors"
                    >
                      Live
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:border-cyan-400/50 transition-colors"
                    >
                      Repo
                      <ExternalLink className="w-4 h-4" />
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

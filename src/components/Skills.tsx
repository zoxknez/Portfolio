import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Database, Box, Rocket, Train, GitBranch, Container, Layers, FileCode, ChevronDown } from 'lucide-react';

interface SkillsProps {
  sectionId?: string;
}

interface ToolConfig {
  name: string;
  url: string;
  icon: any;
  gradient: string;
}

interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    confidence: string;
    note?: string;
  }>;
}

export default function Skills({ sectionId }: SkillsProps) {
  const { t } = useLanguage();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  
  const skills = t?.skills?.focusStack || [];
  const featuredSkills = skills.filter((skill: any) => 
    skill.confidence === '94%' || skill.confidence === '90%'
  );
  const otherSkills = skills.filter((skill: any) => 
    skill.confidence !== '94%' && skill.confidence !== '90%'
  );

  // Organizuj ostale stavke po kategorijama
  const categoryNames = t?.skills?.categories || {
    frontend: 'Frontend Frameworks',
    backend: 'Backend & APIs',
    databases: 'Databases',
    cloud: 'Cloud & DevOps',
    languages: 'Programming Languages',
    other: 'Other Tools'
  };

  const categories: SkillCategory[] = [
    {
      name: categoryNames.frontend,
      skills: otherSkills.filter((s: any) => 
        s.name.includes('Vue') || s.name.includes('Angular') || s.name.includes('Svelte') || 
        s.name.includes('Tailwind') || s.name.includes('UI') || s.name.includes('UI dizajn')
      )
    },
    {
      name: categoryNames.backend,
      skills: otherSkills.filter((s: any) => 
        s.name.includes('Express') || s.name.includes('API') || s.name.includes('GraphQL') || 
        s.name.includes('gRPC') || s.name.includes('REST') || s.name.includes('Microservices')
      )
    },
    {
      name: categoryNames.databases,
      skills: otherSkills.filter((s: any) => 
        s.name.includes('MongoDB') || s.name.includes('Firebase') || s.name.includes('SQL') || 
        s.name.includes('Postgres') || s.name.includes('Database') || s.name.includes('baza')
      )
    },
    {
      name: categoryNames.cloud,
      skills: otherSkills.filter((s: any) => 
        s.name.includes('AWS') || s.name.includes('Serverless') || s.name.includes('Bash') || 
        s.name.includes('DevOps') || s.name.includes('Lambda') || s.name.includes('Shell')
      )
    },
    {
      name: categoryNames.languages,
      skills: otherSkills.filter((s: any) => 
        s.name.includes('Java') || s.name.includes('C#') || s.name.includes('Go') || 
        s.name.includes('PHP') || s.name.includes('Rust') || s.name.includes('Ruby') || 
        s.name.includes('Python') || s.name.includes('JavaScript')
      )
    },
    {
      name: categoryNames.other,
      skills: otherSkills.filter((s: any) => 
        s.name.includes('Electron') || s.name.includes('WebSocket') || s.name.includes('JWT') || 
        s.name.includes('Stripe') || s.name.includes('TensorFlow') || s.name.includes('Blockchain') ||
        s.name.includes('Real-time') || s.name.includes('automatizacija')
      )
    }
  ].filter(cat => cat.skills.length > 0);

  const colors = [
    'from-cyan-400 to-blue-500',
    'from-blue-400 to-indigo-500',
    'from-emerald-400 to-teal-500',
    'from-purple-400 to-pink-500',
    'from-sky-400 to-cyan-500',
    'from-orange-400 to-rose-500',
    'from-amber-400 to-lime-500',
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const toolsConfig: ToolConfig[] = [
    { name: 'Supabase', url: 'https://supabase.com/', icon: Database, gradient: 'from-green-500 to-emerald-600' },
    { name: 'Prisma', url: 'https://www.prisma.io/', icon: Layers, gradient: 'from-indigo-500 to-blue-600' },
    { name: 'Vercel', url: 'https://vercel.com/', icon: Rocket, gradient: 'from-black to-gray-800' },
    { name: 'Railway', url: 'https://railway.app/', icon: Train, gradient: 'from-purple-500 to-pink-600' },
    { name: 'GitHub Actions', url: 'https://github.com/features/actions', icon: GitBranch, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Docker', url: 'https://www.docker.com/', icon: Container, gradient: 'from-blue-400 to-sky-600' },
    { name: 'Redis', url: 'https://redis.io/', icon: Box, gradient: 'from-red-500 to-orange-600' },
    { name: 'ffmpeg/yt-dlp', url: 'https://github.com/yt-dlp/yt-dlp', icon: FileCode, gradient: 'from-yellow-500 to-amber-600' },
  ];

  return (
    <section id={sectionId} className="min-h-screen md:min-h-0 flex items-center justify-center px-4 md:px-6 py-16 md:pt-12 md:pb-20">
      <div className="max-w-5xl w-full">
        <div className="relative mb-10 md:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-purple-500/20 blur-3xl -z-10" />
          <div className="relative p-6 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl text-center shadow-[0_30px_80px_-40px_rgba(37,99,235,0.6)]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t?.skills?.heading || 'Tehničke Veštine'}
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t?.skills?.intro || 'Ovo su alati koje najčešće koristim uz AI pair-programming i gotove template-ove. Procente shvatam kao nivo sigurnosti kad treba da nešto sastavim u ovom ekosistemu, a ne kao tvrdnju da sam senior programer.'}
            </p>
            
            {/* Featured Skills - Fokus Stack */}
            <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
              <div className="text-left mb-4">
                <span className="px-3 py-1 text-xs uppercase tracking-[0.35em] rounded-full bg-white/10 border border-white/20 text-cyan-300">
                  {t?.skills?.focusStackHeading || 'Fokus stack'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {featuredSkills.map((skill: any) => (
                  <div
                    key={skill.name}
                    className="flex flex-col md:flex-row items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl border border-white/15 bg-black/40 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <span className="text-lg md:text-xl font-semibold text-white text-center md:text-left flex-1">{skill.name}</span>
                    <p className="text-sm text-gray-300 text-center md:text-right">
                      <span className="text-xl md:text-2xl font-bold text-cyan-300">{skill.confidence}</span> {skill.note || ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Categorized Skills with Accordion */}
        <div className="space-y-4 md:space-y-6">
          {categories.map((category, catIndex) => {
            const isExpanded = expandedCategories[category.name];
            return (
              <div
                key={category.name}
                className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {category.name}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6 text-cyan-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isExpanded && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-in slide-in-from-top-2 duration-300">
                    {category.skills.map((skill: any, skillIndex: number) => {
                      const percentage = parseInt(skill.confidence) || 0;
                      return (
                        <div
                          key={skill.name}
                          className="group relative p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                          {/* Hover tooltip */}
                          {skill.note && (
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/95 border border-cyan-400/50 rounded-lg text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 backdrop-blur-xl">
                              {skill.note}
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-r border-b border-cyan-400/50 rotate-45" />
                            </div>
                          )}
                          
                          <div className="flex justify-between items-center mb-2 md:mb-3">
                            <span className="text-lg md:text-xl font-semibold group-hover:text-cyan-300 transition-colors">{skill.name}</span>
                            <span className="text-cyan-400 font-bold text-sm md:text-base">{skill.confidence}</span>
                          </div>
                          <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${colors[(catIndex + skillIndex) % colors.length]} rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105`}
                              style={{ width: `${percentage}%` }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Development Toolbox Section */}
        <div className="relative mt-12 md:mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/5 to-blue-500/10 blur-2xl -z-10" />
          <div className="relative p-6 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 mb-3">
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-cyan-300">Toolbox</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t?.skills?.toolboxHeading || 'Development Toolbox'}
              </h3>
              <p className="text-sm md:text-base text-gray-400 mt-3 max-w-2xl mx-auto">
                {t?.skills?.toolboxIntro || 'Essential tools and services I use for deployment, database management, and automation'}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {toolsConfig.map((tool) => {
              const Icon = tool.icon;
              return (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 md:p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex flex-col items-center gap-2 md:gap-3">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${tool.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className="font-semibold text-xs md:text-sm text-center group-hover:text-cyan-300 transition-colors">{tool.name}</span>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

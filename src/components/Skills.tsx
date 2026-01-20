import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const toolsConfig: ToolConfig[] = [
    { name: 'Supabase', url: 'https://supabase.com/', icon: Database, gradient: 'from-emerald-500 to-teal-600' },
    { name: 'Prisma', url: 'https://www.prisma.io/', icon: Layers, gradient: 'from-blue-600 to-indigo-700' },
    { name: 'Vercel', url: 'https://vercel.com/', icon: Rocket, gradient: 'from-slate-800 to-slate-950' },
    { name: 'Railway', url: 'https://railway.app/', icon: Train, gradient: 'from-purple-600 to-indigo-700' },
    { name: 'GitHub Actions', url: 'https://github.com/features/actions', icon: GitBranch, gradient: 'from-slate-700 to-slate-900' },
    { name: 'Docker', url: 'https://www.docker.com/', icon: Container, gradient: 'from-blue-500 to-blue-600' },
    { name: 'Redis', url: 'https://redis.io/', icon: Box, gradient: 'from-rose-600 to-red-700' },
    { name: 'ffmpeg/yt-dlp', url: 'https://github.com/yt-dlp/yt-dlp', icon: FileCode, gradient: 'from-amber-500 to-orange-600' },
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  return (
    <section id={sectionId} className="min-h-screen px-4 md:px-6 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            {t?.skills?.heading || 'Tehničke Veštine'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t?.skills?.intro}
          </motion.p>
        </div>

        {/* Featured Stack */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-white whitespace-nowrap">{t?.skills?.focusStackHeading}</h3>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredSkills.map((skill: any, idx: number) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-300 group hover:border-cyan-500/50 hover:bg-white/[0.05]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <span className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{skill.name}</span>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-[0.2em]">{skill.note || 'Core Expertise'}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-transparent bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                      {skill.confidence}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categorized Skills */}
        <div className="space-y-6">
          {categories.map((category, catIndex) => {
            const isExpanded = expandedCategories[category.name];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] border border-white/5 bg-slate-900/20 backdrop-blur-3xl overflow-hidden group"
              >
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between p-8 md:p-10 hover:bg-white/[0.02] transition-colors text-left"
                >
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.3em]">
                      {category.skills.length} Technologies
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-8 h-8 text-slate-500 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="px-8 md:px-10 pb-10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                        {category.skills.map((skill: any, skillIndex: number) => {
                          const percentage = parseInt(skill.confidence) || 0;
                          return (
                            <div key={skill.name} className="space-y-4 group/skill">
                              <div className="flex justify-between items-end">
                                <div className="space-y-0.5">
                                  <span className="text-lg font-bold text-white group-hover/skill:text-cyan-400 transition-colors tracking-tight uppercase">
                                    {skill.name}
                                  </span>
                                  {skill.note && <p className="text-xs text-slate-500 font-medium">{skill.note}</p>}
                                </div>
                                <span className="text-2xl font-black text-slate-400 group-hover/skill:text-cyan-400 transition-all">
                                  {skill.confidence}
                                </span>
                              </div>
                              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${percentage}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, ease: "easeOut" }}
                                  className={`h-full bg-gradient-to-r ${colors[(catIndex + skillIndex) % colors.length]} relative`}
                                >
                                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                </motion.div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Toolbox Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[4rem] border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-10" />

            <div className="text-center space-y-6 mb-16 relative z-10">
              <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-black text-cyan-400 uppercase tracking-[0.3em]">
                Workflow
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                {t?.skills?.toolboxHeading}
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
                {t?.skills?.toolboxIntro}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
              {toolsConfig.map((tool) => {
                const Icon = tool.icon;
                return (
                  <motion.a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="p-8 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-xl flex flex-col items-center gap-6 hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all group shadow-2xl"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(0,0,0,0.4)]`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-widest text-xs tracking-[0.2em]">{tool.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

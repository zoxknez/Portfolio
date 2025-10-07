interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillsProps {
  skills: Skill[];
  sectionId?: string;
}

export default function Skills({ skills, sectionId }: SkillsProps) {
  const [featuredSkill, ...otherSkills] = skills;

  return (
    <section id={sectionId} className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-5xl w-full">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-purple-500/20 blur-3xl -z-10" />
          <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl text-center shadow-[0_30px_80px_-40px_rgba(37,99,235,0.6)]">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tehničke Veštine
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ovo su alati које najčešće koristim uz AI pair-programming i gotove template-ove. Procente shvatam kao nivo
              sigurnosti кад treba да nešto sastavim у ovom ekosistemu, a не као tvrdnju da sam senior programer.
            </p>
            {featuredSkill && (
              <div className="mt-8 w-full text-left">
                <div className="flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl border border-white/15 bg-black/40">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-xs uppercase tracking-[0.35em] rounded-full bg-white/10 border border-white/20 text-cyan-300">
                      Fokus stack
                    </span>
                    <span className="text-2xl font-semibold text-white">{featuredSkill.name}</span>
                  </div>
                  <p className="md:ml-auto text-sm text-gray-300 md:text-right">
                    <span className="text-2xl font-bold text-cyan-300">{featuredSkill.level}%</span> sigurnosti uz AI asistenciju
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {otherSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xl font-semibold">{skill.name}</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {['Supabase', 'Prisma', 'Vercel', 'Railway', 'GitHub Actions', 'Docker', 'Redis', 'ffmpeg/yt-dlp'].map((tool) => (
            <div
              key={tool}
              className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 text-center hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <span className="font-semibold">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

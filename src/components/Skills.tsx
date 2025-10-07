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
  return (
    <section id={sectionId} className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Tehničke Veštine
        </h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
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
          {['Git', 'Docker', 'AWS', 'CI/CD', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis'].map((tool) => (
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

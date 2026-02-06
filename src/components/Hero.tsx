import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  isLoaded: boolean;
  sectionId?: string;
}

export default function Hero({ onNavigate, isLoaded, sectionId }: HeroProps) {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      } as any
    },
  };

  return (
    <section id={sectionId} className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 pb-12 md:py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      <motion.div
        className="w-full max-w-6xl mx-auto"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="space-y-12 md:space-y-16">
          <div className="relative">
            <div className="relative p-6 md:p-14 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden group">
              {/* Inner Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10 relative z-10">
                <motion.h2
                  variants={itemVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent pb-3"
                >
                  {t?.hero?.heading || 'Ko sam ja?'}
                </motion.h2>

                <motion.div variants={itemVariants} className="space-y-6">
                  <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium">
                    <span className="text-white border-b-2 border-cyan-500/50">{t?.hero?.name || 'Zoran Knežević'}</span>
                    <span className="text-slate-400 mx-2">-</span>
                    <span className="text-slate-300 italic font-normal">{t?.hero?.tagline}</span>
                  </p>
                  <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
                    {t?.hero?.story}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 max-w-4xl mx-auto">
                  {[
                    {
                      value: t?.stats?.years || '20+',
                      label: t?.stats?.yearsLabel || 'godina u IT ekosistemu',
                      gradient: 'from-cyan-500/20 to-blue-500/5',
                      border: 'border-cyan-500/20',
                      icon: "🔥"
                    },
                    {
                      value: t?.stats?.solutions || '12+',
                      label: t?.stats?.solutionsLabel || 'kreiranih rešenja',
                      gradient: 'from-blue-500/20 to-purple-500/5',
                      border: 'border-blue-500/20',
                      icon: "💡"
                    },
                    {
                      value: t?.stats?.aiFirst || 'AI-first',
                      label: t?.stats?.aiFirstLabel || 'workflow prednost',
                      gradient: 'from-purple-500/20 to-pink-500/5',
                      border: 'border-purple-500/20',
                      icon: "🤖"
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.value}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`p-6 rounded-3xl border ${item.border} bg-white/5 backdrop-blur-xl text-center shadow-lg transition-all duration-300 hover:bg-white/10 group/card`}
                    >
                      <div className="text-2xl mb-2 grayscale group-hover/card:grayscale-0 transition-all">{item.icon}</div>
                      <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{item.value}</div>
                      <div className="text-xs md:text-sm text-slate-400 font-medium tracking-wide uppercase">{item.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-10">
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="group relative px-10 py-5 rounded-2xl bg-white text-slate-950 font-bold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t?.hero?.ctaViewPortfolio || 'Vidi Portfolio'}
                      <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-10 py-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                  >
                    {t?.hero?.ctaContact || 'Kontaktiraj Me'}
                  </button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Pillars Section */}
          <motion.div variants={itemVariants} className="max-w-5xl mx-auto mt-12 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t?.pillars?.filter((p: any) => !p.featured).map((pillar: any, index: number) => {
                const icons: { [key: string]: string } = { flash: '⚡', target: '🎯', wrench: '🔧' };
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="text-4xl">{icons[pillar.icon]}</div>
                      <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                      <p className="text-slate-400 font-light leading-relaxed">{pillar.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {t?.pillars?.find((p: any) => p.featured) && (() => {
              const featuredPillar = t.pillars.find((p: any) => p.featured);
              return (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative p-10 md:p-14 rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 backdrop-blur-2xl text-center group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="relative z-10 space-y-6">
                    <div className="text-6xl md:text-7xl mb-6 drop-shadow-2xl">🌐</div>
                    <h3 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {featuredPillar.title}
                    </h3>
                    <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
                      {featuredPillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

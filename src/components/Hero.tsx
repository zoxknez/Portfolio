import { Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  isLoaded: boolean;
  sectionId?: string;
}

export default function Hero({ onNavigate, isLoaded, sectionId }: HeroProps) {
  const { t } = useLanguage();
  return (
    <section id={sectionId} className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:pt-24 md:pb-12">
      <div
        className={`w-full max-w-6xl mx-auto transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="space-y-8 md:space-y-12">
          {/* Ko sam ja sekcija */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl -z-10" />
            <div className="relative p-6 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_80px_-40px_rgba(15,118,110,0.6)]">
              <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent pb-2">
                  {t?.hero?.heading || 'Ko sam ja?'}
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">{t?.hero?.name || 'Zoran Knežević'}</span> — {t?.hero?.tagline}
                  </p>
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    {t?.hero?.story}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-2 md:pt-4 max-w-3xl mx-auto">
                  {[
                    {
                      value: t?.stats?.years || '20+',
                      label: t?.stats?.yearsLabel || 'godina u IT ekosistemu',
                      gradient: 'from-cyan-500/30 to-cyan-400/10',
                    },
                    {
                      value: t?.stats?.solutions || '12+',
                      label: t?.stats?.solutionsLabel || 'kreiranih rešenja samostalno',
                      gradient: 'from-blue-500/30 to-blue-400/10',
                    },
                    {
                      value: t?.stats?.aiFirst || 'AI-first',
                      label: t?.stats?.aiFirstLabel || 'workflow kao moja prednost',
                      gradient: 'from-purple-500/30 to-purple-400/10',
                    },
                  ].map((item) => (
                    <div key={item.value} className={`p-4 md:p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${item.gradient} backdrop-blur-xl text-center transform hover:scale-105 transition-all duration-300`}>
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.value}</div>
                      <div className="text-xs md:text-sm text-gray-200 leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-4 md:pt-8">
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="group relative px-6 md:px-10 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 text-sm md:text-base"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t?.hero?.ctaViewPortfolio || 'Vidi Portfolio'}
                      <Rocket className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 md:px-10 py-3 md:py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 font-semibold hover:bg-white/15 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/10 text-sm md:text-base"
                  >
                    {t?.hero?.ctaContact || 'Kontaktiraj Me'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature highlight sekcija */}
          <div className="max-w-5xl mx-auto mt-8 md:mt-12 space-y-6 md:space-y-8">
            {/* Prvi red - 3 mala badge-a */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
              {t?.pillars?.filter((p: any) => !p.featured).map((pillar: any, index: number) => {
                const icons: { [key: string]: string } = {
                  flash: '⚡',
                  target: '🎯',
                  wrench: '🔧',
                };
                const gradients = [
                  'from-cyan-500/5 to-blue-500/5',
                  'from-purple-500/5 to-pink-500/5',
                  'from-blue-500/5 to-cyan-500/5',
                ];
                const hoverBorders = [
                  'hover:border-cyan-400/50',
                  'hover:border-purple-400/50',
                  'hover:border-blue-400/50',
                ];
                return (
                  <div
                    key={index}
                    className={`relative group p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-br ${gradients[index]} backdrop-blur-sm ${hoverBorders[index]} transition-all duration-300 hover:scale-105`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index].replace('/5', '/10')} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className="relative space-y-2 md:space-y-3">
                      <div className="text-4xl md:text-5xl">{icons[pillar.icon]}</div>
                      <h3 className="font-bold text-lg md:text-xl text-white">{pillar.title}</h3>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Veći featured badge */}
            {t?.pillars?.find((p: any) => p.featured) && (() => {
              const featuredPillar = t.pillars.find((p: any) => p.featured);
              const icons: { [key: string]: string } = {
                globe: '🌐',
                flash: '⚡',
                target: '🎯',
                wrench: '🔧',
              };
              return (
                <div className="relative group p-8 md:p-12 rounded-3xl border-2 border-white/20 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative text-center space-y-4 md:space-y-6">
                    <div className="text-5xl md:text-6xl lg:text-7xl">{icons[featuredPillar.icon] || '🌐'}</div>
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {featuredPillar.title}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                      {featuredPillar.desc}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}

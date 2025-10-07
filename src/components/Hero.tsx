import { Rocket } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  isLoaded: boolean;
  sectionId?: string;
}

export default function Hero({ onNavigate, isLoaded, sectionId }: HeroProps) {
  return (
    <section id={sectionId} className="min-h-screen flex items-center justify-center px-6 py-24">
      <div
        className={`w-full max-w-6xl mx-auto transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="space-y-12">
          {/* Ko sam ja sekcija */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl -z-10" />
            <div className="relative p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_80px_-40px_rgba(15,118,110,0.6)]">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent pb-2">
                  Ko sam ja?
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">Zoran Knežević</span> — IT entuzijasta koji već 20+ godina spaja infrastrukturu, podršku, dizajn i optimizaciju procesa.
                    Nemam duboku programersku pozadinu, ali mogu da povežem ljude, alate i AI asistente kako bismo ideju pretvorili u rešenje.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Početak je bio 2005. na MyCity.rs forumu, kada sam otvorio svoj prvi nalog na IT forumu i ušao u ovaj svet. Tada sam otkrio Linux i postavio svoj prvi server za cardsharing. Danas, uz pomoć modernog AI toolchaina, sastavljam web, desktop i mobilna rešenja bez potrebe da budem „hardcore" programer.
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-6 pt-4 max-w-3xl mx-auto">
                  {[
                    {
                      value: '20+',
                      label: 'godina u IT ekosistemu',
                      gradient: 'from-cyan-500/30 to-cyan-400/10',
                    },
                    {
                      value: '12+',
                      label: 'kreiranih rešenja samostalno',
                      gradient: 'from-blue-500/30 to-blue-400/10',
                    },
                    {
                      value: 'AI-first',
                      label: 'workflow kao moja prednost',
                      gradient: 'from-purple-500/30 to-purple-400/10',
                    },
                  ].map((item) => (
                    <div key={item.value} className={`p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${item.gradient} backdrop-blur-xl text-center transform hover:scale-105 transition-all duration-300`}>
                      <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
                      <div className="text-sm text-gray-200 leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="group relative px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Vidi Portfolio
                      <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-10 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 font-semibold hover:bg-white/15 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/10"
                  >
                    Kontaktiraj Me
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature highlight sekcija */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="relative group p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-3">
                  <div className="text-5xl">⚡</div>
                  <h3 className="font-bold text-xl text-white">Brza Realizacija</h3>
                  <p className="text-gray-400 leading-relaxed">AI-powered development za efikasne rezultate</p>
                </div>
              </div>
              <div className="relative group p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-3">
                  <div className="text-5xl">🎯</div>
                  <h3 className="font-bold text-xl text-white">Fokus na Vrednost</h3>
                  <p className="text-gray-400 leading-relaxed">Praktična rešenja koja rešavaju realne probleme</p>
                </div>
              </div>
              <div className="relative group p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-3">
                  <div className="text-5xl">🔧</div>
                  <h3 className="font-bold text-xl text-white">Fleksibilan Pristup</h3>
                  <p className="text-gray-400 leading-relaxed">Od ideje do produkcije, sa pravim alatima</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

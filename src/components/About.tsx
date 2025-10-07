import { Terminal, Rocket } from 'lucide-react';

interface AboutProps {
  sectionId?: string;
}

export default function About({ sectionId }: AboutProps) {
  return (
    <section id={sectionId} className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          O Meni
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <Terminal className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Pasija za Kod</h3>
            <p className="text-gray-400 leading-relaxed">
              Svaki projekat je prilika da otkrijem nove tehnologije i push-ujem granice mogućeg.
              Od web aplikacija do desktop i mobile rešenja, stremim ka perfekciji u svakom detalju.
            </p>
          </div>
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <Rocket className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Inovacija</h3>
            <p className="text-gray-400 leading-relaxed">
              Stalno pratim najnovije trendove i tehnologije. AI, blockchain, AR/VR -
              sve što je cutting-edge me fascinira i implementiram u svoje projekte.
            </p>
          </div>
        </div>
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Moj Pristup
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold">
                01
              </div>
              <h4 className="font-bold mb-2">Analiza</h4>
              <p className="text-sm text-gray-400">Detaljna analiza zahteva i planiranje arhitekture</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold">
                02
              </div>
              <h4 className="font-bold mb-2">Razvoj</h4>
              <p className="text-sm text-gray-400">Agilan razvoj sa fokusom na clean code</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl font-bold">
                03
              </div>
              <h4 className="font-bold mb-2">Optimizacija</h4>
              <p className="text-sm text-gray-400">Kontinuirano testiranje i performance tuning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

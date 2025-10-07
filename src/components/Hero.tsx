import { Rocket, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  isLoaded: boolean;
  sectionId?: string;
}

export default function Hero({ onNavigate, isLoaded, sectionId }: HeroProps) {
  return (
    <section id={sectionId} className="min-h-screen flex items-center justify-center px-6">
      <div
        className={`text-center transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-3xl opacity-50 animate-pulse" />
          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold shadow-2xl">
            TI
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
          Tvoje Ime Prezime
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            Full Stack Developer & Tech Innovator
          </p>
          <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
        </div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Kreiram digitalna iskustva koja spajaju futurističku estetiku sa cutting-edge tehnologijom.
          Specijalizovan za web, desktop i mobile development.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => onNavigate('portfolio')}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Vidi Portfolio
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 font-semibold hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
          >
            Kontaktiraj Me
          </button>
        </div>
        <div className="mt-16 flex justify-center gap-8 text-sm text-gray-500">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">50+</div>
            <div>Projekata</div>
          </div>
          <div className="w-px bg-gray-700" />
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">5+</div>
            <div>Godina</div>
          </div>
          <div className="w-px bg-gray-700" />
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
            <div>Satisfakcija</div>
          </div>
        </div>
      </div>
    </section>
  );
}

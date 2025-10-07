import { Mail, Github, Phone } from 'lucide-react';

interface ContactProps {
  sectionId?: string;
}

export default function Contact({ sectionId }: ContactProps) {
  return (
    <section
      id={sectionId}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-4xl w-full">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-purple-500/20 blur-3xl -z-10" />
          <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl text-center shadow-[0_30px_90px_-45px_rgba(14,165,233,0.45)]">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2">
              Kontaktiraj Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Otvoren sam za saradnju, konsultacije i brainstorming. Ako imaš ideju koju želiš da pretvorimo u rešenje uz AI i timski pristup,
              javi mi se preko email-a, telefona ili društvenih mreža.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-10 items-stretch">
          <div className="flex flex-col gap-6 h-full">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-[0_20px_70px_-40px_rgba(34,211,238,0.6)] min-h-[150px] flex items-center">
              <div className="flex items-center gap-5 w-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_15px_35px_-20px_rgba(6,182,212,0.9)]">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm uppercase tracking-[0.2em] text-gray-400">Email</div>
                  <a href="mailto:zoxknez@hotmail.com" className="text-xl font-semibold text-white hover:text-cyan-300 transition-colors">
                    zoxknez@hotmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-blue-400/60 transition-all duration-300 shadow-[0_20px_70px_-40px_rgba(59,130,246,0.6)] min-h-[150px] flex items-center">
              <div className="flex items-center gap-5 w-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_15px_35px_-20px_rgba(37,99,235,0.9)]">
                  <Github className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm uppercase tracking-[0.2em] text-gray-400">GitHub profil</div>
                  <a
                    href="https://github.com/zoxknez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    github.com/zoxknez
                  </a>
                </div>
              </div>
            </div>
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-green-400/60 transition-all duration-300 shadow-[0_20px_70px_-40px_rgba(34,197,94,0.6)] min-h-[150px] flex items-center">
              <div className="flex items-center gap-5 w-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-[0_15px_35px_-20px_rgba(34,197,94,0.9)]">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm uppercase tracking-[0.2em] text-gray-400">Telefon / Viber / WhatsApp</div>
                  <a
                    href="tel:+381600494451"
                    className="text-xl font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    +381 60 049 4451
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Pošalji Poruku</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Tvoje Ime"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-500"
              />
              <textarea
                placeholder="Poruka"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-500 resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Pošalji Poruku
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

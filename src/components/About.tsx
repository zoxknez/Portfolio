import { Cpu, MessageSquareCode, Server } from 'lucide-react';
import heroPortrait from '../../Slika/slika.jpeg';

interface AboutProps {
  sectionId?: string;
}

export default function About({ sectionId }: AboutProps) {
  return (
    <section id={sectionId} className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl -z-10" />
          <div className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_80px_-40px_rgba(15,118,110,0.6)]">
            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-8">
              <div className="max-w-2xl text-center md:text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 bg-white/10 text-xs uppercase tracking-[0.35em] text-gray-300 shadow-sm">
                  ZK • Digital Maker
                </div>
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ko сам ја?
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Zoran Knežević је IT entuzijasta и maker који već 20+ godina spaja infrastrukturu, podršku, dizajn и optimizaciju procesa.
                  Nemam duboku programersku pozadinu, али imam naviku да povežem ljude, alate и AI asistente како бисмо ideju pretvorili u rešenje.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Početak je bio 2005. на MyCity.rs forumu, gde сам radio све od server administracije до dizajna interfejsa. Danas uz pomoć modernog
                  AI toolchain-a sastavljam web, desktop и mobilna rešenja без potrebe да budem „hardcore“ programer.
                </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-4 text-left">
                    {[{
                      value: '20+',
                      label: 'godina u IT ekosistemu',
                    },
                    {
                      value: '12+',
                      label: 'kreiranih rešenja uz timove',
                    },
                    {
                      value: 'AI-first',
                      label: 'workflow kao moja prednost',
                    }].map((item) => (
                      <div key={item.value} className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                        <div className="text-2xl font-semibold text-white">{item.value}</div>
                        <div className="text-sm text-gray-300 leading-snug">{item.label}</div>
                      </div>
                    ))}
                  </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/40 shadow-lg">
                  <img src={heroPortrait} alt="Zoran Knežević" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <Server className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Koreni iz 2005.</h3>
            <p className="text-gray-400 leading-relaxed">
              Od prvog profila na MyCity.rs forumu do današnjeg inženjerskog rada — podrška za Windows/Linux
              servere i mrežnu infrastrukturu bila je moja ulaznica u profesionalni IT svet.
            </p>
          </div>
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <MessageSquareCode className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Dizajn + Kod</h3>
            <p className="text-gray-400 leading-relaxed">
              Radio sam na UX/UI dizajnu, prilagođavao poslovne procese i sastavljao aplikacije za web,
              desktop i Android uz low-code pristupe i AI asistente — fokus na end-to-end iskustvo, ne samo na kod.
            </p>
          </div>
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <Cpu className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">AI-akcelerisan razvoj</h3>
            <p className="text-gray-400 leading-relaxed">
              Danas koristim moderne AI asistente i automatizovane toolchain-ove како бих ideju pretvorio u
              MVP za nekoliko dana — od arhitekture, preko implementacije до deployment-a, čak i када sam van zone komfora klasičnog kodiranja.
            </p>
          </div>
        </div>
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Milestones
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-sm uppercase tracking-widest text-cyan-400">2005 → 2015</span>
              <h4 className="text-xl font-semibold mt-2 mb-3">Sistem administracija & podrška</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rad sa Windows/Linux serverima, mrežama i helpdesk procesima. Razvijanje skripti za
                automatizaciju zadataka, dokumentovanje procedura и edukacija korisnika.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-sm uppercase tracking-widest text-blue-400">2016 → 2021</span>
              <h4 className="text-xl font-semibold mt-2 mb-3">Produkt dizajn & digitalne kampanje</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kombinovanje dizajna, marketinga i front-end implementacije. Kreiranje landing stranica,
                optimizacija konverzija i vođenje timova na digitalnim kampanjama.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-sm uppercase tracking-widest text-purple-400">2022 → 2024</span>
              <h4 className="text-xl font-semibold mt-2 mb-3">Specijalizovana rešenja за domaće tržište</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Razvoj specijalizovanih rešenja (SEF integracije, video downloader, PDF scraping) uz timove,
                gotove servise i AI asistente — kombinujem Next.js, Supabase, Express, Electron и Python komponente.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-sm uppercase tracking-widest text-teal-400">2025 →</span>
              <h4 className="text-xl font-semibold mt-2 mb-3">AI-first mindset</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Eksperimentišem sa GPT-om, automatskim agentima, workflow orchestratorima i low-code
                alatima kako бих nadogradio postojeće znanje без potrebe да pišem svaku liniju koda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

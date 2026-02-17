import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, CircleDollarSign, Download, Dumbbell, FileSpreadsheet, FileText, Globe, ScanText, Plane, GraduationCap, AlertCircle, Users, Cloud, Car, Mail, Building2, UtensilsCrossed, Fuel, Shield, X, Languages, Tv, Navigation, Home, Gem } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PortfolioProps {
  sectionId?: string;
}

type ProjectLinkLabels = {
  live?: string;
  repo?: string;
};

interface ProjectItem {
  id: string;
  category?: string;
  title: string;
  description: string;
  stack?: string[];
  url?: string;
  repo?: string;
  demoAccounts?: string[];
  links?: ProjectLinkLabels;
  images?: string[];
}

export default function Portfolio({ sectionId }: PortfolioProps) {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  type IconComponent = typeof Globe;

  const iconMap: Record<string, IconComponent> = {
    odmor: Plane,
    kursevi: GraduationCap,
    racuni: FileText,
    osnovci: BookOpen,
    'balkan-remote': Globe,
    'pumpaj': Download,
    'sef-efakture': FileSpreadsheet,
    'pdf-scraper': ScanText,
    'mma-balkan': Dumbbell,
    'efina': CircleDollarSign,
    'aferesns': AlertCircle,
    'blokirani': Users,
    'radecosic': BookOpen,
    'david-knezevic': Dumbbell,
    'nestasica': AlertCircle,
    'filmovi': FileText,
    'vremenska-prognoza': Cloud,
    'brojac-vozila': Car,
    'pisma': Mail,
    'sipka-group': Building2,
    'sipka-group-spaces': Navigation,
    'ketering-bg': UtensilsCrossed,

    'bidon': Fuel,
    'twitter-block-manager': Shield,
    'nemacki-jezik': Languages,
    'iptv': Tv,
    'putovanje-pro': Navigation,
    'house-of-mirrors': Home,
    'nakit': Gem,
    'o0o0o0o': Tv,
  };

  const gradients = [
    'from-amber-400 via-orange-500 to-rose-500',
    'from-sky-400 via-blue-500 to-indigo-500',
    'from-cyan-500 via-blue-500 to-purple-600',
    'from-emerald-500 via-teal-500 to-cyan-500',
    'from-violet-500 via-purple-500 to-fuchsia-600',
    'from-rose-500 via-red-500 to-orange-500',
    'from-emerald-500 via-sky-500 to-indigo-500',
    'from-amber-500 via-orange-500 to-yellow-500',
  ];

  const projects = (t?.projects?.items as ProjectItem[]) || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      } as any
    },
  };

  return (
    <section id={sectionId} className="min-h-screen px-4 md:px-6 py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            {t?.projects?.heading || 'Portfolio'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t?.projects?.intro}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {projects.map((project, index) => {
            const Icon = iconMap[project.id] || Globe;
            const gradient = gradients[index % gradients.length];
            const demoAccounts = project.demoAccounts ?? [];
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Visual Enhancers */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                    {project.category}
                  </span>
                </div>

                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed text-lg italic">
                    {project.description}
                  </p>
                </div>

                {/* Demo Accounts */}
                {demoAccounts.length > 0 && (
                  <div className="relative z-10 mt-8 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500/70">
                      {t?.projects?.demoAccessLabel || 'Demo Access'}
                    </span>
                    <div className="grid gap-2">
                      {demoAccounts.map((account) => (
                        <div key={account} className="px-4 py-2.5 rounded-xl bg-slate-900/50 border border-white/5 text-sm text-slate-300 font-mono">
                          {account}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Screenshots */}
                {project.images && project.images.length > 0 && (
                  <div className="relative z-10 mt-8 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500/70">
                      Visuals
                    </span>
                    <div className="grid grid-cols-2 gap-4">
                      {project.images.map((image, imgIndex) => (
                        <motion.button
                          key={imgIndex}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setLightboxImage(image)}
                          className="relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-slate-900 shadow-2xl group/img"
                        >
                          <img src={image} alt="Preview" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                  {project.stack?.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-400 uppercase tracking-tighter hover:text-cyan-400 hover:border-cyan-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="relative z-10 flex items-center gap-4 mt-10">
                  {project.url && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl"
                    >
                      {project.links?.live || 'Launch'}
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.repo && (
                    <motion.a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 transition-all"
                    >
                      {project.links?.repo || 'Code'}
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 relative p-8 md:p-12 rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 backdrop-blur-3xl overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/20 transition-colors duration-700" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shrink-0">
              <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed italic">
                {t?.projects?.banner?.message}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-2xl bg-white text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shrink-0 hover:bg-cyan-50 transition-colors"
            >
              {t?.projects?.banner?.cta}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setLightboxImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setLightboxImage(null)}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white border border-white/20 z-[60]"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-6xl w-full aspect-video flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Fullscreen Preview"
                className="max-w-full max-h-full object-contain rounded-[2rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

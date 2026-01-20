import { Github, Mail, Phone, ArrowUp, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-6 border-t border-white/5 bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-widest uppercase mb-[-4px]">
                  Zoran
                </span>
                <span className="text-[10px] font-black text-cyan-400 tracking-[0.4em] uppercase opacity-80">
                  Portfolio
                </span>
              </div>
            </div>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-sm">
              {t?.footer?.tagline || 'AI-first Digital Maker building solutions for the modern web'}
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/zoxknez' },
                { icon: Mail, href: 'mailto:zoxknez@hotmail.com' },
                { icon: Phone, href: 'tel:+381600494451' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/50 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              {t?.footer?.quickLinks || 'Explore'}
            </h4>
            <ul className="space-y-4">
              {[
                { label: t?.nav?.home || 'Home', href: '#hero' },
                { label: t?.nav?.skills || 'Skills', href: '#skills' },
                { label: t?.nav?.projects || 'Projects', href: '#portfolio' },
                { label: t?.nav?.contact || 'Contact', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              {t?.footer?.connect || 'Connect'}
            </h4>
            <div className="space-y-4">
              <a href="mailto:zoxknez@hotmail.com" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">zoxknez@hotmail.com</span>
              </a>
              <a href="tel:+381600494451" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">+381 60 049 4451</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            © {currentYear} Zoran Knežević • {t?.footer?.rights || 'All rights reserved'}
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/30 transition-all font-black uppercase tracking-widest text-xs"
          >
            {t?.footer?.backToTop || 'Back to Top'}
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

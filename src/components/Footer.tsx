import { Github, Mail, Phone, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 border-t border-white/10 bg-slate-900/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zoran Knežević
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t?.footer?.tagline || 'AI-first Digital Maker building solutions for the modern web'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t?.footer?.quickLinks || 'Quick Links'}
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="#hero"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit"
              >
                {t?.nav?.home || 'Home'}
              </a>
              <a
                href="#skills"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit"
              >
                {t?.nav?.skills || 'Skills'}
              </a>
              <a
                href="#portfolio"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit"
              >
                {t?.nav?.projects || 'Projects'}
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit"
              >
                {t?.nav?.contact || 'Contact'}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              {t?.footer?.connect || 'Connect'}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:zoxknez@hotmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                zoxknez@hotmail.com
              </a>
              <a
                href="tel:+381600494451"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +381 60 049 4451
              </a>
              <a
                href="https://github.com/zoxknez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                github.com/zoxknez
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Zoran Knežević. {t?.footer?.rights || 'All rights reserved'}
            </p>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              aria-label={t?.footer?.backToTop || 'Back to Top'}
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span className="text-sm font-semibold">{t?.footer?.backToTop || 'Back to Top'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
    </footer>
  );
}

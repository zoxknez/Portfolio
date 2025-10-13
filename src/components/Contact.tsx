import { Mail, Github, Phone, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  sectionId?: string;
}

export default function Contact({ sectionId }: ContactProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - replace with your actual keys
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
        console.warn('EmailJS not configured. Please add credentials to .env file');
        // Fallback to mailto for now
        window.location.href = `mailto:zoxknez@hotmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
        setSubmitStatus('success');
        return;
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'zoxknez@hotmail.com',
        },
        PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };
  return (
    <section
      id={sectionId}
      className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24"
    >
      <div className="max-w-4xl w-full">
        <div className="relative mb-10 md:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-purple-500/20 blur-3xl -z-10" />
          <div className="relative p-6 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl text-center shadow-[0_30px_90px_-45px_rgba(14,165,233,0.45)]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2">
              {t?.contact?.heading || 'Kontaktiraj Me'}
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {t?.contact?.intro}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-6 md:gap-10 items-stretch">
          <div className="flex flex-col gap-4 md:gap-6 h-full">
            <div className="group p-5 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-[0_20px_70px_-40px_rgba(34,211,238,0.6)] min-h-[120px] md:min-h-[150px] flex items-center hover:scale-[1.02] hover:shadow-[0_25px_80px_-35px_rgba(34,211,238,0.8)]">
              <div className="flex items-center gap-4 md:gap-5 w-full">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_15px_35px_-20px_rgba(6,182,212,0.9)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Mail className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400">{t?.contact?.emailLabel || 'Email'}</div>
                  <a href="mailto:zoxknez@hotmail.com" className="text-base md:text-xl font-semibold text-white hover:text-cyan-300 transition-colors break-all">
                    {t?.contact?.emailValue || 'zoxknez@hotmail.com'}
                  </a>
                </div>
              </div>
            </div>
            <div className="group p-5 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-blue-400/60 transition-all duration-300 shadow-[0_20px_70px_-40px_rgba(59,130,246,0.6)] min-h-[120px] md:min-h-[150px] flex items-center hover:scale-[1.02] hover:shadow-[0_25px_80px_-35px_rgba(59,130,246,0.8)]">
              <div className="flex items-center gap-4 md:gap-5 w-full">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_15px_35px_-20px_rgba(37,99,235,0.9)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Github className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400">{t?.contact?.githubLabel || 'GitHub'}</div>
                  <a
                    href="https://github.com/zoxknez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-xl font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    {t?.contact?.githubValue || 'github.com/zoxknez'}
                  </a>
                </div>
              </div>
            </div>
            <div className="group p-5 md:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 hover:border-green-400/60 transition-all duration-300 shadow-[0_20px_70px_-40px_rgba(34,197,94,0.6)] min-h-[120px] md:min-h-[150px] flex items-center hover:scale-[1.02] hover:shadow-[0_25px_80px_-35px_rgba(34,197,94,0.8)]">
              <div className="flex items-center gap-4 md:gap-5 w-full">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-[0_15px_35px_-20px_rgba(34,197,94,0.9)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Phone className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-400">{t?.contact?.phoneLabel || 'Telefon'}</div>
                  <a
                    href="tel:+381600494451"
                    className="text-base md:text-xl font-semibold text-white hover:text-cyan-300 transition-colors block"
                  >
                    {t?.contact?.phoneValue || '+381 60 049 4451'}
                  </a>
                  <div className="flex gap-2 pt-2">
                    <a
                      href="https://wa.me/381600494451"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-500/20 border border-green-400/40 text-green-300 hover:bg-green-500/30 transition-colors text-xs font-medium"
                    >
                      <MessageCircle className="w-3 h-3" />
                      WhatsApp
                    </a>
                    <a
                      href="viber://chat?number=381600494451"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-400/40 text-purple-300 hover:bg-purple-500/30 transition-colors text-xs font-medium"
                    >
                      <Send className="w-3 h-3" />
                      Viber
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t?.contact?.form?.sendMessage || 'Pošalji Poruku'}</h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder={t?.contact?.form?.name || 'Tvoje Ime'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-gray-500 text-sm md:text-base hover:border-white/20"
              />
              <input
                type="email"
                placeholder={t?.contact?.form?.email || 'Email'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-gray-500 text-sm md:text-base hover:border-white/20"
              />
              <textarea
                placeholder={t?.contact?.form?.message || 'Poruka'}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-gray-500 resize-none text-sm md:text-base hover:border-white/20"
              />
              
              {submitStatus === 'success' && (
                <div className="p-3 rounded-lg bg-green-500/20 border border-green-400/40 text-green-300 text-sm text-center animate-[slideIn_0.3s_ease-out] shadow-lg shadow-green-500/20">
                  <span className="inline-block animate-[bounce_0.5s_ease-in-out]">✓</span> {t?.contact?.form?.success || 'Poruka uspešno poslata!'}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-400/40 text-red-300 text-sm text-center animate-[shake_0.5s_ease-in-out] shadow-lg shadow-red-500/20">
                  <span className="inline-block">✗</span> {t?.contact?.form?.error || 'Greška prilikom slanja. Pokušajte ponovo.'}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 md:py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (t?.contact?.form?.sending || 'Šaljem...') : (t?.contact?.form?.submit || 'Pošalji Poruku')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

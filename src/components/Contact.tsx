import { Mail, Github, Phone, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, FormEvent } from 'react';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as any }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id={sectionId} className="min-h-screen px-4 md:px-6 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            {t?.contact?.heading || 'Kontaktiraj Me'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t?.contact?.intro}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                label: t?.contact?.emailLabel || 'Email',
                value: t?.contact?.emailValue || 'zoxknez@hotmail.com',
                href: 'mailto:zoxknez@hotmail.com',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                icon: Github,
                label: t?.contact?.githubLabel || 'GitHub',
                value: t?.contact?.githubValue || 'github.com/zoxknez',
                href: 'https://github.com/zoxknez',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                icon: Phone,
                label: t?.contact?.phoneLabel || 'Telefon',
                value: t?.contact?.phoneValue || '+381 60 049 4451',
                href: 'tel:+381600494451',
                color: 'from-emerald-500 to-teal-600',
                isPhone: true
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{item.label}</span>
                    <a href={item.href} className="text-xl font-bold text-white hover:text-cyan-400 transition-colors block break-all">
                      {item.value}
                    </a>
                    {item.isPhone && (
                      <div className="flex gap-4 pt-4">
                        <a href="https://wa.me/381600494451" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 hover:text-emerald-300">
                          <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                        <a href="viber://chat?number=381600494451" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 hover:text-purple-300">
                          <Send className="w-4 h-4" /> Viber
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -z-10" />

            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-8">
              {t?.contact?.form?.sendMessage || 'Pošalji Poruku'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder={t?.contact?.form?.name || 'Tvoje Ime'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/10 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder={t?.contact?.form?.email || 'Email'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/10 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <textarea
                  placeholder={t?.contact?.form?.message || 'Poruka'}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/10 transition-all resize-none font-medium"
                />
              </div>

              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                      {t?.contact?.form?.success || 'Poruka poslata!'}
                    </span>
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-4"
                  >
                    <AlertCircle className="w-6 h-6 text-rose-400" />
                    <span className="text-rose-400 font-bold uppercase tracking-widest text-xs">
                      {t?.contact?.form?.error || 'Greška pri slanju.'}
                    </span>
                  </motion.div>
                ) : (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 rounded-2xl bg-white text-slate-950 font-black uppercase tracking-widest shadow-2xl disabled:opacity-50 flex items-center justify-center gap-3 transition-all"
                  >
                    {isSubmitting ? t?.contact?.form?.sending || 'Šaljem...' : (
                      <>
                        {t?.contact?.form?.submit || 'Pošalji Poruku'}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

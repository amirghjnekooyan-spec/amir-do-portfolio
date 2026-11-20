import { Mail, Phone, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { contactLinks, email } from '@/data/portfolio';
import ContactForm from './ContactForm';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-electric-500/5 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="ارتباط با من"
          title="بیایید با هم <span class='gradient-text'>بسازیم</span>"
        />

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-center leading-8 text-slate-400">
            به دنبال یک برنامه‌نویس با انگیزه برای پروژه بعدی‌تان هستید؟ از هر یک از راه‌های زیر با من در تماس باشید؛
            معمولاً خیلی سریع پاسخ می‌دهم.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {contactLinks.map((link, i) => (
            <Reveal key={link.label} delay={i * 110} className="h-full">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col items-center rounded-3xl p-7 text-center transition-all duration-300 hover:-translate-y-1.5 ${
                  link.primary
                    ? 'border border-electric-400/30 bg-gradient-to-b from-electric-500/15 to-transparent hover:shadow-2xl hover:shadow-electric-500/15'
                    : 'glass-card hover:shadow-2xl hover:shadow-violet-glow/10'
                }`}
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-tr from-electric-500/20 to-violet-glow/20 text-electric-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white">
                  <link.icon size={26} />
                </span>
                <h3 className="mt-4 text-lg font-black text-slate-100">{link.label}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{link.handle}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-violet-glow2 transition-colors group-hover:text-electric-400">
                  رفتن به {link.label}
                  <ExternalLink size={14} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="glass-card mx-auto mt-8 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-3xl p-7 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-tr from-electric-500/20 to-violet-glow/20 text-electric-400">
                <Mail size={24} />
              </span>
              <div>
                <p className="text-sm text-slate-400">ایمیل من</p>
                <p className="font-bold text-slate-100" dir="ltr">{email}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-slate-200 transition-all duration-300 hover:border-electric-400/40 hover:text-electric-400"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'کپی شد!' : 'کپی ایمیل'}
              </button>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-electric-500 to-violet-glow px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-electric-500/25 transition-all duration-300 hover:scale-105"
              >
                <Phone size={16} />
                تماس با من
              </a>
            </div>
          </div>
        </Reveal>

        <ContactForm />
      </div>
    </section>
  );
}

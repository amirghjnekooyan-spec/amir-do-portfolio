import { ArrowDown, Sparkles, Mail, ChevronLeft } from 'lucide-react';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 right-1/4 size-96 rounded-full bg-electric-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 size-96 rounded-full bg-violet-glow/15 blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 size-72 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.6) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="text-center lg:text-right">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/25 bg-electric-500/10 px-4 py-1.5 text-sm font-medium text-electric-400">
              <Sparkles size={16} />
              آماده همکاری و دریافت پروژه فریلنسری
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-black leading-[1.3] sm:text-5xl lg:text-6xl">
              سلام! من <span className="gradient-text">امیر</span> هستم
              <br />
              <span className="text-slate-100">برنامه‌نویس و علاقه‌مند به</span>
              <br />
              <span className="gradient-text">توسعه وب و هوش مصنوعی</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
              عاشق ساختن چیزهای جدید در دنیای وب هستم؛ از یک ایده ساده تا یک محصول واقعی و قابل استفاده.
              با روحیه یادگیری مداوم و تمرکز بر کیفیت، پروژه‌هایی می‌سازم که کار می‌کنند و دیده می‌شوند.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-electric-500 to-violet-glow px-7 py-3.5 font-bold text-white shadow-xl shadow-electric-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-violet-glow/40"
              >
                مشاهده نمونه‌کارها
                <ChevronLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 font-bold text-slate-100 backdrop-blur transition-all duration-300 hover:border-electric-400/40 hover:bg-white/10"
              >
                <Mail size={18} />
                ارتباط با من
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="hidden lg:block">
          <div className="relative mx-auto size-80 xl:size-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric-500/25 via-indigo-500/15 to-violet-glow/25 blur-2xl" />
            <div className="animate-spin-slow absolute inset-2 rounded-full border border-dashed border-electric-400/25" />
            <div className="animate-float-slow absolute inset-6 grid place-items-center rounded-full border border-white/10 bg-night-800/80 backdrop-blur-xl shadow-2xl shadow-black/40">
              <div className="text-center">
                <div className="gradient-text text-6xl font-black">&lt;/&gt;</div>
                <p className="mt-3 text-sm font-medium text-slate-400">ساختن با عشق و کد</p>
              </div>
            </div>
            <div className="animate-float-slower absolute -right-4 top-8 rounded-2xl border border-white/10 bg-night-800/90 px-4 py-2 text-sm font-bold text-electric-400 shadow-xl backdrop-blur">
              Python
            </div>
            <div className="animate-float-slow absolute -left-2 bottom-16 rounded-2xl border border-white/10 bg-night-800/90 px-4 py-2 text-sm font-bold text-violet-glow2 shadow-xl backdrop-blur">
              JavaScript
            </div>
            <div className="animate-float-slower absolute -bottom-2 right-16 rounded-2xl border border-white/10 bg-night-800/90 px-4 py-2 text-sm font-bold text-sky-300 shadow-xl backdrop-blur">
              AI Tools
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="رفتن به بخش بعدی"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-electric-400"
      >
        <ArrowDown size={26} className="animate-bounce" />
      </a>
    </section>
  );
}

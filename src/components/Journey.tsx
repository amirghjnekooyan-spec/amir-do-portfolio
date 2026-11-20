import { learningPath } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Journey() {
  return (
    <section id="journey" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="مسیر یادگیری"
          title="از اولین خط کد تا <span class='gradient-text'>امروز</span>"
        />

        <div className="relative mt-16">
          <div
            className="absolute bottom-4 right-6 top-4 w-px bg-gradient-to-b from-electric-400/60 via-violet-glow/40 to-transparent sm:right-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {learningPath.map((item, i) => (
              <Reveal key={item.title} delay={80}>
                <div
                  className={`relative flex items-start gap-6 sm:w-1/2 ${
                    i % 2 === 0
                      ? 'sm:mr-auto sm:pl-10 sm:text-left sm:flex-row-reverse'
                      : 'sm:ml-auto sm:pr-10'
                  }`}
                >
                  <span
                    className={`relative z-10 grid size-12 shrink-0 place-items-center rounded-2xl border shadow-lg transition-transform duration-300 hover:scale-110 ${
                      item.current
                        ? 'border-violet-glow/50 bg-gradient-to-tr from-violet-glow/30 to-electric-500/20 text-violet-glow2 shadow-violet-glow/20'
                        : 'border-electric-400/25 bg-night-800 text-electric-400 shadow-black/30'
                    }`}
                  >
                    <item.icon size={22} />
                  </span>

                  <div className="glass-card flex-1 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-violet-glow2">{item.period}</span>
                      {item.current && (
                        <span className="rounded-full bg-violet-glow/15 px-2.5 py-0.5 text-[11px] font-bold text-violet-glow2">
                          در حال انجام
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1.5 font-bold text-slate-100">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-slate-400">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { skills } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute left-0 top-1/3 size-80 rounded-full bg-violet-glow/10 blur-[120px]" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="مهارت‌های من"
          title="ابزارهایی که با آن‌ها <span class='gradient-text'>می‌سازم</span>"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.title} delay={(i % 3) * 100}>
              <div className="glass-card group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet-glow/10">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-tr from-electric-500/15 to-violet-glow/15 text-electric-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <skill.icon size={24} />
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                    {skill.level}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-100" dir="ltr" style={{ textAlign: 'right' }}>
                  {skill.title}
                </h3>
                <p className="mt-2 min-h-14 text-sm leading-7 text-slate-400">{skill.description}</p>

                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
                    <span>سطح تسلط</span>
                    <span className="font-bold text-electric-400">٪{skill.percent}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-l from-electric-400 to-violet-glow transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-8 text-slate-500">
            درصدها واقعی و صادقانه‌اند — چون برای من صداقت در معرفی مهارت، مهم‌تر از هر چیز دیگری است.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

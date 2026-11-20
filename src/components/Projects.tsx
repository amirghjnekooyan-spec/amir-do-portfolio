import { ArrowUpLeft } from 'lucide-react';
import { projects } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute right-0 top-1/4 size-80 rounded-full bg-electric-500/10 blur-[120px]" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="پروژه‌ها و نمونه‌کارها"
          title="چیزهایی که با عشق <span class='gradient-text'>ساخته‌ام</span>"
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 120} className="h-full">
              <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-electric-500/10">
                <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        'radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)',
                      backgroundSize: '22px 22px',
                    }}
                  />
                  <project.icon
                    size={72}
                    className="relative text-white/70 transition-all duration-500 group-hover:scale-110 group-hover:text-white"
                  />
                  {project.featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-night-950/70 px-3 py-1 text-xs font-bold text-electric-400 backdrop-blur">
                      پروژه شاخص
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-black text-slate-100">{project.title}</h3>
                  <p className="mt-1 text-sm font-medium text-electric-400">{project.subtitle}</p>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-electric-400/30 bg-electric-500/10 px-5 py-2.5 text-sm font-bold text-electric-400 transition-all duration-300 hover:bg-electric-500 hover:text-white"
                  >
                    مشاهده پروژه
                    <ArrowUpLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Compass, Rocket, HeartHandshake } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const values = [
  {
    icon: Compass,
    title: 'یادگیری مداوم',
    text: 'دنیای فناوری هر روز تغییر می‌کند؛ من هم هر روز چیز تازه‌ای یاد می‌گیرم.',
  },
  {
    icon: Rocket,
    title: 'حل مسئله',
    text: 'هر چالش را یک فرصت برای رشد می‌دانم و تا حل شدن رهایش نمی‌کنم.',
  },
  {
    icon: HeartHandshake,
    title: 'تعهد و تلاش',
    text: 'با صداقت و تلاش مستمر، بهترین نتیجه را برای هر پروژه می‌سازم.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="درباره من"
          title="یک مسیر با <span class='gradient-text'>اشتیاق</span> شروع می‌شود"
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-base leading-9 text-slate-300 sm:text-lg">
              <p>
                مسیر برنامه‌نویسی من با یک سوال ساده شروع شد: <span className="text-electric-400 font-medium">«چطور می‌شود یک ایده را به یک محصول واقعی تبدیل کرد؟»</span> پاسخ این سوال، مرا به دنیای هیجان‌انگیز کدنویسی کشاند.
              </p>
              <p>
                با <span className="font-bold text-slate-100">HTML و CSS</span> وارد دنیای وب شدم و اولین صفحاتم را ساختم؛ سپس با
                <span className="font-bold text-slate-100"> پایتون</span> منطق حل مسئله را عمیق‌تر یاد گرفتم. الان در حال یادگیری
                <span className="font-bold text-slate-100"> جاوااسکریپت</span> به‌صورت خودآموز هستم و با ابزارهای هوش مصنوعی و سبک وایب کدینگ، سریع‌تر ایده‌هایم را به واقعیت تبدیل می‌کنم.
              </p>
              <p>
                به نظرم مهم‌ترین ویژگی یک برنامه‌نویس خوب، داشتن پروژه نیست؛ <span className="text-violet-glow2 font-medium">روحیه یادگیری، تلاش و پیشرفت مستمر</span> است — و من هر روز روی این سه چیز کار می‌کنم.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="glass-card group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-electric-500/10 sm:flex-col sm:items-start lg:flex-row lg:items-center">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-tr from-electric-500/20 to-violet-glow/20 text-electric-400 transition-transform duration-300 group-hover:scale-110">
                    <v.icon size={24} />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-100">{v.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-400">{v.text}</p>
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

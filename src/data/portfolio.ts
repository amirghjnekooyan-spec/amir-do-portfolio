import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  Braces,
  Code2,
  FlaskConical,
  LayoutTemplate,
  Lightbulb,
  Mail,
  Palette,
  Rocket,
  Sparkles,
  Target,
  Terminal,
  Users,
  UtensilsCrossed,
  Wand2,
} from 'lucide-react';

export type Skill = {
  title: string;
  level: string;
  percent: number;
  icon: LucideIcon;
  description: string;
};

export const skills: Skill[] = [
  {
    title: 'Python',
    level: 'مبتدی تا متوسط',
    percent: 55,
    icon: Terminal,
    description: 'آشنایی با مبانی برنامه‌نویسی، کار با داده‌ها و نوشتن اسکریپت‌های کاربردی.',
  },
  {
    title: 'HTML',
    level: 'مطمئن',
    percent: 80,
    icon: Code2,
    description: 'ساختاردهی استاندارد صفحات وب با تگ‌های معنایی و رعایت اصول دسترس‌پذیری.',
  },
  {
    title: 'CSS',
    level: 'مطمئن',
    percent: 75,
    icon: Palette,
    description: 'طراحی ریسپانسیو، پیاده‌سازی چیدمان‌های منعطف و طرح‌های مدرن و تمیز.',
  },
  {
    title: 'JavaScript',
    level: 'در حال یادگیری',
    percent: 40,
    icon: Braces,
    description: 'در مسیر یادگیری؛ آشنایی با مفاهیم پایه و تعامل صفحات با کاربر.',
  },
  {
    title: 'طراحی وب',
    level: 'آشنایی خوب',
    percent: 65,
    icon: LayoutTemplate,
    description: 'درک اصول رابط و تجربه کاربری، تایپوگرافی و رنگ‌بندی حرفه‌ای.',
  },
  {
    title: 'ابزارهای هوش مصنوعی',
    level: 'کاربردی',
    percent: 70,
    icon: Sparkles,
    description: 'استفاده هوشمندانه از ابزارهای AI برای افزایش سرعت و کیفیت توسعه.',
  },
  {
    title: 'وایب کدینگ (Vibe Coding)',
    level: 'آشنا',
    percent: 60,
    icon: Wand2,
    description: 'توسعه سریع محصول با کمک هوش مصنوعی و تمرکز بر نتیجه نهایی.',
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
  icon: LucideIcon;
  gradient: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'برگرینو',
    subtitle: 'وب‌سایت رستوران و سفارش آنلاین غذا',
    description:
      'یک وب‌سایت کامل برای رستوران با منوی تعاملی، سبد خرید و تجربه سفارش آسان؛ طراحی‌شده با تمرکز بر سادگی و سرعت.',
    tags: ['HTML', 'CSS', 'JavaScript', 'طراحی ریسپانسیو'],
    link: '#contact',
    icon: UtensilsCrossed,
    gradient: 'from-amber-500/20 to-orange-600/10',
    featured: true,
  },
  {
    title: 'پروژه‌های تمرینی',
    subtitle: 'تمرین‌ها و ساخت‌های شخصی',
    description:
      'مجموعه‌ای از صفحات لندینگ، ابزارهای کوچک وب و تمرین‌های روزمره برای تقویت مهارت‌ها؛ هر کدام قدمی در مسیر یادگیری.',
    tags: ['تمرین', 'لندینگ پیج', 'ابزار وب'],
    link: '#contact',
    icon: FlaskConical,
    gradient: 'from-violet-500/20 to-fuchsia-600/10',
  },
];

export type TimelineItem = {
  title: string;
  period: string;
  description: string;
  icon: LucideIcon;
  current?: boolean;
};

export const learningPath: TimelineItem[] = [
  {
    title: 'ورود به دنیای وب',
    period: 'قدم اول',
    description:
      'یادگیری HTML و CSS و ساخت اولین صفحات وب؛ عاشق شدن به دنیای طراحی و رابط کاربری.',
    icon: Code2,
  },
  {
    title: 'یادگیری Python',
    period: 'قدم دوم',
    description:
      'افزودن پایتون به جعبه‌ابزارم؛ درک عمیق‌تر منطق کد، حل مسئله و نوشتن برنامه‌های کاربردی.',
    icon: Terminal,
  },
  {
    title: 'ساخت پروژه‌های واقعی',
    period: 'قدم سوم',
    description:
      'ساخت وب‌سایت برگرینو و پروژه‌های شخصی متعدد؛ تبدیل دانش به تجربه واقعی و قابل ارائه.',
    icon: Rocket,
  },
  {
    title: 'یادگیری JavaScript و ابزارهای هوش مصنوعی',
    period: 'قدم چهارم',
    description:
      'یادگیری مستقل جاوااسکریپت در کنار کار با ابزارهای AI و آشنایی با سبک وایب کدینگ برای توسعه سریع‌تر.',
    icon: Sparkles,
    current: true,
  },
  {
    title: 'مسیر پیش‌رو',
    period: 'قدم بعدی',
    description:
      'تسلط بیشتر بر توسعه فرانت‌اند، یادگیری کار با دیتابیس و آماده شدن برای پروژه‌های حرفه‌ای‌تر و همکاری با تیم‌ها.',
    icon: Target,
  },
];

export type ContactLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
  primary?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: 'لینکدین',
    handle: 'من و مسیر حرفه‌ای من را دنبال کنید',
    href: 'https://linkedin.com',
    icon: Lightbulb,
    primary: true,
  },
  {
    label: 'پونیشا',
    handle: 'سفارش پروژه فریلنسری',
    href: 'https://ponisha.ir',
    icon: Briefcase,
  },
  {
    label: 'کارلنسر',
    handle: 'همکاری و پروژه‌های مشترک',
    href: 'https://karlancer.com',
    icon: Users,
  },
];

export const email = 'amir@example.com';
export const contactIcon = Mail;

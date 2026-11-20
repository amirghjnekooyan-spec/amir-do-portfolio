import { Code2 } from 'lucide-react';
import { contactLinks, email } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <a href="#home" className="flex items-center gap-2 text-lg font-extrabold">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-tr from-electric-500 to-violet-glow text-white">
            <Code2 size={20} />
          </span>
          <span className="gradient-text">امیر</span>
          <span className="text-slate-300">.دِو</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-electric-400"
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${email}`} className="transition-colors hover:text-electric-400" dir="ltr">
            {email}
          </a>
        </nav>

        <p className="text-sm text-slate-500">
          ساخته‌شده با <span className="text-violet-glow2">علاقه</span> و کد — © {new Date().getFullYear()} تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}

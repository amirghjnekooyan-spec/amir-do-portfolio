import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Code2 } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'خانه' },
  { href: '#about', label: 'درباره من' },
  { href: '#skills', label: 'مهارت‌ها' },
  { href: '#projects', label: 'پروژه‌ها' },
  { href: '#journey', label: 'مسیر یادگیری' },
  { href: '#contact', label: 'ارتباط با من' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navItems.map((n) => document.querySelector(n.href));
      const pos = window.scrollY + window.innerHeight / 3;
      let current = '#home';
      sections.forEach((s, i) => {
        if (s instanceof HTMLElement && s.offsetTop <= pos) current = navItems[i].href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-night-950/85 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2 text-lg font-extrabold">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-tr from-electric-500 to-violet-glow text-white shadow-lg shadow-electric-500/25">
            <Code2 size={20} />
          </span>
          <span className="gradient-text">امیر</span>
          <span className="text-slate-300">.دِو</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === item.href
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-l from-electric-500 to-violet-glow px-5 py-2 text-sm font-bold text-white shadow-lg shadow-violet-glow/25 transition-transform duration-200 hover:scale-105 md:block"
        >
          استخدام من
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="باز و بسته کردن منو"
          className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-200 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-white/5 px-4 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === item.href ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

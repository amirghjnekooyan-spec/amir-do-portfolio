import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Reveal from './Reveal';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClasses =
  'w-full rounded-xl border border-white/10 bg-night-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-electric-400/50 focus:ring-2 focus:ring-electric-500/20';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') as string).trim();
    const email = (data.get('email') as string).trim();
    const subject = (data.get('subject') as string).trim();
    const message = (data.get('message') as string).trim();

    setStatus('sending');
    setErrorMsg('');

    const { error } = await supabase.from('contact_messages').insert([
      {
        name,
        email,
        subject: subject || null,
        message,
      },
    ]);

    if (error) {
      setStatus('error');
      setErrorMsg('ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید یا از ایمیل استفاده کنید.');
      return;
    }

    setStatus('sent');
    form.reset();
  };

  return (
    <Reveal delay={200}>
      <div className="glass-card mx-auto mt-8 max-w-3xl rounded-3xl p-7 sm:p-9">
        <h3 className="text-center text-xl font-black text-slate-100">
          پیام مستقیم بفرستید
        </h3>
        <p className="mt-2 text-center text-sm leading-7 text-slate-400">
          فرم زیر را پر کنید؛ پیام شما مستقیماً برای من ارسال می‌شود و در اولین فرصت پاسخ می‌دهم.
        </p>

        {status === 'sent' ? (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
            <CheckCircle2 size={44} className="text-emerald-400" />
            <p className="text-lg font-bold text-emerald-300">پیام شما با موفقیت ارسال شد!</p>
            <p className="text-sm text-slate-400">به‌زودی از طریق ایمیل با شما در تماس خواهم بود.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2 text-sm font-bold text-slate-200 transition-colors hover:text-electric-400"
            >
              ارسال پیام جدید
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-slate-300">
                  نام و نام خانوادگی <span className="text-violet-glow2">*</span>
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="مثلاً سارا محمدی"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-slate-300">
                  ایمیل <span className="text-violet-glow2">*</span>
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  placeholder="you@example.com"
                  dir="ltr"
                  className={`${inputClasses} text-left`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="cf-subject" className="mb-1.5 block text-sm font-medium text-slate-300">
                موضوع <span className="text-slate-500">(اختیاری)</span>
              </label>
              <input
                id="cf-subject"
                name="subject"
                type="text"
                maxLength={150}
                placeholder="مثلاً پیشنهاد همکاری روی پروژه فروشگاه اینترنتی"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-slate-300">
                متن پیام <span className="text-violet-glow2">*</span>
              </label>
              <textarea
                id="cf-message"
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={5}
                placeholder="سلام! پروژه‌ای دارم و دوست دارم درباره‌اش صحبت کنیم..."
                className={`${inputClasses} resize-y`}
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                <AlertCircle size={18} className="shrink-0" />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-electric-500 to-violet-glow px-6 py-3.5 font-bold text-white shadow-lg shadow-electric-500/25 transition-all duration-300 hover:scale-[1.01] hover:shadow-violet-glow/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  در حال ارسال...
                </>
              ) : (
                <>
                  <Send size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
                  ارسال پیام
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </Reveal>
  );
}

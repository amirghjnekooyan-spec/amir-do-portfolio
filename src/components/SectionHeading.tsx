type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <span className="inline-block rounded-full border border-violet-glow/30 bg-violet-glow/10 px-4 py-1.5 text-sm font-medium text-violet-glow2">
        {eyebrow}
      </span>
      <h2
        className="mt-4 text-3xl font-black leading-snug text-slate-100 sm:text-4xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-l from-electric-500 to-violet-glow" />
    </div>
  );
}

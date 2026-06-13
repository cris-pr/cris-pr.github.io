import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className={`portfolio-section portfolio-section--${id} scroll-mt-24 py-20 sm:py-24`}>
      <div className="section-container mx-auto max-w-6xl px-6">
        <div className="section-header mb-10 max-w-3xl">
          {eyebrow ? (
            <p className="section-eyebrow mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="section-title text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          {description ? (
            <p className="section-description mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
          ) : null}
        </div>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}

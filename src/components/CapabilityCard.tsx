import type { Capability } from "../data/portfolio";

type CapabilityCardProps = {
  capability: Capability;
  label: string;
};

export function CapabilityCard({ capability, label }: CapabilityCardProps) {
  return (
    <article className="capability-card group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{label}</p>
      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{capability.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{capability.description}</p>

      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
        {capability.highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {capability.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

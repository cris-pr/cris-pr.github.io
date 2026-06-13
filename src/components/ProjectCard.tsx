import { ArrowUpRight } from "lucide-react";

import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
  interactiveLabel?: string;
  onInteractiveClick?: () => void;
};

export function ProjectCard({
  project,
  compact = false,
  interactiveLabel,
  onInteractiveClick,
}: ProjectCardProps) {
  const isInteractive = project.interactive !== undefined && onInteractiveClick !== undefined;
  const cardClassName = `project-card group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left shadow-2xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07] ${
    compact ? "project-card--compact p-6" : "project-card--featured p-7"
  }`;

  const content = (
    <>
      <div className="project-card-header mb-6 flex items-start justify-between gap-4">
        <div className="project-card-heading">
          <p className="project-card-status text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            {project.status ?? project.period}
          </p>
          <h3 className="project-card-title mt-3 text-2xl font-bold tracking-tight text-white">{project.title}</h3>
          {project.period && project.status ? (
            <p className="project-card-period mt-2 text-sm text-slate-400">{project.period}</p>
          ) : null}
        </div>
        <div className="project-card-visual h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10">
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt ?? project.title}
              className={`h-full w-full object-cover ${project.imageClassName ?? ""}`.trim()}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-cyan-300/30 via-blue-500/20 to-fuchsia-400/20" />
          )}
        </div>
      </div>

      <ul className="project-impact-list mt-6 space-y-3 text-sm leading-6 text-slate-300">
        {project.impact.map((item) => (
          <li key={item} className="project-impact-item flex gap-3">
            <span className="project-impact-bullet mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span className="project-impact-text">{item}</span>
          </li>
        ))}
      </ul>

      <div className="project-tech-list mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="project-tech-badge rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>

      {project.links?.length ? (
        <div className="project-links mt-7 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="project-link inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
              onClick={(event) => event.stopPropagation()}
            >
              {link.label}
              <ArrowUpRight className="project-link-icon h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      ) : null}

      {isInteractive && interactiveLabel ? (
        <div className="project-links mt-7 flex flex-wrap gap-3">
          <span className="project-link inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition group-hover:bg-cyan-300/10">
            {interactiveLabel}
            <ArrowUpRight className="project-link-icon h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      ) : null}
    </>
  );

  if (isInteractive) {
    return (
      <button type="button" className={cardClassName} onClick={onInteractiveClick}>
        {content}
      </button>
    );
  }

  return <article className={cardClassName}>{content}</article>;
}

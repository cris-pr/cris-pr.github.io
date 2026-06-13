import { Github, Linkedin, Mail } from "lucide-react";

import { links, profile } from "../data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-lg shadow-cyan-950/40">
            CS
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {links.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap];

            return Icon ? (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null;
          })}
        </div>
      </nav>
    </header>
  );
}

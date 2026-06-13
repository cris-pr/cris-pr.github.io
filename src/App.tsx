import { useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { type Language, portfolioContent } from "./data/portfolio";

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const content = portfolioContent[language];
  const { profile } = content;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.meta.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = content.meta.description;
    }
  }, [content.meta.description, content.meta.title, language]);

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Header
        language={language}
        onLanguageChange={setLanguage}
        navItems={content.navItems}
        links={content.links}
        profileName={profile.name}
        languageToggle={content.languageToggle}
      />

      <main>
        <section className="relative px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {content.hero.badge}
              </div>

              <p className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {profile.location}
              </p>

              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                {profile.name}
                <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-fuchsia-200 bg-clip-text text-transparent">
                  {profile.role}
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{profile.intro}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                >
                  {content.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:text-cyan-100"
                >
                  {content.hero.secondaryCta}
                </a>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/60">
              <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/80 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  {content.hero.panelEyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-bold text-white">{content.hero.panelTitle}</h2>
                <p className="mt-4 leading-7 text-slate-300">{content.hero.panelText}</p>
              </div>

              <div className="mt-6 grid gap-4">
                {content.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <Section
          id="about"
          eyebrow={content.about.eyebrow}
          title={content.about.title}
          description={profile.summary}
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {content.about.cards.map((item, index) => {
              const icons = [Code2, BriefcaseBusiness, Sparkles];
              const Icon = icons[index] ?? Code2;

              return (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <Icon className="h-8 w-8 text-cyan-300" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </article>
              );
            })}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow={content.projects.eyebrow}
          title={content.projects.title}
          description={content.projects.description}
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {content.projects.featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white">{content.projects.archiveTitle}</h3>
            <p className="mt-3 max-w-3xl text-slate-300">{content.projects.archiveDescription}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {content.projects.archived.map((project) => (
                <ProjectCard key={project.title} project={project} compact />
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow={content.experience.eyebrow}
          title={content.experience.title}
          description={content.experience.description}
        >
          <div className="space-y-5">
            {content.experience.items.map((item) => (
              <article key={`${item.company}-${item.role}`} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="mt-1 text-cyan-200">{item.company}</p>
                  </div>
                  <p className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300">
                    {item.period}
                  </p>
                </div>
                <p className="mt-5 leading-7 text-slate-300">{item.description}</p>
                <ul className="mt-5 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow={content.skills.eyebrow}
          title={content.skills.title}
          description={content.skills.description}
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {content.skills.groups.map((group) => (
              <article key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-cyan-300" aria-hidden="true" />
              <h3 className="text-xl font-bold text-white">{content.skills.educationTitle}</h3>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {content.education.map((item) => (
                <div key={item.degree} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="font-semibold text-white">{item.degree}</p>
                  <p className="mt-2 text-slate-300">{item.school}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow={content.contact.eyebrow}
          title={content.contact.title}
          description={content.contact.description}
        >
          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-fuchsia-400/10 p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{profile.email}</p>
                <p className="mt-3 max-w-2xl leading-7 text-slate-300">{content.contact.note}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                >
                  {content.contact.emailCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(content.contact.resumeSubject)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:text-cyan-100"
                >
                  {content.contact.resumeCta}
                  <Download className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. {content.footer.builtWith}
          </p>
          <div className="flex gap-4">
            {content.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

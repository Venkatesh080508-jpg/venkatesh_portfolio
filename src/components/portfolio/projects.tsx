import { content } from "@/lib/portfolio-content";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading index="03 — Projects" title="Projects" />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.projects.map((project) => (
            <article
              key={project.number}
              className="flex flex-col border border-border bg-card p-6 transition-colors duration-300 hover:border-primary md:p-8"
            >
              <p className="label-caps text-muted-foreground">Project {project.number}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-5 border-t border-border pt-5 md:mt-auto">
                <a
                  href={project.github}
                  className="text-sm font-medium underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="text-sm font-medium underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  Live Demo ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

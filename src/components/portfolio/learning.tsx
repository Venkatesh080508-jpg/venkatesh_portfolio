import { content } from "@/lib/portfolio-content";
import { SectionHeading } from "./section-heading";

export function Learning() {
  return (
    <section id="learning" className="scroll-mt-20 border-b border-border bg-card/60">
      {/* Anchor for any reference pointing to #work */}
      <span id="work" className="scroll-mt-20" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          index="02 — Learning & Development"
          title="Learning & Development"
          intro={content.learning.intro}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Card 01: Core Focus Areas */}
          <article className="group flex flex-col border border-border bg-background p-6 transition-colors duration-300 hover:border-primary md:p-8">
            <p className="label-caps text-primary">01 — Focus Areas</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              Academic &amp; Programming Practice
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Building a strong foundation across computer science fundamentals, algorithm design, and modern software development through structured coursework and hands-on coding.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
              {content.learning.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground/85 transition-colors hover:border-primary"
                >
                  {area}
                </span>
              ))}
            </div>
          </article>

          {/* Card 02: Hackathons & Activities */}
          <article className="group flex flex-col border border-border bg-background p-6 transition-colors duration-300 hover:border-primary md:p-8">
            <p className="label-caps text-primary">02 — Hackathons &amp; Activities</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              {content.learning.hackathon.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {content.learning.hackathon.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
              <span className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground/85">
                Collaborative Problem Solving
              </span>
              <span className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground/85">
                Teamwork
              </span>
              <span className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground/85">
                Technical Pitch &amp; Jury Presentation
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

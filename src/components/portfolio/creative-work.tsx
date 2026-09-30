import { content } from "@/lib/portfolio-content";
import { SectionHeading } from "./section-heading";

export function CreativeWork() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          index="02 — Creative Work"
          title="Creative Work"
          intro={content.creative.intro}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {content.creative.items.map((item) => (
            <article
              key={item.number}
              className="group border border-border bg-background transition-colors duration-300 hover:border-primary"
            >
              {/* Clean image placeholder — swap for an <img> when you have artwork */}
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span
                    aria-hidden
                    className="font-display text-7xl text-foreground/10 transition-colors duration-300 group-hover:text-primary/30"
                  >
                    {item.number}
                  </span>
                  <span className="label-caps text-muted-foreground/70">Image placeholder</span>
                </div>
              </div>
              <div className="border-t border-border p-6">
                <p className="label-caps text-primary">{item.number}</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { content } from "@/lib/portfolio-content";
import { SectionHeading } from "./section-heading";

export function CurrentlyLearning() {
  return (
    <section id="currently-learning" className="scroll-mt-20 border-b border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          index="05 — Currently Learning"
          title="Currently Learning"
          intro="Areas, frameworks, and technologies I am currently studying and actively practicing."
        />
        <div className="mt-12">
          <div className="border border-border bg-background p-6 md:p-8">
            <h3 className="label-caps text-primary">Active Exploration &amp; Growth</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {content.currentlyLearning.map((topic, index) => (
                <span
                  key={`${topic}-${index}`}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-primary"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { content } from "@/lib/portfolio-content";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading index="01 — About" title="About" />
        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            {content.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="h-fit">
            <h3 className="label-caps mb-3 text-primary">Academic &amp; Profile Details</h3>
            <dl className="border border-border">
              {content.about.info.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-baseline justify-between gap-6 px-6 py-4 ${
                    index > 0 ? "border-t border-border" : ""
                  }`}
                >
                  <dt className="label-caps shrink-0 text-muted-foreground">{item.label}</dt>
                  <dd className="text-right text-sm font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

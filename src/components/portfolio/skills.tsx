import { content } from "@/lib/portfolio-content";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading index="04 — Skills" title="Skills" />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {content.skills.map((group) => (
            <div key={group.category} className="border border-border p-6 md:p-8">
              <h3 className="label-caps text-primary">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

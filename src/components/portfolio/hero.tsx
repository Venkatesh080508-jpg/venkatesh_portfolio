import { content } from "@/lib/portfolio-content";

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="min-w-0">
          <p className="label-caps text-primary">Portfolio — 2026</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Hi, I&apos;m <span className="italic text-primary">{content.name}</span>.
          </h1>
          <p className="mt-6 text-xl font-medium md:text-2xl">{content.role}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {content.heroDescription}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View My Work
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Let&apos;s Connect
              <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>

        {/* Small typographic detail echoing the "/" logo mark */}
        <div className="hidden shrink-0 lg:block">
          <div className="flex h-64 w-64 flex-col items-center justify-center border border-border xl:h-80 xl:w-80">
            <span aria-hidden className="font-display text-[8rem] leading-none text-primary xl:text-[10rem]">
              /
            </span>
            <p className="label-caps mt-4 text-muted-foreground">{content.name} — 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { content } from "@/lib/portfolio-content";

export function Footer() {
  return (
    <footer className="bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">
              {content.name} <span className="text-primary">/</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Designed &amp; built by {content.name}
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a
              href={content.contact.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </a>
            <span aria-hidden>·</span>
            <a
              href={content.contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <span aria-hidden>·</span>
            <a
              href={`mailto:${content.contact.email}`}
              className="transition-colors hover:text-primary"
            >
              Email
            </a>
          </nav>
        </div>
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">© 2026 Gaddam Venkatesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

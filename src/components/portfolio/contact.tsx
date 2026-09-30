import { type FormEvent } from "react";
import { content } from "@/lib/portfolio-content";
import { SectionHeading } from "./section-heading";

const inputClasses =
  "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

export function Contact() {
  // Placeholder form: opens the visitor's email client addressed to you.
  // Replace [EMAIL] in portfolio-content.ts to make it live.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${content.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const details = [
    { label: "Email", value: content.contact.email, href: `mailto:${content.contact.email}` },
    { label: "GitHub", value: content.contact.github.label, href: content.contact.github.href },
    { label: "LinkedIn", value: content.contact.linkedin.label, href: content.contact.linkedin.href },
    { label: "Instagram / Other", value: content.contact.other.label, href: content.contact.other.href },
  ];

  return (
    <section id="contact" className="scroll-mt-20 border-b border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading index="05 — Contact" title="Let's Connect" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Have a project, idea, or opportunity in mind? Let&apos;s talk.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <dl>
            {details.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-6 border-b border-border py-4 first:border-t"
              >
                <dt className="label-caps shrink-0 text-muted-foreground">{item.label}</dt>
                <dd className="min-w-0 truncate text-right">
                  <a
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <form onSubmit={handleSubmit} className="border border-border p-6 md:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="label-caps text-muted-foreground">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  placeholder="[YOUR NAME]"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="label-caps text-muted-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="[YOUR EMAIL]"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="label-caps text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="[YOUR MESSAGE]"
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Send Message
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

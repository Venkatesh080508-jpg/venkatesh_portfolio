import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Learning } from "@/components/portfolio/learning";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { CurrentlyLearning } from "@/components/portfolio/currently-learning";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { content } from "@/lib/portfolio-content";

const pageTitle = `${content.name} — B.Tech Artificial Intelligence & Engineering Portfolio`;
const pageDescription = `Portfolio of ${content.name} — ${content.role}. Academic background, projects, technical skills, learning & development, and contact.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Learning />
        <Projects />
        <Skills />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

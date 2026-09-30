// ─────────────────────────────────────────────────────────────
// EDIT ME: all portfolio content lives in this one file.
// Replace every [BRACKETED] placeholder with your real content
// and the whole site updates automatically.
// ─────────────────────────────────────────────────────────────

export const content = {
  name: "[YOUR NAME]",
  role: "[SHORT INTRO / ROLE]",
  heroDescription:
    "[Write 2–3 lines about yourself, your interests, what you build, and what you enjoy working on.]",

  about: {
    paragraphs: [
      "[YOUR NAME] is a [YEAR/COURSE/ROLE] interested in [AREAS OF INTEREST].",
      "I enjoy [WHAT YOU LIKE DOING] and I'm currently exploring [TECHNOLOGIES / FIELDS].",
      "My goal is to build meaningful projects while continuously learning and improving.",
    ],
    info: [
      { label: "Education", value: "[COLLEGE / UNIVERSITY]" },
      { label: "Course", value: "[DEGREE / BRANCH]" },
      { label: "Location", value: "[CITY, COUNTRY]" },
      { label: "Currently", value: "[CURRENT ROLE / YEAR]" },
    ],
  },

  creative: {
    intro: "[SHORT DESCRIPTION OF CREATIVE WORK]",
    // Add or remove items here — the grid adapts automatically.
    items: [
      { number: "01", name: "[CREATIVE PROJECT NAME]", description: "[SHORT DESCRIPTION]" },
      { number: "02", name: "[CREATIVE PROJECT NAME]", description: "[SHORT DESCRIPTION]" },
      { number: "03", name: "[CREATIVE PROJECT NAME]", description: "[SHORT DESCRIPTION]" },
      { number: "04", name: "[CREATIVE PROJECT NAME]", description: "[SHORT DESCRIPTION]" },
    ],
  },

  projects: [
    // Add more objects here to add more projects.
    {
      number: "01",
      name: "[PROJECT NAME]",
      description: "[PROJECT DESCRIPTION]",
      tech: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      github: "#",
      demo: "#",
    },
    {
      number: "02",
      name: "[PROJECT NAME]",
      description: "[PROJECT DESCRIPTION]",
      tech: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      github: "#",
      demo: "#",
    },
    {
      number: "03",
      name: "[PROJECT NAME]",
      description: "[PROJECT DESCRIPTION]",
      tech: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      github: "#",
      demo: "#",
    },
  ],

  skills: [
    { category: "Languages", items: ["[Skill]", "[Skill]", "[Skill]", "[Skill]"] },
    { category: "Web / Development", items: ["[Skill]", "[Skill]", "[Skill]", "[Skill]"] },
    { category: "Tools", items: ["[Tool]", "[Tool]", "[Tool]", "[Tool]"] },
    { category: "Creative", items: ["[Skill]", "[Skill]", "[Skill]", "[Skill]"] },
  ],

  contact: {
    email: "[EMAIL]",
    github: { label: "[GITHUB LINK]", href: "#" },
    linkedin: { label: "[LINKEDIN LINK]", href: "#" },
    other: { label: "[SOCIAL LINK]", href: "#" },
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Creative Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

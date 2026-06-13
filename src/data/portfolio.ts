export type Project = {
  title: string;
  status?: string;
  period?: string;
  description: string;
  impact: string[];
  technologies: string[];
  links?: {
    label: string;
    href: string;
  }[];
  featured?: boolean;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const profile = {
  name: "Cristian Sánchez Vázquez",
  role: "Full-Stack Software Developer",
  location: "Puerto Rico",
  email: "cristian.jsan@gmail.com",
  resumeHref: "resume/index.html",
  summary:
    "I build production web systems, backend APIs, and AI-enabled features with a focus on practical user outcomes and maintainable engineering.",
  intro:
    "Full-stack developer with 5+ years of experience across ecommerce, backend services, frontend interfaces, and cross-platform app development. I currently build production systems for an ecommerce web development agency and am developing a React Native fitness app with cloud-backed and AI-powered features.",
};

export const links = [
  {
    label: "GitHub",
    href: "https://github.com/cris-pr",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cristian-developer/",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
  },
];

export const featuredProjects: Project[] = [
  {
    title: "React Native Fitness App",
    status: "In progress",
    period: "Current",
    description:
      "A cross-platform fitness application designed around personalized training workflows, cloud-backed data, and AI-assisted features.",
    impact: [
      "Modern mobile architecture built with reusable React Native and TypeScript patterns.",
      "Product direction emphasizes fitness habit tracking, structured workouts, and future AI coaching experiences.",
      "Portfolio centerpiece for current product, mobile, and cloud engineering skills.",
    ],
    technologies: ["React Native", "TypeScript", "Cloud services", "AI features"],
    featured: true,
  },
  {
    title: "Production Ecommerce Development",
    status: "Professional work",
    period: "2022 - Present",
    description:
      "Client-facing ecommerce engineering work spanning frontend customization, backend integration, operational fixes, and production delivery.",
    impact: [
      "Builds and maintains production storefront features and backend-connected workflows.",
      "Translates client requirements into practical implementation plans and deployable changes.",
      "Works across legacy and modern web stacks while keeping reliability and maintainability in focus.",
    ],
    technologies: ["React", "JavaScript", "ASP.NET", "SQL Server", "APIs"],
    featured: true,
  },
  {
    title: "AI-Enabled Web Features",
    status: "Applied R&D",
    description:
      "Exploration and implementation of AI-powered product features that connect user workflows with practical automation.",
    impact: [
      "Focuses on targeted AI use cases instead of novelty integrations.",
      "Combines application logic, API orchestration, and UI feedback loops.",
      "Supports the portfolio direction toward modern full-stack and AI-assisted software.",
    ],
    technologies: ["TypeScript", "API design", "Prompting", "UX flows"],
    featured: true,
  },
];

export const archivedProjects: Project[] = [
  {
    title: "Inter-Office Messaging Application",
    period: "University project",
    description:
      "A Java messaging application with a hybrid peer-to-peer and client-server architecture for local office networks.",
    impact: [
      "Implemented UDP-based messaging constraints and peer discovery requirements.",
      "Designed around saved conversations, server-managed logins, and direct peer communication.",
    ],
    technologies: ["Java", "UDP", "Networking", "Desktop app"],
    links: [
      {
        label: "Demo video",
        href: "https://player.vimeo.com/video/349784080",
      },
    ],
  },
  {
    title: "Tic Tac Toe AI",
    period: "Early web project",
    description:
      "A browser-based Tic Tac Toe game with a one-player mode that uses game logic to avoid losing.",
    impact: [
      "Built from scratch with HTML, CSS, and JavaScript.",
      "Early practice in state management, game rules, and browser interactions.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Game logic"],
  },
  {
    title: "Calculator",
    period: "Early web project",
    description:
      "A from-scratch calculator interface focused on DOM interactions and basic arithmetic workflows.",
    impact: [
      "Practiced UI state updates and event-driven JavaScript.",
      "Captured an early step in moving from static pages into interactive experiences.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Music Database",
    period: "University project",
    description:
      "A system for storing and browsing music album information with a GUI and database-backed persistence.",
    impact: [
      "Modeled structured album information in a persistent store.",
      "Built a desktop-style user interface around database operations.",
    ],
    technologies: ["Database design", "GUI", "SQL"],
  },
  {
    title: "Random Quote Machine",
    period: "Early web project",
    description:
      "A Puerto Rico-themed random quote machine that displays quotes from notable leaders.",
    impact: [
      "Practiced dynamic rendering and simple randomized content.",
      "Personalized a common frontend exercise with local cultural context.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "CodePen"],
    links: [
      {
        label: "CodePen",
        href: "https://codepen.io/gurimmer/full/VprMxN",
      },
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Developer",
    company: "Brilliance Business Solutions",
    period: "May 2022 - Present",
    description:
      "Develops and maintains ecommerce systems, production features, and backend-connected workflows for client sites.",
    highlights: [
      "Works across frontend interfaces, backend APIs, integrations, and production support.",
      "Balances feature delivery with maintainability in client-driven ecommerce environments.",
    ],
  },
  {
    role: "Master Data Specialist",
    company: "Contractor at Janssen LLC",
    period: "May 2021 - May 2022",
    description:
      "Supported structured data workflows where accuracy, repeatability, and process discipline were essential.",
    highlights: [
      "Maintained data quality across business-critical records.",
      "Built domain understanding that supports careful software and workflow design.",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Independent",
    period: "January 2021 - May 2021",
    description:
      "Delivered software development work directly for client needs and small business workflows.",
    highlights: [
      "Converted loosely defined requirements into scoped technical work.",
      "Handled implementation details across the stack as needed.",
    ],
  },
  {
    role: "Software Developer",
    company: "INVID",
    period: "September 2019 - December 2020",
    description:
      "Built software features and maintained applications as an early-career professional developer.",
    highlights: [
      "Strengthened fundamentals in production development practices.",
      "Collaborated in software teams delivering client-focused solutions.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    skills: ["ASP.NET", "API design", "SQL Server", "Python", "JSON", "Cloud-backed apps"],
  },
  {
    title: "Delivery",
    skills: ["Git", "Agile/Scrum", "CI/CD", "Production support", "Client communication", "Technical planning"],
  },
];

export const education = [
  {
    degree: "Bachelor of Science, Computer Science",
    school: "Polytechnic University of Puerto Rico",
    period: "2016 - 2019",
  },
  {
    degree: "Bachelor of Science, Chemistry",
    school: "University of Puerto Rico - Rio Piedras",
    period: "2008 - 2013",
  },
];

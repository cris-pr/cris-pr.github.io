import aiWebFeaturesIcon from "../../images/ai-web-features-icon.png";
import calculatorPreview from "../../images/calculator-2.png";
import ecommerceDevelopmentIcon from "../../images/ecommerce-development-icon.png";
import fitnessAppIcon from "../../images/adaptive-icon.png";
import tictactoePreview from "../../images/tictactoe.png";

export type Language = "en" | "es";

export type Project = {
  title: string;
  status?: string;
  period?: string;
  description: string;
  impact: string[];
  technologies: string[];
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
  links?: {
    label: string;
    href: string;
  }[];
  featured?: boolean;
  interactive?: "tictactoe" | "calculator";
};

export type Capability = {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

type Link = {
  label: string;
  href: string;
};

type Content = {
  meta: {
    title: string;
    description: string;
  };
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    resumeHref: string;
    summary: string;
    intro: string;
  };
  navItems: Link[];
  links: Link[];
  hero: {
    badge: string;
    primaryCta: string;
    secondaryCta: string;
    panelEyebrow: string;
    panelTitle: string;
    panelText: string;
  };
  languageToggle: {
    label: string;
    ariaLabel: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
  about: {
    eyebrow: string;
    title: string;
    cards: {
      title: string;
      text: string;
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    capabilitiesTitle: string;
    capabilitiesDescription: string;
    capabilityLabel: string;
    archiveTitle: string;
    archiveDescription: string;
    archiveShowMore: string;
    archiveShowLess: string;
    featured: Project[];
    capabilities: Capability[];
    archived: Project[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: Experience[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    educationTitle: string;
    groups: {
      title: string;
      skills: string[];
    }[];
  };
  education: {
    degree: string;
    school: string;
    period: string;
  }[];
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    emailCta: string;
    resumeCta: string;
    resumeSubject: string;
  };
  footer: {
    builtWith: string;
  };
  ticTacToe: {
    title: string;
    chooseSymbol: string;
    chooseMode: string;
    onePlayer: string;
    twoPlayers: string;
    settings: string;
    restart: string;
    turn: string;
    winX: string;
    winO: string;
    tie: string;
    playGame: string;
  };
  calculator: {
    title: string;
    open: string;
  };
};

const email = "cristian.jsan@gmail.com";

const sharedProfile = {
  name: "Cristian Sánchez Vázquez",
  location: "Puerto Rico",
  email,
  resumeHref: "resume/index.html",
};

const sharedLinks = {
  github: "https://github.com/cris-pr",
  linkedin: "https://www.linkedin.com/in/cristian-developer/",
};

export const portfolioContent: Record<Language, Content> = {
  en: {
    meta: {
      title: "Cristian Sanchez Vazquez | Full-Stack Developer",
      description:
        "Cristian Sanchez Vazquez is a full-stack software developer building production web systems, backend APIs, and AI-enabled applications.",
    },
    profile: {
      ...sharedProfile,
      role: "Full-Stack Software Developer",
      summary:
        "I build production web systems, backend APIs, and AI-enabled features with a focus on practical user outcomes and maintainable engineering.",
      intro:
        "Full-stack developer with 5+ years of experience across ecommerce, backend services, frontend interfaces, and cross-platform app development. I currently build production systems for an ecommerce web development agency and am developing a React Native fitness app with cloud-backed and AI-powered features.",
    },
    navItems: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    links: [
      { label: "GitHub", href: sharedLinks.github },
      { label: "LinkedIn", href: sharedLinks.linkedin },
      { label: "Email", href: `mailto:${email}` },
    ],
    hero: {
      badge: "Available for thoughtful full-stack work",
      primaryCta: "View projects",
      secondaryCta: "Get in touch",
      panelEyebrow: "Current Side Project",
      panelTitle: "React Native Fitness Tracking App",
      panelText: "",
    },
    languageToggle: {
      label: "Language: En",
      ariaLabel: "Switch site language to Spanish",
    },
    stats: [
      { label: "Building software", value: "5+ years" },
      { label: "Current focus", value: "React Native + AI" },
      { label: "Primary lane", value: "Full-stack web" },
    ],
    about: {
      eyebrow: "About",
      title: "Developer focused on durable, practical software.",
      cards: [
        {
          title: "Product-minded engineering",
          text: "I like turning unclear requirements into scoped, shippable features that users can actually work with.",
        },
        {
          title: "Production experience",
          text: "My day-to-day work spans ecommerce systems, integrations, client needs, and reliability-minded implementation.",
        },
        {
          title: "Current growth area",
          text: "I am sharpening my React Native, cloud architecture, and AI-enabled application skills through an active fitness app build.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Work that reflects where I am now — and where I started.",
      description:
        "",
      capabilitiesTitle: "Production Capabilities",
      capabilitiesDescription:
        "Capability areas developed across production ecommerce and platform work in my current agency role.",
      capabilityLabel: "Capability",
      archiveTitle: "Archive",
      archiveDescription:
        "Earlier university and bootcamp projects preserved as a record of growth.",
      archiveShowMore: "Show more",
      archiveShowLess: "Show less",
      featured: [
        {
          title: "React Native Fitness App",
          status: "In progress",
          period: "Current",
          description:
            "A cross-platform fitness application designed around personalized training workflows, cloud-backed data, and AI-assisted features.",
          impact: [
            "Modern mobile architecture built with reusable React Native and TypeScript patterns.",
            "Product direction emphasizes fitness habit tracking, structured workouts, and future AI coaching experiences.",
            "Integrates cloud-backed data and cross-platform mobile UX into a cohesive training experience.",
          ],
          technologies: ["React Native", "TypeScript", "Cloud services", "AI features"],
          image: fitnessAppIcon,
          imageAlt: "React Native fitness app icon",
          imageClassName: "project-card-image--fitness",
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
          image: ecommerceDevelopmentIcon,
          imageAlt: "Production ecommerce development icon",
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
            "Prioritizes production-ready AI workflows that improve user outcomes rather than standalone experiments.",
          ],
          technologies: ["TypeScript", "API design", "Prompting", "UX flows"],
          image: aiWebFeaturesIcon,
          imageAlt: "AI-enabled web features icon",
          featured: true,
        },
      ],
      capabilities: [
        {
          title: "BigCommerce B2B Storefronts",
          description:
            "Storefront foundation work for account-driven B2B commerce, including navigation, brand discovery, product detail pages, and buyer portal experiences.",
          highlights: [
            "Implements storefront templates and page experiences for BigCommerce B2B Edition.",
            "Builds buyer portal flows and catalog layouts for complex product listings.",
          ],
          technologies: ["BigCommerce B2B", "HTML", "CSS", "JavaScript"],
        },
        {
          title: "Custom Checkout & Commerce Flows",
          description:
            "Tailored checkout and purchasing experiences across BigCommerce and Shopify, including scheduling, discounts, and operational customizations.",
          highlights: [
            "Delivers custom checkout flows with user-driven scheduling and delivery logic.",
            "Implements Shopify theme customizations and discount automations with Shopify Flow.",
          ],
          technologies: ["BigCommerce", "Shopify", "React", "TypeScript", "GraphQL", "Liquid"],
        },
        {
          title: "Analytics, Testing & Consent",
          description:
            "Measurement and experimentation setup for production storefronts, covering tag management, consent compliance, and A/B testing infrastructure.",
          highlights: [
            "Configures and optimizes Google Tag Manager implementations for ecommerce properties.",
            "Builds custom consent templates and supports experience testing.",
          ],
          technologies: ["GTM", "Optimizely", "HTML", "CSS", "JavaScript"],
        },
        {
          title: "Platform Modernization & Backend Integration",
          description:
            "Upgrades and integration work on legacy and modern commerce stacks, including framework migrations and payment workflow delivery.",
          highlights: [
            "Migrates applications to .NET Core and maintains backend-connected storefront features.",
            "Integrates payment providers and third-party services into production commerce workflows.",
          ],
          technologies: ["C#", ".NET", "ASP.NET", "PayPal", "APIs"],
        },
        {
          title: "Web Portals & Custom Applications",
          description:
            "Account-driven portal experiences and custom web applications supporting specialized user workflows.",
          highlights: [
            "Builds portal interfaces with account-based access and domain-specific user flows.",
            "Delivers production-ready frontend implementation connected to backend services.",
          ],
          technologies: ["React", "TypeScript", "HTML", "CSS", "JavaScript"],
        },
        {
          title: "Security & Communication Integrations",
          description:
            "Hardening and messaging integrations for live commerce sites, including bot protection and customer communication workflows.",
          highlights: [
            "Implements reCAPTCHA and other security controls for public-facing forms and flows.",
            "Integrates Twilio-powered communication into website workflows.",
          ],
          technologies: ["Twilio", "reCAPTCHA", "JavaScript"],
        },
      ],
      archived: [
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
          image: tictactoePreview,
          imageAlt: "Tic Tac Toe game preview",
          interactive: "tictactoe",
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
          image: calculatorPreview,
          imageAlt: "Calculator app preview",
          interactive: "calculator",
        },
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
          links: [{ label: "Demo video", href: "https://player.vimeo.com/video/349784080" }],
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
          links: [{ label: "CodePen", href: "https://codepen.io/gurimmer/full/VprMxN" }],
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional path",
      description: "A focused timeline of software, ecommerce, data, and client delivery experience.",
      items: [
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
          description: "Delivered software development work directly for client needs and small business workflows.",
          highlights: [
            "Converted loosely defined requirements into scoped technical work.",
            "Handled implementation details across the stack as needed.",
          ],
        },
        {
          role: "Software Developer",
          company: "INVID",
          period: "September 2019 - December 2020",
          description: "Built software features and maintained applications as an early-career professional developer.",
          highlights: [
            "Strengthened fundamentals in production development practices.",
            "Collaborated in software teams delivering client-focused solutions.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools and strengths",
      description: "A concise snapshot of the technologies and practices that support the work highlighted above.",
      educationTitle: "Education",
      groups: [
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
      ],
    },
    education: [
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
    ],
    contact: {
      eyebrow: "Contact",
      title: "Let’s build something useful.",
      description:
        "Reach out if you want to talk about full-stack development, ecommerce systems, React Native, or AI-enabled product ideas.",
      note:
        "The site is now structured so content can be updated quickly as new projects, case studies, and resume details are ready.",
      emailCta: "Email me",
      resumeCta: "Request resume",
      resumeSubject: "Resume request",
    },
    footer: {
      builtWith: "Built with Vite, React, TypeScript, and Tailwind CSS.",
    },
    ticTacToe: {
      title: "Tic Tac Toe",
      chooseSymbol: "Choose Player 1's Symbol",
      chooseMode: "Choose Game Mode",
      onePlayer: "1 Player",
      twoPlayers: "2 Players",
      settings: "Settings",
      restart: "Restart",
      turn: "{turn}'s turn",
      winX: "X Wins!!!",
      winO: "O Wins!!!",
      tie: "Tie!!!",
      playGame: "Play game",
    },
    calculator: {
      title: "Calculator",
      open: "Open calculator",
    },
  },
  es: {
    meta: {
      title: "Cristian Sánchez Vázquez | Desarrollador Full-Stack",
      description:
        "Cristian Sánchez Vázquez es un desarrollador full-stack que crea sistemas web de producción, APIs backend y aplicaciones con funciones de IA.",
    },
    profile: {
      ...sharedProfile,
      role: "Desarrollador Full-Stack",
      summary:
        "Desarrollo sistemas web de producción, APIs backend y funciones con IA, siempre enfocado en resultados útiles para usuarios y código mantenible.",
      intro:
        "Desarrollador full-stack con más de 5 años de experiencia en ecommerce, servicios backend, interfaces frontend y desarrollo de aplicaciones multiplataforma. Actualmente construyo sistemas de producción para una agencia de desarrollo web ecommerce y desarrollo una app de fitness en React Native con arquitectura cloud y funciones impulsadas por IA.",
    },
    navItems: [
      { label: "Sobre mí", href: "#about" },
      { label: "Proyectos", href: "#projects" },
      { label: "Experiencia", href: "#experience" },
      { label: "Habilidades", href: "#skills" },
      { label: "Contacto", href: "#contact" },
    ],
    links: [
      { label: "GitHub", href: sharedLinks.github },
      { label: "LinkedIn", href: sharedLinks.linkedin },
      { label: "Correo", href: `mailto:${email}` },
    ],
    hero: {
      badge: "Disponible para trabajo full-stack con propósito",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactar",
      panelEyebrow: "Trabajo en Producción",
      panelTitle: "Capacidades ecommerce y de plataforma en entornos en vivo",
      panelText:
        "",
    },
    languageToggle: {
      label: "Idioma: Español",
      ariaLabel: "Cambiar el idioma del sitio a inglés",
    },
    stats: [
      { label: "Desarrollando software", value: ">5 años" },
      { label: "Enfoque actual", value: "React Native + IA" },
      { label: "Especialidad principal", value: "Web full-stack" },
    ],
    about: {
      eyebrow: "Sobre mí",
      title: "Desarrollador enfocado en software práctico y duradero.",
      cards: [
        {
          title: "Ingeniería con mentalidad de producto",
          text: "Me gusta convertir requisitos poco claros en funcionalidades delimitadas, entregables y útiles para las personas usuarias.",
        },
        {
          title: "Experiencia en producción",
          text: "Mi trabajo diario cubre sistemas ecommerce, integraciones, necesidades de clientes e implementación orientada a confiabilidad.",
        },
        {
          title: "Área de crecimiento actual",
          text: "Estoy fortaleciendo mis habilidades en React Native, arquitectura cloud y aplicaciones con IA mediante una app de fitness activa.",
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Trabajo actual primero, proyectos iniciales preservados como archivo.",
      description:
        "El nuevo portafolio destaca primero la dirección actual de ingeniería y mantiene los proyectos universitarios como contexto, no como la historia principal.",
      capabilitiesTitle: "Capacidades en Producción",
      capabilitiesDescription:
        "Áreas de capacidad desarrolladas en trabajo ecommerce y de plataforma en mi rol actual en agencia.",
      capabilityLabel: "Capacidad",
      archiveTitle: "Archivo",
      archiveDescription:
        "Los proyectos anteriores siguen siendo útiles como registro de crecimiento. Aquí se presentan con más contexto y menos peso visual que el trabajo actual.",
      archiveShowMore: "Ver más",
      archiveShowLess: "Ver menos",
      featured: [
        {
          title: "App de Fitness en React Native",
          status: "En progreso",
          period: "Actual",
          description:
            "Aplicación de fitness multiplataforma diseñada alrededor de flujos de entrenamiento personalizados, datos en la nube y funciones asistidas por IA.",
          impact: [
            "Arquitectura móvil moderna construida con patrones reutilizables de React Native y TypeScript.",
            "La dirección del producto enfatiza seguimiento de hábitos, rutinas estructuradas y futuras experiencias de coaching con IA.",
            "Integra datos en la nube y experiencias móviles multiplataforma en un flujo de entrenamiento cohesivo.",
          ],
          technologies: ["React Native", "TypeScript", "Servicios cloud", "Funciones de IA"],
          image: fitnessAppIcon,
          imageAlt: "Icono de la app de fitness en React Native",
          imageClassName: "project-card-image--fitness",
          featured: true,
        },
        {
          title: "Desarrollo Ecommerce en Producción",
          status: "Trabajo profesional",
          period: "2022 - Presente",
          description:
            "Trabajo de ingeniería ecommerce para clientes que incluye personalización frontend, integración backend, correcciones operacionales y entregas a producción.",
          impact: [
            "Construye y mantiene funcionalidades de storefront y flujos conectados a backend.",
            "Traduce requisitos de clientes en planes técnicos prácticos y cambios desplegables.",
            "Trabaja entre stacks legacy y modernos manteniendo enfoque en confiabilidad y mantenibilidad.",
          ],
          technologies: ["React", "JavaScript", "ASP.NET", "SQL Server", "APIs"],
          image: ecommerceDevelopmentIcon,
          imageAlt: "Icono de desarrollo ecommerce en producción",
          featured: true,
        },
        {
          title: "Funciones Web con IA",
          status: "I+D aplicada",
          description:
            "Exploración e implementación de funciones impulsadas por IA que conectan flujos de usuarios con automatización práctica.",
          impact: [
            "Se enfoca en casos de uso de IA concretos en lugar de integraciones solo por novedad.",
            "Combina lógica de aplicación, orquestación de APIs y ciclos de retroalimentación en UI.",
            "Prioriza flujos de IA listos para producción que mejoran resultados para usuarios en lugar de experimentos aislados.",
          ],
          technologies: ["TypeScript", "Diseño de APIs", "Prompts", "Flujos UX"],
          image: aiWebFeaturesIcon,
          imageAlt: "Icono de funciones web con IA",
          featured: true,
        },
      ],
      capabilities: [
        {
          title: "Storefronts BigCommerce B2B",
          description:
            "Trabajo de base en storefronts para comercio B2B por cuenta, incluyendo navegación, descubrimiento de marcas, páginas de detalle y experiencias de buyer portal.",
          highlights: [
            "Implementa plantillas de storefront y experiencias de página para BigCommerce B2B Edition.",
            "Construye flujos de buyer portal y layouts de catálogo para listados de productos complejos.",
          ],
          technologies: ["BigCommerce B2B", "HTML", "CSS", "JavaScript"],
        },
        {
          title: "Checkout Personalizado y Flujos de Comercio",
          description:
            "Experiencias de checkout y compra a medida en BigCommerce y Shopify, incluyendo programación, descuentos y personalizaciones operacionales.",
          highlights: [
            "Entrega flujos de checkout personalizados con lógica de programación y entrega definida por el usuario.",
            "Implementa personalizaciones de tema en Shopify y automatizaciones de descuento con Shopify Flow.",
          ],
          technologies: ["BigCommerce", "Shopify", "React", "TypeScript", "GraphQL", "Liquid"],
        },
        {
          title: "Analítica, Pruebas y Consentimiento",
          description:
            "Configuración de medición y experimentación para storefronts en producción, cubriendo gestión de tags, cumplimiento de consentimiento e infraestructura de pruebas A/B.",
          highlights: [
            "Configura y optimiza implementaciones de Google Tag Manager para propiedades ecommerce.",
            "Construye plantillas personalizadas de consentimiento y soporta pruebas de experiencia.",
          ],
          technologies: ["GTM", "Optimizely", "HTML", "CSS", "JavaScript"],
        },
        {
          title: "Modernización de Plataforma e Integración Backend",
          description:
            "Actualizaciones e integración en stacks de comercio legacy y modernos, incluyendo migraciones de framework y entrega de flujos de pago.",
          highlights: [
            "Migra aplicaciones a .NET Core y mantiene funcionalidades de storefront conectadas a backend.",
            "Integra proveedores de pago y servicios de terceros en flujos de comercio en producción.",
          ],
          technologies: ["C#", ".NET", "ASP.NET", "PayPal", "APIs"],
        },
        {
          title: "Portales Web y Aplicaciones Personalizadas",
          description:
            "Experiencias de portal por cuenta y aplicaciones web personalizadas que soportan flujos de usuario especializados.",
          highlights: [
            "Construye interfaces de portal con acceso por cuenta y flujos de usuario específicos del dominio.",
            "Entrega implementación frontend lista para producción conectada a servicios backend.",
          ],
          technologies: ["React", "TypeScript", "HTML", "CSS", "JavaScript"],
        },
        {
          title: "Integraciones de Seguridad y Comunicación",
          description:
            "Endurecimiento e integraciones de mensajería para sitios de comercio en vivo, incluyendo protección contra bots y flujos de comunicación con clientes.",
          highlights: [
            "Implementa reCAPTCHA y otros controles de seguridad para formularios y flujos públicos.",
            "Integra comunicación con Twilio en flujos del sitio web.",
          ],
          technologies: ["Twilio", "reCAPTCHA", "JavaScript"],
        },
      ],
      archived: [
        {
          title: "IA de Tic Tac Toe",
          period: "Proyecto web inicial",
          description:
            "Juego de Tic Tac Toe en el navegador con modo de un jugador que usa lógica de juego para evitar perder.",
          impact: [
            "Construido desde cero con HTML, CSS y JavaScript.",
            "Práctica inicial en manejo de estado, reglas de juego e interacciones del navegador.",
          ],
          technologies: ["HTML", "CSS", "JavaScript", "Lógica de juego"],
          image: tictactoePreview,
          imageAlt: "Vista previa del juego Tic Tac Toe",
          interactive: "tictactoe",
        },
        {
          title: "Calculadora",
          period: "Proyecto web inicial",
          description:
            "Interfaz de calculadora construida desde cero, enfocada en interacciones del DOM y flujos básicos de aritmética.",
          impact: [
            "Practicó actualizaciones de estado en UI y JavaScript basado en eventos.",
            "Capturó un paso temprano de páginas estáticas hacia experiencias interactivas.",
          ],
          technologies: ["HTML", "CSS", "JavaScript"],
          image: calculatorPreview,
          imageAlt: "Vista previa de la calculadora",
          interactive: "calculator",
        },
        {
          title: "Aplicación de Mensajería Inter-Office",
          period: "Proyecto universitario",
          description:
            "Aplicación de mensajería en Java con arquitectura híbrida peer-to-peer y cliente-servidor para redes locales de oficina.",
          impact: [
            "Implementó requisitos de mensajería con UDP y descubrimiento de pares.",
            "Diseñada alrededor de conversaciones guardadas, logins manejados por servidor y comunicación directa entre pares.",
          ],
          technologies: ["Java", "UDP", "Networking", "App desktop"],
          links: [{ label: "Video demo", href: "https://player.vimeo.com/video/349784080" }],
        },
        {
          title: "Base de Datos Musical",
          period: "Proyecto universitario",
          description:
            "Sistema para almacenar y consultar información de álbumes musicales con una GUI y persistencia en base de datos.",
          impact: [
            "Modeló información estructurada de álbumes en almacenamiento persistente.",
            "Construyó una interfaz de estilo desktop alrededor de operaciones de base de datos.",
          ],
          technologies: ["Diseño de base de datos", "GUI", "SQL"],
        },
        {
          title: "Máquina de Citas Aleatorias",
          period: "Proyecto web inicial",
          description:
            "Máquina de citas aleatorias con tema de Puerto Rico que muestra frases de líderes destacados.",
          impact: [
            "Practicó renderizado dinámico y contenido aleatorio simple.",
            "Personalizó un ejercicio común de frontend con contexto cultural local.",
          ],
          technologies: ["HTML", "CSS", "JavaScript", "CodePen"],
          links: [{ label: "CodePen", href: "https://codepen.io/gurimmer/full/VprMxN" }],
        },
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria profesional",
      description: "Una línea de tiempo enfocada en software, ecommerce, datos y entrega para clientes.",
      items: [
        {
          role: "Developer",
          company: "Brilliance Business Solutions",
          period: "Mayo 2022 - Presente",
          description:
            "Desarrolla y mantiene sistemas ecommerce, funcionalidades de producción y flujos conectados a backend para sitios de clientes.",
          highlights: [
            "Trabaja entre interfaces frontend, APIs backend, integraciones y soporte de producción.",
            "Equilibra entrega de funcionalidades con mantenibilidad en entornos ecommerce guiados por clientes.",
          ],
        },
        {
          role: "Master Data Specialist",
          company: "Contratista en Janssen LLC",
          period: "Mayo 2021 - Mayo 2022",
          description:
            "Apoyó flujos de datos estructurados donde la precisión, repetibilidad y disciplina de procesos eran esenciales.",
          highlights: [
            "Mantuvo la calidad de datos en registros críticos del negocio.",
            "Desarrolló entendimiento de dominio que apoya diseño cuidadoso de software y flujos de trabajo.",
          ],
        },
        {
          role: "Desarrollador de Software Freelance",
          company: "Independiente",
          period: "Enero 2021 - Mayo 2021",
          description:
            "Entregó trabajo de desarrollo de software directamente para necesidades de clientes y flujos de pequeñas empresas.",
          highlights: [
            "Convirtió requisitos poco definidos en trabajo técnico delimitado.",
            "Manejó detalles de implementación en distintas partes del stack según fuera necesario.",
          ],
        },
        {
          role: "Software Developer",
          company: "INVID",
          period: "Septiembre 2019 - Diciembre 2020",
          description:
            "Construyó funcionalidades de software y mantuvo aplicaciones durante su etapa profesional inicial.",
          highlights: [
            "Fortaleció fundamentos de prácticas de desarrollo en producción.",
            "Colaboró en equipos de software entregando soluciones enfocadas en clientes.",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Herramientas y fortalezas",
      description: "Un resumen conciso de las tecnologías y prácticas que apoyan el trabajo destacado arriba.",
      educationTitle: "Educación",
      groups: [
        {
          title: "Frontend",
          skills: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS"],
        },
        {
          title: "Backend y datos",
          skills: ["ASP.NET", "Diseño de APIs", "SQL Server", "Python", "JSON", "Apps conectadas a cloud"],
        },
        {
          title: "Entrega",
          skills: ["Git", "Agile/Scrum", "CI/CD", "Soporte de producción", "Comunicación con clientes", "Planificación técnica"],
        },
      ],
    },
    education: [
      {
        degree: "Bachillerato en Ciencias, Ciencias de Computadoras",
        school: "Universidad Politécnica de Puerto Rico",
        period: "2016 - 2019",
      },
      {
        degree: "Bachillerato en Ciencias, Química",
        school: "Universidad de Puerto Rico - Río Piedras",
        period: "2008 - 2013",
      },
    ],
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos algo útil.",
      description:
        "Escríbeme si quieres conversar sobre desarrollo full-stack, sistemas ecommerce, React Native o ideas de productos con IA.",
      note:
        "El sitio ahora está estructurado para actualizar contenido rápidamente cuando haya nuevos proyectos, casos de estudio y detalles del resume.",
      emailCta: "Enviarme correo",
      resumeCta: "Solicitar resume",
      resumeSubject: "Solicitud de resume",
    },
    footer: {
      builtWith: "Construido con Vite, React, TypeScript y Tailwind CSS.",
    },
    ticTacToe: {
      title: "Tic Tac Toe",
      chooseSymbol: "Elige el símbolo del Jugador 1",
      chooseMode: "Elige el modo de juego",
      onePlayer: "1 Jugador",
      twoPlayers: "2 Jugadores",
      settings: "Ajustes",
      restart: "Reiniciar",
      turn: "Turno de {turn}",
      winX: "¡Gana X!",
      winO: "¡Gana O!",
      tie: "¡Empate!",
      playGame: "Jugar",
    },
    calculator: {
      title: "Calculadora",
      open: "Abrir calculadora",
    },
  },
};

export const services = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <rect x="2" y="4" width="24" height="18" rx="3" />
        <path d="M9 10h4M9 14h10M9 18h7" strokeLinecap="round" />
        <path
          d="M19 10l3-3M19 10h3v3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "Web Development",
    tagline:
      "High-performance websites and web applications built for modern businesses.",
    desc: "We architect and build fast, accessible, scalable web products — from marketing sites to complex SaaS platforms. Every project is grounded in performance, maintainability, and user experience.",
    features: [
      "React, Next.js, TypeScript",
      "REST & GraphQL APIs",
      "Performance optimization",
      "Accessibility (WCAG 2.1)",
    ],
    deliverables: [
      "Marketing websites",
      "SaaS dashboards",
      "E-commerce platforms",
      "Developer portals",
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <rect x="8" y="1" width="12" height="26" rx="3" />
        <path d="M13 23h2" strokeLinecap="round" />
      </svg>
    ),
    name: "Mobile Development",
    tagline: "Scalable mobile experiences for iOS and Android.",
    desc: "Native and cross-platform mobile apps engineered for reliability and performance. We build products that work seamlessly across devices and delight users from their first tap.",
    features: [
      "React Native & Expo",
      "Swift & Kotlin native",
      "Offline-first architecture",
      "App Store optimization",
    ],
    deliverables: [
      "Consumer apps",
      "Enterprise mobile tools",
      "Fintech applications",
      "Health & wellness platforms",
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <rect x="3" y="3" width="22" height="22" rx="4" />
        <circle cx="14" cy="14" r="6" />
        <path d="M10 10l8 8M18 10l-8 8" strokeLinecap="round" />
      </svg>
    ),
    name: "UI/UX Design",
    tagline:
      "Human-centered interfaces designed to make complex products simple.",
    desc: "Design that solves real problems. We combine research, systems thinking, and craft to create interfaces that are intuitive, beautiful, and commercially effective.",
    features: [
      "User research & testing",
      "Design systems & tokens",
      "Figma prototyping",
      "Motion & micro-interaction",
    ],
    deliverables: [
      "Product design sprints",
      "Design systems",
      "UX audits",
      "Brand identity",
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M14 4C9.6 4 6 6 4 9M4 9C2 12 2 16 4 19M4 19C6 22 9.6 24 14 24C18.4 24 22 22 24 19M24 19C26 16 26 12 24 9C22 6 18.4 4 14 4" />
        <circle cx="14" cy="14" r="4" />
        <path d="M14 10V14l3 3" strokeLinecap="round" />
      </svg>
    ),
    name: "Cloud & Digital Solutions",
    tagline:
      "Reliable cloud infrastructure and digital transformation solutions.",
    desc: "From migration strategies to full cloud-native architectures — we help teams modernize infrastructure, reduce costs, and build systems that scale without drama.",
    features: [
      "AWS, GCP, Azure",
      "Kubernetes & Docker",
      "CI/CD & DevOps",
      "Security & compliance",
    ],
    deliverables: [
      "Cloud migrations",
      "Infrastructure audits",
      "Cost optimization",
      "Platform engineering",
    ],
  },
];

export const steps = [
  {
    num: "01",
    name: "Discover",
    desc: "We immerse ourselves in your business, users, and goals to define what to build and why.",
  },
  {
    num: "02",
    name: "Design",
    desc: "Prototypes and design systems crafted at speed, validated with real users before any code is written.",
  },
  {
    num: "03",
    name: "Build",
    desc: "Agile engineering with weekly demos. Quality gates at every step — no technical debt left in the dark.",
  },
  {
    num: "04",
    name: "Launch & Grow",
    desc: "Deployment, monitoring, and iteration. We stay invested in the product long after launch.",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "$1,500+",
    period: "per project",
    desc: "For startups and small businesses needing a strong digital foundation.",
    features: [
      "1–3 page website or MVP",
      "Design + development",
      "Mobile-responsive",
      "2 rounds of revisions",
      "30-day support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$4,000+",
    period: "per project",
    desc: "For scaling companies with more complex product and platform needs.",
    features: [
      "Full product design",
      "Custom web or mobile app",
      "API integrations",
      "Performance optimization",
      "QA & testing",
      "90-day support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    desc: "Tailored engagements for established organizations with complex requirements.",
    features: [
      "Dedicated team",
      "Long-term partnership",
      "Architecture consulting",
      "Security & compliance",
      "SLA guarantees",
      "Ongoing retainer",
    ],
    cta: "Let's Talk",
    highlighted: true,
  },
];

export const testimonials = [
  {
    quote:
      "The team delivered a redesigned dashboard that cut our support tickets by 38%. They understood our users better than we did.",
    name: "Tom Alvarez",
    title: "Product Director",
    company: "Altura",
    avatar:
      "https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=80&h=80&fit=crop&auto=format",
  },
  {
    quote:
      "They rebuilt our mobile app from scratch in 10 weeks. The new app has a 4.8 App Store rating and our retention improved 60%.",
    name: "Zara Osei",
    title: "CEO & Co-Founder",
    company: "Vertex",
    avatar:
      "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?w=80&h=80&fit=crop&auto=format",
  },
];

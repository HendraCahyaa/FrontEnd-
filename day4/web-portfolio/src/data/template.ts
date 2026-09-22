import React from "react";
import { BackendIcon, DatabaseIcon, DevopsIcon, FrontendIcon } from "./icon";
export const Values = [
  {
    id: "1",
    label: "Willingness to Learn",
    desc: "Continuously learning and open to technology, feedback, and new ways of working.",
  },
  {
    id: "2",
    label: "Attention to Detail",
    desc: "Pixel-perfect interface design, clean and well-documented code, and thorough testing to minimize bugs prior to release.",
  },
  {
    id: "3",
    label: "Responsibility",
    desc: "Striving to complete tasks according to targets and taking responsibility for the processes I handle.",
  },
];

interface Category {
  id: string;
  label: string;
  accent: string;
  icon: React.ReactNode;
  skill: string[];
}

export const Categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    accent: "#61dafb",
    icon: React.createElement(FrontendIcon),
    skill: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    accent: "#339933",
    icon: React.createElement(BackendIcon),
    skill: ["Node.js", "Express", "Rest API", "PostgreSQL"],
  },
  {
    id: "database",
    label: "Database",
    accent: "#336791",
    icon: React.createElement(DatabaseIcon),
    skill: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    id: "devops",
    label: "DevOps",
    accent: "#2496ED",
    icon: React.createElement(DevopsIcon),
    skill: ["Git & Github", "Docker", "Postman", "Vite"],
  },
];

interface Project {
  id: number;
  title: string;
  image: string;
  role: string;
  desc: string;
  tags: string[];
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}
export const project: Project[] = [
  {
    id: 1,
    title: "NexaCommerce",
    desc: "Full-stack e-commerce platform handling 10k+ daily transactions with real-time inventory management.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=520&fit=crop&auto=format",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    role: "Lead Full-Stack Developer",
    star: {
      situation:
        "A mid-size retail client was operating on a legacy monolithic e-commerce platform struggling under peak load, causing ~$50k/month in lost revenue from downtime and degraded performance.",
      task: "Architect and deliver a modern, cloud-native e-commerce platform within 4 months, with a zero-downtime migration strategy and 3x the existing peak capacity.",
      action:
        "Designed a microservices architecture with a React/TypeScript frontend, Node.js API layer, PostgreSQL for transactional data, and Redis for session and cart state. Deployed on AWS ECS with auto-scaling, set up GitHub Actions CI/CD pipelines, and used feature flags for the phased rollout.",
      result:
        "Platform launched on schedule. Peak load capacity increased 3x. Page load time dropped from 4.2s to 0.8s. Revenue grew 23% in Q1 post-launch. Zero downtime during migration.",
    },
  },
  {
    id: 2,
    title: "FlowBoard",
    desc: "Real-time collaborative project management tool with live cursors, drag-and-drop, and team analytics.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&h=520&fit=crop&auto=format",
    tags: ["React", "TypeScript", "WebSockets", "MongoDB", "Express"],
    role: "Full-Stack Developer",
    star: {
      situation:
        "A Series A startup needed a bespoke project management tool to replace a patchwork of Trello, Notion, and Slack for their 40-person engineering org.",
      task: "Build a real-time collaborative workspace supporting concurrent editing, live cursors, and project analytics within a 10-week timeline.",
      action:
        "Implemented WebSocket-based real-time sync using Socket.io, a conflict-free drag-and-drop board built with DnD Kit, and an analytics dashboard powered by MongoDB aggregations. Used optimistic UI updates for near-instant feedback.",
      result:
        "Tool adopted org-wide within 2 weeks of launch. Mean response time under 80ms for real-time events. Reduced meeting overhead by 35% according to internal survey.",
    },
  },
  {
    id: 3,
    title: "DataPulse",
    desc: "Business intelligence dashboard with live data pipelines, interactive charts, and exportable reports.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=520&fit=crop&auto=format",
    tags: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Recharts"],
    role: "Full-Stack Developer",

    star: {
      situation:
        "A SaaS company was spending $8k/month on a third-party BI tool that lacked the custom metrics and white-labeling their enterprise customers required.",
      task: "Build an in-house analytics dashboard with custom metric definitions, live data ingestion, and exportable PDF/CSV reports.",
      action:
        "Built a Next.js frontend with Recharts for interactive visualizations. Created a Python/FastAPI data pipeline handling 500k events/day, with PostgreSQL materialized views for fast aggregation. Added SSR for instant initial load.",
      result:
        "$96k/year in tooling costs eliminated. Report generation time reduced from 45s to under 2s. Three enterprise clients cited the analytics as a key factor in renewal.",
    },
  },
  {
    id: 4,
    title: "VaultAPI",
    desc: "Secure RESTful API gateway with JWT auth, rate limiting, usage analytics, and a developer portal.",

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=520&fit=crop&auto=format",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    role: "Backend Engineer",

    star: {
      situation:
        "An internal team had 12 microservices with inconsistent auth, no rate limiting, and no visibility into API usage — posing security and scaling risks.",
      task: "Design a unified API gateway that enforced authentication, applied per-client rate limits, and exposed a developer portal for API key management.",
      action:
        "Built with Node.js/Express, using Redis for distributed rate-limit counters and JWT verification. PostgreSQL stores usage logs aggregated into hourly summaries. Dockerized the gateway for horizontal scaling; deployed behind an AWS ALB.",
      result:
        "Auth incidents dropped to zero post-launch. Rate limiting blocked 2.1k abusive requests in the first month. Developer portal reduced onboarding time from 2 days to 2 hours.",
    },
  },
];

interface Job {
  title: string;
  company?: string;
  period: string;
  type?: string;
  responsibilities: string[];
  tech: string[];
}
export const jobs: Job[] = [
  {
    title: "Senior Full-Stack Developer",
    company: "Meridian Labs",
    period: "Jan 2023 — Present",
    type: "Full-time",
    responsibilities: [
      "Lead a team of 4 engineers building a SaaS platform serving 12k+ users",
      "Architected migration from monolith to microservices, cutting deploy frequency from weekly to multiple times per day",
      "Established front-end coding standards and component library used across 3 product teams",
      "Reduced infrastructure costs by 40% through AWS resource optimization",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Full-Stack Developer",
    company: "Stackwright Studio",
    period: "Mar 2020 — Dec 2022",
    type: "Full-time",
    responsibilities: [
      "Built and shipped 12+ client projects end-to-end, from scoping through production",
      "Introduced TypeScript and testing practices that reduced production bugs by 60%",
      "Developed real-time features (chat, notifications, live updates) using WebSockets",
      "Mentored 2 junior developers and led weekly technical knowledge-sharing sessions",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Redis"],
  },
  {
    title: "Frontend Developer",
    company: "Candor Creative Agency",
    period: "Jun 2018 — Feb 2020",
    type: "Full-time",
    responsibilities: [
      "Built interactive marketing sites and web apps for 20+ clients across diverse industries",
      "Improved Lighthouse performance scores from ~40 to 90+ on flagship client properties",
      "Collaborated closely with design team on design-system tokens and component reuse",
      "Introduced Git workflow and code review culture to a previously ad-hoc team",
    ],
    tech: ["JavaScript", "React", "CSS", "WordPress", "GSAP", "Figma"],
  },
];

export const testimonials = [
  {
    quote:
      "Alex delivered our platform rewrite on time and under budget. What impressed me most was how they identified scope risks early and communicated them clearly — no surprises. The code quality was exceptional, and the team picked it up without needing walkthroughs.",
    name: "Sarah Chen",
    title: "Product Manager, TechVentures Inc.",
    initials: "SC",
    color: "#3b82f6",
  },
  {
    quote:
      "We brought Alex in to fix a performance crisis and they turned around our core application in 3 weeks. Page loads went from 8 seconds to under 1. Beyond the technical chops, Alex is an excellent communicator who keeps non-technical stakeholders in the loop effortlessly.",
    name: "Marcus Williams",
    title: "CTO, Launchpad Systems",
    initials: "MW",
    color: "#8b5cf6",
  },
  {
    quote:
      "Alex has the rare combination of strong design sensibility and deep technical knowledge. Working alongside them on the DataPulse dashboard was a genuine pleasure. They pushed back thoughtfully when requirements were unclear and always suggested better approaches — not just executions.",
    name: "Olivia Rodriguez",
    title: "Lead Designer, PixelCraft Agency",
    initials: "OR",
    color: "#10b981",
  },
];

export const tech = ["React", "Node.js", "TypeScript", "PostgreSQL"];
export const href = [
  "Home",
  "About",
  "Skills",
  "Portfolio",
  "Experience",
  "Testimonial",
  "Contact",
];

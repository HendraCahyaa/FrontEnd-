import React from "react";
import { BackendIcon, DatabaseIcon, DevopsIcon, FrontendIcon } from "./icon";
export const Values = [
  {
    id: "1",
    label: "Kemauan Belajar",
    desc: "Terus belajar dan terbuka terhadap teknologi, feedback, serta cara kerja baru.",
  },
  {
    id: "2",
    label: "Perhatian pada Detail",
    desc: "Desain antarmuka presisi piksel, kode yang bersih dan terdokumentasi rapi, serta pengujian menyeluruh guna meminimalkan celah bug sebelum tahap rilis.",
  },
  {
    id: "3",
    label: "Tanggung Jawab",
    desc: "Berusaha menyelesaikan tugas sesuai target dan bertanggung jawab terhadap proses yang saya kerjakan.",
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
    title: "Website Portfolio Pribadi",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=520&fit=crop&auto=format",
    role: "FULL-STACK DEVELOPER",
    desc: "Project pribadi untuk memperkenalkan diri, menampilkan skill, dan mendokumentasikan project yang telah saya kerjakan. ",
    tags: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    star: {
      situation:
        "Saya membuat website ini sebagai portfolio pribadi sekaligus sebagai project untuk menerapkan kemampuan React, TypeScript, dan responsive design.",
      task: "Bagaimana membuat portfolio yang sederhana namun tetap menunjukkan kemampuan frontend development.",
      action:
        "Menggunakan React dengan component-based architecture dan Tailwind CSS untuk membangun tampilan responsive.",
      result:
        "Website dapat digunakan untuk memperkenalkan diri dan menampilkan project serta kemampuan yang saya miliki. ",
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
    title: "Full-Stack Web Development Bootcamp",
    period: "Jul 2026 — Sekarang",
    responsibilities: [
      "Membangun interface responsive menggunakan React dan TypeScript",
      "Membuat REST API menggunakan Node.js dan Express",
      "Mengelola database menggunakan PostgreSQL",
      "Menggunakan Git dan GitHub untuk version control",
      "Mengerjakan project secara individu maupun berkolaborasi dalam tim",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
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

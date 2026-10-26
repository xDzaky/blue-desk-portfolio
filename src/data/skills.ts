// src/data/skills.ts
import type { Skill } from "./types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", group: "Frontend", level: "Advanced", note: "Hooks, SPA architecture" },
  { name: "Next.js", icon: "nextdotjs", group: "Frontend", level: "Advanced", note: "App Router, Server Actions" },
  { name: "TypeScript", icon: "typescript", group: "Frontend", level: "Intermediate", note: "Strict typing, generic interfaces" },
  { name: "Tailwind CSS", icon: "tailwindcss", group: "Frontend", level: "Advanced", note: "Responsive UI, v4, token themes" },
  { name: "JavaScript", icon: "javascript", group: "Frontend", level: "Advanced", note: "ESNext, DOM manipulation" },
  { name: "HTML5", icon: "html5", group: "Frontend", level: "Expert", note: "Semantic structure, accessible markup" },

  // Backend
  { name: "Laravel", icon: "laravel", group: "Backend", level: "Advanced", note: "MVC, Eloquent, RESTful APIs, Sanctum" },
  { name: "PHP", icon: "php", group: "Backend", level: "Advanced", note: "OOP, modern PHP 8.x" },
  { name: "Node.js", icon: "nodedotjs", group: "Backend", level: "Intermediate", note: "Express, REST API microservices" },
  { name: "Python", icon: "python", group: "Backend", level: "Basic", note: "Scripting & automation" },

  // Database
  { name: "MySQL", icon: "mysql", group: "Database", level: "Advanced", note: "Relational schema, indexes, joins" },
  { name: "PostgreSQL", icon: "postgresql", group: "Database", level: "Intermediate", note: "Complex queries, JSONB" },

  // Tools
  { name: "Git", icon: "git", group: "Tools", level: "Advanced", note: "Version control, branching" },
  { name: "GitHub", icon: "github", group: "Tools", level: "Advanced", note: "Collaboration, Actions, CI/CD" },
  { name: "Vite", icon: "vite", group: "Tools", level: "Advanced", note: "Modern frontend tooling" },
  { name: "Vercel", icon: "vercel", group: "Tools", level: "Advanced", note: "Edge deployments & DNS" },
  { name: "Figma", icon: "figma", group: "Tools", level: "Intermediate", note: "UI wireframing & prototyping" },
];

export const learningTopics = [
  "NEXT.JS 15 APP ROUTER & SERVER ACTIONS",
  "SOLANA WEB3 & LAZORKIT SDK",
  "POSTGRESQL & PRISMA ORM",
  "RESTFUL API SECURITY & SANCTUM",
];

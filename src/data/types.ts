// src/data/types.ts
export type Social = {
  label: "GitHub" | "LinkedIn" | "Instagram" | "WhatsApp" | "Email";
  url: string;
};

export type Skill = {
  name: string;
  icon: string;
  group: "Frontend" | "Backend" | "Database" | "Tools";
  note?: string;
  level?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  stack: string[];
  thumb?: string;
  live?: string;
  repo?: string;
  summary: string;
  problem?: string;
  solution?: string;
  role?: string;
  results?: string[];
  polaroids?: string[];
};

export type JourneyItem = {
  date: string;
  title: string;
  description: string;
  icon: "graduation" | "trophy" | "rocket" | "books" | "star";
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image?: string;
  credentialUrl?: string;
};

export type Service = {
  name: string;
  points: string[];
  price?: string;
  popular?: boolean;
};

import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siHtml5,
  siCss,
  siLaravel,
  siPhp,
  siNodedotjs,
  siPython,
  siMysql,
  siPostgresql,
  siGit,
  siGithub,
  siVite,
  siVercel,
  siFigma,
  siDocker,
  siSupabase,
  siPrisma,
  siSolana,
  siInstagram,
  siWhatsapp,
  type SimpleIcon,
} from "simple-icons";

// Standard LinkedIn SVG path
const customLinkedin: SimpleIcon = {
  title: "LinkedIn",
  slug: "linkedin",
  hex: "0A66C2",
  source: "https://linkedin.com",
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>',
  path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
};

const ICON_MAP: Record<string, SimpleIcon> = {
  react: siReact,
  nextdotjs: siNextdotjs,
  typescript: siTypescript,
  javascript: siJavascript,
  tailwindcss: siTailwindcss,
  html5: siHtml5,
  css: siCss,
  laravel: siLaravel,
  php: siPhp,
  nodedotjs: siNodedotjs,
  python: siPython,
  mysql: siMysql,
  postgresql: siPostgresql,
  git: siGit,
  github: siGithub,
  vite: siVite,
  vercel: siVercel,
  figma: siFigma,
  docker: siDocker,
  supabase: siSupabase,
  prisma: siPrisma,
  solana: siSolana,
  linkedin: customLinkedin,
  instagram: siInstagram,
  whatsapp: siWhatsapp,
};

export function getSimpleIcon(slug: string): SimpleIcon | null {
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (ICON_MAP[slug]) return ICON_MAP[slug];
  if (ICON_MAP[normalized]) return ICON_MAP[normalized];
  return null;
}

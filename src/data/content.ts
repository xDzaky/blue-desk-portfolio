// src/data/content.ts
import type { Social } from "./types";

export const profile = {
  name: "Achmad Dzaki Habibullah Al Azhar",
  shortName: "Dzaki",
  role: "Fullstack Web Developer",
  school: "SMK Negeri 1 Kota Probolinggo",
  major: "Rekayasa Perangkat Lunak (RPL)",
  location: "Probolinggo, Jawa Timur",
  year: "2026",
  tagline: "Bikin website yang rapi di luar, kencang & tangguh di dalam.",
  about:
    "Halo, aku Dzaki. Siswa kelas 12 SMK Negeri 1 Kota Probolinggo jurusan Rekayasa Perangkat Lunak (RPL) & Fullstack Web Developer yang gemar membuat website responsif dan mendalami arsitektur backend. Dari antarmuka modern, RESTful API, sampai database dan deployment tuntas.",
  email: "dzakihabibullah7@gmail.com",
  whatsapp: "+6281234567890", // [ISI: ganti dengan nomor aktif jika berbeda]
  domain: "dzaki.dev",
  photo:
    "https://res.cloudinary.com/dzpa07b4h/image/upload/v1792908052/Gemini_Generated_Image_f9n4stf9n4stf9n4_amqfz6.jpg",
  photoSecondary:
    "https://res.cloudinary.com/dzpa07b4h/image/upload/v1792907946/Gemini_Generated_Image_58nf3c58nf3c58nf_sa0p8c.jpg",
  socials: [
    { label: "GitHub", url: "https://github.com/xDzaky" },
    { label: "LinkedIn", url: "https://linkedin.com/in/dzaky" },
    { label: "Instagram", url: "https://instagram.com/dzaky" },
    { label: "WhatsApp", url: "https://wa.me/6281234567890" },
  ] as Social[],
};

export const tags = [
  "WEB DEVELOPMENT",
  "FULLSTACK APP",
  "UI IMPLEMENTATION",
  "DEPLOYMENT & SEO",
];

export const stats = [
  { label: "PROJECTS", value: "12+" },
  { label: "SERTIFIKAT", value: "8+" },
  { label: "TAHUN BELAJAR", value: "3+" },
];

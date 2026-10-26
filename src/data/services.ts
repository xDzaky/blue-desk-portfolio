// src/data/services.ts
import type { Service } from "./types";

export const services: Service[] = [
  {
    name: "Website Company Profile & UMKM",
    price: "Mulai dari Rp 500rb",
    popular: false,
    points: [
      "Desain responsif & estetik di semua layar ponsel/laptop",
      "Katalog produk / layanan terintegrasi tombol WhatsApp",
      "Optimasi SEO Google & kecepatan loading kilat",
      "Setup domain kustom & hosting gratis",
    ],
  },
  {
    name: "Web Application Fullstack",
    price: "Mulai dari Rp 1.5jt",
    popular: true,
    points: [
      "Backend tangguh (Laravel / Node.js) dengan autentikasi aman",
      "Frontend modern interaktif (React / Next.js / Tailwind)",
      "Database relasional terstruktur (MySQL / PostgreSQL)",
      "Dashboard admin manajemen data & laporan cetak/ekspor",
    ],
  },
  {
    name: "Redesign & Optimasi Website",
    price: "Mulai dari Rp 400rb",
    popular: false,
    points: [
      "Perbaikan tampilan lama agar modern dan tidak kaku",
      "Perbaikan bug & peningkatan performa Core Web Vitals",
      "Integrasi API pihak ketiga (WhatsApp, Payment, Maps)",
      "Maintenance dan pendampingan pasca deployment",
    ],
  },
];

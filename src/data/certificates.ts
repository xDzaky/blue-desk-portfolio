// src/data/certificates.ts
import type { Certificate } from "./types";

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    credentialUrl: "https://www.dicoding.com/certificates/DICODING-WEB-BASE",
  },
  {
    id: "cert-2",
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    credentialUrl: "https://www.dicoding.com/certificates/DICODING-REACT-DEV",
  },
  {
    id: "cert-3",
    title: "Laravel Backend Web Development",
    issuer: "BuildWithAngga",
    year: "2025",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    credentialUrl: "https://buildwithangga.com/certificates/BWA-LARAVEL-PRO",
  },
  {
    id: "cert-4",
    title: "Database Design & SQL Implementation",
    issuer: "Coursera / Cisco Networking Academy",
    year: "2025",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=80",
    credentialUrl: "https://coursera.org/verify/DATABASE-SQL-SPEC",
  },
  {
    id: "cert-5",
    title: "Web Security & Vulnerability Assessment",
    issuer: "Solana Superteam / Web3 Bounty Guild",
    year: "2026",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    credentialUrl: "https://earn.superteam.fun/bounties/security-guild",
  },
];

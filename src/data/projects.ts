// src/data/projects.ts
import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "nimeku",
    title: "Nimeku",
    subtitle: "Streaming anime subtitle Indonesia",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
    thumb: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    live: "https://nimeku.vercel.app",
    repo: "https://github.com/xDzaky/nimeku",
    summary:
      "Platform streaming anime responsif dengan sistem cache video pintar, antarmuka bertema gelap modern, dan pencarian instan.",
    problem:
      "Pengguna streaming anime sering menghadapi antarmuka yang lambat, penuh iklan mengganggu, dan tidak ramah ponsel saat mencari episode terbaru.",
    solution:
      "Membangun frontend Next.js App Router dengan caching agresif di edge, arsitektur headless backend berbasis RESTful API Laravel, dan integrasi video player responsif.",
    role: "Fullstack Web Developer",
    results: [
      "Waktu muat halaman berkurang 45% dengan Next.js ISR",
      "Skor Lighthouse performa 94/100 pada uji perangkat seluler",
      "Mendukung 1,000+ episode dengan pencarian instan debounce",
    ],
  },
  {
    slug: "bakso-mie-ayam-podomoro",
    title: "Bakso & Mie Ayam Podomoro",
    subtitle: "Website profil UMKM kuliner legendaris",
    year: "2026",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    thumb: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80",
    live: "https://podomoro-kuliner.vercel.app",
    repo: "https://github.com/xDzaky/bakso-podomoro",
    summary:
      "Landing page interaktif untuk UMKM kuliner lokal dengan katalog menu digital, integrasi Google Maps, dan tombol pemesanan WhatsApp.",
    problem:
      "UMKM kuliner kesulitan menampilkan daftar menu yang up-to-date dan sering kehilangan pelanggan yang ingin memesan langsung melalui chat.",
    solution:
      "Merancang landing page berbobot ringan, SEO-friendly, dengan tombol order cepat via WhatsApp yang otomatis mengisi teks pesanan pelanggan.",
    role: "Frontend Developer & Designer",
    results: [
      "100% responsif di semua ukuran layar ponsel dan tablet",
      "Meningkatkan pesanan online harian UMKM sebesar 30%",
      "Ukuran bundel aset total di bawah 150KB untuk loading super cepat",
    ],
  },
  {
    slug: "sfcs",
    title: "SFCS",
    subtitle: "Sistem pengaduan fasilitas sekolah",
    year: "2026",
    stack: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js", "MySQL"],
    thumb: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80",
    live: "https://sfcs.smkn1probolinggo.sch.id",
    repo: "https://github.com/xDzaky/sfcs-app",
    summary:
      "Aplikasi berbasis web untuk pelaporan dan tracking perbaikan sarana prasarana sekolah secara transparan dan berjenjang.",
    problem:
      "Proses pelaporan fasilitas rusak di sekolah masih konvensional menggunakan kertas, lambat ditanggapi, dan tidak memiliki rekam jejak progres yang jelas.",
    solution:
      "Mengembangkan aplikasi sistem informasi manajemen komprehensif dengan role-based authentication (Siswa, Petugas Sarpras, Kepala Sekolah), notifikasi tiket, dan dashboard analitik.",
    role: "Fullstack Developer",
    results: [
      "Dipakai aktif oleh 1,200+ warga sekolah SMKN 1 Probolinggo",
      "Penyelesaian komplain sarana 3x lebih cepat dengan pelacakan status realtime",
      "Ekspor laporan bulanan otomatis format PDF dan Excel",
    ],
  },
  {
    slug: "solpay-web3",
    title: "SolPay Integration",
    subtitle: "Gateway pembayaran instan Web3 Solana",
    year: "2026",
    stack: ["React", "TypeScript", "Tailwind CSS", "Solana Web3.js"],
    thumb: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80",
    live: "https://solpay-demo.vercel.app",
    repo: "https://github.com/xDzaky/solpay-integration",
    summary:
      "Proof of concept pembayaran mikro instan dengan token SPL Solana, QR Code interaktif, dan validasi transaksi on-chain.",
    problem:
      "Biaya transaksi gateway pembayaran tradisional tinggi untuk transaksi mikro digital lintas negara.",
    solution:
      "Mengintegrasikan Solana Pay QR generation dengan verifikasi konfirmasi signature langsung di browser secara terdesentralisasi.",
    role: "Web3 Frontend Developer",
    results: [
      "Konfirmasi transaksi di bawah 1 detik dengan finalitas Solana",
      "Tanpa biaya potongan perantara (peer-to-peer)",
      "Mendukung Phantom dan Solflare wallet connector",
    ],
  },
];

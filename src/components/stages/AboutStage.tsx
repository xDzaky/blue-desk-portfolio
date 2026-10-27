// src/components/stages/AboutStage.tsx
import { Folder } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Sticker3D } from "../decor/Sticker3D";
import { Sparkle } from "../decor/Sparkle";
import { Tape } from "../decor/Tape";
import { IdCard } from "../about/IdCard";
import { profile } from "../../data/content";
import { tornBottom } from "../../lib/torn";
import { getSimpleIcon } from "../../lib/icons";

const TECH_TILES = [
  { name: "React", icon: "react", bg: "#23272f", color: "#61dafb" },
  { name: "Next.js", icon: "nextdotjs", bg: "#000000", color: "#ffffff" },
  { name: "Laravel", icon: "laravel", bg: "#ff2d20", color: "#ffffff" },
  { name: "Tailwind", icon: "tailwindcss", bg: "#0f172a", color: "#38bdf8" },
  { name: "MySQL", icon: "mysql", bg: "#00758f", color: "#ffffff" },
  { name: "TypeScript", icon: "typescript", bg: "#3178c6", color: "#ffffff" },
];

export function AboutStage() {
  const waUrl = `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <section
      id="about"
      aria-label="Tentang Saya"
      className="mat relative min-h-screen w-full flex items-center justify-center py-20 px-3 sm:px-6 overflow-hidden"
    >
      {/* 3D Folder peeking behind the wooden board top right (matching Sample Image 2) */}
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="absolute top-8 right-6 sm:right-16 z-[5] pointer-events-none"
      >
        <Sticker3D
          name="folder"
          size={180}
          rotate={18}
          fallback={Folder}
          className="scale-85 sm:scale-110 drop-shadow-xl"
        />
      </div>

      {/* Hand-drawn curved arrow doodle near top left of board */}
      <div
        aria-hidden="true"
        data-aos="fade-down"
        data-aos-delay="250"
        className="hidden md:block absolute top-16 left-16 z-20 pointer-events-none text-white/90"
      >
        <svg viewBox="0 0 70 70" className="w-14 h-14 stroke-current fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
          <path d="M 50 15 C 30 15, 15 30, 20 50" />
          <polyline points="10 40, 20 52, 32 44" />
        </svg>
      </div>

      {/* Sparkles */}
      <Sparkle
        color="#ff5aa5"
        size={24}
        withCircle
        className="absolute top-28 left-10 z-[5] hidden sm:block animate-pulse"
      />
      <Sparkle
        color="#ffc83d"
        size={22}
        className="absolute bottom-20 right-14 z-[5] animate-pulse"
      />

      {/* Main Wood Board Frame with rounded corners (Clipboard tray) */}
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="relative z-10 w-full max-w-[1140px] wood rounded-[32px] p-3 sm:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-4 border-wood-dark"
      >
        {/* Inside Spiral Notebook Grid Page with top holes and torn bottom */}
        <div
          style={{ clipPath: tornBottom("about-board-paper", 42, 2.6) }}
          className="paper-grid holes-top rounded-t-[20px] pt-12 pb-14 px-4 sm:px-8 md:px-10 border border-ink/15 relative"
        >
          {/* Main Content Layout: Left ID Card & Right Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* ===== LEFT COLUMN: LANYARD & ID CARD ===== */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="lg:col-span-4 flex justify-center -mt-8 sm:-mt-12 mb-24 lg:mb-24"
            >
              <IdCard
                photo={profile.photo}
                name={profile.name}
                role={profile.role}
                school={profile.school}
                major={profile.major}
                location={profile.location}
                status="OPEN FOR WORK"
              />
            </div>

            {/* ===== RIGHT COLUMN: ABOUT ME HEADER & TWO SUB-COLUMNS ===== */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              {/* Header: Title "ABOUT ME" in pixel font with white outline */}
              <div data-aos="fade-down" data-aos-delay="150" className="text-center lg:text-left mb-6">
                <h2 className="pixel-title text-4xl sm:text-6xl tracking-wide">
                  ABOUT ME
                </h2>
              </div>

              {/* Two sub-columns (Pengalaman & Tentang Saya / Skill) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Column 1: Pengalaman ▾ */}
                <div data-aos="fade-up" data-aos-delay="250" className="space-y-4">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-navy border-b border-ink/15 pb-1">
                    <span>PENGALAMAN</span>
                    <span className="text-[10px] text-pixel">▼</span>
                  </div>

                  {/* Experience Entry 1 */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
                      <span className="text-ink/70">2024.08 — 2026.01</span>
                      <span className="text-pink">Fullstack & API</span>
                    </div>
                    <p className="font-sans text-xs text-ink/80 leading-relaxed">
                      Membangun web application responsif, RESTful API Laravel, autentikasi terpusat, dan integrasi frontend Next.js App Router.
                    </p>
                  </div>

                  {/* Experience Entry 2 */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
                      <span className="text-ink/70">2023.11 — 2024.08</span>
                      <span className="text-pink">SMKN 1 Probolinggo</span>
                    </div>
                    <p className="font-sans text-xs text-ink/80 leading-relaxed">
                      Merancang Sistem Pengaduan Fasilitas Sekolah (SFCS) dengan pelacakan tiket perbaikan sarana secara transparan.
                    </p>
                  </div>

                  {/* Experience Entry 3 */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
                      <span className="text-ink/70">2023 — Sekarang</span>
                      <span className="text-pink">Freelance UMKM</span>
                    </div>
                    <p className="font-sans text-xs text-ink/80 leading-relaxed">
                      Membuat website company profile dan katalog kuliner UMKM terintegrasi pemesanan WhatsApp otomatis.
                    </p>
                  </div>
                </div>

                {/* Column 2: Tentang Saya ▾ & Keahlian Utama ▾ */}
                <div data-aos="fade-up" data-aos-delay="350" className="space-y-5">
                  {/* Tentang Saya ▾ */}
                  <div>
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-navy border-b border-ink/15 pb-1 mb-2">
                      <span>TENTANG SAYA</span>
                      <span className="text-[10px] text-pixel">▼</span>
                    </div>
                    <p className="font-sans text-xs text-ink/80 leading-relaxed">
                      Siswa kelas 12 jurusan RPL yang gemar merancang website rapi di antarmuka luar dan tangguh di logika server. Terbiasa bekerja dengan standar kode bersih, cepat beradaptasi, dan siap berkontribusi dalam project nyata.
                    </p>
                  </div>

                  {/* Keahlian Utama ▾ */}
                  <div>
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-navy border-b border-ink/15 pb-1 mb-2.5">
                      <span>KEAHLIAN UTAMA</span>
                      <span className="text-[10px] text-pixel">▼</span>
                    </div>

                    {/* 6 Square App Icon Tiles in ONE Single Neat Row (Sample Image 2) */}
                    <div className="grid grid-cols-6 gap-2 max-w-[280px] sm:max-w-[320px]">
                      {TECH_TILES.map((t) => {
                        const iconData = getSimpleIcon(t.icon);
                        return (
                          <div
                            key={t.name}
                            title={t.name}
                            className="aspect-square rounded-xl flex items-center justify-center border-2 border-navy/80 shadow-[2px_2px_0_#0f2a7a] transition-transform hover:-translate-y-1 cursor-pointer"
                            style={{ backgroundColor: t.bg }}
                          >
                            {iconData && (
                              <svg
                                viewBox="0 0 24 24"
                                className="size-5 sm:size-6 fill-current"
                                style={{ color: t.color }}
                                aria-hidden="true"
                              >
                                <path d={iconData.path} />
                              </svg>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: 4 Delicate Outline Pills + Taped QR Code */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mt-8 pt-4 border-t border-ink/15 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                {/* 3 Delicate Outline Pills in Center Bottom */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="rounded-full border border-pixel/60 bg-pixel/5 px-3 py-1 font-mono text-[10px] font-bold text-pixel uppercase">
                    UI/UX IMPLEMENTATION
                  </span>
                  <span className="rounded-full border border-pixel/60 bg-pixel/5 px-3 py-1 font-mono text-[10px] font-bold text-pixel uppercase">
                    WEB APPLICATION
                  </span>
                  <span className="rounded-full border border-pixel/60 bg-pixel/5 px-3 py-1 font-mono text-[10px] font-bold text-pixel uppercase">
                    FULLSTACK STACK
                  </span>
                </div>

                {/* Taped QR Note Card + Hand-drawn Arrow */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <div className="relative paper-shadow rotate-[3deg] transition-transform hover:rotate-0">
                    <Tape className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 !w-10 !h-3" />
                    <div className="bg-[#fff7d6] p-2.5 pt-3.5 rounded border border-[#e6a800] text-center shadow-sm">
                      <div className="bg-white p-1 rounded border border-ink/10">
                        <QRCodeSVG value={waUrl} size={64} fgColor="#0f2a7a" level="M" />
                      </div>
                    </div>
                  </div>

                  {/* Doodled curved arrow with scan text */}
                  <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-navy">
                    <svg viewBox="0 0 36 24" className="w-8 h-6 stroke-current fill-none stroke-[2] stroke-linecap-round">
                      <path d="M 2 12 Q 18 2, 32 10" strokeDasharray="3 3" />
                      <polyline points="26 6, 33 11, 26 16" />
                    </svg>
                    <span className="whitespace-nowrap">SCAN WA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

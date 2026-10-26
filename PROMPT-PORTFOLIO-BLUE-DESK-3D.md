# PROMPT: PORTFOLIO "BLUE DESK" (MEJA BIRU + STATIONERY 3D + KERTAS SOBEK + FONT PIXEL)

> Cara pakai: kirim file ini ke AI coding (Cursor, Cline, Windsurf, Copilot Agent, Claude Code, Gemini CLI, dll.)
> lalu tulis: **"Baca file ini dan implementasikan."**
> AI wajib langsung mengerjakan semuanya, tanpa bertanya.

Hasil akhir: website portfolio satu halaman panjang (plus halaman detail project) yang terlihat seperti
**meja belajar biru bergaris**, di atasnya ada **kertas sobek berlubang spiral**, **ID card dengan lanyard**,
**kartu project dijepit binder clip pink**, dan **alat tulis 3D mengilap** (folder, pensil, gunting, penggaris,
keyboard, clipboard). Judul memakai **font pixel biru dengan outline putih**.

---

## 0. PERINTAH UNTUK AI (WAJIB DIPATUHI)

1. Kerjakan semua bagian dokumen ini berurutan (bagian 14 = urutan kerja). Jangan bertanya desain, semuanya sudah diputuskan.
2. Jangan mengganti gaya. Dilarang membuat versi "bersih/minimal/modern generik". Desain ini sengaja ramai, berlapis, dan playful.
3. Jangan memakai gradient ungu, glassmorphism, glow, blur besar, atau kartu putih polos bersudut bulat ala template SaaS.
4. Pakai kode di bagian 5 sebagai dasar (CSS, util, komponen). Salin persis lalu kembangkan; jangan menulis ulang teknik yang sama dengan cara lain.
5. Jangan install library di luar bagian 3. Jangan memakai UI framework lain (MUI, Chakra, Bootstrap).
6. Semua teks, link, dan data ada di `src/data/*.ts` (bagian 9). Jangan menaruh teks konten di dalam komponen.
7. Semua gambar dekorasi memakai `alt=""` dan `aria-hidden="true"`. Dekorasi tidak boleh bisa difokus keyboard.
8. Jika sebuah aset 3D gagal diunduh, JANGAN berhenti: komponen `Sticker3D` (bagian 5.7) sudah punya fallback ikon.
9. Jangan mengarang data pribadi (nomor telepon, email, sertifikat, angka). Pakai placeholder `[ISI]` dan tampilkan daftar [ISI] di README.
10. Setelah selesai jalankan `pnpm build` dan perbaiki error tanpa mengubah tampilan. Laporkan hasil dan daftar [ISI] ke pengguna.

---

## 1. ANALISIS GAMBAR REFERENSI (APA YANG HARUS DITIRU)

Referensi berupa 3 "slide" bertema meja belajar biru:

**Slide 1: COVER**
- Latar: matras biru (#2f67e8) dengan grid putih transparan, jahitan putus-putus di tepi dalam. Strip kayu di tepi atas dan bawah.
- Tengah: selembar kertas kusut berwarna krem dengan lipatan halus, tepi atas ada lubang spiral (11 lubang), tepi bawah sobek tidak rata.
- Judul "PORT/FOLIO" dua baris bertingkat, font pixel biru, outline putih tebal, bayangan navy keras. Angka "2026" pink miring di kiri bawah judul, teks kecil pink di kanan atas judul.
- Kotak seleksi tipis biru dengan 8 pegangan kotak kecil di sekeliling judul (seperti seleksi di Figma).
- Dekorasi 3D: keyboard (atas, menimpa tepi kertas), penggaris segitiga kuning (kiri atas), penggaris biru (kanan atas), folder kuning terbuka (kiri judul), pensil (kiri bawah, diagonal), clipboard "NOTE" (kanan), gunting (kanan bawah), kursor panah kuning (ujung judul), jangka (pojok kanan bawah), binder clip pink (kanan atas kertas), sparkle/bintang kecil biru dan pink.
- Kiri bawah kertas: 4 tag kecil.
- Dock bawah di strip kayu: label peran di kiri (pill bergaris emas) + 5 pill navigasi putus-putus.

**Slide 2: ABOUT ME**
- Papan kayu berbingkai (sudut membulat) mengelilingi halaman buku catatan kotak-kotak (grid paper) dengan tepi atas sobek berlubang spiral.
- Kiri: ID card kuning tergantung lanyard (tali kuning dengan klip), foto di dalam bingkai putih. Di bawah/overlap kartu: secarik kertas sobek berisi data singkat (nama, sekolah, jurusan, kontak).
- Kanan: judul pixel "ABOUT ME" biru. Dua kolom: "Pengalaman" (tanggal pink + judul + deskripsi kecil) dan "Penilaian diri / Tentang saya". Di bawahnya "Skill" berupa 6 ikon aplikasi bersudut bulat.
- Kanan bawah: kertas sobek berisi QR code + teks "scan untuk hubungi" bertape.
- Baris pill outline di bawah halaman. Folder 3D kuning mengintip dari belakang bingkai kanan atas.

**Slide 3: CONTENTS**
- Judul pixel "CONTENTS" + panah ">>>" putih bergaris.
- 4 kartu kertas miring (rotasi -4, -2, 3, 5 derajat) berposisi naik-turun, masing-masing dijepit binder clip pink, tepi kiri berlubang spiral, isi: thumbnail project, nomor besar "01" abu-abu pixel, judul, subjudul.
- Kursor panah kuning besar di kiri bawah, jangka di kanan bawah, keyboard dan penggaris menyembul di pojok atas.

Yang harus ADA di versi web (tambahan agar "lebih kompleks"): slide Skills, slide Journey/Pengalaman, slide Sertifikat, slide Layanan, slide Contact, halaman detail project, 404.

---

## 2. SITE MAP

Routing React Router:
- `/` : Home berisi 8 "stage" (section) berurutan: Cover, About, Skills, Journey, Works (Contents), Certificates, Services, Contact
- `/works/:slug` : detail project (buku catatan terbuka)
- `*` : 404 (kertas sobek + kursor panah)

Navigasi: dock tetap di bawah (strip kayu) dengan pill: HOME, ABOUT, SKILLS, WORKS, CONTACT. Scroll-spy menandai pill aktif.

---

## 3. STACK DAN INSTALL

React 19 + Vite + TypeScript, Tailwind CSS v4, React Router, Motion (`motion/react`), react-hook-form + zod, sonner, lucide-react, simple-icons, qrcode.react, Fontsource.

```bash
pnpm create vite@latest blue-desk-portfolio --template react-ts
cd blue-desk-portfolio
pnpm add react-router-dom motion lucide-react simple-icons qrcode.react react-hook-form zod @hookform/resolvers sonner clsx tailwind-merge
pnpm add @fontsource/jersey-10 @fontsource/pixelify-sans @fontsource/space-mono @fontsource/inter @fontsource/gochi-hand
pnpm add -D tailwindcss @tailwindcss/vite
```
Konfigurasi Tailwind v4: tambahkan plugin `@tailwindcss/vite` di `vite.config.ts`, dan `@import "tailwindcss";` di `src/index.css`.
Cek versi paket terbaru sebelum install. Tidak memakai GSAP, Three.js, atau WebGL (sengaja, agar ringan di laptop berspek rendah).

Skrip aset 3D (bagian 6) ditambahkan ke `package.json`: `"assets": "node scripts/fetch-assets.mjs"`. Jalankan `pnpm assets` sekali setelah install.

---

## 4. ART DIRECTION DAN DESIGN TOKENS

Konsep: **meja kerja siswa kreatif**. Objek nyata (kertas, kayu, plastik, karet) dengan bayangan keras, bukan UI datar.
Aturan bayangan: bayangan keras tanpa blur untuk elemen UI (`4px 4px 0 navy`), bayangan lembut `drop-shadow` HANYA untuk kertas besar (maksimal 3 sekaligus di layar).

```css
/* src/index.css */
@import "tailwindcss";
@import "@fontsource/jersey-10";
@import "@fontsource/pixelify-sans/600.css";
@import "@fontsource/space-mono/400.css";
@import "@fontsource/space-mono/700.css";
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/600.css";
@import "@fontsource/gochi-hand";

@theme {
  --color-mat: #2f67e8;
  --color-mat-deep: #2455c9;
  --color-mat-line: #6f98f5;
  --color-wood: #8a5b34;
  --color-wood-dark: #5e3a1e;
  --color-paper: #f4f0e4;
  --color-paper-grid: #cfd8e8;
  --color-ink: #14213d;
  --color-navy: #0f2a7a;
  --color-pixel: #2b62f0;
  --color-pink: #ff5aa5;
  --color-yellow: #ffc83d;
  --color-yellow-deep: #e6a800;
  --color-cream: #fff7d6;
  --font-pixel: "Jersey 10", "Pixelify Sans", ui-monospace, monospace;
  --font-pixel-alt: "Pixelify Sans", "Jersey 10", ui-monospace, monospace;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-hand: "Gochi Hand", "Comic Sans MS", cursive;
}

html { scroll-behavior: smooth; background: var(--color-mat-deep); }
body { font-family: var(--font-sans); color: var(--color-ink); }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
```

Tipografi:
- Judul besar: `font-pixel`, uppercase, `line-height: .85`, ukuran `clamp(64px, 13vw, 190px)` untuk COVER; `clamp(44px, 7vw, 96px)` untuk judul section.
- Label, tag, tanggal, nav: `font-mono` 11-12px, uppercase, `letter-spacing: .14em`.
- Teks isi: `font-sans` 14-16px, line-height 1.6, warna `ink`.
- Catatan tulisan tangan kecil: `font-hand` minimal 18px (jangan untuk paragraf panjang).
- Maksimal 4 font. Dilarang menambah font.

Palet: biru matras mendominasi latar (±55%), krem kertas (±30%), kayu (±8%), aksen pink/kuning (±7%). Pink hanya untuk teks besar, binder clip, dan sticker kecil (kontras pink di atas krem rendah untuk teks kecil).

---

## 5. KODE INTI (SALIN PERSIS, LALU PAKAI)

### 5.1 Matras biru bergrid + jahitan

```css
.mat {
  position: relative;
  background-color: var(--color-mat);
  background-image:
    linear-gradient(rgba(255,255,255,.28) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.28) 1px, transparent 1px),
    linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px);
  background-size: 64px 64px, 64px 64px, 16px 16px, 16px 16px;
}
.mat::after { /* jahitan putus-putus di tepi dalam */
  content: ""; position: absolute; inset: 14px; pointer-events: none;
  border: 2px dashed rgba(255,255,255,.55); border-radius: 18px;
}
```

### 5.2 Kayu (strip dan bingkai), tanpa gambar

```css
.wood {
  background-color: var(--color-wood);
  background-image:
    repeating-linear-gradient(92deg, rgba(0,0,0,.10) 0 2px, transparent 2px 9px),
    repeating-linear-gradient(88deg, rgba(255,255,255,.06) 0 1px, transparent 1px 13px),
    linear-gradient(180deg, rgba(255,255,255,.14), rgba(0,0,0,.20));
  box-shadow: inset 0 -3px 0 rgba(0,0,0,.25), inset 0 2px 0 rgba(255,255,255,.12);
}
```
Opsional peningkatan: ganti dengan foto tekstur kayu CC0 (Poly Haven / ambientCG, lihat bagian 7), kompres ke WebP 1024px, `background-size: 512px`.

### 5.3 Kertas kotak-kotak (grid paper) dan kertas polos

```css
.paper { background-color: var(--color-paper); }
.paper-grid {
  background-color: var(--color-paper);
  background-image:
    linear-gradient(var(--color-paper-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-paper-grid) 1px, transparent 1px);
  background-size: 22px 22px;
}
.paper-crease { /* lipatan halus pada kertas kusut cover */
  background-image:
    linear-gradient(90deg, transparent 32%, rgba(0,0,0,.05) 33%, rgba(255,255,255,.35) 34%, transparent 36%),
    linear-gradient(0deg, transparent 48%, rgba(0,0,0,.05) 49%, rgba(255,255,255,.3) 50%, transparent 52%);
}
```

### 5.4 Lubang spiral di tepi atas (mask)

Penting: `mask` memotong `box-shadow`, jadi bungkus elemen dengan wrapper yang memakai `filter: drop-shadow(...)`.

```css
.holes-top {
  -webkit-mask:
    radial-gradient(circle at 50% 14px, transparent 0 6px, #000 6.5px) 0 0 / 36px 28px repeat-x,
    linear-gradient(#000, #000) 0 28px / 100% calc(100% - 28px) no-repeat;
          mask:
    radial-gradient(circle at 50% 14px, transparent 0 6px, #000 6.5px) 0 0 / 36px 28px repeat-x,
    linear-gradient(#000, #000) 0 28px / 100% calc(100% - 28px) no-repeat;
}
.holes-left { /* untuk kartu project: lubang di sisi kiri */
  -webkit-mask:
    radial-gradient(circle at 14px 50%, transparent 0 6px, #000 6.5px) 0 0 / 28px 36px repeat-y,
    linear-gradient(#000, #000) 28px 0 / calc(100% - 28px) 100% no-repeat;
          mask:
    radial-gradient(circle at 14px 50%, transparent 0 6px, #000 6.5px) 0 0 / 28px 36px repeat-y,
    linear-gradient(#000, #000) 28px 0 / calc(100% - 28px) 100% no-repeat;
}
.paper-shadow { filter: drop-shadow(0 6px 0 rgba(15,42,122,.35)) drop-shadow(0 14px 14px rgba(0,0,0,.18)); }
```

### 5.5 Tepi sobek acak (deterministik)

```ts
// src/lib/torn.ts
function hash(s: string) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function mulberry32(a: number) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/** clip-path polygon: tepi BAWAH sobek. amp = kedalaman sobekan dalam persen tinggi elemen. */
export function tornBottom(seed: string, steps = 34, amp = 2.2): string {
  const r = mulberry32(hash(seed));
  const pts: string[] = ["0% 0%", "100% 0%"];
  for (let i = 0; i <= steps; i++) {
    const x = 100 - (i / steps) * 100;
    const y = 100 - r() * amp;
    pts.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  return `polygon(${pts.join(",")})`;
}

/** rotasi deterministik dalam rentang [-max, max] derajat */
export function seededRotation(seed: string, max = 4): number {
  const r = mulberry32(hash(seed))();
  return +((r * 2 - 1) * max).toFixed(2);
}
```
Pakai: `style={{ clipPath: tornBottom("cover") }}` pada elemen kertas. Jangan memanggil `Math.random()` di render.

### 5.6 Judul pixel dengan outline putih

Outline memakai `text-shadow` 8 arah (jalan di semua browser), bukan `-webkit-text-stroke`.

```css
.pixel-title {
  font-family: var(--font-pixel);
  color: var(--color-pixel);
  text-transform: uppercase;
  line-height: .85;
  letter-spacing: .02em;
  --o: 3px;
  text-shadow:
    calc(var(--o) * -1) calc(var(--o) * -1) 0 #fff, 0 calc(var(--o) * -1) 0 #fff, var(--o) calc(var(--o) * -1) 0 #fff,
    calc(var(--o) * -1) 0 0 #fff, var(--o) 0 0 #fff,
    calc(var(--o) * -1) var(--o) 0 #fff, 0 var(--o) 0 #fff, var(--o) var(--o) 0 #fff,
    calc(var(--o) + 3px) calc(var(--o) + 4px) 0 var(--color-navy);
}
.pixel-title--pink { color: var(--color-pink); --o: 2px; }
.pixel-title--gray { color: #b9bfcc; text-shadow: none; } /* nomor besar di kartu project */
```
Animasi muncul bergaya pixel: `clip-path` + `steps()`:
```css
@keyframes pixel-in { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
.pixel-in { animation: pixel-in .9s steps(12, end) both; }
@media (prefers-reduced-motion: reduce) { .pixel-in { animation: none; } }
```

### 5.7 Komponen aset 3D dengan fallback

```tsx
// src/components/decor/Sticker3D.tsx
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

type Props = { name: string; size?: number; rotate?: number; className?: string; fallback: LucideIcon };

export function Sticker3D({ name, size = 120, rotate = 0, className = "", fallback: Fallback }: Props) {
  const [failed, setFailed] = useState(false);
  const style = { width: size, height: size, transform: `rotate(${rotate}deg)` };
  if (failed) {
    return (
      <span aria-hidden="true" style={style}
        className={`grid place-items-center rounded-2xl bg-yellow text-ink shadow-[4px_4px_0_#0f2a7a] ${className}`}>
        <Fallback size={size * 0.5} strokeWidth={2.2} />
      </span>
    );
  }
  return (
    <img src={`/assets/3d/${name}.png`} alt="" aria-hidden="true" width={size} height={size}
      loading="lazy" decoding="async" draggable={false} onError={() => setFailed(true)}
      style={style} className={`select-none pointer-events-none drop-shadow-[0_8px_6px_rgba(15,42,122,.35)] ${className}`} />
  );
}
```

### 5.8 Binder clip pink (SVG buatan sendiri)

```tsx
// src/components/decor/BinderClip.tsx
export function BinderClip({ color = "#ff5aa5", className = "" }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 74" className={className} aria-hidden="true">
      <path d="M13 30 C4 14 12 2 32 2 C52 2 60 14 51 30" fill="none" stroke="#cdd2dc" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M12 28 H52 L59 68 H5 Z" fill={color} />
      <path d="M12 28 H52 L54 42 H10 Z" fill="rgba(255,255,255,.30)" />
      <path d="M5 68 H59" stroke="rgba(0,0,0,.20)" strokeWidth="3" />
    </svg>
  );
}
```

### 5.9 Kursor panah kuning dekoratif

```tsx
// src/components/decor/CursorArrow.tsx
export function CursorArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cursorG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe27a" /><stop offset="1" stopColor="#f2a900" />
        </linearGradient>
      </defs>
      <path d="M5 3 L5 36 L13 29 L19 43 L26 40 L20 27 L31 26 Z" fill="url(#cursorG)" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <path d="M8 9 L8 27 L12 23" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
```

### 5.10 Kotak seleksi dengan pegangan (dekor judul cover)

```tsx
// src/components/decor/SelectionBox.tsx
export function SelectionBox({ children }: { children: React.ReactNode }) {
  const h = "absolute size-2.5 border border-[#3b82f6] bg-white";
  return (
    <div className="relative inline-block border border-[#3b82f6] p-4 sm:p-8">
      {[ "-left-[5px] -top-[5px]", "left-1/2 -top-[5px] -translate-x-1/2", "-right-[5px] -top-[5px]",
         "-left-[5px] top-1/2 -translate-y-1/2", "-right-[5px] top-1/2 -translate-y-1/2",
         "-left-[5px] -bottom-[5px]", "left-1/2 -bottom-[5px] -translate-x-1/2", "-right-[5px] -bottom-[5px]" ]
        .map((p) => <span key={p} aria-hidden="true" className={`${h} ${p}`} />)}
      {children}
    </div>
  );
}
```

### 5.11 Pill navigasi putus-putus

```css
.pill {
  display: inline-flex; align-items: center; gap: .4rem;
  border: 1.5px dashed var(--color-yellow); border-radius: 999px;
  padding: 7px 16px; color: #fff; background: rgba(15,42,122,.45);
  font: 700 11px/1 var(--font-mono); letter-spacing: .14em; text-transform: uppercase;
  transition: transform .15s, background .15s;
}
.pill:hover { transform: translateY(-2px) rotate(-1.5deg); background: rgba(15,42,122,.7); }
.pill:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
.pill[aria-current="true"] { background: var(--color-yellow); color: var(--color-ink); border-style: solid; }
.pill--paper { color: var(--color-ink); background: transparent; border-color: var(--color-pixel); } /* pill di atas kertas */
```

### 5.12 ID card dengan lanyard (ayunan)

```tsx
// src/components/about/IdCard.tsx
import { motion, useReducedMotion } from "motion/react";

export function IdCard({ photo, name, role }: { photo: string; name: string; role: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div style={{ transformOrigin: "50% 0%" }} className="relative w-[230px]"
      initial={{ rotate: reduce ? 0 : 8 }}
      whileInView={reduce ? undefined : { rotate: [8, -5, 3, -1.5, 0] }}
      viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeOut" }}
      whileHover={reduce ? undefined : { rotate: [0, 3, -2, 0], transition: { duration: .8 } }}>
      <div aria-hidden="true" className="mx-auto h-24 w-6 bg-yellow shadow-[2px_0_0_rgba(0,0,0,.15)]" />
      <div aria-hidden="true" className="mx-auto -mt-1 h-5 w-10 rounded-sm bg-[#c9ced8]" />
      <div className="rounded-3xl bg-yellow p-4 shadow-[6px_6px_0_#0f2a7a]">
        <div className="mx-auto mb-3 h-2 w-14 rounded-full bg-yellow-deep/60" aria-hidden="true" />
        <img src={photo} alt={`Foto ${name}`} className="aspect-[3/4] w-full rounded-2xl border-4 border-white object-cover" />
        <p className="mt-3 text-center font-mono text-[11px] font-bold uppercase tracking-[.14em]">{name}</p>
        <p className="text-center font-hand text-lg leading-none">{role}</p>
      </div>
    </motion.div>
  );
}
```

### 5.13 Kartu project (kertas dijepit binder clip)

```tsx
// src/components/works/WorkCard.tsx
import { Link } from "react-router-dom";
import { BinderClip } from "../decor/BinderClip";
import { seededRotation } from "../../lib/torn";

export function WorkCard({ index, slug, title, subtitle, thumb }: { index: number; slug: string; title: string; subtitle: string; thumb?: string }) {
  const rot = seededRotation(slug, 5);
  const lift = [0, -28, 12, -16][index % 4]; // naik-turun seperti referensi
  return (
    <Link to={`/works/${slug}`} aria-label={`Lihat project ${title}`}
      className="group relative block w-[240px] shrink-0 transition-transform duration-300 hover:z-20 hover:-translate-y-3 hover:rotate-0 focus-visible:outline-4 focus-visible:outline-white"
      style={{ transform: `translateY(${lift}px) rotate(${rot}deg)` }}>
      <BinderClip className="absolute -top-8 left-1/2 z-10 w-12 -translate-x-1/2 transition-transform group-hover:-rotate-6" />
      <div className="paper-shadow">
        <div className="paper holes-left min-h-[320px] pl-9 pr-4 pb-5 pt-8">
          <div className="aspect-[4/3] overflow-hidden rounded-md border border-ink/10 bg-white">
            {thumb ? <img src={thumb} alt="" loading="lazy" className="size-full object-cover" /> : <ThumbPlaceholder title={title} />}
          </div>
          <p className="pixel-title pixel-title--gray mt-3 text-5xl">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-1 font-sans text-base font-semibold leading-tight">{title}</h3>
          <p className="mt-1 text-xs text-ink/60">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function ThumbPlaceholder({ title }: { title: string }) {
  return (
    <div className="grid size-full place-items-center bg-[repeating-linear-gradient(45deg,#e8eefc_0_10px,#fff_10px_20px)] p-3 text-center font-mono text-[10px] uppercase tracking-widest text-ink/60">
      {title}
    </div>
  );
}
```
Di mobile (<768px): kartu berjajar horizontal dengan `overflow-x-auto snap-x snap-mandatory` (tanpa library carousel), `lift` dan rotasi dikurangi setengah.

---

## 6. ASET: SUMBER, LISENSI, DAN CARA MENDAPATKAN

Semua sumber di bawah dicek lisensinya. Aset TIDAK ikut di dokumen ini; diunduh oleh skrip atau manual. Lisensi CC0/MIT mengizinkan pemakaian komersial.

| Kebutuhan | Sumber | Lisensi | Cara |
|---|---|---|---|
| Alat tulis 3D mengilap (folder, pensil, gunting, penggaris, keyboard, clipboard, pushpin, dll.) | Microsoft Fluent Emoji gaya 3D (via CDN jsDelivr repo `shuding/fluentui-emoji-unicode`, penamaan `<unicode>_3d.png`) | MIT (wajib cantumkan notice, lihat 6.3) | Skrip `scripts/fetch-assets.mjs` (6.1) |
| Ikon 3D tambahan (alternatif/pelengkap) | 3dicons.co oleh Vijay Verma, 1440+ ikon, PNG | CC0 | Unduh manual bila perlu, taruh di `public/assets/3d/` |
| Tekstur kayu/kertas asli (opsional) | Poly Haven, ambientCG | CC0 | Unduh manual, kompres WebP |
| Ikon brand teknologi | `simple-icons` (npm) | CC0 untuk ikonnya; logo tetap merek pemiliknya | Import path SVG |
| QR Code | `qrcode.react` (komponen `QRCodeSVG`) | ISC | npm |
| Font pixel dan lainnya | Fontsource (Jersey 10, Pixelify Sans, Space Mono, Inter, Gochi Hand) | OFL | npm |

Tidak ada aset 3D untuk: kursor panah, binder clip, jangka, lanyard, bintang/sparkle. Semua itu dibuat sendiri sebagai SVG (bagian 5.8, 5.9, 5.12, 6.4).

### 6.1 Skrip unduh aset 3D

```js
// scripts/fetch-assets.mjs  (Node 20+, butuh internet; jalankan: pnpm assets)
import { mkdir, writeFile } from "node:fs/promises";

const BASE = "https://cdn.jsdelivr.net/gh/shuding/fluentui-emoji-unicode/assets/";
const ITEMS = {
  "folder-open": "1f4c2", "folder": "1f4c1", "pencil": "270f", "pen": "1f58a", "scissors": "2702",
  "ruler-straight": "1f4cf", "ruler-triangle": "1f4d0", "memo": "1f4dd", "clipboard": "1f4cb",
  "keyboard": "2328", "pushpin": "1f4cc", "paperclip": "1f4ce", "mouse": "1f5b1", "laptop": "1f4bb",
  "bulb": "1f4a1", "rocket": "1f680", "trophy": "1f3c6", "books": "1f4da", "palette": "1f3a8",
  "bookmark": "1f516", "envelope": "2709", "puzzle": "1f9e9", "star": "2b50", "graduation": "1f393",
};

await mkdir("public/assets/3d", { recursive: true });
const failed = []; let ok = 0;
for (const [name, hex] of Object.entries(ITEMS)) {
  let done = false;
  for (const file of [`${hex}_3d.png`, `${hex}-fe0f_3d.png`]) {
    try {
      const res = await fetch(BASE + file);
      if (res.ok) { await writeFile(`public/assets/3d/${name}.png`, Buffer.from(await res.arrayBuffer())); ok++; done = true; break; }
    } catch { /* coba kandidat berikutnya */ }
  }
  if (!done) failed.push(name);
}
console.log(`Selesai: ${ok}/${Object.keys(ITEMS).length} aset.`);
if (failed.length) console.log("Gagal (akan memakai fallback ikon):", failed.join(", "));
```
Jika internet tidak ada atau ada yang gagal, lanjutkan: `Sticker3D` otomatis memakai ikon Lucide sebagai fallback. Jangan berhenti dan jangan membuat aset palsu.
Ukuran PNG sekitar 256px: jangan ditampilkan lebih dari ±200px agar tidak buram.

### 6.2 Pemetaan aset ke dekorasi

| Dekorasi di referensi | Aset (`name`) | Fallback Lucide |
|---|---|---|
| Keyboard atas | `keyboard` | `Keyboard` |
| Penggaris segitiga kuning | `ruler-triangle` | `Triangle` |
| Penggaris biru | `ruler-straight` | `Ruler` |
| Folder kuning terbuka | `folder-open` | `FolderOpen` |
| Pensil diagonal | `pencil` | `Pencil` |
| Clipboard "NOTE" | `clipboard` | `ClipboardList` |
| Gunting | `scissors` | `Scissors` |
| Mouse | `mouse` | `Mouse` |
| Jangka | SVG buatan (6.4) | - |
| Skill / Journey / Sertifikat | `laptop`, `bulb`, `rocket`, `trophy`, `graduation`, `books`, `star` | ikon Lucide sepadan |

### 6.3 File kredit (WAJIB dibuat)

Buat `public/CREDITS.md` dan halaman kecil di footer ("Kredit") berisi:
- Fluent Emoji © Microsoft Corporation, lisensi MIT (sertakan teks lisensi MIT lengkap dari repo `microsoft/fluentui-emoji`).
- Font: Jersey 10, Pixelify Sans, Space Mono, Inter, Gochi Hand (SIL OFL) via Fontsource.
- Ikon brand: Simple Icons (CC0); nama dan logo merek milik masing-masing pemilik.
- Jika memakai 3dicons.co / Poly Haven / ambientCG: sebutkan sebagai ucapan terima kasih (CC0, tidak wajib).

### 6.4 Jangka (compass) dan sparkle (SVG sendiri)

Buat `src/components/decor/Compass.tsx` (dua kaki jangka logam silang + engsel bulat, warna kuning/abu) dan `Sparkle.tsx`
(bintang 4 sudut: `path d="M12 0 L14.6 9.4 L24 12 L14.6 14.6 L12 24 L9.4 14.6 L0 12 L9.4 9.4 Z"`, warna biru atau pink, ukuran 14-28px, kadang di dalam lingkaran putih kecil seperti sticker di referensi).

---

## 7. REFERENSI TAMBAHAN UNTUK DIGALI AI (OPSIONAL)

- Tekstur kayu dan kertas CC0: Poly Haven (polyhaven.com), ambientCG (ambientcg.com). Pilih "wood plank" warna cokelat madu dan "paper/cardboard" krem. Kompres ke WebP ≤150KB.
- Pencarian inspirasi (kata kunci): "3D stationery desk portfolio", "scrapbook portfolio website", "pixel title portfolio", "notebook paper torn edge CSS", "binder clip card UI".
- Pelajari prinsip, jangan menyalin pixel-per-pixel karya orang lain. Jangan memakai gambar dari referensi pengguna sebagai aset situs.

---

## 8. LAYOUT PER STAGE (SECTION)

Semua stage: `min-height: clamp(640px, 100svh, 900px)`, lebar konten maksimal 1280px, `overflow: clip`, `position: relative`.
Z-index: mat 0, dekor belakang 5, kertas 10, dekor depan 20, UI 30, dock 60.

**Frame halaman:** strip kayu atas setinggi 22px di seluruh lebar (`.wood`), dock kayu fixed di bawah setinggi 64px berisi: kiri pill label peran (`FULLSTACK WEB DEVELOPER`, border emas solid), tengah 5 pill nav, kanan teks domain mono kecil putih. Di mobile: label kiri disembunyikan, pill bisa digeser horizontal.

### Stage 1: COVER (`id="home"`, latar `.mat`)
- Kertas kusut: lebar 78% (max 1000px), tinggi ±62%, di tengah. Kelas: `paper paper-crease holes-top`, `clipPath: tornBottom("cover")`, dibungkus `.paper-shadow`.
- `SelectionBox` berisi judul dua baris: "PORT" (rata kiri) dan "FOLIO" (menjorok ke kanan 10%). `pixel-title`, animasi `pixel-in`.
- "2026" pink (`pixel-title--pink`), rotasi -12°, kiri bawah judul. Teks kecil pink "KARYA & PROJECT" kanan atas judul.
- Tag kiri bawah kertas (4 baris mono kecil): `WEB DEVELOPMENT`, `FULLSTACK APP`, `UI IMPLEMENTATION`, `DEPLOYMENT & SEO`.
- Nama pemilik di bawah judul (mono kecil) + tombol hitam "LIHAT PROJECT" dan outline "HUBUNGI AKU".
- Dekor (posisi relatif ke stage): keyboard `top:-2% left:30% w:340`, ruler-triangle `top:0 left:2% w:150 rot:-12`, ruler-straight `top:2% right:2% w:170 rot:35`, folder-open `left:12% top:30% w:190 rot:-8`, pencil `left:4% bottom:8% w:220 rot:-35`, clipboard `right:5% top:20% w:150 rot:8` (klik membuka dialog catatan cepat, bagian 10), scissors `right:10% bottom:12% w:140 rot:20`, Compass `right:1% bottom:2% w:110`, CursorArrow `left:60% top:48% w:56` (berkedip klik tiap 4 detik), BinderClip pink di pojok kanan atas kertas, 4-6 Sparkle tersebar.
- Mobile: tampilkan hanya keyboard, folder, pencil, clipboard dan 2 sparkle. Judul tetap 2 baris.

### Stage 2: ABOUT ME (`id="about"`, latar `.mat`)
- Bingkai kayu `.wood` membulat 28px, padding 22px, di dalamnya halaman `.paper-grid holes-top` (tepi bawah membulat).
- Kolom kiri (±34%): `IdCard` (foto, nama, role). Di bawah dan menimpa sebagian kartu: kertas sobek kecil (`tornBottom`, rotasi -3°) berisi 4 baris: Nama, Sekolah/Kampus `[ISI]`, Jurusan `[ISI]`, Lokasi, Email `[ISI]`. Tape kuning tipis di atasnya.
- Kolom kanan: judul pixel "ABOUT ME". Dua sub-kolom:
  - "Pengalaman" (judul kecil berpanah biru). Tiap entri: tanggal mono pink, judul tebal, 2 baris deskripsi.
  - "Tentang Saya": paragraf 4-5 kalimat.
  - Di bawahnya "Skill Utama": 6 tile ikon aplikasi (56px, sudut 14px, bayangan keras) memakai ikon Simple Icons di atas tile berwarna.
- Kanan bawah: kertas sobek kecil bertape berisi QR code (`QRCodeSVG`, 96px, fg navy) mengarah ke WhatsApp/URL kontak `[ISI]`, teks "SCAN UNTUK HUBUNGI".
- Baris bawah: 4 pill `.pill--paper` (mis. "FRONTEND", "BACKEND", "DATABASE", "DEPLOY").
- Dekor: folder 3D mengintip dari belakang bingkai kanan atas (z 5), sparkle, bintang di sticker lingkaran putih.
- Mobile: kolom jadi satu; IdCard di atas; QR di bawah.

### Stage 3: SKILLS (`id="skills"`, latar `.mat`) — "Toolbox"
- Judul pixel "TOOLBOX" kiri atas.
- 4 kartu kertas (`paper`, rotasi kecil, dipasang pushpin 3D `pushpin` di atas): Frontend, Backend, Database, Tools. Tiap kartu berisi grid tile ikon (Simple Icons) + nama kecil mono.
- Hover tile: naik 4px, tooltip kecil level/pengalaman `[ISI]`.
- Strip "SEDANG DIPELAJARI": 3-4 name tag kuning miring dengan tape.
- Baris statistik (hanya angka nyata `[ISI]`): "PROJECT", "SERTIFIKAT", "TAHUN BELAJAR" berupa 3 tag sobek dengan angka pixel besar.
- Dekor: laptop 3D, bulb 3D, mouse 3D, sparkle.

### Stage 4: JOURNEY (`id="journey"`, latar `.paper-grid` penuh dalam bingkai kayu seperti About)
- Judul "JOURNEY". Timeline vertikal: garis putus-putus biru di tengah, titik berupa sticker bulat berikon 3D (graduation, trophy, rocket, books) bergantian kiri-kanan.
- Tiap entri: kertas sobek kecil (tanggal pink, judul, deskripsi 2 baris). Muncul saat scroll dengan efek "ditempel" (translateY 16px + rotasi kecil ke posisi akhir).
- Isi dari `data/journey.ts` (bagian 9). Jangan mengarang riwayat.

### Stage 5: WORKS / CONTENTS (`id="works"`, latar `.mat`)
- Judul `pixel-title` "CONTENTS" + `>>>` putih bergaris (3 chevron Lucide dengan stroke putih tebal, animasi bergeser pelan).
- Baris 4 `WorkCard` (bagian 5.13) naik-turun. Jika project > 4: baris kedua atau tombol "LIHAT SEMUA" ke daftar.
- Dekor: CursorArrow besar kiri bawah, Compass kanan bawah, keyboard dan penggaris menyembul dari atas, sparkle.
- Hover kartu: lurus (rotate 0), naik 12px, binder clip bergoyang. Klik: navigasi ke `/works/:slug` dengan transisi fade 250ms.

### Stage 6: CERTIFICATES (`id="certificates"`, latar `.mat`)
- Judul "SERTIFIKAT". Kipas 5-7 kartu tiket/sertifikat (kertas sobek berbentuk tiket dengan takik di sisi) ditumpuk melengkung, dijepit satu `paperclip` 3D besar.
- Klik kartu membuka dialog memakai elemen `<dialog>` native (tanpa library tambahan) berisi gambar besar, judul, penerbit, tahun. Tombol tutup dan Escape berfungsi, fokus terjebak di dialog.
- Jika belum ada gambar sertifikat: tampilkan placeholder bergaris + `[ISI]`.

### Stage 7: SERVICES (`id="services"`, latar `.mat`)
- Judul "LAYANAN". 3 sticky note (cream, sudut kanan bawah terlipat via `clip-path`) berisi: nama layanan, 3 poin, tombol "TANYA VIA WHATSAPP" (link `wa.me/[ISI]` dengan teks terisi otomatis).
- Layanan contoh: Website Company Profile / UMKM, Web App Fullstack, Website Jadi Siap Pakai (Store). Harga hanya jika diisi pemilik `[ISI]`.

### Stage 8: CONTACT (`id="contact"`, latar `.mat`)
- Judul "LET'S TALK" + smiley kuning besar (SVG) atau envelope 3D.
- Sticky note besar berisi form: nama, kontak (email/WhatsApp), pesan. `react-hook-form` + `zod`, pesan error ramah berbahasa Indonesia, toast `sonner`.
- Pengiriman: layanan form `[ISI]` (Formspree / Web3Forms), fallback tombol WhatsApp dan mailto. Honeypot anti-spam. Jangan menaruh API key rahasia di kode klien.
- Kanan: kertas QR (sama seperti About) dan baris ikon sosial berupa tile bulat (GitHub, LinkedIn, Instagram, WhatsApp) `[ISI URL]`.
- Footer di atas dock: "© 2026 [Nama]" + link "Kredit".

### Halaman detail `/works/:slug`
- Buku catatan terbuka (dua halaman `.paper-grid`, lipatan tengah gelap tipis di tengah, spiral di tengah).
- Halaman kiri: nomor pixel besar abu-abu, judul pixel biru, tanggal, tag stack, ringkasan masalah, solusi, peran, hasil (hanya angka nyata).
- Halaman kanan: 2-3 gambar polaroid bertape (atau placeholder), tombol "LIVE SITE" dan "SOURCE CODE" bila ada.
- Bawah: bookmark pink "SEBELUMNYA" dan "BERIKUTNYA" (bentuk pita dengan takik V), tombol kembali berbentuk CursorArrow.

### 404
Kertas sobek di tengah matras, teks pixel "404", kalimat "halaman ini terselip entah di mana", tombol kembali ke Home, CursorArrow yang menunjuk tombol.

---

## 9. DATA (src/data/*.ts) DAN TIPE

```ts
// src/data/types.ts
export type Social = { label: "GitHub" | "LinkedIn" | "Instagram" | "WhatsApp" | "Email"; url: string };
export type Skill = { name: string; icon: string; group: "Frontend" | "Backend" | "Database" | "Tools"; note?: string };
export type Project = { slug: string; title: string; subtitle: string; year: string; stack: string[]; thumb?: string; live?: string; repo?: string; summary: string; role?: string; results?: string[] };
export type JourneyItem = { date: string; title: string; description: string; icon: "graduation" | "trophy" | "rocket" | "books" | "star" };
export type Certificate = { title: string; issuer: string; year: string; image?: string };
export type Service = { name: string; points: string[]; price?: string };
```

Isi awal (contoh; pemilik mengganti sendiri, tanda `[ISI]` wajib dicatat di README):

```ts
// src/data/content.ts
export const profile = {
  name: "Achmad Dzaki Habibullah Al Azhar",
  shortName: "Dzaki",
  role: "Fullstack Web Developer",
  location: "Probolinggo, Jawa Timur",
  year: "2026",
  tagline: "Aku mengubah ide jadi website yang jalan beneran.",
  about: "Halo, aku Dzaki. Fullstack web developer yang suka membangun website dari tampilan sampai database dan deploy. Aku senang detail kecil, dan memastikan project terasa rapi dipakai.",
  email: "[ISI]", whatsapp: "[ISI]", domain: "[ISI]",
  photo: "[ISI url foto]",
  socials: [] as import("./types").Social[], // [ISI]
};
export const tags = ["WEB DEVELOPMENT", "FULLSTACK APP", "UI IMPLEMENTATION", "DEPLOYMENT & SEO"];
```

```ts
// src/data/skills.ts (contoh)
export const skills = [
  { name: "React", icon: "react", group: "Frontend" }, { name: "Next.js", icon: "nextdotjs", group: "Frontend" },
  { name: "TypeScript", icon: "typescript", group: "Frontend" }, { name: "Tailwind CSS", icon: "tailwindcss", group: "Frontend" },
  { name: "Laravel", icon: "laravel", group: "Backend" }, { name: "PHP", icon: "php", group: "Backend" }, { name: "Node.js", icon: "nodedotjs", group: "Backend" },
  { name: "MySQL", icon: "mysql", group: "Database" }, { name: "PostgreSQL", icon: "postgresql", group: "Database" },
  { name: "Git", icon: "git", group: "Tools" }, { name: "GitHub", icon: "github", group: "Tools" }, { name: "Vite", icon: "vite", group: "Tools" }, { name: "Vercel", icon: "vercel", group: "Tools" }, { name: "Figma", icon: "figma", group: "Tools" },
];
```
`icon` = slug Simple Icons; ambil path SVG dari paket `simple-icons` (`import { siReact } from "simple-icons"` dst.) lewat util `getIcon(slug)`. Jika slug tidak ditemukan, tampilkan huruf awal di tile.

```ts
// src/data/projects.ts (contoh; thumb [ISI])
export const projects = [
  { slug: "nimeku", title: "Nimeku", subtitle: "Streaming anime subtitle Indonesia", year: "2026", stack: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"], summary: "[ISI]" },
  { slug: "bakso-mie-ayam-podomoro", title: "Bakso & Mie Ayam Podomoro", subtitle: "Website profil UMKM kuliner", year: "2026", stack: ["HTML", "Tailwind CSS", "JavaScript"], summary: "[ISI]" },
  { slug: "sfcs", title: "SFCS", subtitle: "Sistem pengaduan fasilitas sekolah", year: "2026", stack: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js", "MySQL"], summary: "[ISI]" },
  { slug: "project-keempat", title: "[ISI]", subtitle: "[ISI]", year: "2026", stack: [], summary: "[ISI]" },
];
```
`journey.ts`, `certificates.ts`, `services.ts` mengikuti tipe di atas dengan 3-4 entri placeholder `[ISI]`. Tidak boleh ada klaim fiktif.

---

## 10. INTERAKSI DAN MOTION

- Easing default `cubic-bezier(.2,.8,.2,1)`, durasi 180-320ms. Pegas drag: stiffness 300, damping 24.
- Load Cover: urutan "ditempel": matras -> kertas jatuh (translateY -40px -> 0, rotasi -2° -> 0, 450ms) -> judul `pixel-in` -> "2026" muncul miring -> dekor masuk bergantian (stagger 70ms) -> pill dock.
- Scroll-reveal "ditempel" untuk kartu dan sticker (sekali saja, `whileInView`, `viewport={{ once: true, margin: "-10%" }}`).
- Parallax dekor: translateY maksimal 24px per section memakai `useScroll` + `useTransform` (Motion). Hanya desktop (`pointer: fine`), mati jika reduced-motion.
- Dekor 3D: hover goyang kecil (rotate ±4°), tidak ada animasi terus-menerus selain CursorArrow (klik tiap 4 detik) dan sparkle berkedip pelan.
- Clipboard "NOTE": klik membuka dialog catatan cepat (textarea + tombol "Kirim via WhatsApp" dengan teks terisi otomatis).
- ID card: ayunan saat masuk viewport dan saat hover (bagian 5.12).
- Scroll-spy dock: `IntersectionObserver` pada `id` setiap stage; set `aria-current="true"` pada pill aktif.
- Hanya animasikan `transform` dan `opacity` (kecuali `clip-path` pada `pixel-in`). Tanpa `backdrop-filter`, tanpa blur real-time.
- `prefers-reduced-motion`: matikan parallax, ayunan, goyang, blink, dan `pixel-in`; tampilkan langsung hasil akhir.
- Tanpa custom cursor sistem (CursorArrow hanyalah dekorasi).

---

## 11. RESPONSIVE

Breakpoint: 360 / 640 / 768 / 1024 / 1280.
- Mobile (<768px): satu kolom. Dekor dikurangi (aturan per stage). Judul memakai `clamp`. Kartu project geser horizontal dengan `snap`. Dock: hanya pill, bisa digeser. Kertas hampir full-width (margin 12px). Target sentuh minimal 44px.
- Tablet: dekor setengah, grid 2 kolom.
- Desktop: komposisi penuh seperti bagian 8.
- Tidak boleh ada scroll horizontal di `body`. Uji di 360x740, 768x1024, 1440x900.

---

## 12. AKSESIBILITAS DAN PERFORMA

Aksesibilitas:
- Semua dekorasi `aria-hidden`. Heading berurutan (satu `h1` di Cover, `h2` tiap stage). Judul pixel adalah teks asli.
- Fokus terlihat jelas (outline putih 3px di atas biru, navy di atas kertas). Skip link "Lewati ke konten".
- Kontras: teks kecil memakai `ink` di atas kertas. Pink dan biru piksel hanya untuk teks besar.
- Form: label terhubung, error dibacakan (`aria-live="polite"`).
- Dialog sertifikat dan clipboard: fokus terjebak, Escape menutup.

Performa (target Lighthouse mobile >= 90):
- Maksimal ±8 gambar dekorasi per stage di desktop, ±4 di mobile. `loading="lazy"` kecuali yang di atas fold.
- Semua efek kayu/kertas/matras memakai CSS gradient (nol request). `filter: drop-shadow` besar maksimal 3 elemen per layar.
- Font: subset latin, `font-display: swap`, preload font pixel yang dipakai di Cover.
- Code-splitting per route (`React.lazy`). JS awal < 200KB gzip.
- Posisi/rotasi acak dihitung deterministik (`seededRotation`), tidak berubah antar render, tanpa layout shift (beri `width`/`height` pada semua `img`).

SEO: title, description, og:image (screenshot Cover), `lang="id"`, JSON-LD `Person`, `sitemap.xml`, `robots.txt`, favicon smiley/pixel SVG.

---

## 13. STRUKTUR FOLDER

```
src/
  app/            Router.tsx, Layout.tsx (strip kayu atas + dock), pages/{HomePage,WorkDetailPage,NotFoundPage}.tsx
  components/
    decor/        Sticker3D, BinderClip, CursorArrow, SelectionBox, Compass, Sparkle, Tape, Pushpin
    surfaces/     Mat, WoodFrame, Paper, TornPaper, NotebookPage
    nav/          Dock, Pill, SkipLink
    stages/       CoverStage, AboutStage, SkillsStage, JourneyStage, WorksStage, CertificatesStage, ServicesStage, ContactStage
    about/        IdCard, QrNote, SkillTile
    works/        WorkCard, WorkSpread
    contact/      ContactForm, QuickNoteDialog
  data/           types.ts, content.ts, skills.ts, projects.ts, journey.ts, certificates.ts, services.ts
  hooks/          useScrollSpy.ts, useReducedMotion.ts (atau dari motion), useIsDesktop.ts
  lib/            torn.ts, cn.ts, icons.ts, whatsapp.ts
  styles/         (opsional) pecah dari index.css
scripts/          fetch-assets.mjs
public/           assets/3d/*.png, CREDITS.md, favicon.svg, robots.txt, sitemap.xml
```

---

## 14. URUTAN KERJA (COMMIT PER LANGKAH)

1. Setup project, Tailwind v4, font, token (bagian 3-4), router, `Layout` dengan strip kayu atas dan dock kosong.
2. `lib/torn.ts`, kelas CSS bagian 5.1-5.6, halaman uji `/_kit` (hanya dev) untuk melihat matras, kayu, kertas, lubang, sobekan, judul pixel.
3. Komponen dekor: `Sticker3D`, `BinderClip`, `CursorArrow`, `SelectionBox`, `Compass`, `Sparkle`, `Tape`. Jalankan `pnpm assets`.
4. `Dock` + scroll-spy.
5. Stage 1 Cover sampai selesai dan cocok dengan bagian 1 dan 8.
6. Stage 2 About (IdCard, QR, tile skill).
7. Stage 5 Works + `WorkCard` + halaman detail.
8. Stage 3 Skills, Stage 4 Journey, Stage 6 Certificates, Stage 7 Services.
9. Stage 8 Contact (form, validasi, toast, fallback).
10. Motion pass (bagian 10) + reduced-motion.
11. Responsif (bagian 11), aksesibilitas dan performa (bagian 12), SEO, 404, `CREDITS.md`.
12. `pnpm build`, perbaiki error, README berisi daftar `[ISI]` dan cara deploy (Vercel/Netlify, fallback SPA ke `index.html`).

---

## 15. CHECKLIST ANTI-GENERIK (CEK SEBELUM SELESAI)

[ ] Latar biru bergrid dengan jahitan putus-putus, strip kayu atas dan dock kayu bawah terlihat
[ ] Judul "PORT/FOLIO" pixel biru, outline putih, bayangan navy, dalam kotak seleksi bergagang
[ ] Kertas cover berlubang spiral di atas dan sobek di bawah, dengan lipatan halus
[ ] Minimal 6 dekor 3D di Cover (keyboard, penggaris, folder, pensil, clipboard, gunting)
[ ] ID card tergantung lanyard dan berayun
[ ] Kartu project bersudut miring, naik-turun, dijepit binder clip pink, tepi kiri berlubang
[ ] Tidak ada gradient ungu, glow, glassmorphism, atau kartu putih bersudut bulat generik
[ ] Semua data berasal dari `src/data`, tidak ada data karangan, `[ISI]` terdaftar di README
[ ] Aset 3D gagal unduh tetap tampil lewat fallback
[ ] `pnpm build` lolos, tidak ada scroll horizontal di 360px, reduced-motion bekerja
[ ] `CREDITS.md` ada dan memuat lisensi MIT Fluent Emoji

# AKHIR DOKUMEN

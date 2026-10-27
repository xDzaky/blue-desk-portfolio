// src/components/decor/StageArt.tsx
// Aset dekor tambahan (SVG, satu gaya dengan CoverArt): laptop, mouse, bohlam, paperclip, amplop,
// dan badge ikon untuk Journey. Semua dekoratif (aria-hidden).
import type { CSSProperties, ReactNode } from "react";

const base: CSSProperties = { display: "block", width: "100%", height: "auto", overflow: "visible" };
const a11y = { "aria-hidden": true, focusable: false } as const;

/* --------------------------------------------------------------------- LAPTOP */
export function Laptop() {
  return (
    <svg viewBox="0 0 230 160" style={base} {...a11y}>
      <defs>
        <linearGradient id="lpScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9fe0ff" />
          <stop offset="1" stopColor="#3f8cf2" />
        </linearGradient>
        <linearGradient id="lpBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef1f7" />
          <stop offset="1" stopColor="#b3bccb" />
        </linearGradient>
      </defs>
      <ellipse cx="115" cy="150" rx="104" ry="8" fill="#0f2a7a" opacity=".28" />
      {/* tutup layar */}
      <rect x="32" y="6" width="166" height="108" rx="11" fill="#2f3750" />
      <rect x="32" y="6" width="166" height="108" rx="11" fill="none" stroke="#505a78" strokeWidth="2" />
      <rect x="40" y="14" width="150" height="92" rx="5" fill="url(#lpScreen)" />
      {/* isi layar: jendela kode */}
      <rect x="46" y="20" width="138" height="12" rx="3" fill="#fff" opacity=".35" />
      <circle cx="53" cy="26" r="2.6" fill="#ff5aa5" />
      <circle cx="61" cy="26" r="2.6" fill="#ffc83d" />
      <circle cx="69" cy="26" r="2.6" fill="#22c55e" />
      {[
        [52, 42, 46, "#fff"],
        [60, 52, 62, "#ffe27a"],
        [60, 62, 38, "#fff"],
        [52, 72, 54, "#ff9fcb"],
        [60, 82, 70, "#fff"],
        [52, 92, 30, "#ffe27a"],
      ].map(([x, y, w, c], i) => (
        <rect key={i} x={x as number} y={y as number} width={w as number} height="5" rx="2.5" fill={c as string} opacity=".9" />
      ))}
      <path d="M44 16 L110 16 L100 104 L44 104 Z" fill="#fff" opacity=".1" />
      {/* badan bawah */}
      <path d="M10 114 H220 L206 132 Q204 136 198 136 H32 Q26 136 24 132 Z" fill="url(#lpBase)" stroke="#9aa4b6" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M92 114 H138 L134 121 H96 Z" fill="#a6afc0" />
      <rect x="24" y="136" width="182" height="5" rx="2.5" fill="#8d97a9" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- MOUSE */
export function Mouse() {
  return (
    <svg viewBox="0 0 92 134" style={base} {...a11y}>
      <defs>
        <linearGradient id="msBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2efff" />
          <stop offset="1" stopColor="#b3a4ee" />
        </linearGradient>
      </defs>
      <ellipse cx="48" cy="128" rx="34" ry="6" fill="#0f2a7a" opacity=".28" />
      <path d="M46 6 C74 6 86 26 86 52 V86 C86 112 70 126 46 126 C22 126 6 112 6 86 V52 C6 26 18 6 46 6 Z" fill="#8f7fe0" transform="translate(0 4)" />
      <path d="M46 4 C74 4 86 24 86 50 V84 C86 110 70 122 46 122 C22 122 6 110 6 84 V50 C6 24 18 4 46 4 Z" fill="url(#msBody)" stroke="#8f7fe0" strokeWidth="1.6" />
      <path d="M6 54 H86" stroke="#8f7fe0" strokeWidth="2" />
      <path d="M46 4 V54" stroke="#8f7fe0" strokeWidth="2" />
      <rect x="40" y="18" width="12" height="24" rx="6" fill="#ff5aa5" stroke="#fff" strokeWidth="2" />
      <path d="M18 22 C22 14 30 10 38 9" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- BOHLAM */
export function Bulb() {
  return (
    <svg viewBox="0 0 110 150" style={base} {...a11y}>
      <defs>
        <radialGradient id="blGlass" cx=".38" cy=".3" r=".8">
          <stop offset="0" stopColor="#fffbd0" />
          <stop offset=".55" stopColor="#ffe36a" />
          <stop offset="1" stopColor="#f6b51c" />
        </radialGradient>
        <linearGradient id="blBase" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c6ccd8" />
          <stop offset=".5" stopColor="#f2f4f8" />
          <stop offset="1" stopColor="#9aa4b6" />
        </linearGradient>
      </defs>
      {[
        [55, 4, 55, 16],
        [14, 22, 22, 30],
        [96, 22, 88, 30],
        [4, 62, 16, 62],
        [106, 62, 94, 62],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffe27a" strokeWidth="4" strokeLinecap="round" />
      ))}
      <path d="M55 20 C30 20 16 38 16 60 C16 76 26 86 34 96 C38 101 38 106 38 110 H72 C72 106 72 101 76 96 C84 86 94 76 94 60 C94 38 80 20 55 20 Z" fill="url(#blGlass)" stroke="#e29a10" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M44 100 C44 86 36 80 36 70 M66 100 C66 86 74 80 74 70" fill="none" stroke="#e29a10" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M36 70 C44 62 66 62 74 70" fill="none" stroke="#e29a10" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M26 46 C28 38 34 32 42 29" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".8" />
      <rect x="36" y="108" width="38" height="10" rx="3" fill="url(#blBase)" stroke="#7c8699" strokeWidth="1.4" />
      <rect x="38" y="119" width="34" height="9" rx="3" fill="url(#blBase)" stroke="#7c8699" strokeWidth="1.4" />
      <path d="M42 130 H68 L62 142 Q55 146 48 142 Z" fill="#8d97a9" stroke="#677185" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ PAPERCLIP */
export function Paperclip() {
  const d = "M26 118 V40 C26 22 56 22 56 40 V112 C56 138 14 138 14 108 V54";
  return (
    <svg viewBox="0 0 72 150" style={base} {...a11y}>
      <path d={d} transform="translate(5 6)" fill="none" stroke="#0f2a7a" strokeOpacity=".28" strokeWidth="8" strokeLinecap="round" />
      <path d={d} fill="none" stroke="#8791a4" strokeWidth="8" strokeLinecap="round" />
      <path d={d} fill="none" stroke="#e9edf4" strokeWidth="4.4" strokeLinecap="round" />
      <path d="M20 112 V56" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".9" />
    </svg>
  );
}

/* --------------------------------------------------------------------- AMPLOP */
export function Envelope() {
  return (
    <svg viewBox="0 0 170 120" style={base} {...a11y}>
      <defs>
        <linearGradient id="evBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf2" />
          <stop offset="1" stopColor="#f3e8c3" />
        </linearGradient>
      </defs>
      <ellipse cx="85" cy="114" rx="70" ry="6" fill="#0f2a7a" opacity=".28" />
      <rect x="6" y="14" width="158" height="94" rx="9" fill="url(#evBody)" stroke="#d8c88e" strokeWidth="2" />
      <path d="M6 24 L85 78 L164 24" fill="none" stroke="#d8c88e" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 102 L66 60 M164 102 L104 60" fill="none" stroke="#e6d9a8" strokeWidth="2" />
      <path d="M12 16 Q85 90 158 16 Z" fill="#fff" opacity=".55" />
      {/* pita airmail */}
      <rect x="6" y="14" width="158" height="7" rx="3" fill="#2b62f0" opacity=".9" />
      <g transform="translate(120 38)">
        <rect width="30" height="36" rx="3" fill="#ff5aa5" stroke="#fff" strokeWidth="2.4" />
        <path d="M15 26 C7 20 7 12 12 12 C14 12 15 14 15 14 C15 14 16 12 18 12 C23 12 23 20 15 26 Z" fill="#fff" />
      </g>
      <circle cx="84" cy="76" r="11" fill="#ff5aa5" stroke="#fff" strokeWidth="2.4" />
      <path d="M84 83 C78 79 78 73 81 73 C83 73 84 75 84 75 C84 75 85 73 87 73 C90 73 90 79 84 83 Z" fill="#fff" />
    </svg>
  );
}

/* ------------------------------------------------- BADGE IKON JOURNEY (48x48) */
function Badge({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" style={base} {...a11y}>
      {children}
    </svg>
  );
}

export function IconCap() {
  return (
    <Badge>
      <path d="M12 22 V32 C12 36 36 36 36 32 V22" fill="#1d3f9e" stroke="#0f2a7a" strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 8 L45 18 L24 28 L3 18 Z" fill="#2b62f0" stroke="#0f2a7a" strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 12 L36 18 L24 24 L12 18 Z" fill="#6f98f5" opacity=".7" />
      <path d="M42 19 V32" stroke="#ffc83d" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="42" cy="35" r="3.2" fill="#ffc83d" stroke="#c98d0c" strokeWidth="1.2" />
    </Badge>
  );
}

export function IconBooks() {
  return (
    <Badge>
      <rect x="6" y="30" width="36" height="9" rx="2" fill="#ff5aa5" stroke="#0f2a7a" strokeWidth="2" />
      <rect x="9" y="20" width="32" height="9" rx="2" fill="#ffc83d" stroke="#0f2a7a" strokeWidth="2" />
      <rect x="12" y="10" width="30" height="9" rx="2" fill="#2b62f0" stroke="#0f2a7a" strokeWidth="2" />
      <path d="M10 34.5 H38 M13 24.5 H37 M16 14.5 H38" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
    </Badge>
  );
}

export function IconTrophy() {
  return (
    <Badge>
      <path d="M13 9 H35 V22 C35 29 30 33 24 33 C18 33 13 29 13 22 Z" fill="#ffc83d" stroke="#0f2a7a" strokeWidth="2" strokeLinejoin="round" />
      <path d="M13 12 H7 C7 22 11 25 15 25 M35 12 H41 C41 22 37 25 33 25" fill="none" stroke="#0f2a7a" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 33 V38" stroke="#0f2a7a" strokeWidth="2.4" />
      <rect x="15" y="38" width="18" height="5" rx="1.5" fill="#2b62f0" stroke="#0f2a7a" strokeWidth="2" />
      <path d="M18 13 V22" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" opacity=".7" />
    </Badge>
  );
}

export function IconRocket() {
  return (
    <Badge>
      <path d="M24 5 C33 10 36 20 35 31 H13 C12 20 15 10 24 5 Z" fill="#fff" stroke="#0f2a7a" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="24" cy="20" r="5" fill="#2b62f0" stroke="#0f2a7a" strokeWidth="2" />
      <path d="M13 24 L6 34 L14 31 Z M35 24 L42 34 L34 31 Z" fill="#ff5aa5" stroke="#0f2a7a" strokeWidth="2" strokeLinejoin="round" />
      <path d="M19 31 H29 L24 43 Z" fill="#ffc83d" stroke="#0f2a7a" strokeWidth="2" strokeLinejoin="round" />
    </Badge>
  );
}

export function IconStar() {
  return (
    <Badge>
      <path d="M24 5 L29.5 17 L42 18.5 L32.5 27 L35.5 40 L24 33 L12.5 40 L15.5 27 L6 18.5 L18.5 17 Z" fill="#ffc83d" stroke="#0f2a7a" strokeWidth="2" strokeLinejoin="round" />
    </Badge>
  );
}

export const JOURNEY_ICONS = {
  graduation: IconCap,
  books: IconBooks,
  trophy: IconTrophy,
  rocket: IconRocket,
  star: IconStar,
} as const;

// src/components/decor/CoverArt.tsx
// Semua aset dekor Cover digambar sebagai SVG (tanpa PNG), supaya bentuk, warna, dan
// sudutnya konsisten dan tajam di semua ukuran. Semuanya dekoratif (aria-hidden).
import type { CSSProperties } from "react";

const base: CSSProperties = { display: "block", width: "100%", height: "auto", overflow: "visible" };
const a11y = { "aria-hidden": true, focusable: false } as const;

/* ------------------------------------------------------------------ KEYBOARD */
type Key = [number, "B" | "b" | "W" | "G" | "Y"];
const TONE: Record<Key[1], [string, string]> = {
  B: ["#4d88e6", "#3563bd"],
  b: ["#86b0ef", "#5f8cd1"],
  W: ["#f6f7fa", "#cdd2dc"],
  G: ["#e2e6ed", "#b9bfcb"],
  Y: ["#f4d64e", "#cfae22"],
};
const KEY_ROWS: { y: number; x: number; keys: Key[] }[] = [
  { y: 14, x: 16, keys: [[38, "B"], [38, "B"], [30, "W"], [30, "G"], [30, "W"], [30, "Y"], [30, "Y"], [30, "W"], [30, "G"], [30, "W"]] },
  { y: 48, x: 16, keys: [[30, "G"], [30, "W"], [30, "G"], [30, "W"], [30, "G"], [30, "W"], [30, "Y"], [30, "G"], [30, "W"], [44, "b"]] },
  { y: 82, x: 16, keys: [[46, "G"], [30, "W"], [30, "G"], [30, "W"], [30, "G"], [30, "W"], [30, "G"], [30, "W"], [46, "b"]] },
  { y: 116, x: 44, keys: [[38, "G"], [38, "G"], [160, "W"], [38, "G"], [38, "G"]] },
];

export function Keyboard() {
  return (
    <svg viewBox="0 0 400 172" style={base} {...a11y}>
      <rect x="2" y="12" width="396" height="156" rx="16" fill="#8d95a6" />
      <rect x="2" y="2" width="396" height="154" rx="16" fill="#d5dae3" stroke="#aeb5c3" strokeWidth="2" />
      <rect x="8" y="8" width="384" height="142" rx="12" fill="#c3c9d4" />
      {KEY_ROWS.map((row) => {
        let x = row.x;
        return row.keys.map(([w, t], i) => {
          const kx = x;
          x += w + 6;
          return (
            <g key={`${row.y}-${i}`}>
              <rect x={kx} y={row.y + 4} width={w} height="26" rx="5" fill={TONE[t][1]} />
              <rect x={kx} y={row.y} width={w} height="26" rx="5" fill={TONE[t][0]} />
              <rect x={kx + 3} y={row.y + 2} width={w - 6} height="4" rx="2" fill="#fff" opacity=".38" />
            </g>
          );
        });
      })}
    </svg>
  );
}

/* ----------------------------------------------------- PENGGARIS SEGITIGA KUNING */
export function SetSquare() {
  const ticks = Array.from({ length: 10 }, (_, i) => {
    const x = 6 + i * 9;
    const y = 156 - x * 0.2766;
    return { x, y, len: i % 2 === 0 ? 11 : 6 };
  });
  return (
    <svg viewBox="0 0 130 190" style={base} {...a11y}>
      <defs>
        <linearGradient id="ssGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe786" />
          <stop offset="1" stopColor="#f2b81f" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        d="M48 0 L128 150 L0 184 L0 0 Z M0 0 L26 0 L94 130 L0 156 Z"
        fill="url(#ssGrad)"
        stroke="#d9a313"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M26 0 L94 130 L0 156" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2" />
      {ticks.map((t, i) => (
        <line key={i} x1={t.x} y1={t.y} x2={t.x + t.len * 0.255} y2={t.y + t.len * 0.967} stroke="#b88a0a" strokeWidth="1.6" />
      ))}
    </svg>
  );
}

/* --------------------------------------------------------------- PENGGARIS BIRU */
export function BlueRuler() {
  const ticks = Array.from({ length: 30 }, (_, i) => ({
    x: 12 + i * 9.5,
    len: i % 5 === 0 ? 22 : i % 2 === 0 ? 13 : 9,
  }));
  return (
    <svg viewBox="0 0 300 70" style={base} {...a11y}>
      <defs>
        <linearGradient id="brGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b5d2fa" />
          <stop offset="1" stopColor="#86b1ee" />
        </linearGradient>
      </defs>
      <rect x="2" y="8" width="296" height="62" rx="7" fill="#6f9ad9" />
      <rect x="2" y="2" width="296" height="62" rx="7" fill="url(#brGrad)" stroke="#6b97dd" strokeWidth="1.5" />
      <rect x="6" y="5" width="288" height="9" rx="4" fill="#fff" opacity=".3" />
      {ticks.map((t, i) => (
        <line key={i} x1={t.x} y1="2" x2={t.x} y2={2 + t.len} stroke="#4a79c8" strokeWidth="1.6" />
      ))}
    </svg>
  );
}

/* ----------------------------------------------------------------------- FOLDER */
export function FolderOpen() {
  return (
    <svg viewBox="0 0 260 205" style={base} {...a11y}>
      <defs>
        <linearGradient id="fdFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffdd62" />
          <stop offset="1" stopColor="#f2aa22" />
        </linearGradient>
        <linearGradient id="fdBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6b73a" />
          <stop offset="1" stopColor="#e39a1c" />
        </linearGradient>
      </defs>
      <path d="M18 44 Q18 28 34 28 H92 L108 44 H226 Q242 44 242 60 V176 Q242 192 226 192 H34 Q18 192 18 176 Z" fill="url(#fdBack)" />
      <g transform="rotate(-8 130 100)">
        <rect x="40" y="22" width="168" height="140" rx="8" fill="#3b70d4" />
        <rect x="48" y="34" width="168" height="140" rx="8" fill="#6b9be9" />
      </g>
      <g transform="rotate(-3 130 100)">
        <rect x="54" y="42" width="168" height="132" rx="8" fill="#dbe9fc" stroke="#b9d0f2" />
        {[66, 82, 98].map((y) => (
          <line key={y} x1="70" y1={y} x2="190" y2={y} stroke="#b9cff0" strokeWidth="3" strokeLinecap="round" />
        ))}
      </g>
      <path
        d="M18 104 Q18 96 25 92 L66 70 Q70 68 76 68 H224 Q242 68 242 86 V174 Q242 192 224 192 H36 Q18 192 18 174 Z"
        fill="url(#fdFront)"
        stroke="#e09a1a"
        strokeWidth="2"
      />
      <path d="M30 100 L68 79 H226" fill="none" stroke="#fff3b8" strokeWidth="3.5" strokeLinecap="round" opacity=".85" />
      <rect x="176" y="150" width="46" height="22" rx="6" fill="#cfe2fb" stroke="#a9c6ee" />
    </svg>
  );
}

/* -------------------------------------------------------------------- CLIPBOARD */
export function Clipboard() {
  return (
    <svg viewBox="0 0 150 212" style={base} {...a11y}>
      <defs>
        <linearGradient id="cbGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffbc55" />
          <stop offset="1" stopColor="#f09a28" />
        </linearGradient>
      </defs>
      <rect x="7" y="16" width="140" height="194" rx="17" fill="#cf821d" />
      <rect x="4" y="10" width="140" height="192" rx="17" fill="url(#cbGrad)" stroke="#df8e20" strokeWidth="1.5" />
      <rect x="16" y="32" width="116" height="158" rx="6" fill="#fdfdfd" stroke="#e3e8f0" />
      {[60, 76, 92, 108, 124, 140].map((y) => (
        <line key={y} x1="26" y1={y} x2="122" y2={y} stroke="#d6dce8" strokeWidth="1.6" />
      ))}
      <text x="100" y="174" transform="rotate(-12 100 174)" fontSize="12" fontWeight="700" textAnchor="middle" fill="#9aa3b2" fontFamily="'Space Mono', ui-monospace, monospace" letterSpacing="1">
        NOTE
      </text>
      <rect x="42" y="2" width="68" height="34" rx="8" fill="#aab2c0" />
      <rect x="48" y="7" width="56" height="11" rx="5" fill="#dfe4ec" />
      <rect x="57" y="19" width="38" height="9" rx="4" fill="#8b94a5" />
      <circle cx="44" cy="17" r="8.5" fill="#ff6ba9" />
      <circle cx="41.5" cy="14" r="2.6" fill="#fff" opacity=".65" />
    </svg>
  );
}

/* --------------------------------------------------------------------- GUNTING */
export function Scissors() {
  return (
    <svg viewBox="0 0 140 150" style={base} {...a11y}>
      <defs>
        <linearGradient id="scBlade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f6fa" />
          <stop offset="1" stopColor="#98a2b3" />
        </linearGradient>
        <linearGradient id="scHandle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b95f7" />
          <stop offset="1" stopColor="#2058d6" />
        </linearGradient>
      </defs>
      {/* bilah belakang (setengah B) */}
      <path d="M66 74 L80 64 L6 94 L4 101 Z" fill="url(#scBlade)" stroke="#8791a3" strokeWidth="1.4" strokeLinejoin="round" />
      {/* bilah depan (setengah A) */}
      <path d="M66 64 L82 78 L18 144 L8 138 Z" fill="url(#scBlade)" stroke="#8791a3" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M70 70 L16 136" stroke="#fff" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round" />
      {/* lengan + cincin pegangan */}
      <path d="M100 46 L76 72" stroke="url(#scHandle)" strokeWidth="11" strokeLinecap="round" />
      <path d="M112 84 L78 74" stroke="url(#scHandle)" strokeWidth="11" strokeLinecap="round" />
      <circle cx="106" cy="30" r="20" fill="none" stroke="#1d4fc4" strokeWidth="13" />
      <circle cx="106" cy="30" r="20" fill="none" stroke="url(#scHandle)" strokeWidth="9" />
      <circle cx="106" cy="30" r="20" fill="none" stroke="#9cc0ff" strokeWidth="2.6" strokeDasharray="26 100" strokeLinecap="round" />
      <circle cx="124" cy="86" r="17" fill="none" stroke="#1d4fc4" strokeWidth="13" />
      <circle cx="124" cy="86" r="17" fill="none" stroke="url(#scHandle)" strokeWidth="9" />
      <circle cx="124" cy="86" r="17" fill="none" stroke="#9cc0ff" strokeWidth="2.6" strokeDasharray="22 100" strokeLinecap="round" />
      {/* baut engsel */}
      <circle cx="74" cy="72" r="7" fill="#d5dae4" stroke="#7c8699" strokeWidth="1.6" />
      <circle cx="72.5" cy="70.5" r="2" fill="#fff" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- PENSIL */
export function Pencil() {
  return (
    <svg viewBox="0 0 300 40" style={base} {...a11y}>
      <defs>
        <linearGradient id="pcBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe680" />
          <stop offset=".45" stopColor="#f7cf3a" />
          <stop offset="1" stopColor="#dca510" />
        </linearGradient>
        <linearGradient id="pcMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6eaf0" />
          <stop offset="1" stopColor="#9aa3b2" />
        </linearGradient>
      </defs>
      <rect x="0" y="6" width="30" height="28" rx="12" fill="#f0669f" />
      <rect x="4" y="9" width="18" height="6" rx="3" fill="#fff" opacity=".4" />
      <rect x="26" y="5" width="30" height="30" fill="url(#pcMetal)" />
      {[32, 40, 48].map((x) => (
        <line key={x} x1={x} y1="5" x2={x} y2="35" stroke="#7d8696" strokeWidth="1.4" />
      ))}
      <rect x="56" y="6" width="196" height="28" fill="url(#pcBody)" />
      <line x1="56" y1="14" x2="252" y2="14" stroke="#fff" strokeOpacity=".5" strokeWidth="2" />
      <line x1="56" y1="26" x2="252" y2="26" stroke="#b98a06" strokeOpacity=".45" strokeWidth="2" />
      <polygon points="252,6 292,18 292,22 252,34" fill="#f3cc9a" />
      <polygon points="252,6 292,18 292,20 252,20" fill="#fbe0b8" />
      <polygon points="282,16 299,20 282,24" fill="#3a3f4c" />
    </svg>
  );
}

/* ------------------------------------------------------------- KURSOR PANAH 3D */
export function CursorArrow() {
  const d = "M8 4 L8 60 L22 46 L33 74 L46 68 L35 41 L55 39 Z";
  return (
    <svg viewBox="0 0 70 84" style={base} {...a11y}>
      <defs>
        <linearGradient id="caGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe678" />
          <stop offset="1" stopColor="#f2a900" />
        </linearGradient>
      </defs>
      <path d={d} transform="translate(5 7)" fill="#b9810a" opacity=".55" />
      <path d={d} transform="translate(3 4)" fill="#d99a00" stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
      <path d={d} fill="url(#caGrad)" stroke="#fff" strokeWidth="5" strokeLinejoin="round" paintOrder="stroke" />
      <path d="M13 14 L13 44 L19 38" fill="none" stroke="#fff" strokeOpacity=".75" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- JANGKA */
export function Compass() {
  return (
    <svg viewBox="0 0 120 190" style={base} {...a11y}>
      <defs>
        <linearGradient id="cpLeg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffe27a" />
          <stop offset="1" stopColor="#e9a912" />
        </linearGradient>
      </defs>
      <path d="M52 30 L20 170 L32 174 L68 34 Z" fill="url(#cpLeg)" stroke="#c98d0c" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M20 170 L25 188 L32 174 Z" fill="#8b94a5" />
      <path d="M66 30 L94 150 L108 146 L76 26 Z" fill="url(#cpLeg)" stroke="#c98d0c" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M94 150 L101 176 L108 146 Z" fill="#f0c36a" />
      <path d="M99 168 L101 176 L104 168 Z" fill="#3a3f4c" />
      <rect x="54" y="0" width="14" height="14" rx="4" fill="#c5ccd7" stroke="#9aa3b2" />
      <circle cx="61" cy="26" r="17" fill="url(#cpLeg)" stroke="#d99a12" strokeWidth="2" />
      <circle cx="61" cy="26" r="8" fill="#e9edf3" stroke="#aab2c0" />
    </svg>
  );
}

/* ------------------------------------------------------------- BINDER CLIP PINK */
export function BinderClip() {
  return (
    <svg viewBox="0 0 64 74" style={base} {...a11y}>
      <defs>
        <linearGradient id="bcGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff74b4" />
          <stop offset="1" stopColor="#f0408f" />
        </linearGradient>
      </defs>
      <path d="M13 30 C4 14 12 2 32 2 C52 2 60 14 51 30" fill="none" stroke="#bfc6d2" strokeWidth="5" strokeLinecap="round" />
      <path d="M13 30 C4 14 12 2 32 2" fill="none" stroke="#f3f5f9" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 28 H52 L59 68 H5 Z" fill="url(#bcGrad)" />
      <path d="M12 28 H52 L54 42 H10 Z" fill="#fff" opacity=".28" />
      <path d="M5 68 H59" stroke="#000" strokeOpacity=".2" strokeWidth="3" />
    </svg>
  );
}

/* ---------------------------------------------------------- SPARKLE & DOODLE */
const STAR = "M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0Z";

export function Sparkle({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" style={base} {...a11y}>
      <path d={STAR} fill={color} />
    </svg>
  );
}

export function SparkleBadge({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" style={{ ...base, filter: "drop-shadow(0 2px 2px rgba(0,0,0,.25))" }} {...a11y}>
      <circle cx="20" cy="20" r="19" fill="#f4f4f1" />
      <g transform="translate(8 8)">
        <path d={STAR} fill={color} />
      </g>
    </svg>
  );
}

export function PinkDoodle() {
  return (
    <svg viewBox="0 0 48 26" style={base} {...a11y}>
      <path d="M2 20 C9 4 17 24 25 12 C31 4 38 12 45 3" fill="none" stroke="#ff5aa5" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function BlueSwirl() {
  return (
    <svg viewBox="0 0 52 66" style={base} {...a11y}>
      <path d="M8 62 C2 36 34 34 28 50 C24 62 8 44 24 26 C32 16 40 12 46 8" fill="none" stroke="#2b62f0" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M36 6 L47 7 L44 18" fill="none" stroke="#2b62f0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------- JUDUL "PORT / FOLIO" */
// Huruf pixel digambar dari bitmap 7x9 sel. Outline putih bulat + bayangan navy.
const GLYPH: Record<string, string[]> = {
  P: ["######.", "##...##", "##...##", "##...##", "######.", "##.....", "##.....", "##.....", "##....."],
  O: [".#####.", "##...##", "##...##", "##...##", "##...##", "##...##", "##...##", "##...##", ".#####."],
  Q: [".#####.", "##...##", "##...##", "##...##", "##...##", "##...##", "##...##", "##...##", ".#####."],
  R: ["######.", "##...##", "##...##", "##...##", "######.", "####...", "##.##..", "##..##.", "##...##"],
  T: ["#######", "#######", "..###..", "..###..", "..###..", "..###..", "..###..", "..###..", "..###.."],
  F: ["#######", "##.....", "##.....", "######.", "##.....", "##.....", "##.....", "##.....", "##....."],
  L: ["##.....", "##.....", "##.....", "##.....", "##.....", "##.....", "##.....", "##.....", "#######"],
  I: ["#####", ".###.", ".###.", ".###.", ".###.", ".###.", ".###.", ".###.", "#####"],
};

type Placed = { ch: string; col: number; row: number; rot: number };
// kolom/baris dalam satuan sel; rot = kemiringan kecil per huruf supaya terasa "ditempel"
const PLACED: Placed[] = [
  { ch: "P", col: 0, row: 0, rot: -2 },
  { ch: "O", col: 8, row: 0.4, rot: 1.5 },
  { ch: "R", col: 16, row: -0.3, rot: -1.5 },
  { ch: "T", col: 24, row: 0.2, rot: 2 },
  { ch: "F", col: 2, row: 10, rot: -2.5 },
  { ch: "Q", col: 10, row: 10.3, rot: 1 }, // O dengan bagian tengah kosong untuk bintang pink
  { ch: "L", col: 18, row: 10, rot: -1 },
  { ch: "I", col: 26, row: 9.7, rot: 2 },
  { ch: "O", col: 32, row: 10.4, rot: -1.5 },
];

const U = 10; // ukuran 1 sel dalam unit viewBox

function glyphRects(ch: string) {
  const rows = GLYPH[ch];
  const out: { x: number; y: number }[] = [];
  rows.forEach((line, y) => [...line].forEach((c, x) => c === "#" && out.push({ x: x * U, y: y * U })));
  return out;
}

function Layer({ fill, stroke, strokeWidth, dx = 0, dy = 0 }: { fill: string; stroke?: string; strokeWidth?: number; dx?: number; dy?: number }) {
  return (
    <g transform={`translate(${dx} ${dy})`} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round">
      {PLACED.map((p, i) => {
        const w = GLYPH[p.ch][0].length * U;
        const h = 9 * U;
        return (
          <g key={i} transform={`translate(${p.col * U} ${p.row * U}) rotate(${p.rot} ${w / 2} ${h / 2})`}>
            {glyphRects(p.ch).map((r, j) => (
              <rect key={j} x={r.x} y={r.y} width={U} height={U} />
            ))}
          </g>
        );
      })}
    </g>
  );
}

export function TitleArt() {
  // pusat huruf "Q" (O kosong) di FOLIO: kolom 10 + 3.5, baris 10.3 + 4.5
  const sx = (10 + 3.5) * U;
  const sy = (10.3 + 4.5) * U;
  return (
    <svg viewBox="-24 -24 436 232" style={base} role="img" aria-label="Portfolio" focusable={false}>
      <Layer fill="#0f2a7a" stroke="#0f2a7a" strokeWidth={13} dx={3} dy={5} />
      <Layer fill="#ffffff" stroke="#ffffff" strokeWidth={13} />
      <Layer fill="#2b62f0" stroke="#2b62f0" strokeWidth={0.9} />
      <g transform={`translate(${sx} ${sy})`}>
        <path d={STAR} transform="translate(-19 -19) scale(1.6)" fill="#ff5aa5" stroke="#ffffff" strokeWidth="2.6" strokeLinejoin="round" paintOrder="stroke" />
      </g>
    </svg>
  );
}

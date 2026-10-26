// src/components/decor/TitleArtwork.tsx
import { CursorArrow } from "./CursorArrow";

export function TitleArtwork() {
  return (
    <div className="relative inline-block select-none my-0.5 sm:my-1">
      {/* Figma/Design Tool Selection Bounding Box - More compact */}
      <div className="relative border border-[#4285f4] p-3 sm:p-5 md:p-6">
        {/* 8 Selection Corner/Edge Handles - Smaller */}
        <span aria-hidden="true" className="absolute -top-1 -left-1 size-2 bg-white border border-[#4285f4]" />
        <span aria-hidden="true" className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 bg-white border border-[#4285f4]" />
        <span aria-hidden="true" className="absolute -top-1 -right-1 size-2 bg-white border border-[#4285f4]" />
        <span aria-hidden="true" className="absolute top-1/2 -left-1 -translate-y-1/2 size-2 bg-white border border-[#4285f4]" />
        <span aria-hidden="true" className="absolute top-1/2 -right-1 -translate-y-1/2 size-2 bg-white border border-[#4285f4]" />
        <span aria-hidden="true" className="absolute -bottom-1 -left-1 size-2 bg-white border border-[#4285f4]" />
        <span aria-hidden="true" className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 bg-white border border-[#4285f4]" />
        <span aria-hidden="true" className="absolute -bottom-1 -right-1 size-2 bg-white border border-[#4285f4]" />

        {/* 1. Pink Wavy Doodle (Top-Left above PORT) - Smaller */}
        <svg
          aria-hidden="true"
          viewBox="0 0 50 25"
          className="absolute -top-4 sm:-top-5 -left-2 w-8 sm:w-10 md:w-11 h-4 sm:h-5 text-pink stroke-current fill-none stroke-[2.5] stroke-linecap-round pointer-events-none"
        >
          <path d="M 3 12 Q 10 3, 18 12 Q 26 21, 34 12 Q 42 3, 47 12" />
        </svg>

        {/* 2. Hand-Drawn Blue Curved Arrow (Top-Right pointing to PORT) - Smaller */}
        <svg
          aria-hidden="true"
          viewBox="0 0 60 60"
          className="absolute -top-10 sm:-top-12 right-18 sm:right-24 md:right-28 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-[#2563eb] stroke-current fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round pointer-events-none"
        >
          <path d="M 12 45 C 15 20, 36 8, 52 18" />
          <polyline points="40 14, 52 18, 48 30" />
        </svg>

        {/* 3. Pink Pixel Badge "PROJEK" (Top-Right of PORT) - Smaller */}
        <div
          aria-hidden="true"
          className="absolute -top-4 sm:-top-6 md:-top-7 -right-1 sm:right-0 z-20 pointer-events-none"
        >
          <div className="pixel-title pixel-title--pink text-lg sm:text-2xl md:text-3xl px-2 py-0.5 rounded bg-white border-2 border-pink/50 shadow-[2px_2px_0_#0f2a7a] inline-block tracking-wider">
            PROJEK
          </div>
        </div>

        {/* 4. MAIN VECTOR ARTWORK: "PORT FOLIO" - More compact sizing */}
        <svg
          viewBox="0 0 520 250"
          className="w-[260px] sm:w-[380px] md:w-[440px] lg:w-[480px] h-auto overflow-visible select-none drop-shadow-[3px_4px_0_#0e2a78]"
          aria-label="PORT FOLIO"
          role="img"
        >
          <defs>
            {/* Blue letter fill */}
            <linearGradient id="titleBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2b6cf8" />
              <stop offset="100%" stopColor="#1e58d8" />
            </linearGradient>

            {/* Sparkle 3D star pink gradient */}
            <linearGradient id="starPink" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff70b5" />
              <stop offset="50%" stopColor="#ff3388" />
              <stop offset="100%" stopColor="#d81b60" />
            </linearGradient>

            {/* Die-cut white border filter style */}
            <filter id="whiteOutline" x="-20%" y="-20%" width="140%" height="140%">
              <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="7" />
              <feFlood floodColor="#ffffff" result="WHITE" />
              <feComposite in="WHITE" in2="DILATED" operator="in" result="OUTLINE" />
              <feMerge>
                <feMergeNode in="OUTLINE" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Group with Die-cut Thick White Outline */}
          <g filter="url(#whiteOutline)">
            {/* ===== LINE 1: PORT ===== */}
            <g fill="url(#titleBlue)" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="miter">
              {/* P (Pixel P) */}
              <path d="M 20 20 H 90 V 75 H 55 V 110 H 20 Z M 55 45 H 45 V 60 H 55 Z" />

              {/* O (Pixel square O with cutout) */}
              <path d="M 105 45 H 160 V 110 H 105 Z M 140 68 H 125 V 88 H 140 Z" />

              {/* R (Playful organic curved R with wavy loop and flared leg from reference) */}
              <path d="M 175 22 C 195 18, 230 18, 235 48 C 238 65, 222 75, 205 78 L 235 110 H 202 L 180 84 V 110 H 160 V 22 Z M 180 42 V 64 C 190 64, 212 66, 212 53 C 212 40, 192 42, 180 42 Z" />

              {/* T (Stepped pixel T) */}
              <path d="M 245 45 H 315 V 72 H 295 V 110 H 265 V 72 H 245 Z" />
            </g>

            {/* ===== LINE 2: FOLIO ===== */}
            <g fill="url(#titleBlue)" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="miter" transform="translate(65, 115)">
              {/* F (Playful wavy top F from reference) */}
              <path d="M 15 2 C 30 -5, 65 0, 75 18 L 60 26 C 50 18, 35 18, 35 28 V 40 H 65 V 60 H 35 V 105 H 15 Z" />

              {/* O with pink 3D star cutout inside (The iconic centerpiece of Image 1!) */}
              <path d="M 85 20 H 145 V 95 H 85 Z M 130 40 H 100 V 75 H 130 Z" />

              {/* L (Pixel L) */}
              <path d="M 160 20 H 182 V 75 H 220 V 95 H 160 Z" />

              {/* I (Notched pillar I) */}
              <path d="M 235 20 H 262 V 95 H 235 Z M 255 50 H 242 V 65 H 255 Z" />

              {/* O (Second O with curved lower loop) */}
              <path d="M 278 20 H 338 V 78 C 338 92, 325 100, 305 98 C 285 96, 278 85, 278 72 Z M 318 42 H 298 V 75 H 318 Z" />
            </g>

            {/* Iconic 3D Pink Star inside First 'O' of FOLIO */}
            <g transform="translate(180, 172)">
              <polygon
                points="0,-24 6,-7 24,0 6,7 0,24 -6,7 -24,0 -6,-7"
                fill="url(#starPink)"
                stroke="#ffffff"
                strokeWidth="2.5"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
              />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
            </g>
          </g>
        </svg>

        {/* 5. Pink "2026" Badge (Rotated -15° at Bottom-Left of FOLIO) - Smaller */}
        <div
          aria-hidden="true"
          className="pixel-title pixel-title--pink absolute -left-3 sm:-left-5 md:-left-6 -bottom-2 sm:-bottom-3 md:-bottom-4 text-2xl sm:text-4xl md:text-5xl -rotate-12 select-none pointer-events-none drop-shadow-[2px_3px_0_#0f2a7a]"
        >
          2026
        </div>

        {/* 6. Yellow Cursor Arrow (Tip touching directly onto the Bottom-Right Handle) - Smaller */}
        <div
          aria-hidden="true"
          className="absolute -right-4 sm:-right-6 md:-right-7 -bottom-6 sm:-bottom-8 md:-bottom-9 z-30 pointer-events-none animate-bounce"
        >
          <CursorArrow className="w-9 sm:w-11 md:w-12" />
        </div>
      </div>
    </div>
  );
}

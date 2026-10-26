// src/components/decor/CursorArrow.tsx
export function CursorArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cursorG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe27a" />
          <stop offset="1" stopColor="#f2a900" />
        </linearGradient>
      </defs>
      <path
        d="M5 3 L5 36 L13 29 L19 43 L26 40 L20 27 L31 26 Z"
        fill="url(#cursorG)"
        stroke="#fff"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M8 9 L8 27 L12 23"
        fill="none"
        stroke="rgba(255,255,255,.7)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

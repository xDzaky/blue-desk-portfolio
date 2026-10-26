// src/components/decor/BlueScissors.tsx
export function BlueScissors({
  size = 140,
  rotate = 20,
  className = "",
}: {
  size?: number;
  rotate?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 140 140"
      width={size}
      height={size}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`select-none pointer-events-none drop-shadow-[0_10px_14px_rgba(15,42,122,0.35)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Steel blades gradient */}
        <linearGradient id="bladeSteel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="80%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>

        {/* Glossy blue plastic handles (matching Sample Image 1) */}
        <linearGradient id="blueHandle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="35%" stopColor="#3b82f6" />
          <stop offset="75%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* Blade 1 (Upper Blade) */}
      <path
        d="M 68 70 L 125 25 C 128 27, 128 32, 122 36 L 72 74 Z"
        fill="url(#bladeSteel)"
        stroke="#475569"
        strokeWidth="1.2"
      />

      {/* Blade 2 (Lower Blade with beveled cutting edge) */}
      <path
        d="M 66 72 L 126 50 C 128 53, 126 58, 120 60 L 68 76 Z"
        fill="url(#bladeSteel)"
        stroke="#475569"
        strokeWidth="1.2"
      />

      {/* Pivot screw & washer */}
      <circle cx="70" cy="72" r="4.5" fill="#e2e8f0" stroke="#334155" strokeWidth="1.2" />
      <circle cx="70" cy="72" r="1.8" fill="#475569" />

      {/* Left Blue Finger Loop Handle */}
      <g transform="translate(18, 72)">
        <path
          d="M 50 0 C 45 10, 35 15, 25 15 C 10 15, 0 25, 0 40 C 0 55, 12 65, 28 65 C 44 65, 52 50, 52 35 C 52 20, 50 10, 50 0 Z"
          fill="url(#blueHandle)"
          stroke="#1d4ed8"
          strokeWidth="2"
        />
        {/* Inner finger hole */}
        <ellipse cx="26" cy="40" rx="14" ry="16" fill="#2f67e8" fillOpacity="0.3" stroke="#1e40af" strokeWidth="2" />
      </g>

      {/* Right Blue Finger Loop Handle */}
      <g transform="translate(36, 42)">
        <path
          d="M 32 30 C 26 22, 18 15, 12 10 C 2 0, -8 4, -12 16 C -16 28, -8 40, 4 44 C 16 48, 26 40, 32 30 Z"
          fill="url(#blueHandle)"
          stroke="#1d4ed8"
          strokeWidth="2"
        />
        {/* Inner thumb hole */}
        <ellipse cx="0" cy="24" rx="10" ry="12" fill="#2f67e8" fillOpacity="0.3" stroke="#1e40af" strokeWidth="2" />
      </g>
    </svg>
  );
}

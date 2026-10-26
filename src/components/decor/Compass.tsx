// src/components/decor/Compass.tsx
export function Compass({
  size = 110,
  rotate = 15,
  className = "",
}: {
  size?: number;
  rotate?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 120"
      width={size}
      height={size * 1.2}
      className={`select-none pointer-events-none drop-shadow-[0_8px_6px_rgba(15,42,122,.35)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="metalLeg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e2e8f0" />
          <stop offset="50" stopColor="#94a3b8" />
          <stop offset="100" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="goldHead" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fef08a" />
          <stop offset="100" stopColor="#eab308" />
        </linearGradient>
      </defs>
      {/* Hinge screw / handle */}
      <rect x="47" y="4" width="6" height="16" rx="2" fill="url(#goldHead)" />
      <circle cx="50" cy="24" r="9" fill="url(#goldHead)" stroke="#ca8a04" strokeWidth="2" />
      <circle cx="50" cy="24" r="3" fill="#475569" />

      {/* Left leg (needle) */}
      <path
        d="M48 28 L24 105 L26 106 L51 32 Z"
        fill="url(#metalLeg)"
        stroke="#475569"
        strokeWidth="1.2"
      />
      {/* Sharp needle tip */}
      <polygon points="23,105 25,116 26,105" fill="#334155" />

      {/* Right leg (lead pencil holder) */}
      <path
        d="M52 28 L76 102 L73 103 L49 32 Z"
        fill="url(#metalLeg)"
        stroke="#475569"
        strokeWidth="1.2"
      />
      {/* Pencil sleeve & graphite */}
      <rect
        x="72"
        y="96"
        width="6"
        height="12"
        transform="rotate(22 72 96)"
        fill="#f59e0b"
        stroke="#b45309"
        strokeWidth="1"
      />
      <polygon points="76,108 78,117 74,115" fill="#0f172a" />

      {/* Crossbar adjustment wheel */}
      <line x1="38" y1="56" x2="62" y2="56" stroke="#64748b" strokeWidth="2.5" />
      <circle cx="50" cy="56" r="4.5" fill="url(#goldHead)" stroke="#a16207" strokeWidth="1.2" />
    </svg>
  );
}

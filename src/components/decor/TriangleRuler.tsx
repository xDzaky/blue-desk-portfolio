// src/components/decor/TriangleRuler.tsx
export function TriangleRuler({
  size = 180,
  rotate = -12,
  className = "",
}: {
  size?: number;
  rotate?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 160"
      width={size}
      height={size}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`select-none pointer-events-none drop-shadow-[0_12px_14px_rgba(15,42,122,0.35)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="yellowRulerGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="30%" stopColor="#fde047" />
          <stop offset="70%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <linearGradient id="yellowRulerEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Main Yellow Triangle Body with rounded corners */}
      <polygon
        points="14,14 14,146 146,146"
        fill="url(#yellowRulerGrad)"
        stroke="#ca8a04"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Inner Triangular Cutout Hole */}
      <polygon
        points="34,50 34,126 110,126"
        fill="#2f67e8"
        fillOpacity="0.3"
        stroke="#ca8a04"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Glossy Bevel Highlight */}
      <polygon
        points="16,16 16,144 144,144"
        fill="none"
        stroke="url(#yellowRulerEdge)"
        strokeWidth="2"
      />

      {/* Measurement Ticks along Vertical Edge (0 to 12cm) */}
      {Array.from({ length: 13 }).map((_, i) => {
        const y = 20 + i * 10;
        const isLong = i % 2 === 0;
        return (
          <line
            key={`v-${i}`}
            x1="14"
            y1={y}
            x2={isLong ? 26 : 20}
            y2={y}
            stroke="#713f12"
            strokeWidth={isLong ? "1.8" : "1.2"}
          />
        );
      })}

      {/* Measurement Ticks along Horizontal Edge (0 to 12cm) */}
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 20 + i * 10;
        const isLong = i % 2 === 0;
        return (
          <line
            key={`h-${i}`}
            x1={x}
            y1="146"
            x2={x}
            y2={isLong ? 134 : 140}
            stroke="#713f12"
            strokeWidth={isLong ? "1.8" : "1.2"}
          />
        );
      })}
    </svg>
  );
}

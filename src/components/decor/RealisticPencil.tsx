// src/components/decor/RealisticPencil.tsx
export function RealisticPencil({
  size = 230,
  rotate = 45,
  className = "",
}: {
  size?: number;
  rotate?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 50"
      width={size}
      height={size * 0.22}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`select-none pointer-events-none drop-shadow-[0_10px_12px_rgba(15,42,122,0.35)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Pink rubber eraser */}
        <linearGradient id="eraserGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#db2777" />
        </linearGradient>

        {/* Silver metal ferrule */}
        <linearGradient id="ferruleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="35%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        {/* Yellow shaft facets */}
        <linearGradient id="shaftTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
        <linearGradient id="shaftMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
        <linearGradient id="shaftBot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>

        {/* Sharpened cedar wood cone */}
        <linearGradient id="woodCone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="60%" stopColor="#fdba74" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>

      {/* 1. Pink Eraser (Rounded back end) */}
      <rect x="2" y="16" width="22" height="18" rx="4" fill="url(#eraserGrad)" stroke="#db2777" strokeWidth="1" />

      {/* 2. Metal Ferrule with crimp rings */}
      <rect x="24" y="15" width="24" height="20" rx="1.5" fill="url(#ferruleGrad)" stroke="#475569" strokeWidth="1" />
      <line x1="30" y1="15" x2="30" y2="35" stroke="#334155" strokeWidth="1.2" />
      <line x1="38" y1="15" x2="38" y2="35" stroke="#334155" strokeWidth="1.2" />

      {/* 3. Yellow Hexagonal Shaft (3 longitudinal facets for 3D depth) */}
      <rect x="48" y="15" width="130" height="6" fill="url(#shaftTop)" />
      <rect x="48" y="21" width="130" height="8" fill="url(#shaftMid)" />
      <rect x="48" y="29" width="130" height="6" fill="url(#shaftBot)" />
      <line x1="48" y1="15" x2="178" y2="15" stroke="#ca8a04" strokeWidth="0.8" />
      <line x1="48" y1="35" x2="178" y2="35" stroke="#854d0e" strokeWidth="0.8" />

      {/* 4. Sharpened Light Cedar Wood Cone */}
      <polygon points="178,15 220,25 178,35" fill="url(#woodCone)" stroke="#ea580c" strokeWidth="0.8" />

      {/* Wood scallops / carved facet cuts */}
      <path d="M 178 15 Q 182 20, 178 25 Q 182 30, 178 35" fill="none" stroke="#c2410c" strokeWidth="1" />

      {/* 5. Graphite / Lead Tip */}
      <polygon points="214,23.5 228,25 214,26.5" fill="#1e293b" />
    </svg>
  );
}

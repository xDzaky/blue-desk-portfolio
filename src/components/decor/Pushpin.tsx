// src/components/decor/Pushpin.tsx
export function Pushpin({
  color = "#ff5aa5",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={28}
      height={28}
      className={`select-none pointer-events-none drop-shadow-[0_4px_4px_rgba(0,0,0,.25)] ${className}`}
      aria-hidden="true"
    >
      {/* Pin shadow */}
      <ellipse cx="16" cy="28" rx="8" ry="3" fill="rgba(15,42,122,.25)" />
      {/* Pin needle tip */}
      <polygon points="15,16 17,16 16,27" fill="#64748b" />
      {/* Plastic base and head */}
      <ellipse cx="16" cy="16" rx="9" ry="4" fill={color} />
      <path d="M9 16 C11 11, 21 11, 23 16 Z" fill={color} />
      <ellipse cx="16" cy="11" rx="5" ry="2.5" fill="rgba(255,255,255,0.4)" />
      <circle cx="16" cy="8" r="4.5" fill={color} />
      <circle cx="15" cy="7" r="1.5" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}

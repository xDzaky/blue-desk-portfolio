// src/components/decor/BinderClip.tsx
export function BinderClip({
  color = "#ff5aa5",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 74" className={className} aria-hidden="true">
      <path
        d="M13 30 C4 14 12 2 32 2 C52 2 60 14 51 30"
        fill="none"
        stroke="#cdd2dc"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path d="M12 28 H52 L59 68 H5 Z" fill={color} />
      <path d="M12 28 H52 L54 42 H10 Z" fill="rgba(255,255,255,.30)" />
      <path d="M5 68 H59" stroke="rgba(0,0,0,.20)" strokeWidth="3" />
    </svg>
  );
}

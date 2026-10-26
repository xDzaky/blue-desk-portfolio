// src/components/decor/Tape.tsx
export function Tape({
  color = "rgba(255, 230, 140, 0.75)",
  rotate = -3,
  className = "",
}: {
  color?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: color,
        transform: `rotate(${rotate}deg)`,
      }}
      className={`h-4 w-20 shadow-[0_1px_2px_rgba(0,0,0,0.15)] border-t border-b border-white/40 ${className}`}
    />
  );
}

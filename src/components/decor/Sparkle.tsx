// src/components/decor/Sparkle.tsx
export function Sparkle({
  color = "#2b62f0",
  size = 20,
  withCircle = false,
  className = "",
}: {
  color?: string;
  size?: number;
  withCircle?: boolean;
  className?: string;
}) {
  const star = (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M12 0 L14.6 9.4 L24 12 L14.6 14.6 L12 24 L9.4 14.6 L0 12 L9.4 9.4 Z"
        fill={color}
      />
    </svg>
  );

  if (withCircle) {
    return (
      <div
        aria-hidden="true"
        className={`inline-grid place-items-center rounded-full bg-white p-1.5 shadow-[2px_2px_0_#0f2a7a] ${className}`}
      >
        {star}
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`inline-block ${className}`}>
      {star}
    </div>
  );
}

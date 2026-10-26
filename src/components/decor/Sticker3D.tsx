// src/components/decor/Sticker3D.tsx
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

type Props = {
  name: string;
  size?: number;
  rotate?: number;
  className?: string;
  fallback: LucideIcon;
};

export function Sticker3D({
  name,
  size = 120,
  rotate = 0,
  className = "",
  fallback: Fallback,
}: Props) {
  const [failed, setFailed] = useState(false);
  const style = { width: size, height: size, transform: `rotate(${rotate}deg)` };

  if (failed) {
    return (
      <span
        aria-hidden="true"
        style={style}
        className={`grid place-items-center rounded-2xl bg-[#ffc83d] text-[#14213d] shadow-[4px_4px_0_#0f2a7a] select-none pointer-events-none ${className}`}
      >
        <Fallback size={size * 0.5} strokeWidth={2.2} />
      </span>
    );
  }

  return (
    <img
      src={`/assets/3d/${name}.png`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
      style={style}
      className={`select-none pointer-events-none drop-shadow-[0_8px_6px_rgba(15,42,122,.35)] ${className}`}
    />
  );
}

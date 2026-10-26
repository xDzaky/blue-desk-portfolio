// src/components/about/SkillTile.tsx
import { getSimpleIcon } from "../../lib/icons";

interface SkillTileProps {
  name: string;
  icon: string;
  bgColor?: string;
}

export function SkillTile({ name, icon, bgColor }: SkillTileProps) {
  const iconData = getSimpleIcon(icon);

  // Default color fallback
  const bg = bgColor || (iconData ? `#${iconData.hex}` : "#2f67e8");

  return (
    <div
      title={name}
      className="group relative flex size-14 shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-navy text-white shadow-[3px_3px_0_#0f2a7a] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[5px_5px_0_#0f2a7a] cursor-pointer"
      style={{ backgroundColor: bg }}
    >
      {iconData ? (
        <svg
          viewBox="0 0 24 24"
          className="size-7 fill-current transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d={iconData.path} />
        </svg>
      ) : (
        <span className="font-mono text-base font-bold">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="sr-only">{name}</span>
    </div>
  );
}

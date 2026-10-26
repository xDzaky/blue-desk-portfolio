// src/components/nav/Dock.tsx
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Pill } from "./Pill";
import { profile } from "../../data/content";

const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "journey", label: "JOURNEY" },
  { id: "works", label: "WORKS" },
  { id: "certificates", label: "SERTIFIKAT" },
  { id: "services", label: "LAYANAN" },
  { id: "contact", label: "CONTACT" },
];

export function Dock() {
  const activeId = useScrollSpy(
    NAV_ITEMS.map((item) => item.id),
    300
  );

  return (
    <nav
      aria-label="Navigasi Utama"
      className="fixed top-0 left-0 right-0 z-[60] h-16 wood flex items-center justify-between px-3 md:px-8 border-b-2 border-black/30 shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
    >
      {/* Left Role Pill (desktop only) */}
      <div className="hidden lg:flex items-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-yellow bg-navy/80 px-4 py-1.5 font-mono text-[11px] font-bold tracking-[.14em] text-yellow uppercase shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          {profile.role}
        </span>
      </div>

      {/* Middle Scroll-Spy Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 max-w-full">
        {NAV_ITEMS.map((item) => (
          <Pill
            key={item.id}
            href={`#${item.id}`}
            active={activeId === item.id}
          >
            {item.label}
          </Pill>
        ))}
      </div>

      {/* Right Domain Text (desktop only) */}
      <div className="hidden md:flex items-center">
        <a
          href="#home"
          className="font-mono text-xs tracking-widest text-white/90 hover:text-yellow transition-colors"
        >
          {profile.domain}
        </a>
      </div>
    </nav>
  );
}

// src/components/common/Footer.tsx
import { profile } from "../../data/content";
import { getSimpleIcon } from "../../lib/icons";

interface FooterProps {
  onOpenCredits: () => void;
}

const FOOTER_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "works", label: "Works" },
  { id: "certificates", label: "Sertifikat" },
  { id: "services", label: "Layanan" },
  { id: "contact", label: "Contact" },
];

export function Footer({ onOpenCredits }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0a1e4a] text-white overflow-hidden border-t-4 border-dashed border-white/20">
      {/* Top Ruler Measurement Edge */}
      <div
        aria-hidden="true"
        className="w-full h-4 bg-navy/60 border-b border-white/10 flex items-start overflow-hidden select-none opacity-40"
      >
        <div className="w-full h-full flex justify-between px-2 font-mono text-[8px] text-white/70">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="h-2 w-[1px] bg-white/60" />
              <span className="text-[7px] leading-none mt-0.5">{i * 5}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Col 1: Identity & Stationery Stamp (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-2xl bg-yellow border-2 border-black/30 shadow-[3px_3px_0_rgba(0,0,0,0.3)] overflow-hidden shrink-0 rotate-[-3deg] hover:rotate-0 transition-transform">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="size-full object-cover object-top"
                />
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 rounded-full bg-yellow text-navy font-mono text-[10px] font-bold uppercase tracking-widest">
                  {profile.domain}
                </span>
                <h3 className="font-mono text-sm sm:text-base font-bold text-white tracking-wide mt-1">
                  {profile.name}
                </h3>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 font-bold">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                OPEN FOR WORK & FREELANCE
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/70">
                {profile.school}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-yellow uppercase tracking-widest border-b border-white/10 pb-1.5">
              Navigasi Meja
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 font-mono text-xs text-white/70">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-yellow transition-colors inline-block py-0.5"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Stationery Connect (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold text-yellow uppercase tracking-widest border-b border-white/10 pb-1.5">
              Terhubung Dengan Dzaki
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {profile.socials.map((soc) => {
                const iconData = getSimpleIcon(soc.label);
                return (
                  <a
                    key={soc.label}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 hover:bg-yellow hover:text-navy hover:border-yellow transition-all font-mono text-xs font-bold group"
                  >
                    {iconData && (
                      <svg
                        viewBox="0 0 24 24"
                        className="size-3.5 fill-current transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      >
                        <path d={iconData.path} />
                      </svg>
                    )}
                    <span>{soc.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenCredits}
                className="font-mono text-[11px] text-white/60 hover:text-yellow underline underline-offset-4 focus:outline-none transition-colors"
              >
                📜 Lihat Lisensi &amp; Kredit Aset 3D
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/60">
          <p>© {profile.year} {profile.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 hover:border-yellow hover:text-yellow transition-all"
            title="Kembali ke bagian atas halaman"
          >
            <span>Kembali ke Atas</span>
            <span className="font-bold">↑</span>
          </button>
        </div>
      </div>

      {/* Authentic Wooden Baseboard Trim at Bottom */}
      <div
        aria-hidden="true"
        className="w-full h-3 wood border-t border-black/30 shadow-inner"
      />
    </footer>
  );
}

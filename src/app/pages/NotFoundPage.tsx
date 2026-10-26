// src/app/pages/NotFoundPage.tsx
import { Link } from "react-router-dom";
import { CursorArrow } from "../../components/decor/CursorArrow";
import { BinderClip } from "../../components/decor/BinderClip";
import { tornBottom } from "../../lib/torn";

export function NotFoundPage() {
  return (
    <div className="mat min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="relative w-full max-w-md paper-shadow">
        <BinderClip className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 z-20" />

        <div
          style={{ clipPath: tornBottom("404-paper", 24, 4) }}
          className="paper paper-grid p-8 pt-12 pb-14 text-center rounded-xl border border-ink/20 relative"
        >
          <p className="pixel-title text-8xl text-pixel mb-2">404</p>
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-navy">
            HALAMAN TIDAK DITEMUKAN
          </h2>

          <p className="font-hand text-xl text-ink/80 mt-3 mb-8">
            Halaman ini sepertinya terselip entah di mana di atas meja...
          </p>

          <div className="relative inline-block">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border-2 border-navy bg-yellow px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-ink shadow-[4px_4px_0_#0f2a7a] hover:bg-yellow-deep active:translate-y-0.5"
            >
              KEMBALI KE MEJA UTAMA
            </Link>

            {/* Cursor pointing at button */}
            <div
              aria-hidden="true"
              className="absolute -right-8 -bottom-6 pointer-events-none"
            >
              <CursorArrow className="w-10 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

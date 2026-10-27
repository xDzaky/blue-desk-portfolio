// src/components/common/CreditsDialog.tsx
import { X } from "lucide-react";
import { useModal } from "../sx/Primitives";

export function CreditsDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const modal = useModal(isOpen, onClose);
  return (
    <dialog {...modal} className="sx-dialog sx-dialog--wide" aria-label="Kredit dan lisensi">
      <div className="sx-sheet">
        <button type="button" className="sx-close" onClick={onClose} aria-label="Tutup dialog kredit"><X size={18} strokeWidth={2.5} /></button>
        <p className="sx-sheet__eyebrow">Legal &amp; attributions</p>
        <h3 style={{ font: "400 36px/1 var(--sx-pixel)", color: "var(--sx-blue)", margin: "4px 44px 14px 0" }}>KREDIT &amp; LISENSI</h3>

        <div className="sx-card-info">
          <h4>1. Ilustrasi dekor</h4>
          <p>Alat tulis, laptop, mouse, bohlam, amplop, folder, dan ikon Journey digambar sebagai SVG khusus untuk proyek ini.</p>
        </div>
        <div className="sx-card-info">
          <h4>2. Tipografi (Google Fonts via Fontsource)</h4>
          <ul><li>Jersey 10, Pixelify Sans, Space Mono, Inter, Gochi Hand (SIL Open Font License)</li></ul>
        </div>
        <div className="sx-card-info">
          <h4>3. Ikon &amp; pustaka</h4>
          <p>Simple Icons (CC0, logo tetap milik pemiliknya), Lucide (ISC), Motion (MIT), Sonner (MIT), qrcode.react (ISC).</p>
        </div>
      </div>
    </dialog>
  );
}

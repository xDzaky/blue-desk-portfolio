// src/components/common/CreditsDialog.tsx
import { useRef, useEffect } from "react";
import { X } from "lucide-react";

interface CreditsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreditsDialog({ isOpen, onClose }: CreditsDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="m-auto backdrop:bg-navy/70 p-0 bg-transparent border-0 max-w-2xl w-[94vw] shadow-2xl focus:outline-none"
    >
      <div className="paper paper-grid p-6 sm:p-8 rounded-2xl border-4 border-wood shadow-[8px_8px_0_#0f2a7a] relative max-h-[85vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="sticky top-0 float-right size-8 rounded-full bg-yellow border-2 border-navy text-ink grid place-items-center hover:bg-yellow-deep transition-transform active:scale-90 z-20"
          aria-label="Tutup dialog kredit"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        <span className="font-mono text-xs font-bold uppercase tracking-widest text-pink">
          LEGAL & ATTRIBUTIONS
        </span>
        <h3 className="font-pixel text-4xl text-pixel mt-1 mb-4">
          KREDIT & LISENSI
        </h3>

        <div className="space-y-4 font-sans text-xs sm:text-sm text-ink/85 leading-relaxed">
          <div className="bg-white/80 p-4 rounded-xl border border-ink/15">
            <h4 className="font-mono font-bold text-navy uppercase">
              1. Microsoft Fluent Emoji (3D Style)
            </h4>
            <p className="mt-1">
              Hak Cipta © Microsoft Corporation. Dilisensikan di bawah MIT License. Digunakan untuk ikon alat tulis 3D (keyboard, folder, buku, pensil, dll.).
            </p>
          </div>

          <div className="bg-white/80 p-4 rounded-xl border border-ink/15">
            <h4 className="font-mono font-bold text-navy uppercase">
              2. Web Typography (Google Fonts via Fontsource)
            </h4>
            <ul className="mt-1 list-disc list-inside space-y-1 font-mono text-xs">
              <li><strong>Jersey 10</strong> (SIL Open Font License)</li>
              <li><strong>Pixelify Sans</strong> (SIL Open Font License)</li>
              <li><strong>Space Mono</strong> (SIL Open Font License)</li>
              <li><strong>Inter</strong> (SIL Open Font License)</li>
              <li><strong>Gochi Hand</strong> (SIL Open Font License)</li>
            </ul>
          </div>

          <div className="bg-white/80 p-4 rounded-xl border border-ink/15">
            <h4 className="font-mono font-bold text-navy uppercase">
              3. Vector Icons & Libraries
            </h4>
            <p className="mt-1">
              • <strong>Simple Icons</strong> (CC0 1.0 Universal) — logo brand teknologi.<br />
              • <strong>Lucide Icons</strong> (ISC License) — fallback ikon antarmuka.<br />
              • <strong>Motion</strong> (MIT License) — animasi fisika & layout.<br />
              • <strong>Sonner & QRCode.react</strong> (MIT / ISC).
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
}

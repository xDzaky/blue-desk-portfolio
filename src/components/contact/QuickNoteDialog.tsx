// src/components/contact/QuickNoteDialog.tsx
import React, { useRef, useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { profile } from "../../data/content";
import { getWhatsAppUrl } from "../../lib/whatsapp";

interface QuickNoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickNoteDialog({ isOpen, onClose }: QuickNoteDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [note, setNote] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;
    const msg = `Halo Dzaki! Saya membaca portfolio kamu dan ingin meninggalkan catatan cepat:\n\n"${note}"`;
    window.open(getWhatsAppUrl(profile.whatsapp, msg), "_blank");
    setNote("");
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="m-auto backdrop:bg-navy/60 backdrop:backdrop-blur-none p-0 bg-transparent border-0 max-w-md w-[92vw] shadow-2xl focus:outline-none"
    >
      <div className="paper paper-grid p-6 rounded-2xl border-4 border-wood shadow-[8px_8px_0_#0f2a7a] relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 size-8 rounded-full bg-yellow border-2 border-navy text-ink grid place-items-center hover:bg-yellow-deep transition-transform active:scale-90"
          aria-label="Tutup dialog"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="size-3 rounded-full bg-pink" />
          <h3 className="font-mono text-sm font-bold tracking-widest text-navy uppercase">
            QUICK NOTE CLIPBOARD
          </h3>
        </div>

        <p className="font-hand text-lg text-ink/80 mb-4">
          Tulis catatan singkat atau ide kolaborasi, langsung kirim ke WhatsApp!
        </p>

        <form onSubmit={handleSend} className="space-y-4">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
            rows={4}
            placeholder="Tulis pesan atau pertanyaanmu di sini..."
            className="w-full rounded-xl border-2 border-navy bg-white/90 p-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-pixel"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-mono text-xs font-bold uppercase rounded-lg border-2 border-navy bg-white text-ink hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs font-bold uppercase rounded-lg border-2 border-navy bg-yellow text-ink shadow-[2px_2px_0_#0f2a7a] hover:bg-yellow-deep active:translate-y-0.5"
            >
              <Send size={14} />
              Kirim WA
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

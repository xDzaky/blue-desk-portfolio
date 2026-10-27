// src/components/contact/QuickNoteDialog.tsx
import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { useModal } from "../sx/Primitives";
import { profile } from "../../data/content";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function QuickNoteDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const modal = useModal(isOpen, onClose);
  const [note, setNote] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;
    const msg = `Halo ${profile.shortName}! Saya membaca portfolio kamu dan ingin meninggalkan catatan cepat:\n\n"${note}"`;
    window.open(getWhatsAppUrl(profile.whatsapp, msg), "_blank");
    setNote("");
    onClose();
  };

  return (
    <dialog {...modal} className="sx-dialog" aria-label="Catatan cepat">
      <div className="sx-sheet">
        <button type="button" className="sx-close" onClick={onClose} aria-label="Tutup dialog"><X size={18} strokeWidth={2.5} /></button>
        <p className="sx-sheet__eyebrow">Quick note clipboard</p>
        <h3>Tinggalkan catatan singkat</h3>
        <p className="sx-lead sx-lead--ink" style={{ margin: "0 0 14px" }}>Tulis ide kolaborasi atau pertanyaan, langsung kirim ke WhatsApp!</p>
        <form onSubmit={send}>
          <textarea className="sx-input" value={note} onChange={(e) => setNote(e.target.value)} required rows={4} placeholder="Tulis pesan atau pertanyaanmu di sini..." aria-label="Isi catatan" />
          <div className="sx-actions" style={{ marginTop: 14 }}>
            <button type="button" className="sx-btn sx-btn--ghost" onClick={onClose}>Batal</button>
            <button type="submit" className="sx-btn"><Send size={14} /> Kirim WA</button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

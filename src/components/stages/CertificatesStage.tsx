// src/components/stages/CertificatesStage.tsx
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { Paperclip } from "../decor/StageArt";
import { SparkleBadge } from "../decor/CoverArt";
import { StageHead, useModal, vars } from "../sx/Primitives";
import { certificates } from "../../data/certificates";
import type { Certificate } from "../../data/types";

const ROT = [-2.2, 1.6, -1.4, 2.2, -1];

export function CertificatesStage() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const modal = useModal(!!selected, () => setSelected(null));

  return (
    <section id="certificates" aria-labelledby="certificates-title" className="sx-stage">
      <div className="sx-deco sx-hide-sm" style={{ left: "5%", top: 50, width: 30 }}><SparkleBadge color="#ff5aa5" /></div>

      <div className="sx-wrap">
        <StageHead
          eyebrow="VERIFIED CREDENTIALS"
          title="Sertifikat"
          lead="Klik tiket sertifikat untuk membuka pratinjau bukti digital."
          deco={<div style={{ width: 64, transform: "rotate(12deg)" }}><Paperclip /></div>}
        />

        <div className="sx-tickets">
          {certificates.map((c, i) => (
            <button key={c.id} type="button" className="sx-ticket" onClick={() => setSelected(c)} style={vars({ "--rot": `${ROT[i % ROT.length]}deg` })} aria-haspopup="dialog">
              <span className="sx-ticket__body" style={{ display: "flex" }}>
                <span className="sx-ticket__top"><span>NO. {String(i + 1).padStart(2, "0")}</span><span>{c.year}</span></span>
                <span className="sx-ticket__title" style={{ display: "block" }}>{c.title}</span>
                <span className="sx-ticket__issuer" style={{ display: "block" }}>Penerbit: {c.issuer}</span>
                <span className="sx-ticket__spacer" />
                <span className="sx-ticket__foot"><span>Lihat bukti lisensi</span><ExternalLink size={14} /></span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <dialog {...modal} className="sx-dialog" aria-label="Pratinjau sertifikat">
        {selected && (
          <div className="sx-sheet">
            <button type="button" className="sx-close" onClick={() => setSelected(null)} aria-label="Tutup sertifikat"><X size={18} strokeWidth={2.5} /></button>
            <p className="sx-sheet__eyebrow">Sertifikat • {selected.year}</p>
            <h3>{selected.title}</h3>
            <p className="sx-sheet__meta">Diterbitkan oleh: {selected.issuer}</p>
            {selected.image && <img className="sx-sheet__img" src={selected.image} alt={selected.title} />}
            <div className="sx-sheet__foot">
              <span>Pratinjau sertifikat</span>
              {selected.credentialUrl && (
                <a className="sx-btn" href={selected.credentialUrl} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Buka kredensial</a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

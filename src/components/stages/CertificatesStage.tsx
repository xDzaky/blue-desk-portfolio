// src/components/stages/CertificatesStage.tsx
import { useState, useRef, useEffect } from "react";
import { Paperclip, X, ExternalLink } from "lucide-react";
import { Sticker3D } from "../decor/Sticker3D";
import { Sparkle } from "../decor/Sparkle";
import { certificates } from "../../data/certificates";
import type { Certificate } from "../../data/types";

export function CertificatesStage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedCert) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [selectedCert]);

  return (
    <section
      id="certificates"
      aria-label="Sertifikat & Pencapaian"
      className="mat relative min-h-screen w-full py-24 px-4 sm:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Decorative 3D Paperclip at top-right */}
      <div className="absolute top-10 right-10 sm:right-24 z-20 pointer-events-none">
        <Sticker3D
          name="paperclip"
          size={120}
          rotate={-15}
          fallback={Paperclip}
        />
      </div>

      <Sparkle
        color="#ff5aa5"
        size={24}
        withCircle
        className="absolute top-20 left-12 z-10 animate-pulse"
      />

      <div className="relative z-10 w-full max-w-[1140px]">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-[.2em] text-pink">
            ★ VERIFIED CREDENTIALS
          </span>
          <h2 className="pixel-title text-5xl sm:text-7xl mt-1">
            SERTIFIKAT
          </h2>
          <p className="font-mono text-xs text-white/90 uppercase tracking-wider mt-2">
            Klik tiket sertifikat untuk membuka pratinjau bukti digital
          </p>
        </div>

        {/* Fan of Ticket Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certificates.map((cert, i) => {
            const rot = [ -3, 2, -2, 3, -1 ][i % 5];
            return (
              <button
                key={cert.id}
                type="button"
                onClick={() => setSelectedCert(cert)}
                style={{ transform: `rotate(${rot}deg)` }}
                className="group text-left relative paper-shadow transition-all duration-300 hover:rotate-0 hover:-translate-y-2 focus-visible:outline-4 focus-visible:outline-white"
              >
                {/* Ticket container with notched sides */}
                <div className="paper min-h-[220px] p-6 rounded-xl border-2 border-dashed border-ink/25 relative flex flex-col justify-between overflow-hidden">
                  {/* Left & Right ticket notches */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-3.5 top-1/2 -translate-y-1/2 size-7 rounded-full bg-mat border-r-2 border-ink/20"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-3.5 top-1/2 -translate-y-1/2 size-7 rounded-full bg-mat border-l-2 border-ink/20"
                  />

                  <div>
                    <div className="flex items-center justify-between font-mono text-[11px] font-bold text-pink uppercase tracking-widest border-b border-ink/15 pb-2">
                      <span>NO. {String(i + 1).padStart(2, "0")}</span>
                      <span>{cert.year}</span>
                    </div>

                    <h3 className="font-sans text-base font-bold text-ink mt-3 group-hover:text-pixel transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-ink/70 mt-1">
                      Penerbit: {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between text-xs font-mono font-bold text-pixel">
                    <span>LIHAT BUKTI LISENSI</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Native HTML5 <dialog> Modal */}
      <dialog
        ref={dialogRef}
        onClose={() => setSelectedCert(null)}
        className="m-auto backdrop:bg-navy/70 p-0 bg-transparent border-0 max-w-xl w-[94vw] shadow-2xl focus:outline-none"
      >
        {selectedCert && (
          <div className="paper paper-grid p-6 sm:p-8 rounded-2xl border-4 border-wood shadow-[8px_8px_0_#0f2a7a] relative">
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 size-8 rounded-full bg-yellow border-2 border-navy text-ink grid place-items-center hover:bg-yellow-deep transition-transform active:scale-90"
              aria-label="Tutup sertifikat"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            <span className="font-mono text-xs font-bold uppercase tracking-widest text-pink">
              SERTIFIKAT RESMI • {selectedCert.year}
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-ink mt-1">
              {selectedCert.title}
            </h3>
            <p className="font-mono text-xs text-ink/70 mt-0.5">
              Diterbitkan oleh: {selectedCert.issuer}
            </p>

            {/* Certificate Preview Image */}
            <div className="mt-4 overflow-hidden rounded-xl border-2 border-navy bg-white shadow-inner">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full aspect-[16/10] object-cover"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-ink/15">
              <span className="font-mono text-xs text-ink/60">
                Status: Terverifikasi
              </span>
              {selectedCert.credentialUrl && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border-2 border-navy bg-yellow px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-[2px_2px_0_#0f2a7a] hover:bg-yellow-deep"
                >
                  <ExternalLink size={14} />
                  Kunjungi Halaman Kredensial
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

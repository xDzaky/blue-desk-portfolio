// src/components/stages/ServicesStage.tsx
import { MessageSquare, Check } from "lucide-react";
import { Tape } from "../decor/Tape";
import { Sparkle } from "../decor/Sparkle";
import { services } from "../../data/services";
import { profile } from "../../data/content";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function ServicesStage() {
  return (
    <section
      id="services"
      aria-label="Layanan & Jasa Pembuatan Website"
      className="mat relative min-h-screen w-full py-24 px-4 sm:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      <Sparkle
        color="#ffc83d"
        size={24}
        withCircle
        className="absolute top-24 right-16 z-10 animate-pulse"
      />

      <div className="relative z-10 w-full max-w-[1140px]">
        {/* Header */}
        <div className="mb-14 text-center sm:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-[.2em] text-pink">
            ★ WORK WITH ME
          </span>
          <h2 className="pixel-title text-5xl sm:text-7xl mt-1">
            LAYANAN
          </h2>
          <p className="font-hand text-xl text-white/90 mt-2">
            Solusi website profesional, cepat, dan siap pakai untuk kebutuhan bisnismu.
          </p>
        </div>

        {/* 3 Folded Sticky Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((srv, idx) => {
            const rot = idx === 0 ? -2 : idx === 1 ? 1.5 : -1;
            const waText = `Halo Dzaki! Saya tertarik dengan paket layanan "${srv.name}". Boleh diskusi lebih lanjut?`;

            return (
              <div
                key={srv.name}
                style={{ transform: `rotate(${rot}deg)` }}
                className="relative paper-shadow transition-transform duration-300 hover:rotate-0 hover:-translate-y-2 flex flex-col"
              >
                {/* Tape at top center */}
                <Tape className="absolute -top-3 left-1/2 -translate-x-1/2 z-20" />

                {/* Popular Badge */}
                {srv.popular && (
                  <div className="absolute -top-3 right-4 z-20 rounded bg-pink px-2.5 py-1 font-mono text-[10px] font-bold text-white uppercase shadow-sm">
                    PALING DIMINATI
                  </div>
                )}

                {/* Folded Corner Sticky Note */}
                <div className="folded-corner bg-[#fffbe6] border-2 border-yellow-deep p-6 pt-8 rounded-t-xl flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-navy/70">
                      PAKET 0{idx + 1}
                    </span>
                    <h3 className="font-sans text-xl font-bold text-ink mt-1">
                      {srv.name}
                    </h3>
                    <p className="font-mono text-sm font-bold text-pink mt-2">
                      {srv.price}
                    </p>

                    {/* Features list */}
                    <ul className="mt-6 space-y-3">
                      {srv.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-ink/80"
                        >
                          <span className="size-4 rounded-full bg-emerald-500/20 text-emerald-700 grid place-items-center shrink-0 mt-0.5">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-4 border-t border-ink/10">
                    <a
                      href={getWhatsAppUrl(profile.whatsapp, waText)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy bg-yellow px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-[3px_3px_0_#0f2a7a] transition-transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <MessageSquare size={14} />
                      TANYA VIA WHATSAPP
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// src/components/stages/ServicesStage.tsx
import { MessageSquare } from "lucide-react";
import { Pencil, BlueRuler, SparkleBadge } from "../decor/CoverArt";
import { StageHead, Tape, vars } from "../sx/Primitives";
import { services } from "../../data/services";
import { profile } from "../../data/content";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function ServicesStage() {
  return (
    <section id="services" aria-labelledby="services-title" className="sx-stage">
      <div className="sx-deco sx-hide-sm" style={{ right: "6%", bottom: 50, width: 30 }}><SparkleBadge color="#2b62f0" /></div>

      <div className="sx-wrap">
        <div data-aos="fade-down" data-aos-duration="700">
          <StageHead
            eyebrow="WORK WITH ME"
            title="Layanan"
            lead="Solusi website profesional, cepat, dan siap pakai untuk kebutuhan bisnismu."
            deco={
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
                <div style={{ width: 120, transform: "rotate(-20deg) translateY(14px)" }}><Pencil /></div>
                <div style={{ width: 150, transform: "rotate(-6deg)" }}><BlueRuler /></div>
              </div>
            }
          />
        </div>

        <div className="sx-plans">
          {services.map((s, i) => (
            <article
              key={s.name}
              data-aos="fade-up"
              data-aos-delay={i * 140 + 80}
              className="sx-plan"
              style={vars({ "--rot": `${[-1.2, 0.8, 1.4][i % 3]}deg` })}
            >
              <Tape />
              {s.popular && <span className="sx-plan__flag">Paling diminati</span>}
              <div className="sx-plan__sheet">
                <span className="sx-plan__no">Paket {String(i + 1).padStart(2, "0")}</span>
                <h3 className="sx-plan__name">{s.name}</h3>
                {s.price && <p className="sx-plan__price">{s.price}</p>}
                <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <a
                  className="sx-btn sx-btn--block sx-plan__cta"
                  href={getWhatsAppUrl(profile.whatsapp, `Halo Dzaki! Saya tertarik dengan paket "${s.name}".`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare size={15} /> Tanya via WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/stages/ContactStage.tsx
import { Mail, MapPin } from "lucide-react";
import { Envelope } from "../decor/StageArt";
import { SparkleBadge } from "../decor/CoverArt";
import { ContactForm } from "../contact/ContactForm";
import { QrNote } from "../about/QrNote";
import { profile } from "../../data/content";
import { getSimpleIcon } from "../../lib/icons";

export function ContactStage({ onOpenCredits: _ }: { onOpenCredits?: () => void }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="sx-stage">
      <div className="sx-deco sx-hide-sm" style={{ left: "5%", top: 50, width: 30 }}><SparkleBadge color="#ff5aa5" /></div>

      <div className="sx-wrap">
        <header data-aos="fade-down" data-aos-duration="700" className="sx-head">
          <div className="sx-head__text">
            <p className="sx-eyebrow">★ INBOX &amp; COLLABORATION</p>
            <h2 id="contact-title" className="sx-title" style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              Let's Talk
              <span aria-hidden="true" style={{ width: "0.62em", height: "0.62em", borderRadius: "50%", background: "#ffc83d", border: "2px solid #0f2a7a", boxShadow: "3px 3px 0 #0f2a7a", display: "inline-grid", placeItems: "center", textShadow: "none" }}>
                <svg viewBox="0 0 24 24" width="64%" height="64%"><circle cx="8.5" cy="9.5" r="1.6" fill="#14213d" /><circle cx="15.5" cy="9.5" r="1.6" fill="#14213d" /><path d="M7 14 C9 18,15 18,17 14" fill="none" stroke="#14213d" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
            </h2>
            <p className="sx-lead">Punya ide website seru, tawaran freelance, atau sekadar ingin saling sapa?</p>
          </div>
          <div className="sx-head__deco" aria-hidden="true"><div style={{ width: 150, transform: "rotate(10deg)" }}><Envelope /></div></div>
        </header>

        <div className="sx-contact">
          <div data-aos="fade-right" data-aos-delay="100">
            <ContactForm />
          </div>

          <div data-aos="fade-left" data-aos-delay="200" className="sx-side">
            <QrNote url={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`} label="Scan untuk WhatsApp" />

            <div className="sx-social">
              <h3>Temukan aku di internet</h3>
              <div className="sx-social__grid">
                {profile.socials.map((s) => {
                  const icon = getSimpleIcon(s.label.toLowerCase());
                  return (
                    <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                      {icon && <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>}
                      {s.label}
                    </a>
                  );
                })}
              </div>
              <div className="sx-social__info">
                <p><MapPin size={15} />{profile.location}</p>
                <p><Mail size={15} />{profile.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

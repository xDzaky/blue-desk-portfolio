// src/components/common/Footer.tsx
import { Link } from "react-router-dom";
import { ArrowUp, ScrollText } from "lucide-react";
import { profile } from "../../data/content";
import { getSimpleIcon } from "../../lib/icons";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "works", label: "Works" },
  { id: "certificates", label: "Sertifikat" },
  { id: "services", label: "Layanan" },
  { id: "contact", label: "Contact" },
];

export function Footer({ onOpenCredits }: { onOpenCredits: () => void }) {
  return (
    <footer className="sx-footer">
      <div className="sx-footer__ruler" aria-hidden="true" />
      <div className="sx-footer__inner">
        <div className="sx-footer__grid">
          <div>
            <div className="sx-footer__id">
              <span className="sx-footer__avatar"><img src={profile.photo} alt="" loading="lazy" /></span>
              <div>
                <span className="sx-footer__domain">{profile.domain}</span>
                <p className="sx-footer__name">{profile.name}</p>
              </div>
            </div>
            <p className="sx-footer__tagline">{profile.tagline}</p>
            <div className="sx-footer__status">
              <span className="sx-footer__open">● Open for work &amp; freelance</span>
              <span>{profile.school}</span>
            </div>
          </div>

          <nav aria-label="Navigasi footer">
            <h4>Navigasi meja</h4>
            <ul className="sx-footer__links">
              {LINKS.map((l) => (
                <li key={l.id}><Link to={{ pathname: "/", hash: `#${l.id}` }}>→ {l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <h4>Terhubung dengan {profile.shortName}</h4>
            <div className="sx-footer__socials">
              {profile.socials.map((s) => {
                const icon = getSimpleIcon(s.label.toLowerCase());
                return (
                  <a key={s.label} className="sx-footer__soc" href={s.url} target="_blank" rel="noreferrer">
                    {icon && <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>}
                    {s.label}
                  </a>
                );
              })}
            </div>
            <button type="button" className="sx-link-btn" onClick={onOpenCredits}>
              <ScrollText size={13} style={{ verticalAlign: "-2px", marginRight: 6 }} />
              Lisensi &amp; kredit aset
            </button>
          </div>
        </div>

        <div className="sx-footer__bottom">
          <p style={{ margin: 0 }}>© {profile.year} {profile.name}. All rights reserved.</p>
          <button type="button" className="sx-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Kembali ke atas <ArrowUp size={14} />
          </button>
        </div>
      </div>
      <div className="sx-footer__trim sx-wood" aria-hidden="true" />
    </footer>
  );
}

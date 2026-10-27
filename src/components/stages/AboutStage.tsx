// src/components/stages/AboutStage.tsx
import { QRCodeSVG } from "qrcode.react";
import { FolderOpen } from "../decor/CoverArt";
import { Sparkle, SparkleBadge } from "../decor/CoverArt";
import { Tape } from "../sx/Primitives";
import { IdCard } from "../about/IdCard";
import { profile } from "../../data/content";
import { experiences, aboutText, techTiles, aboutPills } from "../../data/about";
import { getSimpleIcon } from "../../lib/icons";

export function AboutStage() {
  const waUrl = `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <section id="about" aria-labelledby="about-title" className="sx-stage">
      <div className="sx-deco sx-hide-sm" style={{ left: "4%", top: 46, width: 30 }}><SparkleBadge color="#ff5aa5" /></div>
      <div className="sx-deco sx-hide-sm" style={{ right: "5%", bottom: 44, width: 20 }}><Sparkle color="#ffc83d" /></div>

      <div className="sx-wrap" style={{ maxWidth: 1140 }}>
        <div className="sx-deco sx-hide-md" style={{ right: -34, top: -78, width: 190, transform: "rotate(16deg)", zIndex: 1 }}>
          <FolderOpen />
        </div>

        <div className="sx-board sx-wood">
          <div className="sx-notebook">
            <div className="sx-about">
              {/* ----- kiri: ID card + catatan ----- */}
              <aside>
                <IdCard
                  photo={profile.photo}
                  name={profile.name}
                  role={profile.role}
                  nickname={profile.shortName.toUpperCase()}
                  school={profile.school}
                  major={profile.major}
                  location={profile.location}
                  status="OPEN FOR WORK"
                />
              </aside>

              {/* ----- kanan: konten ----- */}
              <div className="sx-about__main">
                <div className="sx-about__title">
                  <h2 id="about-title" className="sx-title sx-title--sm">About Me</h2>
                </div>

                <div className="sx-cols">
                  <div>
                    <h3 className="sx-h">Pengalaman <i>▼</i></h3>
                    {experiences.map((e) => (
                      <div key={e.date} className="sx-exp">
                        <div className="sx-exp__meta">
                          <span className="sx-exp__date">{e.date}</span>
                          <span className="sx-exp__tag">{e.tag}</span>
                        </div>
                        <p className="sx-p">{e.text}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="sx-h">Tentang Saya <i>▼</i></h3>
                    <p className="sx-p" style={{ marginTop: 0 }}>{aboutText}</p>

                    <h3 className="sx-h" style={{ marginTop: 22 }}>Keahlian Utama <i>▼</i></h3>
                    <div className="sx-tiles">
                      {techTiles.map((t) => {
                        const icon = getSimpleIcon(t.icon);
                        return (
                          <div key={t.name} className="sx-tile" title={t.name} style={{ background: t.bg, color: t.color }}>
                            {icon ? (
                              <svg viewBox="0 0 24 24" role="img" aria-label={t.name}><path d={icon.path} /></svg>
                            ) : (
                              <span style={{ font: "700 12px var(--sx-mono)" }}>{t.name.slice(0, 2)}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="sx-about__foot">
                  <div className="sx-pills">
                    {aboutPills.map((p) => (
                      <span key={p} className="sx-pill sx-pill--paper">{p}</span>
                    ))}
                  </div>
                  <div className="sx-qr">
                    <div className="sx-qr__note">
                      <Tape style={{ width: 42, height: 12, top: -7, left: "50%", marginLeft: -21 }} />
                      <span className="sx-qr__code"><QRCodeSVG value={waUrl} size={72} fgColor="#0f2a7a" level="M" /></span>
                    </div>
                    <span className="sx-qr__label">← Scan WA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/stages/WorksStage.tsx
import { CursorArrow, Compass, Sparkle, SparkleBadge } from "../decor/CoverArt";
import { StageHead } from "../sx/Primitives";
import { WorkCard } from "../works/WorkCard";
import { projects } from "../../data/projects";

function Chevrons() {
  return (
    <span aria-hidden="true" style={{ display: "inline-flex", marginLeft: 10, verticalAlign: "middle" }}>
      {[0, 1, 2].map((i) => (
        <svg key={i} viewBox="0 0 24 24" width="30" height="30" style={{ marginLeft: i ? -12 : 0 }}>
          <path d="M8 4 L16 12 L8 20" fill="none" stroke="#fff" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(2px 2px 0 #0f2a7a)" }} />
        </svg>
      ))}
    </span>
  );
}

export function WorksStage() {
  return (
    <section id="works" aria-labelledby="works-title" className="sx-stage">
      <div className="sx-deco sx-hide-sm" style={{ right: "18%", top: 44, width: 30 }}><SparkleBadge color="#ff5aa5" /></div>
      <div className="sx-deco sx-hide-sm" style={{ left: "30%", bottom: 50, width: 20 }}><Sparkle color="#2b62f0" /></div>

      <div className="sx-wrap" style={{ maxWidth: 1200 }}>
        <header className="sx-head">
          <div className="sx-head__text">
            <p className="sx-eyebrow">★ SELECTED WORKS</p>
            <h2 id="works-title" className="sx-title">Contents<Chevrons /></h2>
          </div>
          <p className="sx-badge" style={{ margin: 0 }}>Klik kartu untuk buku detail project</p>
        </header>

        <div className="sx-works no-scrollbar">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} index={i} slug={p.slug} title={p.title} subtitle={p.subtitle} thumb={p.thumb} />
          ))}
        </div>

        <div className="sx-works-foot" aria-hidden="true">
          <div style={{ width: 54, transform: "rotate(-8deg)" }}><CursorArrow /></div>
          <div style={{ width: 90, transform: "rotate(22deg)" }}><Compass /></div>
        </div>
      </div>
    </section>
  );
}

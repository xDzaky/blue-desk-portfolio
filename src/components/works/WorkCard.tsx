// src/components/works/WorkCard.tsx
import { vars } from "../sx/Primitives";
import { Link } from "react-router-dom";
import { BinderClip } from "../decor/CoverArt";
import { seededRotation } from "../../lib/torn";

const LIFTS = ["0px", "-26px", "10px", "-16px"];

export function WorkCard({ index, slug, title, subtitle, thumb }: { index: number; slug: string; title: string; subtitle: string; thumb?: string }) {
  return (
    <Link
      to={`/works/${slug}`}
      aria-label={`Lihat project ${title}`}
      className="sx-card"
      style={vars({ "--rot": `${seededRotation(slug, 4)}deg`, "--lift": LIFTS[index % 4] })}
    >
      <span className="sx-card__clip"><BinderClip /></span>
      <div className="sx-card__shadow">
        <div className="sx-card__paper">
          <div className="sx-card__thumb">
            {thumb ? <img src={thumb} alt="" loading="lazy" /> : <div className="sx-card__ph">{title}</div>}
          </div>
          <p className="sx-card__no" aria-hidden="true">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="sx-card__title">{title}</h3>
          <p className="sx-card__sub">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

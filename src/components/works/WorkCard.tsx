// src/components/works/WorkCard.tsx
import { Link } from "react-router-dom";
import { BinderClip } from "../decor/BinderClip";
import { seededRotation } from "../../lib/torn";

export function WorkCard({
  index,
  slug,
  title,
  subtitle,
  thumb,
}: {
  index: number;
  slug: string;
  title: string;
  subtitle: string;
  thumb?: string;
}) {
  const rot = seededRotation(slug, 5);
  const lift = [0, -28, 12, -16][index % 4]; // naik-turun seperti referensi

  return (
    <Link
      to={`/works/${slug}`}
      aria-label={`Lihat project ${title}`}
      className="group relative block w-[240px] shrink-0 transition-transform duration-300 hover:z-30 hover:-translate-y-4 hover:rotate-0 focus-visible:outline-4 focus-visible:outline-white"
      style={{ transform: `translateY(${lift}px) rotate(${rot}deg)` }}
    >
      <BinderClip className="absolute -top-8 left-1/2 z-10 w-12 -translate-x-1/2 transition-transform duration-300 group-hover:-rotate-6" />
      <div className="paper-shadow">
        <div className="paper holes-left min-h-[330px] pl-9 pr-4 pb-5 pt-8 border-r border-b border-black/10">
          <div className="aspect-[4/3] overflow-hidden rounded-md border border-ink/10 bg-white">
            {thumb ? (
              <img
                src={thumb}
                alt=""
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <ThumbPlaceholder title={title} />
            )}
          </div>
          <p className="pixel-title pixel-title--gray mt-3 text-5xl">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1 font-sans text-base font-bold leading-tight text-ink group-hover:text-pixel transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-xs text-ink/70 line-clamp-2">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function ThumbPlaceholder({ title }: { title: string }) {
  return (
    <div className="grid size-full place-items-center bg-[repeating-linear-gradient(45deg,#e8eefc_0_10px,#fff_10px_20px)] p-3 text-center font-mono text-[10px] uppercase tracking-widest text-ink/60">
      {title}
    </div>
  );
}

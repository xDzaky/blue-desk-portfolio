// src/app/pages/WorkDetailPage.tsx
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Code2 } from "lucide-react";
import { projects } from "../../data/projects";
import { BinderClip, CursorArrow } from "../../components/decor/CoverArt";
import { Tape } from "../../components/sx/Primitives";

export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/404" replace />;

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const no = String(index + 1).padStart(2, "0");

  return (
    <div className="sx-stage sx-detail">
      <div className="sx-wrap" style={{ maxWidth: 1040 }}>
        <div className="sx-detail__bar">
          <Link to={{ pathname: "/", hash: "#works" }} className="sx-btn">
            <span style={{ width: 16, transform: "rotate(-30deg)" }}><CursorArrow /></span> Kembali ke meja
          </Link>
          <span className="sx-detail__count">Project {no} / {String(projects.length).padStart(2, "0")}</span>
        </div>

        <div className="sx-board sx-wood" style={{ maxWidth: "none" }}>
          <span className="sx-clip-top" aria-hidden="true"><BinderClip /></span>
          <article className="sx-spread">
            {/* halaman kiri */}
            <div className="sx-page">
              <p className="sx-page__no" aria-hidden="true">{no}</p>
              <h1 className="sx-page__title">{project.title}</h1>
              <p className="sx-page__meta">{project.year} • {project.role || "Fullstack Dev"}</p>
              <p className="sx-p" style={{ fontSize: 15 }}>{project.summary}</p>
              <div className="sx-stack">{project.stack.map((s) => <span key={s}>{s}</span>)}</div>

              {project.problem && (
                <>
                  <div className="sx-card-info"><h4 style={{ color: "var(--sx-pink)" }}>Problem</h4><p>{project.problem}</p></div>
                  <div className="sx-card-info" style={{ marginTop: 0 }}><h4 style={{ color: "var(--sx-blue)" }}>Solution</h4><p>{project.solution}</p></div>
                </>
              )}
              {project.results && project.results.length > 0 && (
                <div style={{ paddingTop: 14, borderTop: "1px dashed rgba(20,33,61,.2)" }}>
                  <h4 className="sx-label" style={{ margin: "0 0 8px" }}>Hasil &amp; dampak</h4>
                  <ul className="sx-p" style={{ margin: 0, paddingLeft: 18 }}>{project.results.map((r) => <li key={r}>{r}</li>)}</ul>
                </div>
              )}
            </div>

            {/* halaman kanan */}
            <div className="sx-page">
              <figure className="sx-polaroid" style={{ marginInline: "auto" }}>
                <Tape />
                {project.thumb ? <img src={project.thumb} alt={project.title} /> : <div className="sx-card__ph" style={{ aspectRatio: "16/10" }}>{project.title}</div>}
                <p>"{project.title} in action"</p>
              </figure>

              <div className="sx-page__actions">
                {project.live && <a className="sx-btn sx-btn--navy" href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live demo</a>}
                {project.repo && <a className="sx-btn sx-btn--ghost" href={project.repo} target="_blank" rel="noreferrer"><Code2 size={14} /> Source code</a>}
              </div>

              <nav className="sx-page__nav" aria-label="Project lainnya">
                <Link className="sx-bookmark" to={`/works/${prev.slug}`}><ArrowLeft size={14} /> Prev: {prev.title}</Link>
                <Link className="sx-bookmark sx-bookmark--next" to={`/works/${next.slug}`}>Next: {next.title} <ArrowRight size={14} /></Link>
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

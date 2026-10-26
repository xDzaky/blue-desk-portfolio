// src/app/pages/WorkDetailPage.tsx
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { projects } from "../../data/projects";
import { Tape } from "../../components/decor/Tape";
import { CursorArrow } from "../../components/decor/CursorArrow";
import { BinderClip } from "../../components/decor/BinderClip";

export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return <Navigate to="/404" replace />;
  }

  const project = projects[currentIndex];
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <div className="mat min-h-screen py-16 px-4 sm:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Return button styled as CursorArrow */}
      <div className="w-full max-w-5xl mb-6 flex items-center justify-between">
        <Link
          to="/#works"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-navy bg-yellow px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-[3px_3px_0_#0f2a7a] transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <CursorArrow className="w-4 h-4 rotate-[-45deg]" />
          <span>KEMBALI KE MEJA (WORKS)</span>
        </Link>

        <span className="font-mono text-xs text-white/80 uppercase">
          PROJECT NO. {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      {/* OPEN NOTEBOOK (2 Pages with central spiral & shadow crease) */}
      <div className="relative w-full max-w-5xl paper-shadow">
        {/* Binder Clip on top */}
        <div className="absolute -top-7 left-12 z-30 pointer-events-none">
          <BinderClip color="#ff5aa5" className="w-14" />
        </div>

        <div className="wood p-3 sm:p-5 rounded-[24px] shadow-2xl border-4 border-wood-dark">
          <div className="paper-grid rounded-[18px] border border-ink/15 overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative">
            {/* Center spine shadow (simulating open notebook crease) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-transparent via-black/15 to-transparent pointer-events-none z-10"
            />
            {/* Center spiral binding holes */}
            <div
              aria-hidden="true"
              className="hidden lg:flex flex-col justify-around absolute inset-y-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            >
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="size-3.5 rounded-full bg-mat-deep border border-ink/40 shadow-inner"
                />
              ))}
            </div>

            {/* ===== LEFT PAGE: Specification, Problem, Solution, Results ===== */}
            <div className="p-6 sm:p-10 lg:pr-12 border-b lg:border-b-0 lg:border-r border-ink/15 flex flex-col justify-between">
              <div>
                <p className="pixel-title pixel-title--gray text-6xl">
                  {String(currentIndex + 1).padStart(2, "0")}
                </p>

                <h1 className="pixel-title text-4xl sm:text-5xl mt-1 text-pixel">
                  {project.title}
                </h1>
                <p className="font-mono text-xs font-bold text-pink uppercase tracking-widest mt-1">
                  {project.year} • {project.role || "FULLSTACK DEV"}
                </p>

                <p className="font-sans text-sm sm:text-base text-ink/90 mt-4 leading-relaxed font-medium">
                  {project.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((st) => (
                    <span
                      key={st}
                      className="rounded-md border border-navy/20 bg-white px-2.5 py-1 font-mono text-[11px] font-bold text-ink"
                    >
                      {st}
                    </span>
                  ))}
                </div>

                {/* Problem & Solution */}
                {project.problem && (
                  <div className="mt-6 space-y-4">
                    <div className="bg-white/70 p-3.5 rounded-xl border border-ink/10">
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-pink">
                        PROBLEM:
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-ink/80 mt-1">
                        {project.problem}
                      </p>
                    </div>

                    <div className="bg-white/70 p-3.5 rounded-xl border border-ink/10">
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-pixel">
                        SOLUTION:
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-ink/80 mt-1">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Key Results */}
              {project.results && project.results.length > 0 && (
                <div className="mt-6 pt-4 border-t border-dashed border-ink/15">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-navy mb-2">
                    HASIL NYATA & DAMPAK:
                  </h4>
                  <ul className="space-y-1.5 font-sans text-xs text-ink/85">
                    {project.results.map((res, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="size-1.5 rounded-full bg-pixel mt-1.5 shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ===== RIGHT PAGE: Polaroids, Live Buttons & Source Code ===== */}
            <div className="p-6 sm:p-10 lg:pl-12 flex flex-col justify-between space-y-6">
              {/* Polaroid Photo Frame */}
              <div className="space-y-6">
                <div className="relative mx-auto max-w-[380px] bg-white p-4 pb-6 rounded-lg shadow-[4px_6px_12px_rgba(0,0,0,0.15)] border border-ink/10 -rotate-1">
                  <Tape className="absolute -top-3 left-1/2 -translate-x-1/2 z-20" />
                  <div className="aspect-[16/10] overflow-hidden rounded bg-gray-100 border border-ink/10">
                    <img
                      src={project.thumb}
                      alt={project.title}
                      className="size-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-center font-hand text-lg text-ink/80">
                    "{project.title} in action"
                  </p>
                </div>

                {/* Actions / Live Links */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-navy bg-navy px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0_#ffc83d] hover:bg-navy/90"
                    >
                      <ExternalLink size={14} />
                      LIVE DEMO SITE
                    </a>
                  )}

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-navy bg-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-ink shadow-[3px_3px_0_#0f2a7a] hover:bg-yellow/20"
                    >
                      <Code2 size={14} />
                      SOURCE CODE
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom: Bookmarks Ribbons (SEBELUMNYA & BERIKUTNYA with V-notch) */}
              <div className="pt-6 border-t border-ink/15 flex items-center justify-between gap-4">
                <Link
                  to={`/works/${prevProject.slug}`}
                  className="relative group inline-flex items-center gap-1.5 font-mono text-xs font-bold text-ink bg-pink/20 hover:bg-pink hover:text-white px-3 py-1.5 rounded transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>PREV: {prevProject.title}</span>
                </Link>

                <Link
                  to={`/works/${nextProject.slug}`}
                  className="relative group inline-flex items-center gap-1.5 font-mono text-xs font-bold text-ink bg-pink/20 hover:bg-pink hover:text-white px-3 py-1.5 rounded transition-colors"
                >
                  <span>NEXT: {nextProject.title}</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

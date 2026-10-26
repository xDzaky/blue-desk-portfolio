// src/components/stages/WorksStage.tsx
import { ChevronRight } from "lucide-react";
import { CursorArrow } from "../decor/CursorArrow";
import { Compass } from "../decor/Compass";
import { Sparkle } from "../decor/Sparkle";
import { WorkCard } from "../works/WorkCard";
import { projects } from "../../data/projects";

export function WorksStage() {
  return (
    <section
      id="works"
      aria-label="Koleksi Project & Karya"
      className="mat relative min-h-screen w-full py-24 px-4 sm:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Decorative CursorArrow at bottom left */}
      <div className="hidden lg:block absolute bottom-8 left-10 z-20 pointer-events-none">
        <CursorArrow className="w-16 animate-bounce" />
      </div>

      {/* Decorative Compass at bottom right */}
      <div className="hidden lg:block absolute bottom-6 right-8 z-20 pointer-events-none">
        <Compass size={110} rotate={25} />
      </div>

      {/* Sparkles */}
      <Sparkle
        color="#ff5aa5"
        size={24}
        withCircle
        className="absolute top-28 right-[18%] z-10 animate-pulse"
      />
      <Sparkle
        color="#2b62f0"
        size={20}
        className="absolute bottom-24 left-[28%] z-10"
      />

      <div className="relative z-10 w-full max-w-[1200px]">
        {/* Header: Title CONTENTS + animated ">>>" chevrons */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14">
          <div className="flex items-center gap-4">
            <h2 className="pixel-title text-5xl sm:text-7xl">
              CONTENTS
            </h2>

            {/* ">>>" Chevron trio */}
            <div
              aria-hidden="true"
              className="flex items-center -space-x-2 text-white drop-shadow-[2px_2px_0_#0f2a7a]"
            >
              <ChevronRight size={38} strokeWidth={3.5} className="animate-pulse" />
              <ChevronRight size={38} strokeWidth={3.5} className="animate-pulse delay-100" />
              <ChevronRight size={38} strokeWidth={3.5} className="animate-pulse delay-200" />
            </div>
          </div>

          <p className="font-mono text-xs font-bold text-yellow uppercase tracking-widest bg-navy/80 px-4 py-2 rounded-full border border-yellow self-start sm:self-auto">
            KLIK KARTU UNTUK BUKU DETAIL PROJECT
          </p>
        </div>

        {/* 4 WorkCards Row (Horizontal Scroll snap on mobile, Flex/Grid on Desktop) */}
        <div className="w-full overflow-x-auto no-scrollbar pb-12 pt-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center justify-start lg:justify-between gap-6 sm:gap-8 min-w-max lg:min-w-0 snap-x snap-mandatory">
            {projects.map((project, idx) => (
              <div key={project.slug} className="snap-center">
                <WorkCard
                  index={idx}
                  slug={project.slug}
                  title={project.title}
                  subtitle={project.subtitle}
                  thumb={project.thumb}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

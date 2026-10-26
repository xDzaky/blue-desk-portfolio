// src/components/stages/SkillsStage.tsx
import { Laptop, Lightbulb, Mouse } from "lucide-react";
import { Sticker3D } from "../decor/Sticker3D";
import { Sparkle } from "../decor/Sparkle";
import { Pushpin } from "../decor/Pushpin";
import { Tape } from "../decor/Tape";
import { skills, learningTopics } from "../../data/skills";
import { stats } from "../../data/content";
import { getSimpleIcon } from "../../lib/icons";
import { seededRotation, tornBottom } from "../../lib/torn";

const GROUPS = ["Frontend", "Backend", "Database", "Tools"] as const;

export function SkillsStage() {
  return (
    <section
      id="skills"
      aria-label="Keahlian & Toolbox"
      className="mat relative min-h-screen w-full py-20 px-4 sm:px-8 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* 3D Decor: Laptop top-right, Bulb left, Mouse bottom */}
      <div className="absolute top-12 right-6 sm:right-16 z-10 pointer-events-none">
        <Sticker3D
          name="laptop"
          size={140}
          rotate={-10}
          fallback={Laptop}
          className="scale-75 sm:scale-100"
        />
      </div>

      <div className="absolute top-32 left-4 sm:left-12 z-10 pointer-events-none">
        <Sticker3D
          name="bulb"
          size={120}
          rotate={15}
          fallback={Lightbulb}
          className="scale-75 sm:scale-100"
        />
      </div>

      <div className="hidden lg:block absolute bottom-14 right-10 z-10 pointer-events-none">
        <Sticker3D
          name="mouse"
          size={110}
          rotate={-20}
          fallback={Mouse}
        />
      </div>

      <Sparkle
        color="#ffc83d"
        size={22}
        className="absolute top-20 left-[25%] z-10 animate-pulse"
      />
      <Sparkle
        color="#ff5aa5"
        size={24}
        withCircle
        className="absolute bottom-24 left-[15%] z-10"
      />

      <div className="relative z-10 w-full max-w-[1180px]">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-[.2em] text-pink">
            ★ DEVELOPER GEAR
          </span>
          <h2 className="pixel-title text-5xl sm:text-7xl mt-1">
            TOOLBOX
          </h2>
        </div>

        {/* 4 Pinned Paper Cards (Frontend, Backend, Database, Tools) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {GROUPS.map((group, idx) => {
            const rot = seededRotation(group, 3);
            const groupSkills = skills.filter((s) => s.group === group);

            return (
              <div
                key={group}
                style={{ transform: `rotate(${rot}deg)` }}
                className="relative paper-shadow transition-transform duration-300 hover:rotate-0 hover:z-20"
              >
                {/* Pushpin pinned at top center */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                  <Pushpin
                    color={
                      idx === 0
                        ? "#ff5aa5"
                        : idx === 1
                        ? "#ffc83d"
                        : idx === 2
                        ? "#2b62f0"
                        : "#22c55e"
                    }
                  />
                </div>

                <div className="paper min-h-[300px] p-5 pt-8 rounded-xl border border-ink/15 flex flex-col justify-between">
                  <div>
                    <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-navy border-b border-ink/15 pb-2 mb-4 flex items-center justify-between">
                      <span>{group}</span>
                      <span className="text-[10px] text-ink/50">
                        {groupSkills.length} TOOLS
                      </span>
                    </h3>

                    {/* Skill Items Grid */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {groupSkills.map((item) => {
                        const iconData = getSimpleIcon(item.icon);
                        return (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-2 rounded-lg border border-ink/10 bg-white/70 p-2 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-md cursor-default"
                          >
                            {iconData ? (
                              <svg
                                viewBox="0 0 24 24"
                                className="size-4 shrink-0 fill-current text-ink/80 group-hover:text-pixel"
                                aria-hidden="true"
                              >
                                <path d={iconData.path} />
                              </svg>
                            ) : (
                              <span className="size-4 rounded bg-pixel/20 text-center font-mono text-[9px] font-bold text-pixel">
                                {item.name[0]}
                              </span>
                            )}
                            <span className="font-mono text-[11px] font-bold text-ink truncate">
                              {item.name}
                            </span>

                            {/* Tooltip on hover */}
                            {item.note && (
                              <div className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-navy px-2 py-1 font-mono text-[10px] text-white opacity-0 shadow transition-opacity group-hover:opacity-100">
                                {item.level}: {item.note}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-dashed border-ink/10 flex justify-between items-center text-[10px] font-mono text-ink/60">
                    <span>STATUS: ACTIVE</span>
                    <span className="size-2 rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEDANG DIPELAJARI Name Tags Strip */}
        <div className="mt-12 paper p-5 rounded-2xl border-2 border-navy/20 paper-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-navy shrink-0">
              ⚡ CURRENTLY EXPLORING:
            </span>

            <div className="flex flex-wrap gap-2.5">
              {learningTopics.map((topic, i) => {
                const rot = (i % 2 === 0 ? -1.5 : 1.5) * (i + 1);
                return (
                  <div
                    key={topic}
                    style={{ transform: `rotate(${rot}deg)` }}
                    className="relative inline-flex items-center gap-1.5 rounded bg-yellow px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-ink shadow-[2px_2px_0_#0f2a7a] border border-yellow-deep"
                  >
                    <Tape className="absolute -top-2 left-2 !w-8 !h-2.5" />
                    <span>{topic}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Real Statistics Tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {stats.map((st, i) => (
            <div
              key={st.label}
              style={{
                clipPath: tornBottom(`stat-${i}`, 18, 3),
                transform: `rotate(${i === 0 ? -2 : i === 1 ? 1.5 : -1}deg)`,
              }}
              className="paper px-6 py-4 rounded-t-lg border-t-2 border-x border-ink/15 text-center min-w-[140px] paper-shadow"
            >
              <div className="pixel-title text-4xl sm:text-5xl">{st.value}</div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/70 mt-1">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

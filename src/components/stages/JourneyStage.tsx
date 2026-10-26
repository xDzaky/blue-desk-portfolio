// src/components/stages/JourneyStage.tsx
import {
  GraduationCap,
  Trophy,
  Rocket,
  BookOpen,
  Star,
} from "lucide-react";
import { Sticker3D } from "../decor/Sticker3D";
import { Tape } from "../decor/Tape";
import { journey } from "../../data/journey";
import { tornBottom } from "../../lib/torn";

const ICON_FALLBACKS = {
  graduation: GraduationCap,
  trophy: Trophy,
  rocket: Rocket,
  books: BookOpen,
  star: Star,
};

export function JourneyStage() {
  return (
    <section
      id="journey"
      aria-label="Riwayat Perjalanan & Belajar"
      className="mat relative min-h-screen w-full py-20 px-3 sm:px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Wood Frame surrounding the notebook timeline */}
      <div className="relative z-10 w-full max-w-[1040px] wood rounded-[28px] p-4 sm:p-7 shadow-[0_16px_32px_rgba(0,0,0,0.35)] border-4 border-wood-dark">
        <div className="paper-grid holes-top rounded-b-[20px] pt-12 pb-12 px-4 sm:px-10 border border-ink/10 relative">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-[.2em] text-pink">
              ★ MILESTONE CHRONOLOGY
            </span>
            <h2 className="pixel-title text-4xl sm:text-6xl mt-1">
              JOURNEY
            </h2>
            <p className="font-hand text-xl text-ink/75 mt-1">
              Langkah perjalanan belajar dan eksplorasi coding dari awal hingga sekarang.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Center dashed blue line */}
            <div
              aria-hidden="true"
              className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 border-l-2 border-dashed border-pixel/70"
            />

            <div className="space-y-12">
              {journey.map((item, index) => {
                const isEven = index % 2 === 0;
                const Fallback = ICON_FALLBACKS[item.icon] || Star;

                return (
                  <div
                    key={item.title}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? "sm:flex-row-reverse" : ""
                    } gap-6 sm:gap-10`}
                  >
                    {/* Center 3D Milestone Pin */}
                    <div className="absolute left-6 sm:left-1/2 top-3 -translate-x-1/2 z-20">
                      <div className="size-12 sm:size-14 rounded-full bg-white border-2 border-navy grid place-items-center shadow-[3px_3px_0_#0f2a7a]">
                        <Sticker3D
                          name={item.icon}
                          size={36}
                          fallback={Fallback}
                        />
                      </div>
                    </div>

                    {/* Timeline Content Card */}
                    <div
                      className={`ml-14 sm:ml-0 sm:w-1/2 ${
                        isEven ? "sm:pl-10 text-left" : "sm:pr-10 sm:text-right"
                      }`}
                    >
                      <div
                        style={{
                          clipPath: tornBottom(`journey-${index}`, 24, 3),
                          transform: `rotate(${isEven ? 1.5 : -1.5}deg)`,
                        }}
                        className="relative paper p-5 pt-6 rounded-t-xl border border-ink/15 shadow-[4px_4px_0_rgba(15,42,122,0.2)] hover:rotate-0 transition-transform"
                      >
                        <Tape
                          className={`absolute -top-3 ${
                            isEven ? "left-6" : "right-6"
                          } z-10`}
                        />

                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-pink">
                          {item.date}
                        </span>
                        <h3 className="font-sans text-base sm:text-lg font-bold text-ink mt-1">
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-ink/75 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/stages/JourneyStage.tsx
import { JOURNEY_ICONS } from "../decor/StageArt";
import { Tape, vars } from "../sx/Primitives";
import { journey } from "../../data/journey";

export function JourneyStage() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="sx-stage">
      <div className="sx-wrap" style={{ maxWidth: 1040 }}>
        <div className="sx-board sx-wood">
          <div className="sx-notebook">
            <header style={{ textAlign: "center", marginBottom: 40 }}>
              <p className="sx-eyebrow">★ MILESTONE CHRONOLOGY</p>
              <h2 id="journey-title" className="sx-title sx-title--sm">Journey</h2>
              <p className="sx-lead sx-lead--ink" style={{ marginInline: "auto" }}>
                Langkah perjalanan belajar dan eksplorasi coding dari awal hingga sekarang.
              </p>
            </header>

            <ol className="sx-timeline" style={{ listStyle: "none", margin: "0 auto", padding: 0 }}>
              {journey.map((item, i) => {
                const Icon = JOURNEY_ICONS[item.icon] ?? JOURNEY_ICONS.star;
                return (
                  <li key={item.title} className="sx-step">
                    <span className="sx-step__badge" aria-hidden="true"><Icon /></span>
                    <div className="sx-step__card sx-note" style={vars({ "--rot": `${i % 2 ? -1 : 1}deg` })}>
                      <Tape />
                      <span className="sx-step__date">{item.date}</span>
                      <h3 className="sx-step__title">{item.title}</h3>
                      <p className="sx-p">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

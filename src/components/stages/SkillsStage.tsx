// src/components/stages/SkillsStage.tsx
import { Laptop, Bulb, Mouse } from "../decor/StageArt";
import { Sparkle, SparkleBadge } from "../decor/CoverArt";
import { Pushpin } from "../decor/Pushpin";
import { Tape, StageHead, vars } from "../sx/Primitives";
import { skills, learningTopics } from "../../data/skills";
import { stats } from "../../data/content";
import { getSimpleIcon } from "../../lib/icons";
import { seededRotation } from "../../lib/torn";

const GROUPS = ["Frontend", "Backend", "Database", "Tools"] as const;
const PIN_COLORS = ["#ff5aa5", "#ffc83d", "#2b62f0", "#22c55e"];

export function SkillsStage() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="sx-stage">
      <div className="sx-deco sx-hide-sm" style={{ left: "6%", bottom: 56, width: 30 }}><SparkleBadge color="#ff5aa5" /></div>
      <div className="sx-deco sx-hide-sm" style={{ left: "42%", top: 40, width: 20 }}><Sparkle color="#ffc83d" /></div>

      <div className="sx-wrap">
        <StageHead
          eyebrow="DEVELOPER GEAR"
          title="Toolbox"
          deco={
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
              <div style={{ width: 84, transform: "rotate(-8deg)" }}><Bulb /></div>
              <div style={{ width: 170, transform: "rotate(5deg)" }}><Laptop /></div>
            </div>
          }
        />

        <div className="sx-groups">
          {GROUPS.map((group, idx) => {
            const items = skills.filter((s) => s.group === group);
            return (
              <article key={group} className="sx-group sx-paper" style={vars({ "--rot": `${seededRotation(group, 1.6)}deg` })}>
                <span className="sx-group__pin"><Pushpin color={PIN_COLORS[idx]} /></span>
                <h3 className="sx-group__head">
                  <span>{group}</span>
                  <small>{items.length} TOOLS</small>
                </h3>
                <ul className="sx-chips" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {items.map((it) => {
                    const icon = getSimpleIcon(it.icon);
                    return (
                      <li key={it.name} className="sx-chip" tabIndex={0} data-tip={it.level ? `${it.level}: ${it.note ?? ""}` : undefined}>
                        {icon ? (
                          <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>
                        ) : (
                          <b style={{ font: "700 10px var(--sx-mono)", color: "var(--sx-blue)" }}>{it.name[0]}</b>
                        )}
                        {it.name}
                      </li>
                    );
                  })}
                </ul>
                <div className="sx-group__foot"><span>STATUS: ACTIVE</span><i className="sx-dot" /></div>
              </article>
            );
          })}
        </div>

        <div className="sx-strip sx-paper">
          <span className="sx-strip__label">⚡ Currently exploring:</span>
          <div className="sx-tags">
            {learningTopics.map((t, i) => (
              <span key={t} className="sx-tagnote" style={vars({ "--rot": `${(i % 2 ? 1 : -1) * (1 + (i % 3) * 0.5)}deg` })}>
                <Tape />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="sx-stats" style={{ position: "relative" }}>
          {stats.map((s, i) => (
            <div key={s.label} className="sx-stat" style={vars({ "--rot": `${[-2, 1.5, -1][i % 3]}deg` })}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
          <div className="sx-deco sx-hide-md" style={{ right: -150, bottom: -10, width: 80, transform: "rotate(-18deg)" }}><Mouse /></div>
        </div>
      </div>
    </section>
  );
}

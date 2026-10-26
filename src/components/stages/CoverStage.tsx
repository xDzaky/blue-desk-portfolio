// src/components/stages/CoverStage.tsx
// Cover "PORT/FOLIO 2026": semua elemen diletakkan di dalam artboard 16:9 (desktop) / 9:15 (mobile).
// Posisi dalam persen artboard, jadi komposisinya sama persis di semua lebar layar.
import { useState, type CSSProperties, type ReactNode } from "react";
import "../../styles/cover.css";
import { QuickNoteDialog } from "../contact/QuickNoteDialog";
import { tornBottom } from "../../lib/torn";
import { profile } from "../../data/content";
import {
  BinderClip,
  BlueRuler,
  BlueSwirl,
  Clipboard,
  Compass,
  CursorArrow,
  FolderOpen,
  Keyboard,
  Pencil,
  PinkDoodle,
  Scissors,
  SetSquare,
  Sparkle,
  SparkleBadge,
  TitleArt,
} from "../decor/CoverArt";

/** Satu kotak posisi. l/t/w/h dalam persen artboard, r = derajat, fs = font-size (boleh cqw). */
type Box = { l: string; t: string; w: string; h?: string; r?: number; fs?: string };

/** wide = layout desktop (16:9). tall = layout mobile (9:15), null = disembunyikan di mobile. */
function Spot({
  wide,
  tall,
  z = 20,
  delay = 0,
  children,
}: {
  wide: Box;
  tall: Box | null;
  z?: number;
  delay?: number;
  children: ReactNode;
}) {
  const s: Record<string, string | number> = {
    "--l": wide.l,
    "--t": wide.t,
    "--w": wide.w,
    "--r": `${wide.r ?? 0}deg`,
    "--z": z,
    "--d": `${delay}s`,
  };
  if (wide.h) s["--h"] = wide.h;
  if (wide.fs) s["--fs"] = wide.fs;
  if (tall) {
    s["--ml"] = tall.l;
    s["--mt"] = tall.t;
    s["--mw"] = tall.w;
    if (tall.h) s["--mh"] = tall.h;
    if (tall.r !== undefined) s["--mr"] = `${tall.r}deg`;
    if (tall.fs) s["--mfs"] = tall.fs;
  } else {
    s["--md"] = "none";
  }
  return (
    <div className="cv-spot" style={s as CSSProperties}>
      {children}
    </div>
  );
}

const HANDLES: [string, string][] = [
  ["0%", "0%"], ["50%", "0%"], ["100%", "0%"],
  ["0%", "50%"], ["100%", "50%"],
  ["0%", "100%"], ["50%", "100%"], ["100%", "100%"],
];

export function CoverStage() {
  const [quickNoteOpen, setQuickNoteOpen] = useState(false);

  return (
    <section id="home" aria-labelledby="cover-heading" className="cv-section">
      <div className="cv-artboard">
        <div className="cv-mat" aria-hidden="true" />
        <h1 id="cover-heading" className="cv-sr-only">
          Portfolio 2026 - {profile.name}
        </h1>

        {/* ============ DEKOR BELAKANG / TEPI (di atas matras, di bawah kertas) ============ */}
        <Spot wide={{ l: "-0.5%", t: "0%", w: "11.5%" }} tall={{ l: "-4%", t: "-1%", w: "22%" }} z={5} delay={0.25}>
          <div className="cv-in"><SetSquare /></div>
        </Spot>

        <Spot wide={{ l: "82.7%", t: "5.6%", w: "20%", r: 40 }} tall={{ l: "76%", t: "3%", w: "40%", r: 40 }} z={5} delay={0.3}>
          <div className="cv-in"><BlueRuler /></div>
        </Spot>

        {/* ============ KERTAS KUSUT BERLUBANG SPIRAL ============ */}
        <Spot
          wide={{ l: "12.8%", t: "10.4%", w: "75.2%", h: "74.9%", r: -0.4 }}
          tall={{ l: "5%", t: "15%", w: "90%", h: "67%", r: -0.4 }}
          z={10}
        >
          <div className="cv-paper-wrap">
            <div className="cv-paper" style={{ clipPath: tornBottom("cover-paper", 46, 1.3) }} />
          </div>
        </Spot>

        {/* ============ JUDUL: kotak seleksi + PORT/FOLIO ============ */}
        <Spot
          wide={{ l: "29.1%", t: "27.1%", w: "44.1%", h: "43.4%" }}
          tall={{ l: "10%", t: "24%", w: "80%", h: "27%" }}
          z={16}
        >
          <div className="cv-title-box">
            <div className="cv-select" aria-hidden="true" />
            {HANDLES.map(([x, y]) => (
              <span key={x + y} className="cv-handle" style={{ left: x, top: y }} aria-hidden="true" />
            ))}
            <div className="cv-title-art"><TitleArt /></div>
          </div>
        </Spot>

        {/* 2026 pink miring */}
        <Spot
          wide={{ l: "25.6%", t: "59.5%", w: "11%", r: -22, fs: "5.6cqw" }}
          tall={{ l: "6%", t: "50%", w: "30%", r: -20, fs: "13cqw" }}
          z={18}
          delay={0.6}
        >
          <div className="cv-in"><span className="cv-outline cv-pink" style={{ fontSize: "inherit" }}>2026</span></div>
        </Spot>

        {/* teks pink kanan atas judul (pengganti 作品集) */}
        <Spot
          wide={{ l: "62.2%", t: "28%", w: "11%", r: 2, fs: "3.1cqw" }}
          tall={{ l: "61%", t: "20.5%", w: "34%", r: 2, fs: "7.2cqw" }}
          z={18}
          delay={0.7}
        >
          <div className="cv-in">
            <span className="cv-outline cv-pink" style={{ display: "block", fontSize: "inherit" }}>Karya</span>
            <span className="cv-outline cv-pink" style={{ display: "block", fontSize: "inherit" }}>Project.</span>
          </div>
        </Spot>

        {/* doodle: panah melingkar biru, coretan pink, sparkle di atas kertas */}
        <Spot wide={{ l: "57%", t: "20.5%", w: "4.6%", r: 4 }} tall={null} z={16} delay={0.8}>
          <div className="cv-in"><BlueSwirl /></div>
        </Spot>
        <Spot wide={{ l: "11.2%", t: "27.6%", w: "4.4%", r: -8 }} tall={null} z={16} delay={0.8}>
          <div className="cv-in"><PinkDoodle /></div>
        </Spot>
        <Spot wide={{ l: "14.8%", t: "24.6%", w: "1.9%" }} tall={null} z={16} delay={0.85}>
          <div className="cv-in cv-twinkle"><Sparkle color="#2b62f0" /></div>
        </Spot>
        <Spot wide={{ l: "76.9%", t: "21.9%", w: "3.3%" }} tall={{ l: "8%", t: "17.5%", w: "8%" }} z={22} delay={0.9}>
          <div className="cv-in"><SparkleBadge color="#2b62f0" /></div>
        </Spot>
        <Spot wide={{ l: "15.8%", t: "51.6%", w: "3.1%" }} tall={{ l: "4%", t: "45%", w: "8%" }} z={22} delay={0.95}>
          <div className="cv-in"><SparkleBadge color="#ff5aa5" /></div>
        </Spot>

        {/* ============ TAG KIRI BAWAH, NAMA, TOMBOL ============ */}
        <Spot
          wide={{ l: "15.2%", t: "78.4%", w: "27%", fs: "max(0.78cqw, 8px)" }}
          tall={{ l: "10%", t: "58.5%", w: "52%", fs: "max(2.7cqw, 10px)" }}
          z={16}
          delay={1}
        >
          <div className="cv-in cv-tags">
            <span><i />Web Development</span>
            <span><i />Fullstack App</span>
            <span><i />UI Implementation</span>
            <span><i />RESTful API &amp; Database</span>
          </div>
        </Spot>

        <Spot
          wide={{ l: "58.5%", t: "77.3%", w: "29%", fs: "max(0.8cqw, 10px)" }}
          tall={{ l: "10%", t: "68.6%", w: "56%", fs: "max(2.7cqw, 10px)" }}
          z={17}
          delay={1.05}
        >
          <div className="cv-in cv-meta">
            <span className="cv-name">{profile.name}</span>
          </div>
        </Spot>

        {/* ============ DEKOR 3D DI ATAS KERTAS ============ */}
        {/* Folder kuning terbuka (kiri judul) */}
        <Spot wide={{ l: "14%", t: "22.8%", w: "16.6%", r: -20 }} tall={{ l: "-7%", t: "81.5%", w: "26%", r: -20 }} z={22} delay={0.45}>
          <div className="cv-in"><FolderOpen /></div>
        </Spot>

        {/* Pensil diagonal (kiri bawah) */}
        <Spot wide={{ l: "2.1%", t: "68.5%", w: "19%", r: -46 }} tall={{ l: "24%", t: "85%", w: "42%", r: -10 }} z={22} delay={0.5}>
          <div className="cv-in"><Pencil /></div>
        </Spot>

        {/* Clipboard NOTE (klik = catatan cepat) */}
        <Spot wide={{ l: "78.5%", t: "26.7%", w: "11.8%", r: -14 }} tall={{ l: "73%", t: "53.5%", w: "22%", r: -14 }} z={24} delay={0.55}>
          <div className="cv-in">
            <button type="button" className="cv-btn" onClick={() => setQuickNoteOpen(true)} title="Klik untuk menulis catatan cepat">
              <Clipboard />
              <span className="cv-sr-only">Buka catatan cepat</span>
            </button>
          </div>
        </Spot>

        {/* Gunting biru */}
        <Spot wide={{ l: "71.9%", t: "57.7%", w: "10.5%", r: 6 }} tall={{ l: "64%", t: "77%", w: "22%", r: 6 }} z={24} delay={0.6}>
          <div className="cv-in"><Scissors /></div>
        </Spot>

        {/* Kursor panah kuning */}
        <Spot wide={{ l: "60.6%", t: "66.2%", w: "5.4%", r: -14 }} tall={{ l: "55%", t: "51.5%", w: "11%", r: -14 }} z={26} delay={0.7}>
          <div className="cv-in cv-click"><CursorArrow /></div>
        </Spot>

        {/* Jangka (pojok kanan bawah, terpotong tepi) */}
        <Spot wide={{ l: "88.1%", t: "71.6%", w: "11.3%", r: -10 }} tall={null} z={26} delay={0.75}>
          <div className="cv-in"><Compass /></div>
        </Spot>

        {/* Keyboard (atas, menimpa tepi kertas) */}
        <Spot wide={{ l: "29.2%", t: "-7%", w: "34%", r: 2.5 }} tall={{ l: "17%", t: "-2%", w: "66%", r: 2.5 }} z={30} delay={0.2}>
          <div className="cv-in"><Keyboard /></div>
        </Spot>

        {/* Binder clip pink di tepi atas kertas */}
        <Spot wide={{ l: "68%", t: "3.9%", w: "8%", r: 2 }} tall={{ l: "66%", t: "8.5%", w: "14%", r: 2 }} z={32} delay={0.35}>
          <div className="cv-in"><BinderClip /></div>
        </Spot>
      </div>

      <QuickNoteDialog isOpen={quickNoteOpen} onClose={() => setQuickNoteOpen(false)} />
    </section>
  );
}

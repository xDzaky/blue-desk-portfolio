// src/components/sx/Primitives.tsx
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Style dengan CSS variable (mis. --rot) tanpa error tipe. */
export const vars = (o: Record<string, string | number>) => o as CSSProperties;

export function Tape({ tone, className = "", style }: { tone?: "pink" | "blue"; className?: string; style?: React.CSSProperties }) {
  return <i aria-hidden="true" className={`sx-tape ${tone ? `sx-tape--${tone}` : ""} ${className}`} style={style} />;
}

/** Kepala section: eyebrow + judul pixel + lead. Dekor ada di slot kanan (otomatis disembunyikan di mobile). */
export function StageHead({
  eyebrow,
  title,
  lead,
  deco,
  extra,
  small,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  deco?: ReactNode;
  extra?: ReactNode;
  small?: boolean;
}) {
  return (
    <header className="sx-head">
      <div className="sx-head__text">
        <p className="sx-eyebrow">★ {eyebrow}</p>
        <h2 className={`sx-title ${small ? "sx-title--sm" : ""}`}>{title}</h2>
        {lead && <p className="sx-lead">{lead}</p>}
        {extra && <div style={{ marginTop: 14 }}>{extra}</div>}
      </div>
      {deco && (
        <div className="sx-head__deco" aria-hidden="true">
          {deco}
        </div>
      )}
    </header>
  );
}

/** Hook untuk <dialog> native: showModal/close mengikuti state + klik backdrop menutup. */
export function useModal(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  const props = {
    ref,
    onClose,
    onClick: (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
  };
  return props;
}

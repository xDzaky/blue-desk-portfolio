// src/components/about/QrNote.tsx
import { QRCodeSVG } from "qrcode.react";
import { Tape } from "../sx/Primitives";

export function QrNote({ url, label = "SCAN UNTUK HUBUNGI" }: { url: string; label?: string }) {
  return (
    <div className="sx-qrnote">
      <Tape />
      <span className="sx-qrnote__code">
        <QRCodeSVG value={url} size={104} fgColor="#0f2a7a" level="M" />
      </span>
      <p>{label}</p>
    </div>
  );
}

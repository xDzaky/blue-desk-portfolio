// src/components/about/QrNote.tsx
import { QRCodeSVG } from "qrcode.react";
import { Tape } from "../decor/Tape";
import { tornBottom } from "../../lib/torn";

export function QrNote({
  url,
  label = "SCAN UNTUK HUBUNGI",
}: {
  url: string;
  label?: string;
}) {
  return (
    <div className="relative inline-block paper-shadow">
      <Tape className="absolute -top-3 left-1/2 -translate-x-1/2 z-10" />
      <div
        style={{ clipPath: tornBottom("qr-note", 20, 4) }}
        className="paper p-4 pt-6 text-center border-t border-ink/10"
      >
        <div className="inline-block bg-white p-2 border border-ink/15 rounded shadow-sm">
          <QRCodeSVG value={url} size={92} fgColor="#0f2a7a" level="M" />
        </div>
        <p className="mt-2 font-mono text-[10px] font-bold tracking-wider text-ink uppercase">
          {label}
        </p>
      </div>
    </div>
  );
}

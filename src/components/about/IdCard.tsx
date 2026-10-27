// src/components/about/IdCard.tsx
// ID card kuning dengan lanyard + secarik catatan sobek. Ukuran tetap, aman di semua layar.
import { useState } from "react";

interface IdCardProps {
  photo: string;
  name: string;
  role: string;
  nickname: string;
  school: string;
  major: string;
  location: string;
  status?: string;
}

function Lanyard() {
  return (
    <svg viewBox="0 0 54 100" className="sx-id__strap" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="idRibbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d98a0b" />
          <stop offset=".35" stopColor="#fbbf24" />
          <stop offset=".7" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#c27304" />
        </linearGradient>
        <linearGradient id="idSilver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".5" stopColor="#c3cad6" />
          <stop offset="1" stopColor="#7d8798" />
        </linearGradient>
      </defs>
      <path d="M13 4 H41 L38 78 H16 Z" fill="url(#idRibbon)" />
      <circle cx="27" cy="5" r="5" fill="none" stroke="url(#idSilver)" strokeWidth="2.6" />
      <path d="M13 0 L16 78 M41 0 L38 78" stroke="rgba(0,0,0,.2)" strokeWidth="1.4" fill="none" />
      <path d="M27 0 V78" stroke="rgba(255,255,255,.35)" strokeWidth="1.4" strokeDasharray="3 4" />
      <rect x="14" y="30" width="26" height="16" rx="4" fill="#fff" stroke="#c6cdd8" strokeWidth="1.2" />
      <rect x="18" y="33.5" width="7" height="9" rx="2" fill="#f59e0b" />
      <rect x="29" y="33.5" width="7" height="9" rx="2" fill="#f59e0b" />
      <rect x="21" y="76" width="12" height="8" rx="2.5" fill="url(#idSilver)" stroke="#475569" strokeWidth="1" />
      <path d="M23 84 H31 V92 C31 97 23 97 23 92 Z" fill="url(#idSilver)" stroke="#475569" strokeWidth="1" />
    </svg>
  );
}

export function IdCard({ photo, name, role, nickname, school, major, location, status = "OPEN FOR WORK" }: IdCardProps) {
  const [broken, setBroken] = useState(false);
  return (
    <div className="sx-id">
      <div className="sx-id__swing">
        <Lanyard />
        <div className="sx-id__card">
          <span className="sx-id__slot" aria-hidden="true" />
          {broken ? (
            <div className="sx-id__photo" role="img" aria-label={`Foto ${name}`} />
          ) : (
            <img className="sx-id__photo" src={photo} alt={`Foto ${name}`} loading="lazy" onError={() => setBroken(true)} />
          )}
          <div className="sx-id__plate">
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
      </div>

      <div className="sx-id__tag">
        <i aria-hidden="true" className="sx-tape" style={{ width: 56, height: 14, top: -8, left: 24 }} />
        <span className="sx-id__chip">
          {nickname} • RPL
        </span>
        <dl>
          <dt>Sekolah</dt>
          <dd>{school}</dd>
          <dt>Jurusan</dt>
          <dd>{major}</dd>
          <dt>Lokasi</dt>
          <dd>{location}</dd>
          <dt>Status</dt>
          <dd className="sx-open">{status}</dd>
        </dl>
      </div>
    </div>
  );
}

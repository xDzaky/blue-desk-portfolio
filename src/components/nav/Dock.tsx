// src/components/nav/Dock.tsx
// Navbar kayu di atas. Desktop (>=1100px): pill navigasi. Mobile/tablet: tombol hamburger + menu kertas.
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { profile } from "../../data/content";
import { getWhatsAppUrl } from "../../lib/whatsapp";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "works", label: "Works" },
  { id: "certificates", label: "Sertifikat" },
  { id: "services", label: "Layanan" },
  { id: "contact", label: "Contact" },
];
const IDS = NAV_ITEMS.map((i) => i.id);

export function Dock() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const activeId = useScrollSpy(IDS, onHome);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) burgerRef.current?.focus();
  }, []);

  // tutup saat pindah halaman
  useEffect(() => setOpen(false), [pathname]);

  // kunci scroll body + Escape + tutup jika layar melebar
  useEffect(() => {
    document.body.classList.toggle("sx-lock", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close(true);
    const mq = window.matchMedia("(min-width: 1100px)");
    const onMq = () => mq.matches && close();
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    drawerRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.body.classList.remove("sx-lock");
    };
  }, [open, close]);

  const current = onHome ? activeId : "";
  const waUrl = getWhatsAppUrl(profile.whatsapp, "Halo Dzaki! Saya melihat portfolio kamu dan ingin berdiskusi.");

  return (
    <>
      <nav aria-label="Navigasi utama" className="sx-nav sx-wood">
        <Link to={{ pathname: "/", hash: "#home" }} className="sx-brand" aria-label={`${profile.shortName} - ke atas`}>
          <span className="sx-brand__face" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <circle cx="8.5" cy="10" r="1.7" fill="#fff" />
              <circle cx="15.5" cy="10" r="1.7" fill="#fff" />
              <path d="M7 14.5 C9 18, 15 18, 17 14.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="sx-brand__name">{profile.shortName}</span>
          <span className="sx-brand__role">
            <i className="sx-brand__dot" aria-hidden="true" />
            {profile.role}
          </span>
        </Link>

        <div className="sx-nav__links">
          {NAV_ITEMS.map((item) => (
            <Link key={item.id} to={{ pathname: "/", hash: `#${item.id}` }} className="sx-pill" aria-current={current === item.id ? "true" : undefined}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link to={{ pathname: "/", hash: "#home" }} className="sx-nav__domain">
          {profile.domain}
        </Link>

        <button
          ref={burgerRef}
          type="button"
          className="sx-burger"
          aria-expanded={open}
          aria-controls="sx-drawer"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sx-burger__bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </nav>

      <div className="sx-backdrop" data-open={open} onClick={() => close()} aria-hidden="true" />
      <div id="sx-drawer" ref={drawerRef} className="sx-drawer" data-open={open} aria-hidden={!open}>
        <div className="sx-drawer__sheet">
          <p className="sx-drawer__label">★ Daftar isi meja</p>
          <ul className="sx-drawer__list">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.id}>
                <Link
                  to={{ pathname: "/", hash: `#${item.id}` }}
                  className="sx-drawer__link"
                  aria-current={current === item.id ? "true" : undefined}
                  onClick={() => close()}
                >
                  <span className="sx-drawer__num">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="sx-drawer__foot">
            <span className="sx-drawer__domain">{profile.domain}</span>
            <a className="sx-btn sx-btn--wa" href={waUrl} target="_blank" rel="noreferrer">
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

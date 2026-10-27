// src/app/Layout.tsx
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Dock } from "../components/nav/Dock";
import { SkipLink } from "../components/nav/SkipLink";
import { CreditsDialog } from "../components/common/CreditsDialog";
import { Footer } from "../components/common/Footer";

/** Scroll ke #hash setelah navigasi, atau ke atas saat pindah halaman. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior, block: "start" }), 60);
      return () => window.clearTimeout(t);
    }
    if (first.current) first.current = false;
    else window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  const [creditsOpen, setCreditsOpen] = useState(false);
  return (
    <div className="sx-app">
      <SkipLink />
      <ScrollManager />
      <Dock />
      <main className="sx-main">
        <Outlet context={{ onOpenCredits: () => setCreditsOpen(true) }} />
      </main>
      <Footer onOpenCredits={() => setCreditsOpen(true)} />
      <Toaster position="top-center" richColors />
      <CreditsDialog isOpen={creditsOpen} onClose={() => setCreditsOpen(false)} />
    </div>
  );
}

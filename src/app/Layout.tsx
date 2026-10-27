// src/app/Layout.tsx
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import { Dock } from "../components/nav/Dock";
import { SkipLink } from "../components/nav/SkipLink";
import { CreditsDialog } from "../components/common/CreditsDialog";
import { Footer } from "../components/common/Footer";

// Global ref for smooth programmatic scrolling
let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

/** Scroll ke #hash setelah navigasi, atau ke atas saat pindah halaman. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(id);
      if (target) {
        if (lenisInstance && !reduce) {
          lenisInstance.scrollTo(target, { offset: -70, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        }
      }
    } else {
      if (first.current) {
        first.current = false;
      } else {
        if (lenisInstance && !reduce) {
          lenisInstance.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      }
    }

    // Refresh AOS whenever path or hash changes
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  const [creditsOpen, setCreditsOpen] = useState(false);

  // Initialize Lenis Smooth Scroll & AOS
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      delay: 50,
      disable: () => reduce,
    });

    // 2. Initialize Lenis Smooth Scroll if not reduced motion
    if (!reduce) {
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      lenisInstance = lenis;

      // Connect Lenis scroll events to AOS updates
      lenis.on("scroll", () => {
        AOS.refresh();
      });

      let animationFrameId: number;
      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }
      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
        lenisInstance = null;
      };
    }
  }, []);

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


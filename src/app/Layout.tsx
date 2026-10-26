// src/app/Layout.tsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Dock } from "../components/nav/Dock";
import { SkipLink } from "../components/nav/SkipLink";
import { CreditsDialog } from "../components/common/CreditsDialog";
import { Footer } from "../components/common/Footer";

export function Layout() {
  const [creditsOpen, setCreditsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-mat-deep text-ink flex flex-col relative selection:bg-yellow selection:text-ink">
      <SkipLink />

      {/* Top Navbar / Header (moved from bottom dock) */}
      <Dock />

      {/* Main Content (with top padding for fixed top navbar) */}
      <main className="flex-1 pt-16">
        <Outlet context={{ onOpenCredits: () => setCreditsOpen(true) }} />
      </main>

      {/* Themed Blue Desk Stationery Footer */}
      <Footer onOpenCredits={() => setCreditsOpen(true)} />

      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />

      {/* Credits Dialog */}
      <CreditsDialog
        isOpen={creditsOpen}
        onClose={() => setCreditsOpen(false)}
      />
    </div>
  );
}

// src/components/stages/ContactStage.tsx
import { useState } from "react";
import { Mail } from "lucide-react";
import { Sticker3D } from "../decor/Sticker3D";
import { Sparkle } from "../decor/Sparkle";
import { ContactForm } from "../contact/ContactForm";
import { QrNote } from "../about/QrNote";
import { profile } from "../../data/content";
import { getSimpleIcon } from "../../lib/icons";

interface ContactStageProps {
  onOpenCredits?: () => void;
}

export function ContactStage({ onOpenCredits }: ContactStageProps) {
  return (
    <section
      id="contact"
      aria-label="Kontak & Diskusi"
      className="mat relative min-h-screen w-full py-24 pb-28 px-4 sm:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* 3D Envelope decoration */}
      <div className="absolute top-10 right-8 sm:right-20 z-10 pointer-events-none">
        <Sticker3D
          name="envelope"
          size={140}
          rotate={12}
          fallback={Mail}
          className="scale-75 sm:scale-100"
        />
      </div>

      <Sparkle
        color="#ff5aa5"
        size={24}
        withCircle
        className="absolute top-20 left-10 z-10 animate-pulse"
      />

      <div className="relative z-10 w-full max-w-[1140px]">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-[.2em] text-pink">
            ★ INBOX & COLLABORATION
          </span>
          <div className="flex items-center gap-4 mt-1 justify-center sm:justify-start">
            <h2 className="pixel-title text-5xl sm:text-7xl">
              LET'S TALK
            </h2>
            {/* Retro Smiley SVG badge */}
            <div
              aria-hidden="true"
              className="size-12 sm:size-14 rounded-full bg-yellow border-2 border-navy grid place-items-center shadow-[3px_3px_0_#0f2a7a]"
            >
              <svg viewBox="0 0 24 24" className="size-8 fill-ink">
                <circle cx="8.5" cy="9.5" r="1.5" />
                <circle cx="15.5" cy="9.5" r="1.5" />
                <path
                  d="M7 14 C9 18, 15 18, 17 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <p className="font-hand text-xl text-white/90 mt-2">
            Punya ide website seru, tawaran freelance, atau sekadar ingin saling sapa?
          </p>
        </div>

        {/* 2 Columns: Contact Form & QR / Social Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: QR Code + Social Tiles + Direct Info */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-8">
            <div className="w-full flex justify-center lg:justify-start">
              <QrNote
                url={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`}
                label="SCAN UNTUK WHATSAPP"
              />
            </div>

            {/* Social Media Link Tiles */}
            <div className="w-full bg-white/70 p-6 rounded-2xl border-2 border-navy/20 paper-shadow">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-navy mb-4">
                TEMUKAN AKU DI INTERNET:
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {profile.socials.map((soc) => {
                  const iconData = getSimpleIcon(soc.label.toLowerCase());
                  return (
                    <a
                      key={soc.label}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col items-center justify-center p-3 rounded-xl border-2 border-navy bg-white shadow-[2px_2px_0_#0f2a7a] hover:bg-yellow hover:-translate-y-1 transition-all"
                    >
                      {iconData && (
                        <svg
                          viewBox="0 0 24 24"
                          className="size-5 fill-ink group-hover:scale-110 transition-transform"
                          aria-hidden="true"
                        >
                          <path d={iconData.path} />
                        </svg>
                      )}
                      <span className="font-mono text-[10px] font-bold text-ink mt-1.5 uppercase">
                        {soc.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-ink/10 font-mono text-xs text-ink/80 space-y-1">
                <p>📍 {profile.location}</p>
                <p>✉️ {profile.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

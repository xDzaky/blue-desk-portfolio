// src/components/about/IdCard.tsx
import { motion, useReducedMotion } from "motion/react";
import { Sparkle } from "../decor/Sparkle";
import { Tape } from "../decor/Tape";
import { tornBottom } from "../../lib/torn";

interface IdCardProps {
  photo: string;
  name: string;
  role: string;
  school: string;
  major: string;
  location: string;
  status?: string;
}

export function IdCard({
  photo,
  name,
  role,
  school,
  major,
  location,
  status = "OPEN FOR WORK",
}: IdCardProps) {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex flex-col items-center">
      {/* ===== REALISTIC ORGANIC CLOTH LANYARD STRAP (NON-STIFF) ===== */}
      <motion.div
        style={{ transformOrigin: "50% 0%" }}
        className="relative z-20 flex flex-col items-center pointer-events-none -mt-10 sm:-mt-14"
        initial={reduce ? undefined : { rotate: 3 }}
        animate={
          reduce
            ? undefined
            : {
                rotate: [3, -3, 2, -1.5, 0],
                transition: { duration: 3.5, ease: "easeOut" },
              }
        }
      >
        {/* Soft draped cloth strap SVG with realistic curve and folds */}
        <svg
          viewBox="0 0 90 170"
          className="w-20 sm:w-24 h-36 sm:h-44 drop-shadow-[0_6px_8px_rgba(0,0,0,0.3)] overflow-visible"
          aria-hidden="true"
        >
          <defs>
            {/* Woven textile pattern */}
            <pattern
              id="lanyardRibbon"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(35)"
            >
              <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(0,0,0,0.14)" strokeWidth="1.8" />
              <line x1="3" y1="0" x2="3" y2="6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
            </pattern>

            {/* Depth gradient along the ribbon */}
            <linearGradient id="clothGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="25%" stopColor="#fbbf24" />
              <stop offset="55%" stopColor="#f59e0b" />
              <stop offset="85%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Chrome metallic gradient for the swivel clip */}
            <linearGradient id="silverClip" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#cbd5e1" />
              <stop offset="70%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>

          {/* Organic, gently curved hanging ribbon (flexing naturally with gravity) */}
          <path
            d="M 36 -20 Q 33 25, 38 70 Q 42 105, 38 135 L 52 135 Q 56 105, 52 70 Q 47 25, 50 -20 Z"
            fill="url(#clothGold)"
          />
          <path
            d="M 36 -20 Q 33 25, 38 70 Q 42 105, 38 135 L 52 135 Q 56 105, 52 70 Q 47 25, 50 -20 Z"
            fill="url(#lanyardRibbon)"
          />

          {/* Ribbon contour shadows and soft highlights */}
          <path
            d="M 36 -20 Q 33 25, 38 70 Q 42 105, 38 135"
            fill="none"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="2"
          />
          <path
            d="M 50 -20 Q 47 25, 52 70 Q 56 105, 52 135"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
          />

          {/* White Plastic Slider Buckle (like in Sample Image 2) */}
          <g transform="translate(32, 54)">
            <rect
              x="0"
              y="0"
              width="26"
              height="18"
              rx="5"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              filter="drop-shadow(0 2px 3px rgba(0,0,0,0.2))"
            />
            {/* Inner slots */}
            <rect x="4" y="3.5" width="7" height="11" rx="2" fill="#f59e0b" />
            <rect x="15" y="3.5" width="7" height="11" rx="2" fill="#f59e0b" />
          </g>

          {/* Silver Swivel Trigger Snap Hook / Lobster Clasp */}
          <g transform="translate(37, 134)">
            {/* Upper swivel hoop */}
            <rect
              x="2"
              y="0"
              width="12"
              height="7"
              rx="2.5"
              fill="url(#silverClip)"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* Swivel neck pivot */}
            <rect x="6" y="7" width="4" height="5" fill="#64748b" />
            {/* Clasp hook body */}
            <path
              d="M 4 12 C 1 17, 3 28, 8 30 C 13 28, 15 17, 12 12 Z"
              fill="url(#silverClip)"
              stroke="#1e293b"
              strokeWidth="1.2"
            />
            {/* Trigger lever */}
            <circle cx="11.5" cy="18" r="2.2" fill="#f1f5f9" stroke="#475569" strokeWidth="0.8" />
          </g>
        </svg>
      </motion.div>

      {/* ===== ID CARD BODY (HANGING WITH RELAXED TILT) ===== */}
      <motion.div
        style={{ transformOrigin: "50% -24px" }}
        className="relative -mt-6 sm:-mt-8 z-30"
        initial={reduce ? undefined : { rotate: -8 }}
        animate={
          reduce
            ? undefined
            : {
                rotate: [-8, -6, -9, -7, -8],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }
        }
        whileHover={
          reduce
            ? undefined
            : { rotate: 0, scale: 1.02, transition: { duration: 0.3 } }
        }
      >
        {/* Sparkle sticker at top-left of the card holder */}
        <div className="absolute -top-3 -left-3 z-40">
          <Sparkle color="#2b62f0" size={24} withCircle className="shadow-md" />
        </div>

        {/* Yellow Plastic Badge Holder (matching Sample Image 2) */}
        <div className="w-[195px] sm:w-[215px] rounded-[24px] bg-[#fbbf24] p-3 sm:p-3.5 shadow-[6px_8px_0_#0f2a7a] border-2 border-[#f59e0b] relative">
          {/* Lanyard punch hole slot at top center */}
          <div
            aria-hidden="true"
            className="mx-auto mb-2 h-2.5 w-12 rounded-full bg-[#d97706] shadow-inner border border-black/10"
          />

          {/* Photo Frame (white border with soft rounded corners) */}
          <div className="aspect-[3/4] overflow-hidden rounded-[16px] border-4 border-white bg-white shadow-inner">
            <img
              src={photo}
              alt={`Foto ${name}`}
              className="size-full object-cover object-top"
            />
          </div>

          {/* Name & Role beneath photo - prominent and unobstructed */}
          <div className="mt-2.5 text-center bg-white/70 py-1.5 px-2 rounded-xl border border-black/10 backdrop-blur-xs">
            <p className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-ink leading-tight">
              {name}
            </p>
            <p className="font-hand text-sm sm:text-base text-navy/90 font-bold leading-none mt-1">
              {role}
            </p>
          </div>
        </div>

        {/* ===== TORN PAPER NOTE (Positioned below the yellow card so the name is 100% visible) ===== */}
        <div className="absolute top-[94%] -left-6 sm:-left-8 z-40 w-[190px] sm:w-[210px] paper-shadow rotate-[-4deg] transition-transform hover:rotate-0">
          <Tape className="absolute -top-2.5 left-6 z-10 !w-12 !h-3" />
          <div
            style={{ clipPath: tornBottom("bio-note-sample-v2", 22, 4) }}
            className="paper p-3 pt-3.5 border-t-2 border-l border-ink/15 text-[10px] sm:text-[11px] font-mono leading-snug space-y-0.5"
          >
            {/* Highlighted Pink/Red Badge */}
            <div className="inline-block bg-pink/20 text-pink font-bold px-1.5 py-0.5 rounded text-[9px] mb-1 uppercase tracking-wider">
              DZAKI / 18 TH • RPL
            </div>

            <p className="text-ink/90 truncate">
              <span className="font-bold text-ink/60">SEKOLAH:</span> {school}
            </p>
            <p className="text-ink/90 truncate">
              <span className="font-bold text-ink/60">JURUSAN:</span> {major}
            </p>
            <p className="text-ink/90 truncate">
              <span className="font-bold text-ink/60">LOKASI:</span> {location}
            </p>
            <p className="text-emerald-700 font-bold truncate">
              <span className="text-ink/60">STATUS:</span> {status}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

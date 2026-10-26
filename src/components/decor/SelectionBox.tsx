// src/components/decor/SelectionBox.tsx
import React from "react";

export function SelectionBox({ children }: { children: React.ReactNode }) {
  const h = "absolute size-2.5 border border-[#3b82f6] bg-white";
  return (
    <div className="relative inline-block border border-[#3b82f6] p-4 sm:p-8">
      {[
        "-left-[5px] -top-[5px]",
        "left-1/2 -top-[5px] -translate-x-1/2",
        "-right-[5px] -top-[5px]",
        "-left-[5px] top-1/2 -translate-y-1/2",
        "-right-[5px] top-1/2 -translate-y-1/2",
        "-left-[5px] -bottom-[5px]",
        "left-1/2 -bottom-[5px] -translate-x-1/2",
        "-right-[5px] -bottom-[5px]",
      ].map((p) => (
        <span key={p} aria-hidden="true" className={`${h} ${p}`} />
      ))}
      {children}
    </div>
  );
}

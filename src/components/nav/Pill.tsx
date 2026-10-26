import React from "react";
import { cn } from "../../lib/cn";

interface PillProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  paper?: boolean;
  children: React.ReactNode;
}

export function Pill({ active, paper, className, children, ...props }: PillProps) {
  return (
    <a
      {...props}
      aria-current={active ? "true" : undefined}
      className={cn("pill", paper && "pill--paper", className)}
    >
      {children}
    </a>
  );
}

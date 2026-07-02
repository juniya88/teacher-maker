import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "blue" | "green" | "amber" | "gray";
};

const tones = {
  blue: "bg-primary-light text-primary",
  green: "bg-green-50 text-green-700",
  amber: "bg-amber-50 text-amber-700",
  gray: "bg-slate-100 text-slate-700",
};

export function Badge({ children, tone = "blue" }: BadgeProps) {
  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-sm font-semibold", tones[tone])}>
      {children}
    </span>
  );
}

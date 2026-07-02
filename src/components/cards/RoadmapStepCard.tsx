"use client";

import { CheckCircle2, Circle } from "lucide-react";
import type { RoadmapStep } from "@/data/types";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/ui/CopyButton";

type RoadmapStepCardProps = {
  step: RoadmapStep;
  completed: boolean;
  onToggle: () => void;
};

export function RoadmapStepCard({ step, completed, onToggle }: RoadmapStepCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border bg-white p-6 shadow-card transition hover:shadow-lift",
        completed ? "border-green-200" : "border-line",
      )}
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-sm font-bold text-primary">STEP {step.stepNumber}</span>
          <h3 className="mt-1 text-xl font-bold text-ink">{step.title}</h3>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            "inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            completed
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-line bg-white text-slate-700 hover:bg-slate-50",
          )}
          aria-pressed={completed}
        >
          {completed ? <CheckCircle2 aria-hidden size={18} /> : <Circle aria-hidden size={18} />}
          {completed ? "완료됨" : "완료 체크"}
        </button>
      </div>

      <p className="text-base leading-7 text-slate-600">{step.description}</p>

      <ul className="mt-5 space-y-2">
        {step.checklist.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
            <CheckCircle2 className="mt-0.5 flex-none text-primary" aria-hidden size={17} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {step.example ? (
        <div className="mt-5 rounded-xl bg-surface p-4 text-sm leading-6 text-slate-700">
          <strong className="block text-slate-900">예시</strong>
          {step.example}
        </div>
      ) : null}

      {step.prompt ? (
        <div className="mt-5 rounded-xl border border-line bg-slate-50 p-4">
          <pre className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
            {step.prompt}
          </pre>
          <CopyButton text={step.prompt} className="mt-4" />
        </div>
      ) : null}
    </article>
  );
}

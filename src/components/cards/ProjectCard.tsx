"use client";

import { CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { CopyButton } from "@/components/ui/CopyButton";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  completed: boolean;
  onToggle: () => void;
};

export function ProjectCard({ project, completed, onToggle }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-line bg-white p-6 shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge tone={project.difficulty === "easy" ? "green" : "amber"}>
              {project.difficultyLabel}
            </Badge>
            <Badge tone="gray">{project.estimatedMinutes}분</Badge>
          </div>
          <h3 className="text-2xl font-bold text-ink">{project.title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            "inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition",
            completed
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-line bg-white text-slate-700 hover:bg-slate-50",
          )}
          aria-pressed={completed}
        >
          <CheckCircle2 aria-hidden size={18} />
          {completed ? "해봄" : "해보기"}
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <InfoList title="추천 대상" items={project.recommendedFor} />
        <InfoList title="배울 수 있는 것" items={project.learnings} />
      </div>

      <div className="mt-6 rounded-xl border border-line bg-slate-50 p-4">
        <h4 className="mb-3 font-bold text-ink">기본 프롬프트</h4>
        <pre className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
          {project.basePrompt}
        </pre>
        <CopyButton text={project.basePrompt} className="mt-4" />
      </div>

      <div className="mt-5">
        <h4 className="mb-3 font-bold text-ink">수정 프롬프트</h4>
        <div className="grid gap-3">
          {project.revisionPrompts.map((prompt) => (
            <div
              key={prompt}
              className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm leading-6 text-slate-700">{prompt}</span>
              <CopyButton text={prompt} label="복사" className="sm:flex-none" />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl bg-surface p-4">
      <h4 className="mb-2 font-bold text-ink">{title}</h4>
      <ul className="space-y-2 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

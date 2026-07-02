"use client";

import { roadmapSteps } from "@/data/roadmap";
import { RoadmapStepCard } from "@/components/cards/RoadmapStepCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useLocalProgress } from "@/hooks/useLocalProgress";

export function RoadmapSection() {
  const { progress, toggleStep } = useLocalProgress();

  return (
    <section id="roadmap" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="font-bold text-primary">30분 로드맵</p>
            <h2 className="mt-3 text-3xl font-black text-ink md:text-4xl">
              순서대로 따라가면 첫 앱을 만들 수 있습니다.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              각 단계를 끝낼 때마다 완료 체크를 누르세요. 진행 상태는 이 브라우저에만
              저장됩니다.
            </p>
            <div className="mt-6">
              <ProgressBar completed={progress.completedStepIds.length} total={roadmapSteps.length} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.canva.com/ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-xl border border-line px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Canva AI 열기
              </a>
              <a
                href="https://aistudio.google.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-xl border border-line px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Google AI Studio 열기
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            {roadmapSteps.map((step) => (
              <RoadmapStepCard
                key={step.id}
                step={step}
                completed={progress.completedStepIds.includes(step.id)}
                onToggle={() => toggleStep(step.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

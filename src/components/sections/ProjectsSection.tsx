"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { useLocalProgress } from "@/hooks/useLocalProgress";

export function ProjectsSection() {
  const { progress, toggleProject } = useLocalProgress();

  return (
    <section id="projects" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="font-bold text-primary">실습 프로젝트</p>
          <h2 className="mt-3 text-3xl font-black text-ink md:text-4xl">
            무엇을 만들지 막힐 때 바로 복사해서 시작하세요.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            MVP에서는 PRD에 맞춰 2개의 작은 프로젝트만 제공합니다.
          </p>
        </div>
        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              completed={progress.completedProjectIds.includes(project.id)}
              onToggle={() => toggleProject(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

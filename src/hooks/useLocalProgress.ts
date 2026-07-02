"use client";

import { useEffect, useMemo, useState } from "react";
import { PROGRESS_STORAGE_KEY } from "@/data/roadmap";
import type { ProgressState } from "@/data/types";

const initialProgress: ProgressState = {
  completedStepIds: [],
  completedProjectIds: [],
};

function parseProgress(value: string | null): ProgressState {
  if (!value) return initialProgress;

  try {
    const parsed = JSON.parse(value) as Partial<ProgressState>;
    return {
      completedStepIds: Array.isArray(parsed.completedStepIds) ? parsed.completedStepIds : [],
      completedProjectIds: Array.isArray(parsed.completedProjectIds)
        ? parsed.completedProjectIds
        : [],
    };
  } catch {
    return initialProgress;
  }
}

export function useLocalProgress() {
  const [progress, setProgress] = useState<ProgressState>(initialProgress);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setProgress(parseProgress(window.localStorage.getItem(PROGRESS_STORAGE_KEY)));
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  }, [isReady, progress]);

  const actions = useMemo(
    () => ({
      toggleStep(stepId: string) {
        setProgress((current) => ({
          ...current,
          completedStepIds: current.completedStepIds.includes(stepId)
            ? current.completedStepIds.filter((id) => id !== stepId)
            : [...current.completedStepIds, stepId],
        }));
      },
      toggleProject(projectId: string) {
        setProgress((current) => ({
          ...current,
          completedProjectIds: current.completedProjectIds.includes(projectId)
            ? current.completedProjectIds.filter((id) => id !== projectId)
            : [...current.completedProjectIds, projectId],
        }));
      },
    }),
    [],
  );

  return { progress, ...actions };
}

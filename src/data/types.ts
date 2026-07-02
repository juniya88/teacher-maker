export type RoadmapStep = {
  id: string;
  stepNumber: number;
  title: string;
  shortTitle: string;
  description: string;
  checklist: string[];
  example?: string;
  prompt?: string;
};

export type Project = {
  id: string;
  title: string;
  difficulty: "easy" | "medium";
  difficultyLabel: string;
  estimatedMinutes: number;
  recommendedFor: string[];
  learnings: string[];
  description: string;
  basePrompt: string;
  revisionPrompts: string[];
  expansionIdeas: string[];
};

export type PromptItem = {
  id: string;
  category: string;
  title: string;
  whenToUse: string;
  prompt: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  prompt?: string;
};

export type ProgressState = {
  completedStepIds: string[];
  completedProjectIds: string[];
};

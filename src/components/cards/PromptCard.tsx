import type { PromptItem } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { CopyButton } from "@/components/ui/CopyButton";

type PromptCardProps = {
  prompt: PromptItem;
};

export function PromptCard({ prompt }: PromptCardProps) {
  return (
    <article className="rounded-2xl border border-line bg-white p-5 shadow-card">
      <Badge tone="blue">{prompt.category}</Badge>
      <h3 className="mt-4 text-xl font-bold text-ink">{prompt.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{prompt.whenToUse}</p>
      <pre className="mt-4 max-h-56 overflow-auto whitespace-pre-wrap break-words rounded-xl bg-surface p-4 text-sm leading-6 text-slate-700">
        {prompt.prompt}
      </pre>
      <CopyButton text={prompt.prompt} className="mt-4" />
    </article>
  );
}

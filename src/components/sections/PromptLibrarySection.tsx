import { prompts } from "@/data/prompts";
import { PromptCard } from "@/components/cards/PromptCard";

export function PromptLibrarySection() {
  return (
    <section id="prompts" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="font-bold text-primary">프롬프트 라이브러리</p>
          <h2 className="mt-3 text-3xl font-black text-ink md:text-4xl">
            막히는 순간에 그대로 복사할 수 있는 문장들입니다.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {prompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </div>
    </section>
  );
}

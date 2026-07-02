import { Lightbulb, MessageSquareText, MousePointerClick, RefreshCw, Sparkles } from "lucide-react";

const steps = [
  { title: "불편함 발견", icon: Lightbulb },
  { title: "아이디어 떠올리기", icon: Sparkles },
  { title: "AI에게 설명하기", icon: MessageSquareText },
  { title: "앱 만들기", icon: MousePointerClick },
  { title: "보고 고치기", icon: RefreshCw },
];

export function IntroSection() {
  return (
    <section id="intro" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="font-bold text-primary">바이브 코딩이란?</p>
          <h2 className="mt-3 text-3xl font-black text-ink md:text-4xl">
            코드를 먼저 배우는 대신, 만들고 싶은 것을 AI에게 설명하는 흐름입니다.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            교사는 이미 문제를 잘 발견하는 사람입니다. 이 사이트는 그 문제를 쉬운 문장으로
            바꾸고, AI 결과를 보며 조금씩 고치는 경험에 집중합니다.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <Icon className="text-primary" aria-hidden size={28} />
                <h3 className="mt-4 font-bold text-ink">{step.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";

const steps = [
  "첫 번째 앱을 실제 상황에서 한 번 사용해보기",
  "불편했던 점을 하나만 고치기",
  "동료 교사에게 보여주고 의견 듣기",
  "다음 작은 앱 아이디어를 적어두기",
];

export function NextChallengeSection() {
  return (
    <section id="next" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-2xl border border-line bg-ink p-8 text-white md:p-10">
          <p className="font-bold text-blue-200">다음 이전</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            오늘의 목표는 개발자가 되는 것이 아닙니다.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            내가 필요한 것을 AI와 함께 직접 만들어 볼 수 있다는 감각을 얻는 것이 첫 번째
            성공입니다.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step} className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                <ArrowRight aria-hidden size={18} className="flex-none text-blue-200" />
                <span className="font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

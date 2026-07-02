import { ArrowDown, ClipboardList } from "lucide-react";

const features = [
  "교사를 위한 실제 예제",
  "복사 중심 실습",
  "무료 AI 도구 활용",
  "첫 앱 완성 경험",
];

export function HeroSection() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">
            30분 MVP 실습 가이드
          </p>
          <h1 className="max-w-2xl break-keep text-4xl font-black leading-tight text-ink md:text-5xl xl:text-6xl">
            <span className="block">개발을 몰라도 괜찮습니다.</span>
            <span className="block text-primary">AI와 함께 첫 앱을</span>
            <span className="block text-primary">만들어 보세요.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Teacher Maker는 교사가 교실과 일상에서 바로 떠올릴 수 있는 작은 문제를
            AI에게 설명하고, 복사하고, 고쳐 보며 첫 성공 경험을 얻는 입문 사이트입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#roadmap"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              <ArrowDown aria-hidden size={20} />
              30분 로드맵 시작하기
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-line bg-white px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <ClipboardList aria-hidden size={20} />
              실습 프로젝트 보기
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6 shadow-card">
          <div className="rounded-xl bg-white p-5 shadow-card">
            <p className="text-sm font-bold text-primary">오늘의 목표</p>
            <p className="mt-3 text-3xl font-black leading-tight text-ink">
              하나를 완벽하게보다 하나를 직접 만들어보기
            </p>
            <div className="mt-6 grid gap-3">
              {features.map((feature) => (
                <div key={feature} className="rounded-xl border border-line bg-white p-4 font-semibold">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const navItems = [
  { href: "#intro", label: "소개" },
  { href: "#roadmap", label: "30분 로드맵" },
  { href: "#projects", label: "실습 프로젝트" },
  { href: "#prompts", label: "프롬프트" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4">
        <a href="#home" className="text-lg font-black text-ink">
          Teacher Maker
        </a>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#roadmap"
          className="inline-flex min-h-11 items-center rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          시작하기
        </a>
      </div>
    </header>
  );
}

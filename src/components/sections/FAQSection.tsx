"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/faqs";
import { CopyButton } from "@/components/ui/CopyButton";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? "");

  return (
    <section id="faq" className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-5">
        <p className="font-bold text-primary">FAQ</p>
        <h2 className="mt-3 text-3xl font-black text-ink md:text-4xl">
          실습 중 자주 만나는 질문
        </h2>
        <div className="mt-10 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-card">
          {faqs.map((faq) => {
            const open = faq.id === openId;
            return (
              <article key={faq.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? "" : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-ink"
                  aria-expanded={open}
                >
                  {faq.question}
                  <ChevronDown
                    aria-hidden
                    size={20}
                    className={cn("flex-none transition", open && "rotate-180")}
                  />
                </button>
                {open ? (
                  <div className="px-5 pb-5">
                    <p className="leading-7 text-slate-600">{faq.answer}</p>
                    {faq.prompt ? (
                      <div className="mt-4 rounded-xl bg-surface p-4">
                        <pre className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
                          {faq.prompt}
                        </pre>
                        <CopyButton text={faq.prompt} className="mt-4" />
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

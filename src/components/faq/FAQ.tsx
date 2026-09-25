"use client";

import { useState } from "react";
import { ChevronDown, Heart } from "lucide-react";
import { faqs } from "@/data/landing-page";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="section-padding bg-[var(--muted)]"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">✦ FAQ ✦</p>
            <h2
              id="faq-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--foreground)] mb-4"
            >
              Pertanyaan Umum
            </h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              Ada pertanyaan? Kami siap membantu.{" "}
              <a href="#contact" className="text-[var(--rose)] hover:underline font-medium">
                Hubungi kami langsung
              </a>
              .
            </p>
          </div>

          {/* Accordion */}
          <dl className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                id={`faq-item-${index + 1}`}
                className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden"
              >
                <dt>
                  <button
                    id={`faq-trigger-${index + 1}`}
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-medium text-[var(--foreground)] hover:text-[var(--rose)] transition-colors duration-200 group"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index + 1}`}
                  >
                    <span className="flex items-center gap-2">
                      <Heart
                        className={`w-3.5 h-3.5 text-[var(--rose)] flex-shrink-0 transition-opacity ${openIndex === index ? "opacity-100" : "opacity-30"}`}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--muted-foreground)] flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[var(--rose)]" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${index + 1}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index + 1}`}
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-48" : "max-h-0"}`}
                >
                  <p className="px-6 pb-5 text-[var(--muted-foreground)] leading-relaxed text-sm border-t border-[var(--border)] pt-4">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

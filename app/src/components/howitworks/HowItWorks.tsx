import { Heart } from "lucide-react";
import { steps } from "@/data/landing-page";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-white"
      aria-labelledby="rsvp-steps-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">✦ RSVP ✦</p>
          <h2
            id="rsvp-steps-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--foreground)] mb-4"
          >
            Cara Konfirmasi Kehadiran
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Hanya butuh beberapa menit untuk mengkonfirmasi kehadiran Anda. Kami sangat menantikan kehadiran Anda!
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent hidden lg:block" aria-hidden="true" />

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {steps.map((step, index) => (
              <li
                key={step.number}
                id={`rsvp-step-${index + 1}`}
                className="relative bg-[var(--background)] rounded-3xl p-7 border border-[var(--border)] hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--blush)] border-4 border-white shadow-md flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--primary)] transition-colors duration-300">
                  <span className="font-serif text-xl font-medium text-[var(--primary)] group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[var(--border)] text-xl lg:hidden" aria-hidden="true">↓</div>
                )}

                <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Deadline notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--blush)] rounded-full border border-rose-200">
            <Heart className="w-4 h-4 text-[var(--rose)]" fill="currentColor" aria-hidden="true" />
            <span className="text-sm font-medium text-[var(--rose)]">
              Batas konfirmasi: <strong>31 Januari 2027</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

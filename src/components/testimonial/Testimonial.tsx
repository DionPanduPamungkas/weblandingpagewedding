import { Heart } from "lucide-react";
import { testimonials } from "@/data/landing-page";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="section-padding bg-white"
      aria-labelledby="wishes-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">✦ Wishes ✦</p>
          <h2
            id="wishes-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--foreground)] mb-4"
          >
            Doa & Ucapan
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Doa dan kata-kata penuh kasih dari orang-orang terkasih.
          </p>
        </div>

        {/* Wish cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((wish, index) => (
            <blockquote
              key={wish.name}
              id={`wish-card-${index + 1}`}
              className="relative bg-[var(--background)] rounded-3xl p-7 border border-[var(--border)] hover:border-rose-200 hover:shadow-xl hover:shadow-rose-50 transition-all duration-300 flex flex-col"
            >
              {/* Decorative quote */}
              <div className="text-5xl text-[var(--blush)] font-serif leading-none mb-3" aria-hidden="true">&ldquo;</div>

              <p className="font-serif text-lg font-light italic text-[var(--foreground)] leading-relaxed mb-6 flex-1">
                {wish.text}
              </p>

              <footer className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${wish.avatarColor} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
                  aria-hidden="true"
                >
                  {wish.avatar}
                </div>
                <div>
                  <cite className="font-semibold text-[var(--foreground)] not-italic text-sm block">
                    {wish.name}
                  </cite>
                  <span className="text-xs text-[var(--muted-foreground)]">
                    {wish.role}{wish.company && ` · ${wish.company}`}
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Send wish CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            id="send-wish-cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--primary)] text-white font-medium rounded-full hover:bg-[var(--primary-light)] transition-all duration-200 hover:shadow-lg hover:shadow-rose-200 active:scale-95"
          >
            <Heart className="w-4 h-4" fill="currentColor" aria-hidden="true" />
            Kirim Ucapan
          </a>
        </div>
      </div>
    </section>
  );
}

import { Heart } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="section-padding bg-[var(--muted)]"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-6">
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[var(--primary)] via-rose-600 to-[var(--accent)] text-white text-center py-20 px-6">
          {/* Decorations */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: "32px 32px" }} aria-hidden="true" />

          {/* Floating flowers */}
          {["🌸", "🌹", "💐", "🌺"].map((flower, i) => (
            <span
              key={i}
              className="absolute text-2xl opacity-20 select-none pointer-events-none"
              style={{ top: `${10 + i * 20}%`, left: i % 2 === 0 ? `${5 + i * 3}%` : undefined, right: i % 2 !== 0 ? `${5 + i * 3}%` : undefined }}
              aria-hidden="true"
            >
              {flower}
            </span>
          ))}

          <div className="relative z-10 max-w-xl mx-auto">
            <Heart className="w-10 h-10 mx-auto mb-5 text-white/60" fill="currentColor" aria-hidden="true" />
            <h2
              id="cta-heading"
              className="font-serif text-4xl sm:text-5xl font-light mb-4 leading-tight"
            >
              Kehadiran Anda adalah Kebahagiaan Kami
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed font-light">
              Tanpa kehadiran Anda, hari istimewa ini terasa kurang lengkap. Kami sangat menantikan senyum dan doa Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                id="final-cta-primary"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--primary)] font-semibold rounded-full hover:bg-rose-50 transition-all duration-200 active:scale-95 shadow-lg tracking-wide group"
              >
                <Heart className="w-4 h-4 group-hover:scale-125 transition-transform" fill="currentColor" aria-hidden="true" />
                Konfirmasi Kehadiran
              </a>
              <a
                href="#features"
                id="final-cta-secondary"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white font-medium rounded-full border border-white/25 hover:bg-white/25 transition-all duration-200 active:scale-95 backdrop-blur-sm tracking-wide"
              >
                Lihat Detail Acara
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Heart } from "lucide-react";
import { benefits } from "@/data/landing-page";
import { Heart as HeartIcon, Star, Music, Map } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Heart: HeartIcon,
  Star,
  Music,
  Map,
};

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">✦ Our Story ✦</p>
          <h2
            id="about-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--foreground)] mb-6"
          >
            Kisah Cinta Kami
          </h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed text-lg">
            Setiap cerita cinta dimulai dari hal-hal kecil yang sederhana. Begitu pula perjalanan kami — dari sebuah pertemuan tak terduga hingga momen kami memutuskan untuk melangkah bersama selamanya.
          </p>
        </div>

        {/* Story moments */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {benefits.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                id={`story-card-${index + 1}`}
                className="group p-7 rounded-3xl border border-[var(--border)] bg-[var(--background)] hover:border-rose-200 hover:shadow-xl hover:shadow-rose-50 transition-all duration-400"
              >
                <div className="w-11 h-11 rounded-full bg-[var(--blush)] flex items-center justify-center mb-5 group-hover:bg-[var(--primary)] transition-colors duration-300">
                  {Icon && (
                    <Icon
                      className="w-5 h-5 text-[var(--primary)] group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                      {...(item.icon === "Heart" || item.icon === "Star" ? { fill: "currentColor" } : {})}
                    />
                  )}
                </div>
                <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Love quote banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[var(--primary)] via-rose-600 to-[var(--accent)] p-8 lg:p-14 text-white text-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: "40px 40px" }} aria-hidden="true" />
          <div className="relative z-10">
            <Heart className="w-8 h-8 mx-auto mb-4 text-white/60" fill="currentColor" aria-hidden="true" />
            <p className="font-serif text-2xl lg:text-3xl font-light italic leading-relaxed max-w-2xl mx-auto">
              &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya.&rdquo;
            </p>
            <p className="mt-4 text-white/60 text-sm tracking-wider">— QS. Ar-Rum: 21</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Calendar, Clock, Utensils, MapPin, Shirt, Gift } from "lucide-react";
import { features } from "@/data/landing-page";

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  Clock,
  Utensils,
  MapPin,
  Shirt,
  Gift,
};

export default function Features() {
  return (
    <section
      id="features"
      className="section-padding bg-[var(--muted)]"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">✦ Wedding Details ✦</p>
          <h2
            id="features-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--foreground)] mb-4"
          >
            Informasi Acara
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Segala detail yang perlu Anda ketahui untuk mempersiapkan kehadiran di hari spesial kami.
          </p>
        </div>

        {/* Detail grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <article
                key={feature.number}
                id={`detail-card-${index + 1}`}
                className="bg-white rounded-3xl p-7 border border-[var(--border)] hover:border-rose-200 hover:shadow-xl hover:shadow-rose-50 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full bg-[var(--blush)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] transition-colors duration-300">
                    {Icon && (
                      <Icon
                        className="w-5 h-5 text-[var(--primary)] group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <span className="font-serif text-3xl text-[var(--border)] group-hover:text-rose-100 transition-colors duration-300 leading-none">
                    {feature.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Venue highlight */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            {
              label: "Akad Nikah",
              time: "10.00 – 12.00 WIB",
              venue: "Masjid Agung Al-Azhar",
              address: "Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
              emoji: "🕌",
              id: "venue-akad",
            },
            {
              label: "Resepsi",
              time: "12.00 – 16.00 WIB",
              venue: "The Ritz-Carlton Jakarta",
              address: "Jl. DR. Ide Anak Agung Gde Agung, SCBD, Jakarta Selatan",
              emoji: "🌹",
              id: "venue-resepsi",
            },
          ].map((venue) => (
            <div
              key={venue.label}
              id={venue.id}
              className="bg-white rounded-3xl p-7 border border-[var(--border)] text-center hover:border-amber-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-3" aria-hidden="true">{venue.emoji}</div>
              <p className="text-[var(--gold)] text-xs tracking-widest uppercase mb-1">{venue.label}</p>
              <p className="font-serif text-xl font-medium text-[var(--foreground)] mb-1">{venue.venue}</p>
              <p className="text-sm text-[var(--muted-foreground)] mb-3">{venue.address}</p>
              <p className="inline-block px-4 py-1.5 bg-[var(--blush)] text-[var(--rose)] text-xs font-medium rounded-full">
                {venue.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

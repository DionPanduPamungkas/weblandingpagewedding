import { showcaseItems } from "@/data/landing-page";

const placeholderColors = [
  "from-rose-300 to-pink-500",
  "from-amber-300 to-orange-400",
  "from-rose-400 to-red-400",
  "from-pink-300 to-rose-400",
  "from-amber-200 to-yellow-400",
  "from-rose-200 to-pink-300",
];

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="section-padding bg-[var(--muted)]"
      aria-labelledby="gallery-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">✦ Gallery ✦</p>
          <h2
            id="gallery-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--foreground)] mb-4"
          >
            Foto Prewedding
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Sekilas momen-momen indah dalam perjalanan cinta kami.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {showcaseItems.map((item, index) => (
            <figure
              key={item.label}
              id={`gallery-item-${index + 1}`}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              {/* Gradient placeholder simulating a photo */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[index % placeholderColors.length]} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                aria-hidden="true"
              />

              {/* Texture overlay */}
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: "20px 20px" }} aria-hidden="true" />

              {/* Decorative floral elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 text-8xl select-none pointer-events-none" aria-hidden="true">
                🌸
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                <figcaption>
                  <span className="inline-block px-3 py-1 bg-white/25 text-white text-xs font-medium rounded-full mb-2 backdrop-blur-sm border border-white/20">
                    {item.category}
                  </span>
                  <p className="text-white font-serif text-lg font-light">{item.label}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-[var(--muted-foreground)]">
          📸 &nbsp; Foto-foto asli akan segera hadir setelah hari pernikahan
        </p>
      </div>
    </section>
  );
}

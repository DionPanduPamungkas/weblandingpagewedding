import { Heart } from "lucide-react";
import { siteConfig, navLinks } from "@/data/landing-page";

const footerSections = [
  {
    title: "Navigasi",
    links: navLinks.map((l) => ({ label: l.label, href: l.href })),
  },
  {
    title: "Ikuti Kami",
    links: [
      { label: "Instagram", href: siteConfig.social.instagram },
      { label: "Facebook", href: siteConfig.social.facebook },
      { label: "YouTube", href: siteConfig.social.youtube },
    ],
  },
  {
    title: "Kontak",
    links: [
      { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { label: "WhatsApp", href: siteConfig.whatsapp },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--foreground)] text-white pt-16 pb-8"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-6">
        {/* Top */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#home"
              id="footer-logo"
              className="inline-flex items-center gap-2 font-serif text-xl text-white mb-4 hover:opacity-75 transition-opacity"
              aria-label="Kembali ke atas"
            >
              <Heart className="w-4 h-4 text-rose-400" fill="currentColor" aria-hidden="true" />
              <span>{siteConfig.name}</span>
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-[200px] font-light">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm text-white/30 font-serif italic">
              {siteConfig.weddingDateDisplay}
            </p>
          </div>

          {/* Nav sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-medium text-white/50 uppercase tracking-widest mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      id={`footer-link-${link.label.toLowerCase().replace(/[\s@.]/g, "-")}`}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                      {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p className="font-serif italic">
            &ldquo;Two souls, one forever.&rdquo; &nbsp;·&nbsp; © {year} {siteConfig.name}
          </p>
          <p className="flex items-center gap-1.5">
            Made with
            <Heart className="w-3 h-3 text-rose-400 inline" fill="currentColor" aria-hidden="true" />
            for our special day
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { navLinks, siteConfig } from "@/data/landing-page";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#fdf8f3]/92 backdrop-blur-md border-b border-[var(--border)] shadow-sm"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="container mx-auto flex items-center justify-between h-16 px-6"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            id="nav-logo"
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
            aria-label={`${siteConfig.name} - Kembali ke atas`}
          >
            <Heart className="w-4 h-4 text-[var(--rose)]" aria-hidden="true" fill="currentColor" />
            <span className="font-serif text-lg font-semibold gradient-text tracking-wide">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--rose)] hover:bg-[var(--blush)]/30 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* RSVP CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              id="nav-cta-primary"
              className="px-5 py-2.5 bg-[var(--primary)] text-white text-sm font-medium rounded-full hover:bg-[var(--primary-light)] transition-all duration-200 hover:shadow-lg hover:shadow-rose-200 active:scale-95 tracking-wide"
            >
              RSVP Sekarang
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-[#fdf8f3] border-b border-[var(--border)] p-6 transition-all duration-300 ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
        >
          <ul role="list" className="flex flex-col gap-1 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-[var(--foreground)] font-medium hover:bg-[var(--blush)]/40 hover:text-[var(--rose)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            id="mobile-cta-primary"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-5 py-3 bg-[var(--primary)] text-white font-medium rounded-full hover:bg-[var(--primary-light)] transition-colors tracking-wide"
          >
            RSVP Sekarang
          </a>
        </div>
      </div>
    </>
  );
}

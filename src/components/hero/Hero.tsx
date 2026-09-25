"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/landing-page";

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(siteConfig.weddingDate);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      aria-label="Wedding hero section"
    >
      {/* Full-bleed photo */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero-mockup.jpg"
          alt="Foto pernikahan Alindra dan Reza saat golden hour"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        {/* Warm color tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/15 via-transparent to-amber-900/20" />
      </div>

      {/* Decorative petals */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute text-rose-200/60 select-none pointer-events-none text-2xl"
          style={{
            left: `${10 + i * 15}%`,
            top: "-20px",
            animation: `petalFall ${6 + i * 1.5}s linear ${i * 1.2}s infinite`,
          }}
        >
          🌸
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        {/* Pre-title */}
        <p className="animate-fade-in text-white/75 text-sm font-light tracking-[0.3em] uppercase mb-6">
          ✦ &nbsp; Wedding Invitation &nbsp; ✦
        </p>

        {/* Names */}
        <h1 className="animate-fade-in-up delay-100 font-serif font-light leading-none mb-3">
          <span className="block text-5xl sm:text-7xl lg:text-8xl text-white drop-shadow-lg">
            Alindra
          </span>
          <span className="block my-2 text-2xl sm:text-3xl text-[var(--gold-light)] font-light tracking-widest">
            &amp;
          </span>
          <span className="block text-5xl sm:text-7xl lg:text-8xl text-white drop-shadow-lg">
            Reza
          </span>
        </h1>

        {/* Heart divider */}
        <div className="animate-fade-in-up delay-200 flex items-center justify-center gap-3 my-6">
          <div className="w-16 h-px bg-white/40" />
          <Heart className="w-5 h-5 text-rose-300" fill="currentColor" aria-hidden="true" />
          <div className="w-16 h-px bg-white/40" />
        </div>

        {/* Date */}
        <p className="animate-fade-in-up delay-300 font-serif text-xl sm:text-2xl text-white/90 tracking-widest mb-2">
          {siteConfig.weddingDateDisplay}
        </p>
        <p className="animate-fade-in-up delay-300 text-sm text-white/60 tracking-wider mb-10">
          {siteConfig.ceremony.venue} &nbsp;·&nbsp; Jakarta Selatan
        </p>

        {/* Countdown */}
        <div className="animate-fade-in-up delay-400 grid grid-cols-4 gap-3 max-w-sm mx-auto mb-10">
          {[
            { value: days, label: "Hari" },
            { value: hours, label: "Jam" },
            { value: minutes, label: "Menit" },
            { value: seconds, label: "Detik" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl py-3 px-1"
            >
              <span className="block font-serif text-3xl sm:text-4xl font-light text-white leading-none">
                {String(value).padStart(2, "0")}
              </span>
              <span className="block text-white/60 text-xs tracking-widest mt-1 uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            id="hero-cta-primary"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--primary)] text-white font-medium rounded-full hover:bg-[var(--primary-light)] transition-all duration-300 hover:shadow-xl hover:shadow-rose-900/30 active:scale-95 tracking-wide"
          >
            <Heart className="w-4 h-4" fill="currentColor" aria-hidden="true" />
            RSVP Sekarang
          </a>
          <a
            href="#about"
            id="hero-cta-secondary"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full hover:bg-white/25 transition-all duration-300 active:scale-95 tracking-wide"
          >
            Kisah Kami
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" aria-hidden="true" />
      </div>
    </section>
  );
}

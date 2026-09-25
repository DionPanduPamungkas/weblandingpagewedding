"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Heart, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/landing-page";

type FormState = "idle" | "loading" | "success" | "error";
type AttendChoice = "akad-resepsi" | "akad" | "resepsi" | "tidak-hadir";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    attend: "akad-resepsi" as AttendChoice,
    guests: "1",
    message: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi.";
    if (!form.message.trim()) e.message = "Ucapan wajib diisi.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ve = validate();
    if (Object.keys(ve).length > 0) { setErrors(ve); return; }
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
    setForm({ name: "", attend: "akad-resepsi", guests: "1", message: "" });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">✦ RSVP & Contact ✦</p>
          <h2
            id="contact-heading"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--foreground)] mb-4"
          >
            Konfirmasi Kehadiran
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            Kami mohon kesediaan Anda untuk mengkonfirmasi kehadiran paling lambat <strong>31 Januari 2027</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light text-[var(--foreground)]">Hubungi Kami</h3>

            {[
              { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, id: "contact-email" },
              { icon: Phone, label: "Telepon", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, id: "contact-phone" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat via WhatsApp", href: siteConfig.whatsapp, id: "contact-whatsapp" },
              { icon: MapPin, label: "Resepsi", value: "The Ritz-Carlton Jakarta, SCBD", href: null, id: "contact-venue" },
            ].map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--blush)] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-[var(--rose)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a id={item.id} href={item.href} className="text-[var(--foreground)] font-medium hover:text-[var(--rose)] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p id={item.id} className="text-[var(--foreground)] font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Couple note */}
            <div className="mt-8 p-6 bg-[var(--blush)]/30 rounded-2xl border border-rose-100">
              <Heart className="w-5 h-5 text-[var(--rose)] mb-3" fill="currentColor" aria-hidden="true" />
              <p className="font-serif text-lg font-light italic text-[var(--foreground)] leading-relaxed">
                &ldquo;Kami tidak sabar untuk merayakan hari istimewa ini bersama orang-orang terkasih. Kehadiran Anda adalah hadiah terbesar bagi kami.&rdquo;
              </p>
              <p className="mt-3 text-sm text-[var(--muted-foreground)]">— Alindra & Reza</p>
            </div>
          </div>

          {/* Right — RSVP Form */}
          <div className="bg-[var(--background)] rounded-3xl border border-[var(--border)] p-8">
            {formState === "success" ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-[var(--blush)] flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[var(--rose)]" fill="currentColor" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-light text-[var(--foreground)] mb-2">Terima Kasih! 🌹</h3>
                <p className="text-[var(--muted-foreground)]">
                  Kami telah menerima konfirmasi kehadiran Anda. Sampai jumpa di hari istimewa kami!
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-6 px-5 py-2.5 border border-[var(--border)] text-[var(--foreground)] rounded-full hover:bg-[var(--muted)] transition-colors text-sm font-medium"
                >
                  Kirim lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulir RSVP">
                <h3 className="font-serif text-2xl font-light text-[var(--foreground)] mb-6">Formulir RSVP</h3>

                {/* Name */}
                <div className="mb-5">
                  <label htmlFor="rsvp-name" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Nama Lengkap <span aria-hidden="true" className="text-[var(--rose)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="rsvp-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] outline-none transition-all focus:border-[var(--primary)] focus:ring-2 focus:ring-rose-100 ${errors.name ? "border-red-400 bg-red-50" : "border-[var(--border)] bg-white"}`}
                  />
                  {errors.name && <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500">⚠ {errors.name}</p>}
                </div>

                {/* Attendance */}
                <div className="mb-5">
                  <label htmlFor="rsvp-attend" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Konfirmasi Kehadiran
                  </label>
                  <select
                    id="rsvp-attend"
                    name="attend"
                    value={form.attend}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-rose-100 transition-all"
                  >
                    <option value="akad-resepsi">Hadir — Akad & Resepsi</option>
                    <option value="akad">Hadir — Akad saja</option>
                    <option value="resepsi">Hadir — Resepsi saja</option>
                    <option value="tidak-hadir">Tidak dapat hadir</option>
                  </select>
                </div>

                {/* Guests */}
                <div className="mb-5">
                  <label htmlFor="rsvp-guests" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Jumlah Tamu
                  </label>
                  <select
                    id="rsvp-guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-rose-100 transition-all"
                  >
                    {["1","2","3","4","5"].map((n) => (
                      <option key={n} value={n}>{n} orang</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="rsvp-message" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Ucapan & Doa <span aria-hidden="true" className="text-[var(--rose)]">*</span>
                  </label>
                  <textarea
                    id="rsvp-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tuliskan ucapan dan doa tulus Anda..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] outline-none transition-all focus:border-[var(--primary)] focus:ring-2 focus:ring-rose-100 resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-[var(--border)] bg-white"}`}
                  />
                  {errors.message && <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-500">⚠ {errors.message}</p>}
                </div>

                <button
                  id="rsvp-submit"
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--primary)] text-white font-medium rounded-full hover:bg-[var(--primary-light)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 active:scale-95 hover:shadow-lg hover:shadow-rose-200 tracking-wide"
                >
                  {formState === "loading" ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" /> Mengirim...</>
                  ) : (
                    <><Heart className="w-4 h-4" fill="currentColor" aria-hidden="true" /> Kirim Konfirmasi</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#faf5ff] to-[#ede9fe] flex items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-bold text-xl text-[var(--foreground)] mb-8 hover:opacity-80 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
          <span className="gradient-text">Luminary</span>
        </Link>

        <div
          className="text-9xl font-extrabold gradient-text mb-4 select-none"
          aria-hidden="true"
        >
          404
        </div>
        <h1 className="text-2xl font-bold text-[var(--foreground)] mb-4">
          Page not found
        </h1>
        <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--primary-light)] transition-all duration-200 hover:shadow-lg hover:shadow-violet-200 active:scale-95"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

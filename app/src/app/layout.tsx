import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alindra & Reza — Wedding Invitation · 14 Februari 2027",
  description:
    "Dengan penuh rasa syukur, kami mengundang Anda untuk hadir dan memberikan doa restu di hari pernikahan Alindra & Reza, 14 Februari 2027.",
  keywords: ["wedding", "pernikahan", "undangan", "Alindra", "Reza", "wedding invitation"],
  authors: [{ name: "Alindra & Reza" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://alindra-reza.wedding",
    title: "Alindra & Reza — Wedding Invitation",
    description: "Kami mengundang Anda untuk hadir di hari istimewa kami, 14 Februari 2027.",
    siteName: "Alindra & Reza Wedding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alindra & Reza — Wedding Invitation",
    description: "Kami mengundang Anda untuk hadir di hari istimewa kami, 14 Februari 2027.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://alindra-reza.wedding" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

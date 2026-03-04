import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PERSIS Photography | Community for Photographers",
  description:
    "PERSIS Photography is a passionate community of photographers in PERSIS. We connect, inspire, and grow together through workshops, photowalks, exhibitions, and collaborative projects.",
  keywords: [
    "PERSIS Photography",
    "photography community",
    "photographer",
    "photowalk",
    "workshop",
    "exhibition",
    "PERSIS",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "PERSIS Photography | Community for Photographers",
    description:
      "A passionate community of photographers in PERSIS. Connect, inspire, and grow together.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

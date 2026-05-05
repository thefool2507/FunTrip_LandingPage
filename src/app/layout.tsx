import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

// NOTE: next/font/google requires network access during build.
// On Vercel this works automatically. For local builds without internet,
// remove the font import and the font variable from <body>.
// To re-enable: uncomment the two lines below and add ${inter.variable} to <body>
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "FunTrip — Discover Indonesia's Best Destinations",
  description:
    "Curated travel recommendations with authentic reviews, price guides, and ratings to help you plan your perfect Indonesian adventure.",
  keywords: ["travel Indonesia", "Bali", "Raja Ampat", "travel recommendations", "FunTrip"],
  openGraph: {
    title: "FunTrip — Discover Indonesia's Best Destinations",
    description:
      "Curated travel recommendations with authentic reviews, price guides, and ratings.",
    url: "https://funtrip.vercel.app",
    siteName: "FunTrip",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  twitter: {
    title: "FunTrip",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

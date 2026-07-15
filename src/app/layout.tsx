import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garudaexports.in"),
  title: "Garuda Global Exports",
  description: "Premium Agricultural Exports with Trust, Quality and Global Reach.",
  openGraph: {
    title: "Garuda Global Exports",
    description: "Premium Agricultural Exports with Trust, Quality and Global Reach.",
    url: "https://garudaexports.in",
    siteName: "Garuda Global Exports",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Garuda Global Exports",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garuda Global Exports",
    description: "Premium Agricultural Exports with Trust, Quality and Global Reach.",
    images: ["/images/og-image.jpg"],
  },
};

import { SplashScreen } from "@/components/layout/splash-screen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SplashScreen />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

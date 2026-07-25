import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { RootLayoutClient } from "@/components/layout/root-layout-client";
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
  metadataBase: new URL("https://garudaglobalexports.co.in"),
  title: {
    default: "Garuda Global Exports | Premium Indian Agricultural Exporter",
    template: "%s | Garuda Global Exports",
  },
  description: "Leading exporter of premium Indian agricultural produce including Basmati Rice, Fresh Vegetables, Spices, Fruits, Makhana & Pulses worldwide.",
  keywords: [
    "Garuda Global Exports",
    "Indian Agricultural Exporter",
    "Rice Exporter India",
    "Spices Exporter India",
    "Fresh Vegetables Export",
    "Makhana Exporter",
    "Indian Pulses Export",
    "Global Food Exporter India"
  ],
  alternates: {
    canonical: "https://garudaglobalexports.co.in",
  },
  icons: {
    icon: "/garuda-logo.svg",
    shortcut: "/garuda-logo.png",
    apple: "/garuda-logo.png",
  },
  openGraph: {
    title: "Garuda Global Exports | Premium Indian Agricultural Exporter",
    description: "Delivering quality, reliability and excellence in agricultural exports across global markets.",
    url: "https://garudaglobalexports.co.in",
    siteName: "Garuda Global Exports",
    images: [
      {
        url: "/garuda-logo.png",
        width: 1200,
        height: 630,
        alt: "Garuda Global Exports Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garuda Global Exports | Premium Indian Agricultural Exporter",
    description: "Delivering quality, reliability and excellence in agricultural exports across global markets.",
    images: ["/garuda-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'b87a46b7a82a04bd',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Garuda Global Exports",
    "url": "https://garudaglobalexports.co.in",
    "logo": "https://garudaglobalexports.co.in/garuda-logo.png",
    "description": "Trusted Indian Exporter of Premium Agricultural Produce including Rice, Vegetables, Spices, Fruits, Makhana & Pulses.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8143944888",
      "contactType": "Customer Service",
      "email": "Garudaaglobalexports@gmail.com",
      "areaServed": "Worldwide"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}

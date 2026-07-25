import type { Metadata } from "next";
import { AboutClient } from "@/components/about/about-client";

export const metadata: Metadata = {
  title: "About Us | Leading Indian Agricultural Export House",
  description: "Learn about Garuda Global Exports, our mission, quality standards, and how we connect Indian farmers to international markets with premium agricultural produce.",
  alternates: {
    canonical: "https://garudaglobalexports.co.in/about",
  },
  openGraph: {
    title: "About Garuda Global Exports",
    description: "Discover our mission, ethical sourcing, and global supply chain standards for Indian agricultural exports.",
    url: "https://garudaglobalexports.co.in/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

import { SplashScreen } from "@/components/layout/splash-screen";
import { Hero } from "@/components/home/hero";
import { StatsGrid } from "@/components/home/stats-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ExportProcess } from "@/components/home/export-process";
import { QualityCertifications } from "@/components/home/quality-certifications";
import { ContactCTA } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SplashScreen />
      <Hero />
      <StatsGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <ExportProcess />
      <QualityCertifications />
      <ContactCTA />
    </div>
  );
}

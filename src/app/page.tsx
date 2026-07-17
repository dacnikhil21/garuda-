import { Hero } from "@/components/home/hero";
import { BannerSlider } from "@/components/home/banner-slider";
import { StatsGrid } from "@/components/home/stats-grid";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ExportProcess } from "@/components/home/export-process";
import { QualityCertifications } from "@/components/home/quality-certifications";
import { ContactCTA } from "@/components/home/contact-cta";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const featuredNames = ["Basmathi Rice", "Sona Masuri", "Mirchi G4", "Onions", "Alphonso Mango", "Pomegranate", "Cardamom", "Premium Makhana"];
  const products = await prisma.product.findMany({
    where: {
      name: {
        in: featuredNames
      }
    }
  });

  const now = new Date();
  
  const banners = await prisma.banner.findMany({
    where: { 
      isActive: true,
      AND: [
        { OR: [{ startDate: null }, { startDate: { lte: now } }] },
        { OR: [{ endDate: null }, { endDate: { gte: now } }] },
      ]
    },
    orderBy: { order: 'asc' },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BannerSlider banners={banners} />
      <StatsGrid />
      <FeaturedProducts products={products} />
      <WhyChooseUs />
      <ExportProcess />
      <QualityCertifications />
      <ContactCTA />
    </div>
  );
}


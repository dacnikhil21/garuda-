import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let products: { url: string; lastModified: Date; changeFrequency: "weekly"; priority: number }[] = [];
  try {
    const allProducts = await prisma.product.findMany();
    products = allProducts.map((product) => ({
      url: `https://garudaglobalexports.co.in/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (err) {
    console.error("Failed to fetch products for sitemap:", err);
  }

  return [
    {
      url: "https://garudaglobalexports.co.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://garudaglobalexports.co.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://garudaglobalexports.co.in/products",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://garudaglobalexports.co.in/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...products,
  ];
}

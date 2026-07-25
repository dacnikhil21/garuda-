import type { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { ProductsClient } from '@/components/products/products-client';

export const metadata: Metadata = {
  title: 'Agricultural Products Catalog',
  description: 'Explore our export catalog of premium Indian agricultural produce: Rice, Fresh Vegetables, Spices, Fruits, Makhana & Pulses. Certified export quality.',
  alternates: {
    canonical: 'https://garudaglobalexports.co.in/products',
  },
  openGraph: {
    title: 'Agricultural Products Catalog | Garuda Global Exports',
    description: 'Explore our export catalog of premium Indian agricultural produce: Rice, Fresh Vegetables, Spices, Fruits, Makhana & Pulses.',
    url: 'https://garudaglobalexports.co.in/products',
  },
};

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { id: 'asc' },
  });

  return <ProductsClient initialProducts={products} />;
}

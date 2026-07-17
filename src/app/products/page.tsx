import { prisma } from '@/lib/prisma';
import { ProductsClient } from '@/components/products/products-client';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { id: 'asc' },
  });

  return <ProductsClient initialProducts={products} />;


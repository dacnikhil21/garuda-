import { prisma } from '@/lib/prisma';
import { ProductsClient } from '@/components/products/products-client';

export default async function ProductsCatalogue() {
  const products = await prisma.product.findMany({
    orderBy: { id: 'asc' },
  });

  return <ProductsClient initialProducts={products} />;
}


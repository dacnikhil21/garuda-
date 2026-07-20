import { prisma } from './src/lib/prisma';

async function main() {
  const products = await prisma.product.findMany({
    where: {
      name: { in: ['Ginger', 'Peanuts'] }
    }
  });
  console.log(products.map(p => ({ id: p.id, name: p.name, image: p.image })));
}

main().finally(() => prisma.$disconnect());

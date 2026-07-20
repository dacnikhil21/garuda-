import { prisma } from './src/lib/prisma';
async function main() {
  const products = await prisma.product.count();
  const gallery = await prisma.galleryImage.count();
  console.log('Products count:', products);
  console.log('Gallery count:', gallery);
}
main().catch(console.error).finally(() => prisma.$disconnect());

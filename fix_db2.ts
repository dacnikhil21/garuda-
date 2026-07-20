import { prisma } from './src/lib/prisma';

async function main() {
  await prisma.product.updateMany({
    where: { name: "Ginger" },
    data: { image: "/images/whatsapp/images (1).jpeg" }
  });
  
  await prisma.product.updateMany({
    where: { name: "Cumin Seeds (Jeera)" },
    data: { image: "/images/whatsapp/images (3).jpeg" }
  });
  
  await prisma.product.updateMany({
    where: { name: "Peanuts" },
    data: { image: "/images/whatsapp/images (2).jpeg" }
  });
  
  console.log("Database updated successfully with local images.");
}
main().catch(console.error).finally(() => prisma.$disconnect());

import { prisma } from './src/lib/prisma';

async function main() {
  await prisma.product.updateMany({
    where: { name: "Ginger" },
    data: { image: "/images/whatsapp/ginger.jpeg" }
  });
  
  await prisma.product.updateMany({
    where: { name: "Cumin Seeds (Jeera)" },
    data: { image: "/images/whatsapp/cumin.jpeg" }
  });
  
  await prisma.product.updateMany({
    where: { name: "Peanuts" },
    data: { image: "/images/whatsapp/peanut.jpeg" }
  });
  
  console.log("Database updated successfully with local images.");
}
main().catch(console.error).finally(() => prisma.$disconnect());

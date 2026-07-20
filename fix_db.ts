import { prisma } from './src/lib/prisma';

async function main() {
  await prisma.product.updateMany({
    where: { name: "Ginger" },
    data: { image: "https://res.cloudinary.com/wvgliim5/image/upload/v1784528729/garuda/kf4uasdfswscnxjrqshj.jpg" }
  });
  
  await prisma.product.updateMany({
    where: { name: "Cumin Seeds (Jeera)" },
    data: { image: "https://res.cloudinary.com/wvgliim5/image/upload/v1784439902/garuda/sose5uzmrnh65huqmm9e.jpg" }
  });
  
  await prisma.product.updateMany({
    where: { name: "Peanuts" },
    data: { image: "https://res.cloudinary.com/wvgliim5/image/upload/v1784528053/garuda/unedgpjd9pyz6vlfai2i.jpg" }
  });
  
  console.log("Database updated successfully with Cloudinary images.");
}
main().catch(console.error).finally(() => prisma.$disconnect());

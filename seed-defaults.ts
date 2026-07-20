import { prisma } from './src/lib/prisma';

const defaultLicenses = [
  {
    image: "/images/whatsapp/image.png",
    alt: "License 1",
  },
  {
    image: "/images/whatsapp/image copy 2.png",
    alt: "License 2",
  },
];

const defaultImages = [
  {
    image: "/images/whatsapp/WhatsApp Image 2026-07-19 at 11.51.33 AM.jpeg",
    alt: "Gallery Image 1",
  },
  {
    image: "/images/whatsapp/WhatsApp Image 2026-07-19 at 11.51.54 AM.jpeg",
    alt: "Gallery Image 2",
  },
  {
    image: "/images/whatsapp/WhatsApp Image 2026-07-19 at 11.53.19 AM.jpeg",
    alt: "Gallery Image 3",
  },
  {
    image: "/images/whatsapp/WhatsApp Image 2026-07-19 at 11.54.09 AM.jpeg",
    alt: "Gallery Image 4",
  },
  {
    image: "/images/whatsapp/WhatsApp Image 2026-07-19 at 11.57.40 AM.jpeg",
    alt: "Gallery Image 5",
  },
];

async function main() {
  console.log('Seeding default licenses...');
  for (const lic of defaultLicenses) {
    const exists = await prisma.license.findFirst({ where: { image: lic.image } });
    if (!exists) {
      await prisma.license.create({ data: lic });
      console.log('Added license:', lic.image);
    }
  }

  console.log('Seeding default gallery images...');
  for (const img of defaultImages) {
    const exists = await prisma.galleryImage.findFirst({ where: { image: img.image } });
    if (!exists) {
      await prisma.galleryImage.create({ data: img });
      console.log('Added gallery image:', img.image);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());

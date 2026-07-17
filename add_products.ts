import { prisma } from './src/lib/prisma';
import { v2 as cloudinary } from 'cloudinary';
import { readFileSync } from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadImage(filePath: string) {
  return new Promise<string>((resolve, reject) => {
    cloudinary.uploader.upload(
      filePath,
      { folder: 'garuda' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result?.secure_url as string);
      }
    );
  });
}

async function main() {
  console.log("Uploading images to Cloudinary...");
  const potatoUrl = await uploadImage("C:/Users/dache/.gemini/antigravity-ide/brain/b5d82b6f-d5ab-4135-9a34-348739372bfe/premium_potato_1784280077591.png");
  const gingerUrl = await uploadImage("C:/Users/dache/.gemini/antigravity-ide/brain/b5d82b6f-d5ab-4135-9a34-348739372bfe/premium_ginger_1784280092836.png");
  const cuminUrl = await uploadImage("C:/Users/dache/.gemini/antigravity-ide/brain/b5d82b6f-d5ab-4135-9a34-348739372bfe/premium_cumin_1784280109557.png");
  const peanutUrl = await uploadImage("C:/Users/dache/.gemini/antigravity-ide/brain/b5d82b6f-d5ab-4135-9a34-348739372bfe/premium_peanuts_1784280127693.png");

  console.log("Images uploaded successfully!");

  console.log("Adding categories...");
  await prisma.category.upsert({
    where: { slug: 'vegetables' },
    update: {},
    create: { name: 'Vegetables', slug: 'vegetables' }
  });
  
  await prisma.category.upsert({
    where: { slug: 'spices' },
    update: {},
    create: { name: 'Spices', slug: 'spices' }
  });

  await prisma.category.upsert({
    where: { slug: 'pulses' },
    update: {},
    create: { name: 'Pulses', slug: 'pulses' }
  });

  console.log("Adding products...");
  
  const products = [
    {
      name: 'Premium Export Potato',
      slug: 'premium-export-potato',
      category: 'Vegetables',
      image: potatoUrl,
      description: 'High-quality, freshly harvested golden potatoes. Carefully sorted and graded for international export standards, ensuring perfect texture and taste.',
      bgColor: 'bg-[#FFFBEB]',
      pillBg: 'bg-[#FEF3C7]',
      pillText: 'text-[#D97706]',
      badge: 'FARM FRESH'
    },
    {
      name: 'Premium Export Ginger',
      slug: 'premium-export-ginger',
      category: 'Vegetables',
      image: gingerUrl,
      description: 'Aromatic, large, and clean ginger roots. Selected from the best harvests with high essential oil content, perfect for culinary and medicinal use.',
      bgColor: 'bg-[#FFFBEB]',
      pillBg: 'bg-[#FEF3C7]',
      pillText: 'text-[#D97706]',
      badge: 'EXPORT QUALITY'
    },
    {
      name: 'Premium Cumin Seeds',
      slug: 'premium-cumin-seeds',
      category: 'Spices',
      image: cuminUrl,
      description: 'Highly aromatic, bold, and pure cumin seeds (Jeera). Expertly dried and machine-cleaned to ensure 99% purity and maximum flavor retention.',
      bgColor: 'bg-[#F0FDF4]',
      pillBg: 'bg-[#DCFCE7]',
      pillText: 'text-[#15803D]',
      badge: '99% PURITY'
    },
    {
      name: 'Raw Peanuts',
      slug: 'raw-peanuts',
      category: 'Pulses',
      image: peanutUrl,
      description: 'Large, clean, and crunchy raw peanuts. Rich in protein and natural oils, sorted perfectly to meet strict global quality standards.',
      bgColor: 'bg-[#FEF2F2]',
      pillBg: 'bg-[#FEE2E2]',
      pillText: 'text-[#B91C1C]',
      badge: 'HIGH PROTEIN'
    }
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product
    });
  }

  console.log("Database seeded successfully!");
}

main().catch(console.error).finally(() => prisma.$disconnect());

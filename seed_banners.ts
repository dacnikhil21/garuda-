import { prisma } from './src/lib/prisma';
import fs from 'fs';
import path from 'path';

async function main() {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Paths
  const srcBanner1 = path.join('C:\\Users\\dache\\.gemini\\antigravity-ide\\brain\\b5d82b6f-d5ab-4135-9a34-348739372bfe', 'cargo_fruits_banner_1784273282763.png');
  const srcBanner2 = path.join('C:\\Users\\dache\\.gemini\\antigravity-ide\\brain\\b5d82b6f-d5ab-4135-9a34-348739372bfe', 'cargo_spices_banner_1784273329682.png');
  const srcMobileBanner1 = path.join('C:\\Users\\dache\\.gemini\\antigravity-ide\\brain\\b5d82b6f-d5ab-4135-9a34-348739372bfe', 'banner_mobile_garuda_1784271856711.png');
  const srcMobileBanner2 = path.join('C:\\Users\\dache\\.gemini\\antigravity-ide\\brain\\b5d82b6f-d5ab-4135-9a34-348739372bfe', 'banner_mobile_contact_1784271874788.png');

  const destBanner1 = path.join(uploadDir, 'banner_garuda_exports.png');
  const destBanner2 = path.join(uploadDir, 'banner_contact_exports.png');
  const destMobileBanner1 = path.join(uploadDir, 'banner_mobile_garuda.png');
  const destMobileBanner2 = path.join(uploadDir, 'banner_mobile_contact.png');

  // Copy files
  if (fs.existsSync(srcBanner1)) fs.copyFileSync(srcBanner1, destBanner1);
  if (fs.existsSync(srcBanner2)) fs.copyFileSync(srcBanner2, destBanner2);
  if (fs.existsSync(srcMobileBanner1)) fs.copyFileSync(srcMobileBanner1, destMobileBanner1);
  if (fs.existsSync(srcMobileBanner2)) fs.copyFileSync(srcMobileBanner2, destMobileBanner2);

  // Clear existing banners
  await prisma.banner.deleteMany({});

  // Seed DB
  await prisma.banner.create({
    data: {
      title: 'GARUDA GLOBAL EXPORTS',
      subtitle: 'Premium Indian Fruits, Rice, Vegetables & Spices Exported Worldwide',
      image: '/uploads/banner_garuda_exports.png',
      mobileImage: '/uploads/banner_mobile_garuda.png',
      link: '/products',
      order: 1,
      isActive: true,
    }
  });

  await prisma.banner.create({
    data: {
      title: 'CONTACT US FOR EXPORTS',
      subtitle: 'Trusted Global Supplier • Bulk Orders • Worldwide Shipping',
      image: '/uploads/banner_contact_exports.png',
      mobileImage: '/uploads/banner_mobile_contact.png',
      link: '/contact',
      order: 2,
      isActive: true,
    }
  });

  console.log('Banners seeded successfully.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

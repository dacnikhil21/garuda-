import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { allProducts } from '@/data/products';
import crypto from 'crypto';

async function hashPassword(password: string) {
  return new Promise<string>((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString('hex');
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ':' + derivedKey.toString('hex'));
    });
  });
}

export async function GET() {
  try {
    const hashedPassword = await hashPassword('admin123');
    await prisma.user.upsert({
      where: { username: 'admin' },
      update: {},
      create: {
        username: 'admin',
        password: hashedPassword,
      },
    });

    const categories = [
      { name: "Rice", slug: "rice", description: "Premium quality export rice." },
      { name: "Vegetables", slug: "vegetables", description: "Fresh farm vegetables." },
      { name: "Fruits", slug: "fruits", description: "Fresh tropical fruits." },
      { name: "Spices", slug: "spices", description: "Aromatic Indian spices." },
      { name: "Makhana", slug: "makhana", description: "Healthy premium fox nuts." },
      { name: "Pulses", slug: "pulses", description: "High-quality protein-rich pulses." }
    ];

    for (const category of categories) {
      await prisma.category.upsert({
        where: { slug: category.slug },
        update: category,
        create: category,
      });
    }

    for (const product of allProducts) {
      const slug = product.name.toLowerCase().replace(/\s+/g, '-');
      await prisma.product.upsert({
        where: { slug },
        update: { ...product, slug },
        create: { ...product, slug },
      });
    }

    // Seed Banners only if they don't exist
    const existingBanners = await prisma.banner.count();
    if (existingBanners === 0) {
      const banners = [
        {
          title: "Premium Quality Spices",
          subtitle: "Exporting the finest Indian spices globally.",
          image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070",
          link: "/products",
          isActive: true,
          order: 1
        },
        {
          title: "Global Export Partners",
          subtitle: "Delivering fresh agricultural products worldwide.",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071",
          link: "/about",
          isActive: true,
          order: 2
        }
      ];

      for (const banner of banners) {
        await prisma.banner.create({
          data: banner,
        });
      }
    }

    return NextResponse.json({ success: true, message: 'Database seeded successfully with products and banners!' });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

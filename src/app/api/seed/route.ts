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

    for (const product of allProducts) {
      const slug = product.name.toLowerCase().replace(/\s+/g, '-');
      await prisma.product.upsert({
        where: { slug },
        update: { ...product, slug },
        create: { ...product, slug },
      });
    }

    return NextResponse.json({ success: true, message: 'Database seeded successfully!' });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

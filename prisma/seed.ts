import { PrismaClient } from '../src/generated/prisma/client';
import { allProducts } from '../src/data/products';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// We create a hash function manually for the seed without relying on Next.js/Web Crypto
import crypto from 'crypto';
async function hashPassword(password: string) {
  // Using native crypto to generate a salt and hash
  return new Promise<string>((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString('hex');
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ':' + derivedKey.toString('hex'));
    });
  });
}

const connectionString = process.env.DATABASE_URL!;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log(`Start seeding ...`);
  
  // Seed admin user
  const hashedPassword = await hashPassword('admin123');
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
    },
  });
  console.log(`Created admin user with id: ${admin.id}`);

  // Seed products
  for (const product of allProducts) {
    const slug = product.name.toLowerCase().replace(/\s+/g, '-');
    const dbProduct = await prisma.product.upsert({
      where: { slug: slug },
      update: {
        ...product,
        slug,
      },
      create: {
        ...product,
        slug,
      },
    });
    console.log(`Created/Updated product: ${dbProduct.name}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

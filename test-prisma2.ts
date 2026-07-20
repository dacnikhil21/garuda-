import { PrismaClient } from './src/generated/prisma/client';
const prisma = new PrismaClient({});
console.log('Keys in prisma:', Object.keys(prisma).filter(k => !k.startsWith('_')));
console.log('Does license exist?', !!prisma.license);

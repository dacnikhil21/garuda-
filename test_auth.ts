import { prisma } from './src/lib/prisma';
import { verifyPassword } from './src/lib/auth';

async function main() {
  const user = await prisma.user.findUnique({
    where: { username: 'admin' },
  });
  
  if (!user) {
    console.log('User not found in DB!');
    return;
  }
  console.log('User found:', user.username);
  console.log('Password hash in DB:', user.password);
  
  const isValid = await verifyPassword('admin123', user.password);
  console.log('Is valid with "admin123"?:', isValid);
}

main().finally(() => prisma.$disconnect());

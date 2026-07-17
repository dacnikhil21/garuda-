import { prisma } from './src/lib/prisma';
import * as dotenv from 'dotenv';
dotenv.config();

prisma.user.findMany().then(console.log).catch(console.error).finally(() => prisma.$disconnect());

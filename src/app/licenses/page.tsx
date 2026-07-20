import { prisma } from '@/lib/prisma';
import LicensesClient from './licenses-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Licenses | Garuda Global Exports',
  description: 'We are fully certified and licensed to provide you with the highest quality global exports.',
};

export default async function LicensesPage() {
  const dbLicenses = await prisma.license.findMany({
    select: { id: true, image: true, alt: true },
    orderBy: { createdAt: 'desc' }
  });

  return <LicensesClient dbLicenses={dbLicenses as any} />;
}

import { prisma } from '@/lib/prisma';
import LicensesClient from './licenses-client';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Export Certifications & Licenses',
  description: 'Garuda Global Exports is fully certified and licensed by agricultural export governing bodies in India for global trade.',
  alternates: {
    canonical: 'https://garudaglobalexports.co.in/licenses',
  },
  openGraph: {
    title: 'Export Certifications & Licenses | Garuda Global Exports',
    description: 'Explore our government certifications and licenses ensuring global trade compliance.',
    url: 'https://garudaglobalexports.co.in/licenses',
  },
};

export default async function LicensesPage() {
  const dbLicenses = await prisma.license.findMany({
    select: { id: true, image: true, alt: true },
    orderBy: { createdAt: 'desc' }
  });

  return <LicensesClient dbLicenses={dbLicenses as any} />;
}

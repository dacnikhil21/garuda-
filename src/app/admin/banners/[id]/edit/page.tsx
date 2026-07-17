import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import EditBannerForm from './edit-form';

export default async function EditBannerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const bannerId = parseInt(id, 10);
  if (isNaN(bannerId)) notFound();

  const banner = await prisma.banner.findUnique({
    where: { id: bannerId },
  });

  if (!banner) notFound();

  return <EditBannerForm banner={banner} />;
}

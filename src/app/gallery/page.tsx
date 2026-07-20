import { prisma } from '@/lib/prisma';
import GalleryClient from './gallery-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Garuda Global Exports',
  description: 'Explore the quality and excellence of Garuda Global Exports through our visual showcase.',
};

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
  const dbImages = await prisma.galleryImage.findMany({
    select: { id: true, image: true, alt: true },
    orderBy: { createdAt: 'desc' }
  });

  return <GalleryClient dbImages={dbImages as any} />;
}

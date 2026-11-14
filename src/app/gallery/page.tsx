import { prisma } from '@/lib/prisma';
import GalleryClient from './gallery-client';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Export Quality Gallery Showcase',
  description: 'Explore the quality, processing, packaging, and export excellence of Garuda Global Exports through our visual showcase.',
  alternates: {
    canonical: 'https://garudaglobalexports.co.in/gallery',
  },
  openGraph: {
    title: 'Export Quality Gallery | Garuda Global Exports',
    description: 'Explore the quality, processing, packaging, and export excellence of Garuda Global Exports.',
    url: 'https://garudaglobalexports.co.in/gallery',
  },
};

export default async function GalleryPage() {
  const dbImages = await prisma.galleryImage.findMany({
    select: { id: true, image: true, alt: true },
    orderBy: { createdAt: 'desc' }
  });

  return <GalleryClient dbImages={dbImages as any} />;
}

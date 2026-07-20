import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { EditCategoryForm } from './edit-category-form';

export const dynamic = 'force-dynamic';

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const categoryId = parseInt(resolvedParams.id);
  
  if (isNaN(categoryId)) {
    notFound();
  }

  const category = await prisma.category.findUnique({
    where: { id: categoryId }
  });

  if (!category) {
    notFound();
  }

  return <EditCategoryForm category={category} />;
}

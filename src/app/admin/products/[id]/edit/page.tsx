import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { EditProductForm } from './edit-form';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);
  
  if (isNaN(productId)) {
    notFound();
  }

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    notFound();
  }

  const uniqueCategories = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  });

  const categories = uniqueCategories.map(c => c.category);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-heading font-bold text-[#0B1F3A]">Edit Product</h1>
            <p className="text-slate-500 text-sm">Update product details for {product.name}</p>
          </div>
        </div>
      </div>

      <EditProductForm product={product} categories={categories} />
    </div>
  );
}

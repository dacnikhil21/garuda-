import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { NewProductForm } from './new-form';

export const dynamic = 'force-dynamic';

export default async function NewProductPage() {
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
            <h1 className="text-2xl font-heading font-bold text-[#0B1F3A]">Add New Product</h1>
            <p className="text-slate-500 text-sm">Create a new product listing in the catalog</p>
          </div>
        </div>
      </div>

      <NewProductForm categories={categories} />
    </div>
  );
}

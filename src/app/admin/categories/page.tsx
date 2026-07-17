import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { deleteCategoryAction } from '../actions';
import { revalidatePath } from 'next/cache';

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-[#0B1F3A]">Categories</h1>
          <p className="text-slate-500 text-sm">Manage your product categories.</p>
        </div>
        <Link 
          href="/admin/categories/new" 
          className="bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Category
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-4 px-6 text-xs font-bold text-slate-400 tracking-widest uppercase">Category</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-400 tracking-widest uppercase">Slug</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-400 tracking-widest uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-slate-400">
                    <p className="text-sm">No categories found. Add your first category!</p>
                  </td>
                </tr>
              ) : (
                categories.map((category) => (
                  <tr key={category.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                          {category.image ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-[#0B1F3A]">{category.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-slate-100 text-slate-500 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                        {category.slug}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <form action={async () => {
                        'use server';
                        await deleteCategoryAction(category.id);
                      }}>
                        <button type="submit" className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

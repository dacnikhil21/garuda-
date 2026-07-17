import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import { Edit2, Plus, Trash2, Package } from 'lucide-react';
import { deleteProductAction } from './actions';

export const dynamic = 'force-dynamic';

// We fetch data in a Server Component
export default async function AdminDashboard() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-3xl font-heading font-bold text-[#0B1F3A] mb-2">Dashboard</h1>
          <p className="text-slate-500 text-sm">Manage your export product catalog.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 flex items-center gap-3">
            <Package className="w-5 h-5 text-accent" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Total Products</p>
              <p className="font-bold text-[#0B1F3A] leading-none text-lg">{products.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-heading font-bold text-[#0B1F3A]">Product Catalog</h2>
        <Link 
          href="/admin/products/new"
          className="bg-accent hover:bg-yellow-500 text-[#0B1F3A] px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors shadow-sm flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> Add Product
        </Link>
      </div>

      {/* Products Grid */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm min-w-[600px]">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-widest font-bold">
              <tr>
                <th className="px-6 py-4 rounded-tl-2xl whitespace-nowrap">Product</th>
                <th className="px-6 py-4 whitespace-nowrap">Category</th>
                <th className="px-6 py-4">Badge</th>
                <th className="px-6 py-4 text-right rounded-tr-2xl">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                    No products found. Start by adding a new product.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200 shrink-0">
                          <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-[#0B1F3A]">{product.name}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{product.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-slate-600">{product.badge}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/admin/products/${product.id}/edit`}
                          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        
                        <form action={async () => {
                          'use server';
                          await deleteProductAction(product.id);
                        }}>
                          <button 
                            type="submit"
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </form>
                      </div>
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

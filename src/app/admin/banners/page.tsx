import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import BannerList from './banner-list';

export const dynamic = 'force-dynamic';

export default async function BannersPage() {
  const banners = await prisma.banner.findMany({
    orderBy: { order: 'asc' }
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-[#0B1F3A]">Banners</h1>
          <p className="text-slate-500 text-sm">Manage homepage sliding banners.</p>
        </div>
        <Link 
          href="/admin/banners/new" 
          className="bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Banner
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="py-4 px-6 text-xs font-bold text-slate-400 tracking-widest uppercase w-16">Order</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-400 tracking-widest uppercase">Banner</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-400 tracking-widest uppercase">Status</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-400 tracking-widest uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <BannerList initialBanners={banners} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

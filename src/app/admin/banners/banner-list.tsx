'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Edit, Trash2, Image as ImageIcon, ArrowUp, ArrowDown, Calendar, Loader2 } from 'lucide-react';
import { Banner } from '@/generated/prisma/client';
import { updateBannerOrderAction, deleteBannerAction, toggleBannerStatusAction } from '../actions';
import { useRouter } from 'next/navigation';

export default function BannerList({ initialBanners }: { initialBanners: Banner[] }) {
  const [banners, setBanners] = useState(initialBanners);
  const [savingOrder, setSavingOrder] = useState(false);
  const router = useRouter();

  const moveUp = async (index: number) => {
    if (index === 0) return;
    const newBanners = [...banners];
    const temp = newBanners[index - 1];
    newBanners[index - 1] = newBanners[index];
    newBanners[index] = temp;
    setBanners(newBanners);
    saveOrder(newBanners);
  };

  const moveDown = async (index: number) => {
    if (index === banners.length - 1) return;
    const newBanners = [...banners];
    const temp = newBanners[index + 1];
    newBanners[index + 1] = newBanners[index];
    newBanners[index] = temp;
    setBanners(newBanners);
    saveOrder(newBanners);
  };

  const saveOrder = async (orderedBanners: Banner[]) => {
    setSavingOrder(true);
    await updateBannerOrderAction(orderedBanners.map(b => b.id));
    setSavingOrder(false);
  };

  if (banners.length === 0) {
    return (
      <tr>
        <td colSpan={4} className="py-12 text-center text-slate-400">
          <p className="text-sm">No banners found. Add a banner to display on the home page!</p>
        </td>
      </tr>
    );
  }

  const isScheduled = (banner: Banner) => banner.startDate || banner.endDate;
  const isCurrentlyActive = (banner: Banner) => {
    if (!banner.isActive) return false;
    const now = new Date();
    if (banner.startDate && new Date(banner.startDate) > now) return false;
    if (banner.endDate && new Date(banner.endDate) < now) return false;
    return true;
  };

  return (
    <>
      {banners.map((banner, index) => (
        <tr key={banner.id} className={`hover:bg-slate-50/50 transition-colors ${savingOrder ? 'opacity-50' : ''}`}>
          <td className="py-4 px-6 w-16 text-slate-400">
            <div className="flex flex-col items-center gap-1">
              <button 
                onClick={() => moveUp(index)} 
                disabled={index === 0 || savingOrder}
                className="hover:text-[#0B1F3A] disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
              <span className="text-[10px] font-mono">{index + 1}</span>
              <button 
                onClick={() => moveDown(index)} 
                disabled={index === banners.length - 1 || savingOrder}
                className="hover:text-[#0B1F3A] disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
              >
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </td>
          <td className="py-4 px-6">
            <div className="flex items-center gap-4">
              <div className="w-24 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                {banner.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="w-5 h-5 text-slate-400" />
                )}
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">{banner.title}</p>
                {banner.subtitle && <p className="text-xs text-slate-500">{banner.subtitle}</p>}
                
                {isScheduled(banner) && (
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-blue-600 bg-blue-50 w-fit px-2 py-0.5 rounded-full font-medium">
                    <Calendar className="w-3 h-3" />
                    {banner.startDate && <span>From {new Date(banner.startDate).toLocaleDateString()}</span>}
                    {banner.startDate && banner.endDate && <span> • </span>}
                    {banner.endDate && <span>Until {new Date(banner.endDate).toLocaleDateString()}</span>}
                  </div>
                )}
              </div>
            </div>
          </td>
          <td className="py-4 px-6">
            <div className="flex items-center gap-3">
              <form action={async () => {
                await toggleBannerStatusAction(banner.id, !banner.isActive);
              }}>
                <button 
                  type="submit" 
                  className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${banner.isActive ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}
                >
                  {banner.isActive ? 'Active' : 'Disabled'}
                </button>
              </form>
              
              {banner.isActive && !isCurrentlyActive(banner) && (
                <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-md bg-amber-100 text-amber-700">
                  Scheduled / Inactive
                </span>
              )}
            </div>
          </td>
          <td className="py-4 px-6 text-right">
            <div className="flex items-center justify-end gap-2">
              <Link href={`/admin/banners/${banner.id}/edit`} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                <Edit className="w-4 h-4" />
              </Link>
              <form action={async () => {
                await deleteBannerAction(banner.id);
              }}>
                <button type="submit" className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              </form>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

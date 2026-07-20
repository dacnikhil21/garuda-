import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Plus, Image as ImageIcon, Trash2 } from 'lucide-react';
import { deleteGalleryImageAction } from '../actions';

export const dynamic = 'force-dynamic';

export default async function AdminGalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-heading font-bold text-[#0B1F3A]">Gallery Management</h1>
          <p className="text-slate-500 text-sm mt-1">Manage the images displayed on your Gallery page.</p>
        </div>
        <Link href="/admin/gallery/new" className="bg-accent hover:bg-[#D97706] text-white px-6 py-2.5 rounded-full font-bold tracking-widest uppercase text-xs transition-colors shadow-md flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Image
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100 text-xs uppercase tracking-widest text-slate-500 font-bold">
            <tr>
              <th className="py-4 px-6">Image</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {images.length === 0 ? (
              <tr>
                <td colSpan={2} className="py-12 text-center text-slate-400">
                  <p className="text-sm">No gallery images found.</p>
                </td>
              </tr>
            ) : (
              images.map((img) => (
                <tr key={img.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                        {img.image ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img src={img.image} alt={img.alt || 'Gallery image'} className="w-full h-full object-cover" />
                        ) : (
                          <ImageIcon className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                      <p className="text-slate-500 text-xs">{img.alt || 'No alt text provided'}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right align-middle">
                    <form action={async () => {
                      'use server';
                      await deleteGalleryImageAction(img.id);
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
  );
}

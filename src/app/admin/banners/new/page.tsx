'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2, Image as ImageIcon } from 'lucide-react';
import { createBannerAction } from '../../actions';

export const dynamic = 'force-dynamic';

export default function NewBannerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState('');
  const [previewMobileImage, setPreviewMobileImage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const res = await createBannerAction(formData);

    if (res.error) {
      setError(res.error);
      setLoading(false);
    } else {
      router.push('/admin/banners');
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/banners" className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-heading font-bold text-[#0B1F3A]">Add Banner</h1>
            <p className="text-slate-500 text-sm">Create a new banner for the homepage slider</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
          
          {error && (
            <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-600" />
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Title</label>
                <input type="text" name="title" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all" placeholder="e.g. We Export Worldwide" />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Subtitle (Optional)</label>
                <input type="text" name="subtitle" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all" placeholder="e.g. Delivering fresh products across the globe" />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Button Link (Optional)</label>
                <input type="text" name="link" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all" placeholder="e.g. /products" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Start Date (Optional)</label>
                  <input type="datetime-local" name="startDate" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">End Date (Optional)</label>
                  <input type="datetime-local" name="endDate" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Desktop Banner Image (16:5)</label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input 
                      type="file" 
                      name="imageFile" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPreviewImage(URL.createObjectURL(file));
                        }
                      }}
                      className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:tracking-widest file:uppercase file:bg-accent file:text-[#0B1F3A] hover:file:bg-accent/90"
                    />
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex-1 h-px bg-slate-200"></span>
                    OR
                    <span className="flex-1 h-px bg-slate-200"></span>
                  </div>
                  <input 
                    type="text" 
                    name="image" 
                    onChange={(e) => setPreviewImage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all text-sm" 
                    placeholder="Enter Image URL (e.g. https://...)" 
                  />
                </div>
              </div>

              <div className="h-40 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden relative">
                {previewImage ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                ) : (
                  <div className="text-center text-slate-400 flex flex-col items-center gap-2">
                    <ImageIcon className="w-8 h-8 opacity-50" />
                    <span className="text-xs font-medium uppercase tracking-widest">Desktop Preview</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6 md:col-span-2 border-t border-slate-100 pt-8">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Mobile Banner Image (16:8) - Optional</label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input 
                      type="file" 
                      name="mobileImageFile" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPreviewMobileImage(URL.createObjectURL(file));
                        }
                      }}
                      className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:tracking-widest file:uppercase file:bg-slate-200 file:text-[#0B1F3A] hover:file:bg-slate-300"
                    />
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex-1 h-px bg-slate-200"></span>
                    OR
                    <span className="flex-1 h-px bg-slate-200"></span>
                  </div>
                  <input 
                    type="text" 
                    name="mobileImage" 
                    onChange={(e) => setPreviewMobileImage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all text-sm" 
                    placeholder="Enter Mobile Image URL (e.g. https://...)" 
                  />
                </div>
              </div>

              <div className="h-40 max-w-sm rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden relative">
                {previewMobileImage ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={previewMobileImage} alt="Mobile Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                ) : (
                  <div className="text-center text-slate-400 flex flex-col items-center gap-2">
                    <ImageIcon className="w-8 h-8 opacity-50" />
                    <span className="text-xs font-medium uppercase tracking-widest">Mobile Preview</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end gap-4">
            <Link href="/admin/banners" className="px-6 py-3 rounded-full font-bold tracking-widest uppercase text-xs text-slate-500 hover:bg-slate-100 transition-colors">
              Cancel
            </Link>
            <button type="submit" disabled={loading} className="bg-[#0B1F3A] hover:bg-[#153460] text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase text-xs transition-colors shadow-md flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save Banner</>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

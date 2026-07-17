'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createProductAction } from '../../actions';
import { Save, Loader2, Image as ImageIcon } from 'lucide-react';

export function NewProductForm({ categories }: { categories: string[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState('');
  const [isNewCategory, setIsNewCategory] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const res = await createProductAction(formData);

    if (res.error) {
      setError(res.error);
      setLoading(false);
    } else {
      router.push('/admin');
    }
  }

  return (
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
              <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Product Name</label>
              <input type="text" name="name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all" placeholder="e.g. Basmathi Rice" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500">Category</label>
                {!isNewCategory && (
                  <button 
                    type="button" 
                    onClick={() => setIsNewCategory(true)}
                    className="text-xs font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-widest"
                  >
                    + New Category
                  </button>
                )}
              </div>
              
              {isNewCategory ? (
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    name="category" 
                    required 
                    placeholder="Enter new category name..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all" 
                  />
                  <button 
                    type="button" 
                    onClick={() => setIsNewCategory(false)}
                    className="px-4 py-3 text-xs font-bold tracking-widest uppercase text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <select 
                  name="category" 
                  required 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all appearance-none"
                >
                  <option value="">Select an existing category...</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Badge Text</label>
              <input type="text" name="badge" defaultValue="PREMIUM QUALITY" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Image Source</label>
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
                  <span className="text-xs font-medium uppercase tracking-widest">Image Preview</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Description</label>
          <textarea name="description" required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all resize-y" placeholder="Describe the product..." />
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end gap-4">
          <Link href="/admin" className="px-6 py-3 rounded-full font-bold tracking-widest uppercase text-xs text-slate-500 hover:bg-slate-100 transition-colors">
            Cancel
          </Link>
          <button type="submit" disabled={loading} className="bg-[#0B1F3A] hover:bg-[#153460] text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase text-xs transition-colors shadow-md flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save Product</>}
          </button>
        </div>
        
        {/* Hidden fields for color themes */}
        <input type="hidden" name="bgColor" value="bg-[#FFF9EB]" />
        <input type="hidden" name="pillBg" value="bg-[#FEF3C7]" />
        <input type="hidden" name="pillText" value="text-[#D97706]" />
      </div>
    </form>
  );
}

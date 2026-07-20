'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createLicenseAction } from '../../actions';
import { Save, Loader2, FileBadge } from 'lucide-react';

export default function NewLicensePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const res = await createLicenseAction(formData);

    if (res.error) {
      setError(res.error);
      setLoading(false);
    } else {
      router.push('/admin/licenses');
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-[#0B1F3A]">Add License</h1>
        <p className="text-slate-500 text-sm mt-1">Upload a new license or certificate document.</p>
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
                <input 
                  type="text" 
                  name="title" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all text-sm" 
                  placeholder="e.g. FSSAI Certificate" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Document Image</label>
                <input 
                  type="file" 
                  name="imageFile" 
                  accept="image/*"
                  required
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setPreviewImage(URL.createObjectURL(file));
                    }
                  }}
                  className="w-full text-sm file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-xs file:font-bold file:tracking-widest file:uppercase file:bg-accent file:text-[#0B1F3A] hover:file:bg-accent/90"
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Alt Text (Optional)</label>
                <input 
                  type="text" 
                  name="alt" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all text-sm" 
                  placeholder="Describe the document..." 
                />
              </div>
            </div>

            <div className="aspect-[3/4] max-w-sm mx-auto w-full rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden relative">
              {previewImage ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={previewImage} alt="Preview" className="w-full h-full object-contain p-2" />
              ) : (
                <div className="text-center text-slate-400 flex flex-col items-center gap-2">
                  <FileBadge className="w-8 h-8 opacity-50" />
                  <span className="text-xs font-medium uppercase tracking-widest">Document Preview</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end gap-4">
            <Link href="/admin/licenses" className="px-6 py-3 rounded-full font-bold tracking-widest uppercase text-xs text-slate-500 hover:bg-slate-100 transition-colors">
              Cancel
            </Link>
            <button type="submit" disabled={loading} className="bg-[#0B1F3A] hover:bg-[#153460] text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase text-xs transition-colors shadow-md flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Uploading...</> : <><Save className="w-4 h-4" /> Save License</>}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

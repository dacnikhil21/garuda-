'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Leaf, LogOut, Package, Plus, LayoutDashboard, FolderTree, Image, Menu, X } from 'lucide-react';
import { logoutAction } from './actions';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await logoutAction();
    router.push('/admin/login');
  };

  const SidebarContent = () => (
    <>
      <div className="p-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <Leaf className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-lg leading-none">Garuda</h2>
            <span className="text-[10px] tracking-widest text-accent uppercase font-bold">Admin Portal</span>
          </div>
        </div>
        {/* Close button for mobile */}
        <button className="md:hidden text-white/50 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="flex flex-col gap-2 mt-8 px-4">
          <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold tracking-widest text-xs uppercase ${pathname === '/admin' ? 'bg-accent text-[#0B1F3A]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <Link href="/admin/products/new" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold tracking-widest text-xs uppercase ${pathname === '/admin/products/new' ? 'bg-accent text-[#0B1F3A]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <Plus className="w-4 h-4" /> Add Product
          </Link>
          <Link href="/admin/categories" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold tracking-widest text-xs uppercase ${pathname.startsWith('/admin/categories') ? 'bg-accent text-[#0B1F3A]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <FolderTree className="w-4 h-4" /> Categories
          </Link>
          <Link href="/admin/banners" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold tracking-widest text-xs uppercase ${pathname.startsWith('/admin/banners') ? 'bg-accent text-[#0B1F3A]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <Image className="w-4 h-4" /> Banners
          </Link>
          <Link href="/admin/gallery" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold tracking-widest text-xs uppercase ${pathname.startsWith('/admin/gallery') ? 'bg-accent text-[#0B1F3A]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <Image className="w-4 h-4" /> Gallery
          </Link>
          <Link href="/admin/licenses" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-bold tracking-widest text-xs uppercase ${pathname.startsWith('/admin/licenses') ? 'bg-accent text-[#0B1F3A]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <Image className="w-4 h-4" /> Licenses
          </Link>
        </nav>
      </div>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium text-slate-300 hover:bg-red-500/10 hover:text-red-400 w-full"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-[#0B1F3A] text-white hidden md:flex flex-col sticky top-0 h-screen shadow-xl z-20 shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <aside className="w-64 bg-[#0B1F3A] text-white flex flex-col h-full relative z-10 shadow-2xl">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen max-w-full overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-[#0B1F3A] text-white p-4 flex items-center justify-between sticky top-0 z-40 shadow-md">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white hover:text-accent">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-accent" />
              <span className="font-heading font-bold">Garuda Admin</span>
            </div>
          </div>
          <button onClick={handleLogout} className="p-2 text-slate-300 hover:text-white">
            <LogOut className="w-5 h-5" />
          </button>
        </header>
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

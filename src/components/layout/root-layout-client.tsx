"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SplashScreen } from "@/components/layout/splash-screen";

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPath = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminPath && <SplashScreen />}
      {!isAdminPath && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {!isAdminPath && <Footer />}
    </>
  );
}

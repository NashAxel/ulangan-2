"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isProdukActive = pathname.startsWith("/produk");

  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        {/* HEADER */}
        <header className="w-full border-b border-slate-300 bg-white py-6 px-8 text-center">
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            Toko Katalog Pribadi
          </h1>
        </header>

        {/* BODY WRAPPER (SIDEBAR + MAIN CONTENT) */}
        <div className="flex flex-1 flex-col md:flex-row">
          {/* SIDEBAR */}
          <aside className="w-full md:w-56 border-b md:border-b-0 md:border-r border-slate-300 bg-slate-50/50 p-4">
            <nav className="flex flex-row md:flex-col gap-2">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  isHomeActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                Home
              </Link>
              <Link
                href="/produk"
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  isProdukActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                Produk Kami
              </Link>
            </nav>
          </aside>

          {/* KONTEN UTAMA */}
          <main className="flex-1 p-6 md:p-8 bg-white">
            {children}
          </main>
        </div>

        {/* FOOTER */}
        <footer className="w-full border-t border-slate-300 bg-white py-4 px-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Katalog Barang Jualan - Tugas Web Routing
        </footer>
      </body>
    </html>
  );
}
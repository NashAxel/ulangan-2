import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProdukDetailPage({ params }: PageProps) {
  const { id } = await params;
  const produk = products.find((item) => item.id === id);

  if (!produk) {
    notFound();
  }

  return (
    <div className="max-w-4xl">
      <div className="border border-slate-300 bg-white">
        {/* Bagian Image Besar */}
        <div className="w-full h-72 md:h-96 border-b border-slate-300 bg-slate-100 overflow-hidden">
          <img
            src={produk.gambar}
            alt={produk.nama}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bagian Detail Konten */}
        <div className="p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <h2 className="text-2xl font-bold text-slate-900">{produk.nama}</h2>
            <span className="text-lg font-semibold text-slate-800">
              {produk.harga}
            </span>
          </div>

          <p className="text-xs text-slate-500 mb-4">
            Diposting pada: {produk.tanggal}
          </p>

          <p className="text-slate-700 leading-relaxed text-sm md:text-base">
            {produk.deskripsi}
          </p>

          <div className="mt-8 pt-4 border-t border-slate-200">
            <Link
              href="/produk"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 underline underline-offset-4"
            >
              &larr; Kembali ke daftar produk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
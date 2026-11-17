import Link from "next/link";
import { products } from "@/data/products";

export default function ProdukListPage() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-300">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex flex-col border-r border-b border-slate-300 bg-white"
          >
            {/* Bagian Image */}
            <div className="h-44 w-full border-b border-slate-300 bg-slate-100 overflow-hidden">
              <img
                src={item.gambar}
                alt={item.nama}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Bagian Info */}
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <h3 className="font-semibold text-slate-900 text-base leading-snug">
                  {item.nama}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{item.tanggal}</p>
                <p className="text-xs font-medium text-slate-800 mt-1">
                  {item.harga}
                </p>
                <p className="text-sm text-slate-600 mt-3 line-clamp-3">
                  {item.cuplikan}
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <Link
                  href={`/produk/${item.id}`}
                  className="text-sm font-medium text-slate-900 underline underline-offset-4 hover:text-slate-600"
                >
                  baca
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
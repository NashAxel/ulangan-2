export default function DashboardPage() {
  return (
    <div className="h-full min-h-80 flex flex-col items-center justify-center text-center border border-slate-200 rounded-lg p-8 bg-white">
      <h2 className="text-2xl font-semibold text-slate-900 mb-2">
        Selamat datang di website pribadiku
      </h2>
      <p className="text-slate-500 max-w-md text-sm">
        Silakan pilih menu <strong>Produk Kami</strong> di sebelah kiri untuk melihat daftar barang jualan yang tersedia.
      </p>
    </div>
  );
}
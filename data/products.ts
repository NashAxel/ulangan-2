export interface Product {
  id: string;
  nama: string;
  tanggal: string;
  harga: string;
  cuplikan: string;
  deskripsi: string;
  gambar: string;
}

export const products: Product[] = [
  {
    id: "1",
    nama: "Keyboard Mekanikal Wireless 75%",
    tanggal: "15 Nov 2026",
    harga: "Rp 650.000",
    cuplikan: "Keyboard mekanikal compact dengan switch tactile yang senyap dan baterai tahan lama...",
    deskripsi:
      "Keyboard mekanikal layout 75% dengan koneksi dual-mode (Bluetooth 5.0 & USB-C). Dilengkapi keycaps PBT double-shot berwarna putih minimalis, hot-swappable socket, dan peredam suara internal.",
    gambar: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    nama: "In-Ear Monitor (IEM) Studio Acoustic",
    tanggal: "14 Nov 2026",
    harga: "Rp 320.000",
    cuplikan: "Earphone monitor dengan kejernihan vokal tinggi dan kabel braided detachable...",
    deskripsi:
      "In-Ear Monitor (IEM) dengan driver dinamis 10mm yang menghasilkan separasi instrumen jernih dan bass yang terkontrol. Menggunakan konektor 2-pin yang dapat dilepas-pasang.",
    gambar: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    nama: "Stand Laptop Aluminium Ergonomis",
    tanggal: "12 Nov 2026",
    harga: "Rp 185.000",
    cuplikan: "Penyangga laptop berbahan aluminium kokoh untuk menjaga sirkulasi udara tetap dingin...",
    deskripsi:
      "Stand laptop lipat berbahan aluminium alloy anodized silver. Membantu memperbaiki postur duduk saat bekerja dan memaksimalkan aliran udara di bagian bawah laptop.",
    gambar: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    nama: "Deskmat Minimalis Off-White",
    tanggal: "10 Nov 2026",
    harga: "Rp 110.000",
    cuplikan: "Alas meja ukuran 80x30 cm dengan permukaan kain halus dan jahitan tepi rapi...",
    deskripsi:
      "Deskmat berukuran 80x30 cm dengan ketebalan 4mm. Permukaan micro-weave memberikan kontrol mouse yang presisi serta dilengkapi bagian bawah karet anti-slip.",
    gambar: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=800&q=80",
  },
];
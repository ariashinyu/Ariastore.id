import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-600 mb-8">Halaman Tidak Ditemukan</h2>
        <p className="text-slate-500 mb-8">Maaf, halaman yang Anda cari tidak dapat ditemukan.</p>
        <Link
          href="/"
          className="bg-slate-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors inline-block"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}

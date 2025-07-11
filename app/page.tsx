import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"
import AddToCartButton from "@/components/AddToCartButton"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold text-slate-800 tracking-tight">
              Ariastore
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Produk
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                Kontak
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                href="/cart"
                className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Keranjang
              </Link>
            </div>
          </div>
          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 flex space-x-6">
            <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium">
              Home
            </Link>
            <Link href="/products" className="text-slate-700 hover:text-slate-900 font-medium">
              Produk
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-slate-900 font-medium">
              Kontak
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Koleksi Pakaian Pria Terkini</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Temukan gaya terbaik Anda dengan koleksi pakaian pria premium dari Ariastore. Kualitas terbaik dengan desain
            yang selalu mengikuti tren terkini.
          </p>
          <Link
            href="/products"
            className="bg-slate-800 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-slate-700 transition-colors inline-block"
          >
            Lihat Koleksi
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Produk Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 hover:text-slate-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-slate-600 mb-4 text-sm line-clamp-2">{product.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-800">
                      Rp {product.price.toLocaleString("id-ID")}
                    </span>
                    <AddToCartButton product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ariastore</h3>
              <p className="text-slate-300 mb-4">
                Toko pakaian pria terpercaya dengan koleksi terkini dan kualitas premium.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
              <div className="space-y-2 text-slate-300">
                <p>📧 info@ariastore.com</p>
                <p>📱 +62 812-3456-7890</p>
                <p>📍 Jl. Braga No. 123, Bandung, Jawa Barat</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
              <div className="space-y-2 text-slate-300">
                <p>Senin - Jumat: 09:00 - 21:00</p>
                <p>Sabtu - Minggu: 10:00 - 22:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Ariastore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

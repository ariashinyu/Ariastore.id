import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"
import AddToCartButton from "@/components/AddToCartButton"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-800">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-slate-800">
            Produk
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative h-96 lg:h-[600px] rounded-xl overflow-hidden bg-white shadow-lg">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">{product.name}</h1>
                <p className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Deskripsi Produk</h3>
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Spesifikasi</h3>
                <ul className="space-y-2 text-slate-600">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <AddToCartButton product={product} className="w-full py-4 text-lg" />
                <Link
                  href="/products"
                  className="block w-full text-center bg-slate-200 text-slate-800 py-4 rounded-lg font-medium hover:bg-slate-300 transition-colors"
                >
                  Lihat Produk Lainnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Produk Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <Link href={`/products/${relatedProduct.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link href={`/products/${relatedProduct.id}`}>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2 hover:text-slate-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <span className="text-xl font-bold text-slate-800">
                      Rp {relatedProduct.price.toLocaleString("id-ID")}
                    </span>
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

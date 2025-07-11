[209240011]_Ecommerce_UAS/

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/hooks/useCart"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart()

  if (cart.length === 0) {
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
          </div>
        </header>

        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">Keranjang Belanja</h1>
          <div className="bg-white rounded-xl shadow-lg p-12">
            <p className="text-xl text-slate-600 mb-8">Keranjang Anda masih kosong</p>
            <Link
              href="/products"
              className="bg-slate-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors inline-block"
            >
              Mulai Belanja
            </Link>
          </div>
        </div>
      </div>
    )
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
                Keranjang ({cart.length})
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Keranjang Belanja</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800">{item.name}</h3>
                    <p className="text-slate-600">Rp {item.price.toLocaleString("id-ID")}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-semibold text-slate-800">
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 text-sm mt-1"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Ringkasan Pesanan</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-medium">Rp {getTotalPrice().toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Ongkos Kirim</span>
                <span className="font-medium">Gratis</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>Rp {getTotalPrice().toLocaleString("id-ID")}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-slate-800 text-white py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors mb-4">
              Checkout
            </button>

            <Link
              href="/products"
              className="block w-full text-center bg-slate-200 text-slate-800 py-3 rounded-lg font-medium hover:bg-slate-300 transition-colors"
            >
              Lanjut Belanja
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

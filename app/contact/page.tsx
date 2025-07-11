"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulasi pengiriman form
    alert("Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
              <Link
                href="/contact"
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors border-b-2 border-slate-800"
              >
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
            <Link
              href="/contact"
              className="text-slate-700 hover:text-slate-900 font-medium border-b-2 border-slate-800"
            >
              Kontak
            </Link>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-800 text-center mb-12">Hubungi Kami</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-slate-800 mb-6">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Email</h3>
                      <p className="text-slate-600">info@ariastore.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Telepon</h3>
                      <p className="text-slate-600">+62 812-3456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Alamat</h3>
                      <p className="text-slate-600">Jl. Braga No. 123, Bandung, Jawa Barat 40111</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Jam Operasional</h3>
                <div className="space-y-2 text-slate-600">
                  <p>
                    <strong>Senin - Jumat:</strong> 09:00 - 21:00
                  </p>
                  <p>
                    <strong>Sabtu - Minggu:</strong> 10:00 - 22:00
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                    placeholder="Masukkan email Anda"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-800 text-white py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
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

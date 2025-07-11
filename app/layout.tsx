import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/hooks/useCart"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ariastore - Toko Pakaian Pria Terkini",
  description:
    "Temukan koleksi pakaian pria terbaik di Ariastore. Kualitas premium dengan harga terjangkau. Berlokasi di Bandung, Jawa Barat.",
  keywords: "pakaian pria, fashion pria, kemeja, celana, jaket, Bandung, toko online",
  authors: [{ name: "Ariastore" }],
  openGraph: {
    title: "Ariastore - Toko Pakaian Pria Terkini",
    description: "Temukan koleksi pakaian pria terbaik di Ariastore",
    type: "website",
    locale: "id_ID",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

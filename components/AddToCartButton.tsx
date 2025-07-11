"use client"

import { useCart } from "@/hooks/useCart"
import type { Product } from "@/lib/products"

interface AddToCartButtonProps {
  product: Product
  className?: string
}

export default function AddToCartButton({ product, className = "" }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors font-medium ${className}`}
    >
      Tambah ke Keranjang
    </button>
  )
}

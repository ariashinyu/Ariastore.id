export interface Product {
  id: string
  name: string
  price: number
  image: string
  shortDescription: string
  description: string
  specifications: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Kemeja Formal Premium",
    price: 299000,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop&crop=center",
    shortDescription: "Kemeja formal berkualitas tinggi dengan bahan katun premium untuk tampilan profesional.",
    description:
      "Kemeja formal premium yang dirancang khusus untuk pria modern yang mengutamakan kualitas dan kenyamanan. Dibuat dari bahan katun berkualitas tinggi dengan jahitan yang rapi dan detail yang sempurna. Cocok untuk acara formal, meeting, atau aktivitas bisnis lainnya.",
    specifications: [
      "Bahan: 100% Katun Premium",
      "Ukuran: S, M, L, XL, XXL",
      "Warna: Putih, Biru Muda, Abu-abu",
      "Perawatan: Dry Clean atau Cuci Manual",
      "Garansi: 30 hari",
    ],
  },
  {
    id: "2",
    name: "Kaos Polo Casual",
    price: 149000,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop&crop=center",
    shortDescription: "Kaos polo casual dengan desain modern dan bahan yang nyaman untuk aktivitas sehari-hari.",
    description:
      "Kaos polo casual yang sempurna untuk gaya santai namun tetap terlihat rapi. Dibuat dari bahan cotton blend yang lembut dan breathable, memberikan kenyamanan maksimal sepanjang hari. Desain klasik dengan sentuhan modern yang cocok untuk berbagai kesempatan.",
    specifications: [
      "Bahan: Cotton Blend (60% Katun, 40% Polyester)",
      "Ukuran: S, M, L, XL, XXL",
      "Warna: Navy, Hitam, Putih, Maroon",
      "Perawatan: Cuci Mesin 30°C",
      "Garansi: 14 hari",
    ],
  },
  {
    id: "3",
    name: "Celana Chino Slim Fit",
    price: 249000,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop&crop=center",
    shortDescription:
      "Celana chino slim fit dengan potongan modern dan bahan berkualitas untuk tampilan kasual yang stylish.",
    description:
      "Celana chino slim fit yang menggabungkan kenyamanan dan style dalam satu produk. Potongan slim fit yang tidak terlalu ketat memberikan kebebasan bergerak sambil tetap mempertahankan siluet yang modern. Cocok untuk acara semi-formal atau casual.",
    specifications: [
      "Bahan: Cotton Twill Premium",
      "Ukuran: 28, 30, 32, 34, 36, 38",
      "Warna: Khaki, Navy, Hitam, Coklat",
      "Model: Slim Fit",
      "Garansi: 30 hari",
    ],
  },
  {
    id: "4",
    name: "Jaket Bomber Premium",
    price: 399000,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center",
    shortDescription:
      "Jaket bomber premium dengan desain trendy dan bahan berkualitas tinggi untuk gaya urban yang keren.",
    description:
      "Jaket bomber premium yang menjadi must-have item untuk pria yang mengikuti tren fashion terkini. Desain klasik bomber dengan material berkualitas tinggi dan detail finishing yang sempurna. Cocok untuk cuaca dingin atau sebagai layering piece.",
    specifications: [
      "Bahan: Polyester Premium dengan Lining",
      "Ukuran: S, M, L, XL, XXL",
      "Warna: Hitam, Navy, Olive Green",
      "Fitur: Zipper YKK, Ribbed Cuffs",
      "Garansi: 60 hari",
    ],
  },
  {
    id: "5",
    name: "Sweater Hoodie Casual",
    price: 199000,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center",
    shortDescription: "Sweater hoodie casual yang nyaman dan hangat, perfect untuk gaya santai sehari-hari.",
    description:
      "Sweater hoodie casual yang memberikan kenyamanan maksimal dengan gaya yang tetap trendy. Dibuat dari bahan fleece berkualitas yang lembut dan hangat. Hood dengan drawstring dan kantong depan yang fungsional membuat hoodie ini sempurna untuk aktivitas santai.",
    specifications: [
      "Bahan: Cotton Fleece (80% Katun, 20% Polyester)",
      "Ukuran: S, M, L, XL, XXL",
      "Warna: Abu-abu, Hitam, Navy, Maroon",
      "Fitur: Hood dengan Drawstring, Kantong Depan",
      "Garansi: 30 hari",
    ],
  },
  {
    id: "6",
    name: "Kemeja Flanel Kotak",
    price: 179000,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&crop=center",
    shortDescription: "Kemeja flanel dengan motif kotak-kotak klasik, nyaman dan stylish untuk gaya kasual.",
    description:
      "Kemeja flanel dengan motif kotak-kotak yang timeless dan selalu trendy. Bahan flanel yang lembut dan hangat membuatnya perfect untuk cuaca dingin atau sebagai outer layer. Desain klasik yang cocok untuk berbagai gaya, dari casual hingga rugged.",
    specifications: [
      "Bahan: 100% Cotton Flannel",
      "Ukuran: S, M, L, XL, XXL",
      "Motif: Kotak-kotak (Red-Black, Blue-White, Green-Black)",
      "Perawatan: Cuci Mesin Air Dingin",
      "Garansi: 30 hari",
    ],
  },
  {
    id: "7",
    name: "Kaos Basic Premium",
    price: 89000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    shortDescription: "Kaos basic premium dengan kualitas terbaik, essential item untuk wardrobe pria modern.",
    description:
      "Kaos basic premium yang menjadi foundation dari setiap wardrobe pria. Dibuat dari bahan cotton combed berkualitas tinggi dengan jahitan yang rapi dan tahan lama. Potongan regular fit yang nyaman dan cocok untuk layering atau dipakai sendiri.",
    specifications: [
      "Bahan: 100% Cotton Combed 30s",
      "Ukuran: S, M, L, XL, XXL",
      "Warna: Putih, Hitam, Abu-abu, Navy",
      "Gramasi: 180 GSM",
      "Garansi: 14 hari",
    ],
  },
  {
    id: "8",
    name: "Celana Jeans Slim",
    price: 329000,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
    shortDescription:
      "Celana jeans slim dengan wash premium dan kualitas denim terbaik untuk gaya kasual yang timeless.",
    description:
      "Celana jeans slim dengan kualitas denim premium yang tahan lama dan nyaman dipakai. Proses washing yang sempurna memberikan karakter unik pada setiap piece. Potongan slim yang modern dengan stretch untuk kenyamanan maksimal.",
    specifications: [
      "Bahan: 98% Cotton Denim, 2% Elastane",
      "Ukuran: 28, 30, 32, 34, 36, 38",
      "Wash: Dark Blue, Light Blue, Black",
      "Model: Slim Fit dengan Stretch",
      "Garansi: 60 hari",
    ],
  },
]

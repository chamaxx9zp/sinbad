'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import teacup from "../../../../../sinbad assets/Sindbad Assets/13.png"

type Product = {
  id: number
  name: string
  image: StaticImageData
  category: string
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Sindbad OPA Red Pack",
    image: teacup,
    category: "Tea Packet",
    description: "Lorem Ipsm"
  },
  {
    id: 2,
    name: "Green Tea Green Pack",
    image: teacup,
    category: "Green Tea",
    description: "Lorem Ipsm"
  },
  {
    id: 3,
    name: "Sindbad Yellow Tea Bag",
    image: teacup,
    category: "Tea Bag",
    description: "Lorem Ipsm"
  },
  {
    id: 4,
    name: "Sindbad Blackcurrant Tea",
    image: teacup,
    category: "Flavoured Tea",
    description: "Lorem Ipsm"
  }
]

const categories = ["All", "Flavoured Tea", "Green Tea", "Herbal Tea", "Tea Bag", "Tea Packet"]

export default function ProductFilterList() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12 justify-end">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-2xl border transition-colors ${
              activeCategory === category
                ? 'bg-[#FFD700] border-[#FFD700] text-[#fff]'
                : 'border-black hover:border-[#fff] hover:bg-[#FFD700] hover:text-[#fff]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-gray-50 p-6 flex flex-col items-center text-center group"
          >
            <div className="relative w-48 h-48 mb-6">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <Button 
              className="bg-[#ED1B23] hover:bg-[#FFCB05] text-white mt-auto"
            >
              View More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
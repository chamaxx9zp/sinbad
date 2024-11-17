import React from 'react'
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Product {
  name: string
  image: string
  href: string
}

const products: Product[] = [
  {
    name: "Yellow Tea Bag",
    image: "https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Yellow Green Bag",
    image: "https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/products/green-tea"
  },
  {
    name: "Sindbad Red Pack",
    image: "https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/products/red-pack"
  }
]

function BestSeller() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8">
    <div className="grid md:grid-cols-[45%_1fr] items-start">
      {/* Left Column - Yellow Section */}
      <div className="bg-[#FFD700] p-6 md:p-12 lg:p-16 md:min-h-screen flex flex-col justify-center">
        <h2 className="text-lg font-medium mb-4">Best Sellers</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          MOST LOVED TEAS YOU MUST TRY
        </h3>
        <p className="text-lg leading-relaxed">
          Discover our best-selling teas, carefully crafted from the finest leaves 
          and loved by tea enthusiasts worldwide. Each blend in our collection 
          offers a unique experience, from bold black teas to soothing herbal 
          infusions, perfect for any tea lover's palate.
        </p>
      </div>

      {/* Right Column - Products Grid */}
      <div className="p-6 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col items-center text-center">
              <div className="bg-gray-50 w-full aspect-square relative mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">{product.name}</h4>
              <p className="text-gray-600 mb-4">Tea Bag</p>
              <Link href={product.href}>
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  View More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default BestSeller
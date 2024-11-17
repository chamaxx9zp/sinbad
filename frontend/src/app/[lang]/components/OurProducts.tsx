'use client'
import React from 'react'
import { renderButtonStyle } from "../utils/render-button-style";
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Product {
  title: string
  image: string
  href: string
}

const products: Product[] = [
  {
    title: "Herbal Tea",
    image: "/placeholder.svg?height=600&width=400",
    href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FPARACITY-Glass-Teapot-Removable-Borosilicate%2Fdp%2FB0CD3S43ZG&psig=AOvVaw0DcGr3KrZsHBibkRVwLlvv&ust=1731867433546000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDFu4274YkDFQAAAAAdAAAAABAE"
  },
  {
    title: "Green Tea",
    image: "/placeholder.svg?height=600&width=400",
    href: "/products/green-tea"
  },
  {
    title: "Flavoured Tea",
    image: "/placeholder.svg?height=600&width=400",
    href: "/products/flavoured-tea"
  },
  {
    title: "Special Tea",
    image: "/placeholder.svg?height=600&width=400",
    href: "/products/special-tea"
  },
  {
    title: "Other Tea",
    image: "/placeholder.svg?height=600&width=400",
    href: "/products/other-tea"
  }
]


function OurProducts(data:any) {
    // console.dir(data)
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-lg font-medium mb-4">Our Products</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            THE ART OF TEA PRODUCTION
          </h3>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="relative h-[500px] md:h-[400px] overflow-hidden"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 20vw, 100vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-4">
                  {/* White line above title */}
                  <div className="w-12 h-0.5 bg-white mb-2" />
                  <h4 className="text-white text-2xl font-bold">
                    {product.title}
                  </h4>
                </div>
                <Link href={product.href}>
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white rounded-md"
                  >
                    View More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProducts
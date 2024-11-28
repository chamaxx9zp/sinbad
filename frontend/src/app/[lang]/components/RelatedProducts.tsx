'use client';

import React from 'react';
import Image from 'next/image';
import { getStrapiMedia } from "../utils/api-helpers";
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import bgimg from '../../../../../sinbad assets/Sindbad Assets/About us bg image.jpg';
import teacup from "../../../../../sinbad assets/Sindbad Assets/13.png"

// interface Product {
//     id: number;
//     attributes: {
//       title: string;
//       description: string;
//       link: string | null;  
//     };
//   }
  
//   interface RelatedProductsProps {
//     products: Product[]; 
//   }

const products = [
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

function RelatedProducts() {
    console.dir(products)
  return (
    <section className="relative w-full py-16 md:py-24">
    {/* Background Image */}
    <div className="absolute inset-0 -z-10">
      <Image
        src={bgimg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        placeholder="blur" // Optional: Adds a blur placeholder
      />
    </div>

    <div className="container mx-auto px-4">
        <h2 className="text-lg font-medium mb-4 text-center">Related Products</h2>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">TEA BLENDS TO ELEVATE YOUR SENSES</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
      {products.map((product) => (
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
  </section>
  )
}

export default RelatedProducts
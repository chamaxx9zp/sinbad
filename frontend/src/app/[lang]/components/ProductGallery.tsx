import React from 'react'
import Image from "next/image"
import Link from "next/link"


function ProductGallery() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[url('/placeholder.svg')] bg-cover bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Product FAQ Card */}
            <Link href="/faq" className="block">
              <div className="bg-[#796B5F] p-8 transition-transform hover:scale-105">
                <h3 className="text-3xl font-bold text-white mb-4">PRODUCT FAQ</h3>
                <p className="text-white/90">General product related articles</p>
              </div>
            </Link>
            
            {/* Tea Pouring Image */}
            <div className="relative aspect-square">
              <Image
                src="https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Tea pouring ceremony"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* Tea Spoon Image */}
            <div className="relative aspect-square">
              <Image
                src="https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Tea spoon with leaves"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>

            {/* New Flavors Card */}
            <Link href="/new-flavors" className="block">
              <div className="bg-[#3F612D] p-8 transition-transform hover:scale-105">
                <h3 className="text-3xl font-bold text-white mb-4">NEW FLAVORS</h3>
                <p className="text-white/90">Can be found our new products</p>
              </div>
            </Link>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* How to Buy Card */}
            <Link href="/how-to-buy" className="block">
              <div className="bg-[#C4A484] p-8 transition-transform hover:scale-105">
                <h3 className="text-3xl font-bold text-white mb-4">HOW TO BUY</h3>
                <p className="text-white/90">Find our location and contact details</p>
              </div>
            </Link>

            {/* Tea Cup Image */}
            <div className="relative aspect-square">
              <Image
                src="https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Hands holding tea cup"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGallery
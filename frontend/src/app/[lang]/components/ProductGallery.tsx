'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getStrapiMedia } from "../utils/api-helpers"

// Define interfaces for better type safety
interface ProductImageAttributes {
  url: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
}

interface ProductRow {
  id: number;
  ProductTitle: string;
  ProductDesc: string;
  ProductImage: {
    data: {
      id: number;
      attributes: ProductImageAttributes;
    };
  };
}

interface ProductGalleryData {
  ProductGalleryRow: ProductRow[];
  picture: {
    data: {
      id: number;
      attributes: ProductImageAttributes;
    };
  };
}

interface ProductGalleryProps {
  data: ProductGalleryData;
}

function ProductGallery({ data }: ProductGalleryProps) {
  const backgroundImageUrl = getStrapiMedia(data.picture?.data?.attributes?.url); // Get the background image URL

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }} // Dynamically set the background image
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Product FAQ Card */}
            <Link href="/faq" className="block">
              <div className="bg-[#796B5F] py-20 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">{data.ProductGalleryRow[0]?.ProductTitle}</h3>
                <p className="text-white/90">{data.ProductGalleryRow[0]?.ProductDesc}</p>
              </div>
            </Link>
            
            {/* Product Image */}
            <div className="relative w-full h-[300px]">
              <Image
                src={getStrapiMedia(data.ProductGalleryRow[0]?.ProductImage?.data?.attributes?.url)|| ""}
                alt={data.ProductGalleryRow[0]?.ProductTitle || "Product Image"}
                layout="fill"
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative w-full h-[300px]">
              <Image
                src={getStrapiMedia(data.ProductGalleryRow[1]?.ProductImage?.data?.attributes?.url)|| ""}
                alt={data.ProductGalleryRow[1]?.ProductTitle || "Product Image"}
                layout="fill"
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>

            {/* New Flavors Card */}
            <Link href="/new-flavors" className="block">
              <div className="bg-[#3F612D] py-20 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">{data.ProductGalleryRow[1]?.ProductTitle}</h3>
                <p className="text-white/90">{data.ProductGalleryRow[1]?.ProductDesc}</p>
              </div>
            </Link>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* How to Buy Card */}
            <Link href="/how-to-buy" className="block">
              <div className="bg-[#C4A484] py-20 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">{data.ProductGalleryRow[2]?.ProductTitle}</h3>
                <p className="text-white/90">{data.ProductGalleryRow[2]?.ProductDesc}</p>
              </div>
            </Link>

            {/* Product Image */}
            <div className="relative w-full h-[300px]">
              <Image
                src={getStrapiMedia(data.ProductGalleryRow[2]?.ProductImage?.data?.attributes?.url)|| ""}
                alt={data.ProductGalleryRow[2]?.ProductTitle || "Product Image"}
                layout="fill"
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

export default ProductGallery;

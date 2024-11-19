'use client'

import React from 'react'
import { renderButtonStyle } from "../utils/render-button-style";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";

interface Product {
  id: number;
  ProductName: string;
  picture: {
    data: {
      attributes: {
        url: string;
        alternativeText: string | null;
      };
    };
  };
  AboutBtn: {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
    type: string;
  };
}

interface OurProductsProps {
  data: {
    id: number;
    __component: string;
    SubTitle: string;
    MainTitle: string;
    Product: Product[];
  };
}

function OurProducts({ data }: OurProductsProps) {
  // Dynamically map over the products from Strapi data
  const products = data.Product.map((product) => {
    const imgUrl = getStrapiMedia(product.picture.data.attributes.url);
    return {
      title: product.ProductName,
      image: imgUrl,
      href: product.AboutBtn.url,
    };
  });

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-lg font-medium mb-4">{data.SubTitle}</h2>
          <h3 className="text-4xl md:text-5xl font-bold">{data.MainTitle}</h3>
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
                src={product.image || ""}
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
                    {product.title === "Herbal Tea" ? product.title : "View More"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProducts;

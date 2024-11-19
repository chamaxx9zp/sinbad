'use client';
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

// Define interfaces
interface BestSellerProduct {
  id: number;
  BestSellerProductName: string;
  BestSellerProductNameTag: string;
  picture: {
    data: {
      id: number;
      attributes: {
        url: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
      };
    };
  };
  BestSellerLink: {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
    type: string | null;
  };
}

interface BestSellerData {
  BestSeller: string;
  Headline: string;
  Description: string;
  BestSellerProduct: BestSellerProduct[];
}

interface BestSellerProps {
  data: BestSellerData;
}

function BestSeller({ data }: BestSellerProps) {
  const { BestSeller, Headline, Description, BestSellerProduct } = data;

  return (
    <section className="relative container mx-auto px-4">
      <div className="grid md:grid-cols-[33%_1fr] items-start">
        {/* Left Column - Yellow Section */}
        <div className="bg-[#FFD700] p-6 md:p-12 lg:p-16 md:min-h-screen flex flex-col justify-center">
          <h2 className="text-lg font-medium mb-4">{BestSeller}</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">{Headline}</h3>
          <p className="text-lg leading-relaxed">{Description}</p>
        </div>

        {/* Right Column - Products Grid */}
        <div className="p-6 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BestSellerProduct.map((product) => (
              <div key={product.id} className="flex flex-col items-center text-center">
                <div className="bg-gray-50 w-full relative mb-6">
                  <Image
                    src={getStrapiMedia(product.picture.data.attributes.url) || ""}
                    alt={product.picture.data.attributes.alternativeText || product.BestSellerProductName}
                    width={890} // Set desired width in pixels
                    height={950} // Set desired height in pixels
                    className="object-contain"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>

                <h4 className="text-xl font-bold mb-2">{product.BestSellerProductName}</h4>
                <p className="text-gray-600 mb-4">{product.BestSellerProductNameTag}</p>
                <Link href={product.BestSellerLink.url} target={product.BestSellerLink.newTab ? "_blank" : "_self"}>
                  <Button className={renderButtonStyle(product.BestSellerLink.type || "primary")}>
                    {product.BestSellerLink.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSeller;

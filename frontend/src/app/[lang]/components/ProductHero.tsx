'use client';

import React from 'react';
import Link from "next/link";
import { ChevronRight } from 'lucide-react';
import { getStrapiMedia } from "../utils/api-helpers";
import Image from "next/image";

interface ProductHeroProps {
  data: {
    id: number;
    __component: string;
    Title: string;
    PaginationSec: string;
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
  };
}

const ProductHero: React.FC<ProductHeroProps> = ({ data }) => {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
  const altText = data.picture.data.attributes.alternativeText || 'Hero background image';

  return (
    <div className="relative w-full h-[400px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imgUrl || ""}
          alt={altText}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {data.Title}
        </h1>
        <nav className="flex items-center gap-3 text-lg">
          <Link 
            href="/" 
            className="text-white underline"
          >
            Home
          </Link>
          <ChevronRight className="w-5 h-5 text-white" />
          <span className="text-[#FFD700]">{data.PaginationSec.split('›').pop()?.trim()}</span>
        </nav>
      </div>
    </div>
  );
};

export default ProductHero;

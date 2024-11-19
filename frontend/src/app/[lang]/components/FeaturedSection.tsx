'use client';

import React from 'react';
import Image from 'next/image';
import { getStrapiMedia } from "../utils/api-helpers";
import bgimg from '../../../../../sinbad assets/Sindbad Assets/About us bg image.jpg';

// Define interfaces for type safety
interface IconData {
  id: number;
  attributes: {
    url: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
  };
}

interface FeaturedColumn {
  id: number;
  FeaturedHead: string;
  FeaturedDescription: string;
  Icon: {
    data: IconData;
  };
}

interface FeaturedSectionProps {
  data: {
    FeaturedSection: string;
    FeaturedColumn: FeaturedColumn[];
  };
}

function FeaturedSection({ data }: FeaturedSectionProps) {
  const { FeaturedSection, FeaturedColumn } = data;

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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{FeaturedSection}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {FeaturedColumn.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center mb-6">
                <Image
                  src={getStrapiMedia(feature.Icon.data.attributes.url) || ""}
                  alt={feature.Icon.data.attributes.alternativeText || feature.FeaturedHead}
                  width={feature.Icon.data.attributes.width * 4} // Scale width for better display
                  height={feature.Icon.data.attributes.height * 4} // Scale height for better display
                  className="object-contain hover:fill-red-500 transition-colors duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.FeaturedHead}</h3>
              <p className="text-gray-600 max-w-sm">{feature.FeaturedDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;

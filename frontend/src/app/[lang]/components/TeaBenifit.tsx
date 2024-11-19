'use client';

import React from 'react';
import { Heart, Cog, SmileIcon as Tooth, Target } from 'lucide-react';
import Image from 'next/image';
import { getStrapiMedia } from "../utils/api-helpers";

// Define interfaces for type safety
interface PictureData {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string | null;
      width: number;
      height: number;
    };
  };
}

interface TeaBenefitPoint {
  id: number;
  TeaBenifitSubHeading: string;
  TeaBenefitDescription: string;
}

interface TeaBenifitProps {
  data: {
    TeaBenifit: string;
    TeaBenifitHading: string;
    picture: PictureData;
    TeaBenefitPoints: TeaBenefitPoint[];
  };
}

const icons = [Heart, Cog, Tooth, Target];

function TeaBenifit({ data }: TeaBenifitProps) {
  const { TeaBenifit, TeaBenifitHading, picture, TeaBenefitPoints } = data;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg font-medium mb-4">{TeaBenifit}</h2>
          <h3 className="text-4xl md:text-5xl font-bold">{TeaBenifitHading}</h3>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left Column Benefits */}
          <div className="space-y-12">
            {TeaBenefitPoints.slice(0, 2).map((point, index) => {
              const Icon = icons[index];
              return (
                <div key={point.id} className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                  <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0 group">
                    <Icon className="w-8 h-8 text-white group-hover:text-red-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{point.TeaBenifitSubHeading}</h4>
                    <p className="text-gray-600">{point.TeaBenefitDescription}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="relative aspect-square">
            <Image
              src={getStrapiMedia(picture.data.attributes.url)||""}
              alt={picture.data.attributes.alternativeText || 'Tea Benefit'}
              width={picture.data.attributes.width}
              height={picture.data.attributes.height}
              className="object-cover rounded-lg"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>

          {/* Right Column Benefits */}
          <div className="space-y-12">
            {TeaBenefitPoints.slice(2).map((point, index) => {
              const Icon = icons[index + 2];
              return (
                <div key={point.id} className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 text-center md:text-right">
                  <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0 group">
                    <Icon className="w-8 h-8 text-white group-hover:text-red-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{point.TeaBenifitSubHeading}</h4>
                    <p className="text-gray-600">{point.TeaBenefitDescription}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeaBenifit;

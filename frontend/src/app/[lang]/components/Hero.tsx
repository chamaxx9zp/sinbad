'use client'

import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";
import { ArrowRight } from "lucide-react";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imgUrl || ""}
          alt={data.picture.data.attributes.alternativeText || 'Hero background image'}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col justify-center items-center h-full text-center px-6 md:px-8 lg:px-16 z-10">
        <HighlightedText
          text={data.title}
          tag="h1"
          className="text-5xl font-bold leading-none sm:text-6xl lg:text-7xl mb-8 text-white"
        />

        <HighlightedText
          text={data.description}
          tag="p"
          className="mt-6 mb-8 text-lg sm:mb-12 text-white max-w-3xl"
        />

        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
          {data.buttons.map((button: Button) => (
            <Link
              key={button.id}
              href={button.url}
              target={button.newTab ? "_blank" : "_self"}
              className={`${renderButtonStyle(button.type)} flex items-center space-x-2`}
            >
              {button.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

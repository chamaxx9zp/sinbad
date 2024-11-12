'use client'

import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

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
  console.dir(data);
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col justify-center items-center h-full text-center px-6 md:px-8 lg:px-16">
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
          {data.buttons.map((button: Button, index: number) => (
            <Link
              key={button.id}
              href={button.url}
              target={button.newTab ? "_blank" : "_self"}
              className={renderButtonStyle(button.type)}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

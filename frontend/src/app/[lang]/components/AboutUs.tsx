'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Store, Award } from "lucide-react"
import { renderButtonStyle } from "../utils/render-button-style"
import Image from "next/image";
import Link from "next/link"
import bgimg from '../../../../../sinbad assets/Sindbad Assets/About us bg image.jpg'

// Define the structure of the data coming from the console output
interface AboutRow {
  id: number
  AboutRowTitle: string
  AboutRowDescription: string
}

interface AboutUsProps {
  data: {
    id: number
    __component: string
    SubTitle: string
    MainTitle: string
    Description1: string
    Description2: string
    AboutRow: AboutRow[]
    AboutBtn: {
      id: number
      url: string
      newTab: boolean
      text: string
      type: string
    }
  }
}

function AboutUs({ data }: AboutUsProps) {
  return (
    <section className="relative w-full py-16 md:py-24">
       <div className="absolute inset-0 z-0">
        <Image
          src={bgimg}
          alt="Background Image"
          layout="fill" // This makes the image cover the section
          objectFit="cover" // Ensures the image is stretched and covers the section fully
          objectPosition="center" // Centers the image
        />
      </div>
      {/* Background Overlay */}
      <div className="absolute inset-0" />

      {/* Content Container */}
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <span className="text-lg font-medium">{data.SubTitle}</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {data.MainTitle}
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>{data.Description1}</p>
              <p>{data.Description2}</p>
            </div>
            <div className="md:mt-2">
              <Link href={data.AboutBtn.url}>
                <Button className="bg-[#ED1B23] hover:bg-[#FFCB05] text-white px-6 md:h-12 rounded-xl">
                  {data.AboutBtn.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 md:mt-20">
            {data.AboutRow.map((feature) => {
              let Icon;
              if (feature.AboutRowTitle === 'Naturally Healthy') {
                Icon = Heart;
              } else if (feature.AboutRowTitle === 'Online Store and Payment') {
                Icon = Store;
              } else if (feature.AboutRowTitle === 'Quality Guarantee') {
                Icon = Award;
              }

              return (
                <div key={feature.id} className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="bg-[#FFD700] rounded-full p-4 group">
                    <Icon className="w-8 h-8 text-white group-hover:text-red-600 transition-colors" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-[#FFD700] mb-2">{feature.AboutRowTitle}</h3>
                    <p className="text-gray-600">
                      {feature.AboutRowDescription}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

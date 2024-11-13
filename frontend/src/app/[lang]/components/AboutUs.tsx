'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Store, Award } from "lucide-react"
import { renderButtonStyle } from "../utils/render-button-style";
import Link from "next/link"

function AboutUs(data:any) {
    console.dir(data)
  return (
    <section className="relative w-full bg-[url('/placeholder.svg')] bg-cover bg-center py-16 md:py-24">
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-white/90" />

    {/* Content Container */}
    <div className="relative container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <span className="text-lg font-medium">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            OUR HERITAGE AND PASSION FOR TEA
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Welcome to Sindbad, where every cup tells a story of tradition, quality, and passion for tea. 
              Nestled in the heart of Sri Lanka, our tea gardens are carefully cultivated to bring you the 
              finest flavors that nature has to offer. With a commitment to sustainability and ethical practices, 
              we take pride in crafting teas that are as pure as the land they come from.
            </p>
            <p>
              Our journey began generations ago, inspired by a deep respect for the art of tea-making. 
              From handpicking each leaf to expertly processing and blending, we preserve the essence of 
              tradition while embracing innovative methods to ensure quality in every sip. Our teas are 
              more than just a beverage—they are an experience, a moment to pause and savor the natural 
              richness in every cup.
            </p>
          </div>
          <div className="md:mt-2">
          <Link href="/about">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 md:h-12 rounded-xl">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          </div>
        
        </div>

        {/* Right Column */}
        <div className="space-y-12 md:mt-20">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="bg-[#FFD700] rounded-full p-4 group">
              <Heart className="w-8 h-8 text-white group-hover:text-red-600 transition-colors" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Naturally Healthy</h3>
              <p className="text-gray-600">
                Our teas are crafted to nourish the body and mind, using only pure, sustainably grown 
                ingredients straight from nature.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="bg-[#FFD700] rounded-full p-4 group">
              <Store className="w-8 h-8 text-white group-hover:text-red-600 transition-colors" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Online Store and Payment</h3>
              <p className="text-gray-600">
                Explore our curated selection of premium teas, available for easy online ordering and 
                doorstep delivery.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="bg-[#FFD700] rounded-full p-4 group">
              <Award className="w-8 h-8 text-white group-hover:text-red-600 transition-colors" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                Every tea leaf is meticulously handpicked and expertly crafted to ensure the highest 
                standards of freshness, flavor, and purity in every cup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutUs
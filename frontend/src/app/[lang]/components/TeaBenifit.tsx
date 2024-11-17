import React from 'react'
import { Heart, Cog, SmileIcon as Tooth, Target } from 'lucide-react'
import Image from "next/image"

function TeaBenifit() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg font-medium mb-4">Tea Benefits</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            UNVEILING THE HEALTH SECRETS OF TEA
          </h3>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left Column Benefits */}
          <div className="space-y-12">
            {/* Heart Health */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3">Boost Heart Health</h4>
                <p className="text-gray-600">
                  Flavonoids found in black tea are beneficial for heart health.
                </p>
              </div>
            </div>

            {/* Immunity */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                <Cog className="w-8 h-8 text-black" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3">Enhance Immunity</h4>
                <p className="text-gray-600">
                  By tuning up immune cells tea can boost the immune system.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative aspect-square">
            <Image
              src="https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Steaming tea in glass teapot"
              fill
              className="object-cover rounded-lg"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>

          {/* Right Column Benefits */}
          <div className="space-y-12">
            {/* Dental Health */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 text-center md:text-right">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                <Tooth className="w-8 h-8 text-black" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3">Smile Bright</h4>
                <p className="text-gray-600">
                  Tea can help prevent cavities, keeping your smile sparkling as ever.
                </p>
              </div>
            </div>

            {/* Focus */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 text-center md:text-right">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-black" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3">Relax and Focus</h4>
                <p className="text-gray-600">
                  Black tea contains L-theanine, which promotes relaxation and focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeaBenifit
import React from 'react'
import { Clock, Headphones, Truck } from 'lucide-react'

interface Feature {
  icon: JSX.Element
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Truck className="w-8 h-8 text-black" />,
    title: "Expedited Shipping",
    description: "We proudly offer worldwide shipping, ensuring that our premium teas can be enjoyed no matter where you are"
  },
  {
    icon: <Clock className="w-8 h-8 text-black" />,
    title: "Product Dispatch",
    description: "We are pleased to inform you that your order is being prepared for dispatch and will be shipped out soon."
  },
  {
    icon: <Headphones className="w-8 h-8 text-black" />,
    title: "Customer Support",
    description: "Our 24/7 support system ensures that help is always available whenever you need it, day or night."
  }
]

function FeaturedSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[url('https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
import React from 'react'
import Image from "next/image"


function ProductGallery() {
  return (
    <div className="bg-[#0B1120] p-4 md:p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Top Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Snow-capped mountain peaks"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            
            {/* Bottom Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Valley view with mountains"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Top Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mountain range with reddish tints"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            
            {/* Bottom Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Lake view with mountains"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
          {/* third column */}
          <div className="space-y-4">
            {/* Top Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Snow-capped mountain peaks"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            
            {/* Bottom Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/416583/pexels-photo-416583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Valley view with mountains"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
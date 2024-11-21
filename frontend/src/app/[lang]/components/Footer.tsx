'use client'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from 'lucide-react'
import logo from '../../../../../sinbad assets/Sindbad Assets/logo.png'

function Footer(data: any) {
  // console.dir(data)
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src={logo}
              alt="Sindbad Logo"
              width={150}
              height={100}
              className="mb-6"
            />
            <div className="space-y-4 text-white/80">
              <Link href="tel:+94112632261" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <Phone className="h-5 w-5" />
                +94 112 632261
              </Link>
              <Link href="mailto:sindbadsltnet.lk" className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <Mail className="h-5 w-5" />
                sindbadsltnet.lk
              </Link>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>
                  No: 47, 10th Lane,Off<br />
                  Borupana Road,<br />
                  Ratmalana, Sri Lanka
                </span>
              </div>
            </div>
          </div>

          {/* Product Category */}
          <div>
            <h3 className="text-[#FFD700] font-bold text-lg mb-6">PRODUCT CATEGORY</h3>
            <ul className="space-y-4">
              {['Herbal Tea', 'Green Tea', 'Flavoured Tea', 'Special Tea', 'Other Tea'].map((item) => (
                <li key={item}>
                  <Link href={`/products/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-red-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[#FFD700] font-bold text-lg mb-6">MENU</h3>
            <ul className="space-y-4">
              {['Home', 'Products', 'Factory', 'About Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-red-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Info */}
          <div>
            <h3 className="text-[#FFD700] font-bold text-lg mb-6">OTHER INFO</h3>
            <ul className="space-y-4">
              {[
                'Brochure',
                'Private Labeling',
                'FAQs',
                'Privacy Policy',
                'Terms & Conditions',
                'Contact Us'
              ].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-red-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#FFD700] font-bold text-lg mb-6">NEWSLETTER</h3>
            <p className="mb-6 text-white/80">
              Lorem ipsum dolor sit amet. In labore exercita non dolorum corporis.
            </p>
            <div className="space-y-4 flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b border-white/20 focus:border-[#FFD700] outline-none py-2 px-0"
              />
              <button className="text-[#FFD700] hover:text-red-600 transition-colors underline">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#FFD700] text-black py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">
            © 2024 Sindbad (Pvt) Ltd. All Rights Reserved. Designed & Developed by{' '}
            <Link href="https://archmage.solutions" className="text-red-600 hover:text-red-700">
              Archmage Solutions
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
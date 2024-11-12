'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Phone, Mail, MapPin, Twitter, Facebook, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-6">
            <Link href="tel:+94112632261" className="flex items-center space-x-2 text-sm hover:text-gray-300">
              <Phone className="h-4 w-4" />
              <span>+94 112 632261</span>
            </Link>
            <Link href="mailto:sindbadsltnet.lk" className="flex items-center space-x-2 text-sm hover:text-gray-300">
              <Mail className="h-4 w-4" />
              <span>sindbadsltnet.lk</span>
            </Link>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>No: 47, 10th Lane,Off Borupana Road, Ratmalana, Sri Lanka</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <Link href="https://twitter.com" className="text-white hover:text-gray-300">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com" className="text-white hover:text-gray-300">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#FFD700] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Sindbad Logo"
                width={120}
                height={80}
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-red-600 font-medium">
                Home
              </Link>
              <Link href="/products" className="text-black hover:text-red-600 font-medium">
                Products
              </Link>
              <Link href="/factory" className="text-black hover:text-red-600 font-medium">
                Factory
              </Link>
              <Link href="/about" className="text-black hover:text-red-600 font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-black hover:text-red-600 font-medium">
                Contact Us
              </Link>
            </nav>

            {/* Search */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Input
                  type="search"
                  placeholder="Enter your keyword..."
                  className="w-[200px] lg:w-[300px] rounded-r-none"
                />
                <Button className="rounded-l-none bg-red-600 hover:bg-red-700">
                  Search
                </Button>
              </div>
            </div>

            {/* Mobile menu button - visible only on mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <X className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-screen bg-[#FFD700]">
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  <Link href="/" className="text-2xl font-medium hover:text-red-600">
                    Home
                  </Link>
                  <Link href="/products" className="text-2xl font-medium hover:text-red-600">
                    Products
                  </Link>
                  <Link href="/factory" className="text-2xl font-medium hover:text-red-600">
                    Factory
                  </Link>
                  <Link href="/about" className="text-2xl font-medium hover:text-red-600">
                    About Us
                  </Link>
                  <Link href="/contact" className="text-2xl font-medium hover:text-red-600">
                    Contact Us
                  </Link>
                </div>
                <SheetClose className="absolute right-4 top-4">
                  <X className="h-6 w-6" />
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
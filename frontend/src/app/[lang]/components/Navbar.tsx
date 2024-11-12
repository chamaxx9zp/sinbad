'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Menu, Phone, Mail, MapPin, Twitter, Facebook, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

interface NavigationData {
  links: {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
  }[];
  logoUrl: string;
  logoText: string;
}

export default function Navigation(data: NavigationData) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full font-poppins">
      {/* Top bar */}
      <div className="bg-[#6F5F4A] text-white py-2">
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
              <span>No: 47, 10th Lane, Off Borupana Road, Ratmalana, Sri Lanka</span>
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
      <div className="bg-[#FFC805] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={data.logoUrl}
                alt={data.logoText}
                width={120}
                height={80}
                className="h-16 w-auto"
              />
              <span className="text-2xl font-bold text-[#216127]">{data.logoText}</span>
            </Link>

            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-8">
              {data.links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  target={link.newTab ? "_blank" : "_self"}
                  className="text-[#216127] hover:text-[#ED1B23] font-medium"
                >
                  {link.text}
                </Link>
              ))}
            </nav>

            {/* Search */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Input
                  type="search"
                  placeholder="Enter your keyword..."
                  className="w-[150px] lg:w-[200px] rounded-3xl bg-white md:mr-2 md:h-10"
                />
                <Button className="rounded-3xl bg-[#ED1B23] hover:bg-[#C99A5C] text-white md:h-10">
                  Search
                </Button>
              </div>
            </div>

            {/* Mobile menu button - visible only on mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-screen bg-[#FFC805]">
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  {data.links.map((link) => (
                    <Link
                      key={link.id}
                      href={link.url}
                      target={link.newTab ? "_blank" : "_self"}
                      className="text-2xl font-medium text-[#216127] hover:text-[#ED1B23]"
                    >
                      {link.text}
                    </Link>
                  ))}
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

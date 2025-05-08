"use client"

import Link from "next/link"
import { Eye } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Eye className="h-8 w-8 text-[#199A8E]" />
          <span className="font-bold text-xl text-gray-900">
            Clear<span className="text-[#199A8E]">Sight</span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-[#199A8E] font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#199A8E] font-medium">
            About
          </Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-[#199A8E] font-medium">
            How It Works
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-[#199A8E] font-medium">
            FAQ
          </Link>
        </nav>

        <div className="md:hidden">
          <button className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

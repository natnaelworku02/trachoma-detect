"use client"

import Link from "next/link"
import { Eye, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="h-6 w-6 text-[#199A8E]" />
              <span className="font-bold text-xl">
                Clear<span className="text-[#199A8E]">Sight</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Advanced AI-powered trachoma detection system for healthcare professionals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#199A8E]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#199A8E]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-[#199A8E]">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#199A8E]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#199A8E]" />
                <span>contact@clearsight.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#199A8E]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[#199A8E]" />
                <span>123 Medical Center Dr, Health City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ClearSight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

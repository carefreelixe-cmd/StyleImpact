import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Style Impact</h3>
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 pr-0 sm:pr-4">
            India's premier creative competition platform for artists and designers.
          </p>
          <div className="flex space-x-3 sm:space-x-4">
            <Facebook className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            <Twitter className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            <Youtube className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li><button className="hover:text-primary transition-colors text-left">Home</button></li>
            <li><button className="hover:text-primary transition-colors text-left">Categories</button></li>
            <li><button className="hover:text-primary transition-colors text-left">How It Works</button></li>
            <li><button className="hover:text-primary transition-colors text-left">Winners</button></li>
          </ul>
        </div>
        
        {/* Support */}
        <div>
          <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li><button className="hover:text-primary transition-colors text-left">Contact Us</button></li>
            <li><button className="hover:text-primary transition-colors text-left">FAQ</button></li>
            <li><button className="hover:text-primary transition-colors text-left">Terms & Conditions</button></li>
            <li><button className="hover:text-primary transition-colors text-left">Privacy Policy</button></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
        <p>© 2025 Style Impact. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer

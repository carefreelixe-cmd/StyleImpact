import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Style Impact
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
              India's premier creative competition platform for artists and designers. Where creativity meets recognition.
            </p>
            
            {/* Social Icons - Large and touchable on mobile */}
            <div className="flex space-x-4 sm:space-x-6">
              <div className="group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer">
                  <Facebook className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </div>
              <div className="group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer">
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </div>
              <div className="group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer">
                  <Twitter className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </div>
              <div className="group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer">
                  <Youtube className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-6 text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {['Home', 'Categories', 'How It Works', 'Winners'].map((item, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-white transition-all duration-300 text-left text-base hover:translate-x-1 hover:text-primary group">
                    <span className="border-b border-transparent group-hover:border-primary transition-all duration-300">
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-6 text-white relative">
              Support
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {['Contact Us', 'FAQ', 'Terms & Conditions', 'Privacy Policy'].map((item, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-white transition-all duration-300 text-left text-base hover:translate-x-1 hover:text-primary group">
                    <span className="border-b border-transparent group-hover:border-primary transition-all duration-300">
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-center  items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm sm:text-base ml-1">
              © 2025 Style Impact. All rights reserved.
            </p>
            <div className="flex items-center pr-2 space-x-2 text-sm text-gray-400">
              <span>  Made with</span>
              <span className="text-primary animate-pulse">❤️</span>
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
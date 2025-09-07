import React from 'react';
import { Star } from 'lucide-react';

import Mehendi from '../../assests/mehendi.jpg'

const CategoriesSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Competition Categories
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          From professional makeup artists to fashion designers — These are the categories that showcase talent.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Fashion Designers */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="aspect-[4/5] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=500&fit=crop" 
                alt="Fashion Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm text-gray-500">Fashion</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Fashion Designers</h3>
              <div className="text-sm sm:text-lg font-bold text-primary">Participate Now</div>
            </div>
          </div>
        </div>

        {/* Beauty Experts */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="aspect-[4/5] bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=500&fit=crop" 
                alt="Beauty Expert"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm text-gray-500">Beauty</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Beauty Experts</h3>
              <div className="text-sm sm:text-lg font-bold text-primary">Join Competition</div>
            </div>
          </div>
        </div>

        {/* Tattoo Artists */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <img 
                src="https://m.media-amazon.com/images/I/51n6fSKIb9L._SY300_SX300_QL70_FMwebp_.jpg" 
                alt="Tattoo Art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm text-gray-500">Tattoo</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Tattoo Artists</h3>
              <div className="text-sm sm:text-lg font-bold text-primary">Submit Work</div>
            </div>
          </div>
        </div>

        {/* Mehndi Artists */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <img 
                src={Mehendi} 
                alt="Mehndi Art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm text-gray-500">Mehndi</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Mehndi Artists</h3>
              <div className="text-sm sm:text-lg font-bold text-primary">Enter Contest</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CategoriesSection;
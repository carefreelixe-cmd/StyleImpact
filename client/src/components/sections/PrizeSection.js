import React from 'react';
import { Crown, Trophy, DollarSign } from 'lucide-react';

const PrizeSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Prize Pool
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Win big with our competitive prize structure. Recognition and rewards for creative excellence.
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* Winner Prize Card */}
        <div className="group cursor-pointer h-full">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-3 sm:p-6 lg:p-8">
              <Crown className="w-8 sm:w-16 lg:w-20 h-8 sm:h-16 lg:h-20 text-primary" />
            </div>
            <div className="p-2 sm:p-4 lg:p-6 flex-1 flex flex-col">
              <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base lg:text-lg">Winner Prize</h3>
              <div className="text-sm sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">₹1,00,000</div>
              <p className="text-xs sm:text-sm text-gray-500 mt-auto">First place in each category</p>
            </div>
          </div>
        </div>

        {/* Runner-up Prize Card */}
        <div className="group cursor-pointer h-full">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center p-3 sm:p-6 lg:p-8">
              <Trophy className="w-8 sm:w-16 lg:w-20 h-8 sm:h-16 lg:h-20 text-gray-600" />
            </div>
            <div className="p-2 sm:p-4 lg:p-6 flex-1 flex flex-col">
              <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base lg:text-lg">Runner-up Prize</h3>
              <div className="text-sm sm:text-xl lg:text-2xl font-bold text-gray-600 mb-1 sm:mb-2">₹11,000</div>
              <p className="text-xs sm:text-sm text-gray-500 mt-auto">Second place recognition</p>
            </div>
          </div>
        </div>

        {/* Entry Fee Card */}
        <div className="group cursor-pointer h-full">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
              <DollarSign className="w-8 sm:w-16 lg:w-20 h-8 sm:h-16 lg:h-20 text-green-600" />
            </div>
            <div className="p-2 sm:p-4 lg:p-6 flex-1 flex flex-col">
              <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-base lg:text-lg">Entry Fee</h3>
              <div className="text-sm sm:text-xl lg:text-2xl font-bold text-green-600 mb-1 sm:mb-2">₹299</div>
              <p className="text-xs sm:text-sm text-gray-500 mt-auto">One-time participation fee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PrizeSection;
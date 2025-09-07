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
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {/* Winner Prize Card */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-6 sm:p-8">
              <Crown className="w-16 sm:w-20 h-16 sm:h-20 text-primary" />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Winner Prize</h3>
              <div className="text-xl sm:text-2xl font-bold text-primary mb-2">₹1,00,000</div>
              <p className="text-xs sm:text-sm text-gray-500">First place in each category</p>
            </div>
          </div>
        </div>

        {/* Runner-up Prize Card */}
        <div className="group cursor-pointer">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center p-6 sm:p-8">
              <Trophy className="w-16 sm:w-20 h-16 sm:h-20 text-gray-600" />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Runner-up Prize</h3>
              <div className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">₹11,000</div>
              <p className="text-xs sm:text-sm text-gray-500">Second place recognition</p>
            </div>
          </div>
        </div>

        {/* Entry Fee Card */}
        <div className="group cursor-pointer sm:col-span-2 lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center p-6 sm:p-8">
              <DollarSign className="w-16 sm:w-20 h-16 sm:h-20 text-green-600" />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">Entry Fee</h3>
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">₹299</div>
              <p className="text-xs sm:text-sm text-gray-500">One-time participation fee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PrizeSection;
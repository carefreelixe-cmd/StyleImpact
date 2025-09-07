import React from 'react';
import { Users, Upload, Award } from 'lucide-react';

const HowItWorksSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          How It Works
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Just Register, Upload and Compete
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="text-center">
          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Users className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Register & Pay</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Sign up for your category and pay the ₹299 entry fee to join the competition.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Upload className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Upload Your Work</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Submit photos or 60-second videos showcasing your best creative work and talent.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Award className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Compete & Win</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Promote your submission, gather votes, and compete for amazing cash prizes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
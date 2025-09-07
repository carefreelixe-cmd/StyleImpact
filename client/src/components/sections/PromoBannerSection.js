import React from 'react';
import fashionDesign from '../../assests/fashion deisgn.jpg'
const PromoBannerSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-primary text-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            The Creative Competition - Starting at just ₹299
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90">
            Crafted for recognition, designed for impact — this is the platform that's redefining creative careers. 
            Our competition brings exposure, validation, and rewards to talented artists.
          </p>
          <button className="bg-black text-white hover:bg-gray-800 font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 text-sm sm:text-base">
            Join Competition
          </button>
        </div>
        <div className="relative order-1 lg:order-2">
          <img 
            src={fashionDesign}
            alt="Creative Competition"
            className="rounded-xl shadow-2xl w-full"
          />
          <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-black text-white p-3 sm:p-4 rounded-lg">
            <div className="text-lg sm:text-2xl font-bold">₹1L+</div>
            <div className="text-xs sm:text-sm">Prize Pool</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PromoBannerSection;
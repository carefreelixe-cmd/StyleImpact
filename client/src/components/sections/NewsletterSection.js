import React from 'react';

const NewsletterSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-primary text-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
          Get Updates on New Competitions
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
          Plus exclusive access to competition tips, winner spotlights, and insider updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
          />
          <button className="bg-black text-white hover:bg-gray-800 font-semibold px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 text-sm sm:text-base whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default NewsletterSection;
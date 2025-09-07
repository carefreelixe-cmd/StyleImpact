import React from 'react';

const SecondPromoSection = () => (
  <section className="py-12 sm:py-16 bg-black text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
        Hurry Up! Competition Ends Soon
      </h2>
      <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
        Submit your creative work today and compete for life-changing prizes.
      </p>
      <button className="bg-primary text-black hover:bg-hoverPrimary font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 text-sm sm:text-base">
        Submit Now
      </button>
    </div>
  </section>
);

export default SecondPromoSection;
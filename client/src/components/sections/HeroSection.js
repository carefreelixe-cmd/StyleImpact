import React from 'react';

const HeroSection = () => (
  <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background Image - Contest/Competition Theme */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920&h=1080&fit=crop&crop=center"
        alt="Beauty Competition Background"
        className="w-full h-full object-cover"
      />
      {/* Overlay with primary theme gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/10"></div>
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    
    {/* Decorative Elements - Competition themed */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Creative competition pattern overlay */}
      <div className="absolute inset-0 opacity-15">
        {/* Beauty/Makeup tools pattern */}
        <div className="absolute top-10 sm:top-20 left-1/4 transform rotate-45">
          <div className="w-16 sm:w-32 h-0.5 bg-white mb-1 sm:mb-2"></div>
          <div className="w-12 sm:w-24 h-0.5 bg-primary/80 mb-1 sm:mb-2"></div>
          <div className="w-8 sm:w-16 h-0.5 bg-primary/60"></div>
        </div>
        
        {/* Fashion design lines */}
        <div className="absolute bottom-10 sm:bottom-20 right-1/4 transform -rotate-45">
          <div className="w-14 sm:w-28 h-0.5 bg-white mb-1 sm:mb-2"></div>
          <div className="w-10 sm:w-20 h-0.5 bg-primary/70 mb-1 sm:mb-2"></div>
          <div className="w-6 sm:w-12 h-0.5 bg-primary/50"></div>
        </div>
        
        {/* Contest trophy elements */}
        <div className="absolute top-1/3 right-1/6 w-4 sm:w-8 h-4 sm:h-8 border-2 border-primary/40 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 sm:w-6 h-3 sm:h-6 border-2 border-white/40 rounded-full"></div>
      </div>
    </div>
    
    {/* Main Content Container */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
          Showcase Your Creative 
          <br />
          Talent for the Modern World
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-lg px-2">
          Join India's premier creative competition platform — crafted for artists, designed for recognition.
        </p>
        <button className="bg-primary hover:bg-hoverPrimary text-black font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all uppercase duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-base">
          Start Competing Now
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
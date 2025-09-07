import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import HeroSection from '../../components/sections/HeroSection';
import PrizeSection from '../../components/sections/PrizeSection';
import CategoriesSection from '../../components/sections/CategoriesSection';
import PromoBannerSection from '../../components/sections/PromoBannerSection';
import SecondPromoSection from '../../components/sections/SecondPromoSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import HowItWorksSection from '../../components/sections/HowItWorksSection';
import NewsletterSection from '../../components/sections/NewsletterSection';
import FAQSection from '../../components/sections/FAQSection';
import Footer from '../../components/layout/Footer';

const WelcomePage = ({ currentPage, onNavigate }) => {
  // Scroll to Top Button State and Handler
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation by scrolling to sections
  useEffect(() => {
    const scrollToSection = () => {
      const sectionMap = {
        'home': 'hero-section',
        'categories': 'categories-section',
        'how-it-works': 'how-it-works-section',
        'winners': 'testimonials-section',
        'contact': 'footer-section'
      };

      const sectionId = sectionMap[currentPage];
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Account for navbar height
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    if (currentPage) {
      scrollToSection();
    }
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative pt-[70px] sm:pt-[89px]">
      <div id="hero-section">
        <HeroSection />
      </div>
      <PrizeSection />
      <div id="categories-section">
        <CategoriesSection />
      </div>
      <PromoBannerSection />
      <SecondPromoSection />
      <div id="testimonials-section">
        <TestimonialsSection />
      </div>
      <div id="how-it-works-section">
        <HowItWorksSection />
      </div>
      <NewsletterSection />
      <div id="faq-section">
        <FAQSection />
      </div>
      <div id="footer-section">
        <Footer />
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-10 sm:w-12 h-10 sm:h-12 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 sm:w-6 h-5 sm:h-6 mx-auto" />
      </button>
    </div>
  );
};

export default WelcomePage;
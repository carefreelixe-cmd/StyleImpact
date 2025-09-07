import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          What Our Winners Say
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          Platform that celebrates creativity and talent.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            "Style Impact has completely transformed my creative career. Every competition feels thoughtfully organized 
            and incredibly rewarding — from fashion to beauty contests. It's rare to find a platform that gets the 
            recognition, fairness, and community right every single time."
          </p>
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616c67e8b2d?w=50&h=50&fit=crop&crop=face" 
              alt="Priya Sharma"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full mr-3 sm:mr-4 flex-shrink-0"
            />
            <div>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Priya S., Mumbai</div>
              <div className="text-xs sm:text-sm text-gray-500">Fashion Designer Winner</div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            "I'm always looking for platforms that showcase authentic talent and provide fair judging — and Style Impact delivers. 
            I participated in the beauty category and was blown away by the professionalism. The voting system, especially, has become my favorite."
          </p>
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" 
              alt="Rajesh Kumar"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full mr-3 sm:mr-4 flex-shrink-0"
            />
            <div>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Rajesh K., Delhi</div>
              <div className="text-xs sm:text-sm text-gray-500">Tattoo Artist Participant</div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:col-span-1">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            "Competing for myself and promoting my daughter's work usually means juggling multiple platforms, 
            but Style Impact made it easy. I loved the category variety and my daughter adored the mehndi section. 
            Professional, supportive, and built for artists — we're both fans for life!"
          </p>
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" 
              alt="Michelle T"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full mr-3 sm:mr-4 flex-shrink-0"
            />
            <div>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Sneha P., Bangalore</div>
              <div className="text-xs sm:text-sm text-gray-500">Beauty Expert Runner-up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
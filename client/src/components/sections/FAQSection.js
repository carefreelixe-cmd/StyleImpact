import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I participate in the competition?",
      answer: "Simply register for your category, pay the ₹299 entry fee, and upload your best creative work. You can submit photos or 60-second videos showcasing your talent."
    },
    {
      question: "What are the judging criteria?",
      answer: "Submissions are judged based on creativity, technical skill, originality, and overall impact. We use a combination of expert judges and public voting to ensure fair evaluation."
    },
    {
      question: "When will the winners be announced?",
      answer: "Winners are typically announced within 2-3 weeks after the competition ends. All participants will be notified via email and winners will be featured on our platform."
    },
    {
      question: "Can I participate in multiple categories?",
      answer: "Yes! You can participate in multiple categories, but each category requires a separate entry fee of ₹299 and individual submissions."
    },
    {
      question: "How will I receive my prize money?",
      answer: "Prize money is transferred directly to the winner's bank account within 7-10 business days after the announcement. We'll contact you for banking details."
    },
    {
      question: "What file formats are accepted for submissions?",
      answer: "We accept JPG, PNG for images and MP4 for videos. Images should be high resolution and videos should not exceed 60 seconds in length."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Got questions? We've got answers. Find everything you need to know about participating in our competitions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0 overflow-hidden">
              <button
                className="w-full py-4 sm:py-6 text-left flex items-start justify-between hover:text-primary transition-colors duration-300 group"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-3 sm:pr-4 flex-1 group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-2 sm:ml-4 mt-1">
                  <div className={`transform transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'rotate-90' : 'rotate-0'
                  }`}>
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className={`pb-4 sm:pb-6 transform transition-transform duration-300 ${
                  openFAQ === index ? 'translate-y-0' : '-translate-y-2'
                }`}>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed pr-4 sm:pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
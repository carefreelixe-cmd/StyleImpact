import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, Award, Upload, Trophy, Crown, DollarSign, Users, Facebook, Instagram, Twitter, Youtube, Gift, Zap, Shield, HeartHandshake, ChevronUp } from 'lucide-react';

const WelcomePage = () => {
  // Scroll to Top Button State and Handler
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 // Hero Section Component

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
        <div className="absolute top-20 left-1/4 transform rotate-45">
          <div className="w-32 h-0.5 bg-white mb-2"></div>
          <div className="w-24 h-0.5 bg-primary/80 mb-2"></div>
          <div className="w-16 h-0.5 bg-primary/60"></div>
        </div>
        
        {/* Fashion design lines */}
        <div className="absolute bottom-20 right-1/4 transform -rotate-45">
          <div className="w-28 h-0.5 bg-white mb-2"></div>
          <div className="w-20 h-0.5 bg-primary/70 mb-2"></div>
          <div className="w-12 h-0.5 bg-primary/50"></div>
        </div>
        
        {/* Contest trophy elements */}
        <div className="absolute top-1/3 right-1/6 w-8 h-8 border-2 border-primary/40 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/6 w-6 h-6 border-2 border-white/40 rounded-full"></div>
      </div>
    </div>
    
    {/* Main Content Container */}
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Showcase Your Creative 
          <br />
          Talent for the Modern World
        </h1>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Join India's premier creative competition platform — crafted for artists, designed for recognition.
        </p>
        <button className="bg-primary hover:bg-hoverPrimary text-black font-semibold px-8 py-3.5 rounded-full transition-all uppercase duration-300 transform hover:scale-105 shadow-2xl">
          Start Competing Now
        </button>
      </div>
    </div>
    
    
  </section>
);





  // Prize Information Section
  const PrizeSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Prize Pool
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Win big with our competitive prize structure. Recognition and rewards for creative excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Winner Prize Card */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8">
                <Crown className="w-20 h-20 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Winner Prize</h3>
                <div className="text-2xl font-bold text-primary mb-2">₹1,00,000</div>
                <p className="text-sm text-gray-500">First place in each category</p>
              </div>
            </div>
          </div>

          {/* Runner-up Prize Card */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center p-8">
                <Trophy className="w-20 h-20 text-gray-600" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Runner-up Prize</h3>
                <div className="text-2xl font-bold text-gray-600 mb-2">₹11,000</div>
                <p className="text-sm text-gray-500">Second place recognition</p>
              </div>
            </div>
          </div>

          {/* Entry Fee Card */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center p-8">
                <DollarSign className="w-20 h-20 text-green-600" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Entry Fee</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">₹299</div>
                <p className="text-sm text-gray-500">One-time participation fee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Competition Categories Section
  const CategoriesSection = () => (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Competition Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From professional makeup artists to fashion designers — These are the categories that showcase talent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Fashion Designers */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop" 
                  alt="Fashion Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Fashion</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fashion Designers</h3>
                <div className="text-lg font-bold text-primary">Participate Now</div>
              </div>
            </div>
          </div>

          {/* Beauty Experts */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[4/5] bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=500&fit=crop" 
                  alt="Beauty Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Beauty</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Beauty Experts</h3>
                <div className="text-lg font-bold text-primary">Join Competition</div>
              </div>
            </div>
          </div>

          {/* Tattoo Artists */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=500&fit=crop" 
                  alt="Tattoo Art"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Tattoo</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tattoo Artists</h3>
                <div className="text-lg font-bold text-primary">Submit Work</div>
              </div>
            </div>
          </div>

          {/* Mehndi Artists */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" 
                  alt="Mehndi Art"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Mehndi</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mehndi Artists</h3>
                <div className="text-lg font-bold text-primary">Enter Contest</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Promotional Banner Section
  const PromoBannerSection = () => (
    <section className="py-20 bg-primary text-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Creative Competition - Starting at just ₹299
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Crafted for recognition, designed for impact — this is the platform that's redefining creative careers. 
              Our competition brings exposure, validation, and rewards to talented artists.
            </p>
            <button className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              Join Competition
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
              alt="Creative Competition"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-black text-white p-4 rounded-lg">
              <div className="text-2xl font-bold">₹1L+</div>
              <div className="text-sm">Prize Pool</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Second Promo Section
  const SecondPromoSection = () => (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Hurry Up! Competition Ends Soon
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Submit your creative work today and compete for life-changing prizes.
        </p>
        <button className="bg-primary text-black hover:bg-hoverPrimary font-semibold px-8 py-3 rounded-lg transition-all duration-300">
          Submit Now
        </button>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Winners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platform that celebrates creativity and talent.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              "Style Impact has completely transformed my creative career. Every competition feels thoughtfully organized 
              and incredibly rewarding — from fashion to beauty contests. It's rare to find a platform that gets the 
              recognition, fairness, and community right every single time."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c67e8b2d?w=50&h=50&fit=crop&crop=face" 
                alt="Priya Sharma"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">Priya S., Mumbai</div>
                <div className="text-sm text-gray-500">Fashion Designer Winner</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              "I'm always looking for platforms that showcase authentic talent and provide fair judging — and Style Impact delivers. 
              I participated in the beauty category and was blown away by the professionalism. The voting system, especially, has become my favorite."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" 
                alt="Rajesh Kumar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">Rajesh K., Delhi</div>
                <div className="text-sm text-gray-500">Tattoo Artist Participant</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              "Competing for myself and promoting my daughter's work usually means juggling multiple platforms, 
              but Style Impact made it easy. I loved the category variety and my daughter adored the mehndi section. 
              Professional, supportive, and built for artists — we're both fans for life!"
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" 
                alt="Michelle T"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">Sneha P., Bangalore</div>
                <div className="text-sm text-gray-500">Beauty Expert Runner-up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // How It Works Section
  const HowItWorksSection = () => (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Just Register, Upload and Compete
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Register & Pay</h3>
            <p className="text-gray-600">
              Sign up for your category and pay the ₹299 entry fee to join the competition.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Your Work</h3>
            <p className="text-gray-600">
              Submit photos or 60-second videos showcasing your best creative work and talent.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Compete & Win</h3>
            <p className="text-gray-600">
              Promote your submission, gather votes, and compete for amazing cash prizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // Newsletter Section
  const NewsletterSection = () => (
    <section className="py-20 bg-primary text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get Updates on New Competitions
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Plus exclusive access to competition tips, winner spotlights, and insider updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white hover:bg-gray-800 font-semibold px-6 py-3 rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // FAQ Section
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about participating in our competitions.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0 overflow-hidden">
                <button
                  className="w-full py-6 text-left flex items-start justify-between hover:text-primary transition-colors duration-300 group"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4 flex-1 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4 mt-1">
                    <div className={`transform transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'rotate-90' : 'rotate-0'
                    }`}>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  openFAQ === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className={`pb-6 transform transition-transform duration-300 ${
                    openFAQ === index ? 'translate-y-0' : '-translate-y-2'
                  }`}>
                    <p className="text-gray-600 leading-relaxed pr-8">
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

  // Footer Section
  const FooterSection = () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Style Impact</h3>
            <p className="text-gray-400 mb-6">
              India's premier creative competition platform for artists and designers.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-primary transition-colors text-left">Home</button></li>
              <li><button className="hover:text-primary transition-colors text-left">Categories</button></li>
              <li><button className="hover:text-primary transition-colors text-left">How It Works</button></li>
              <li><button className="hover:text-primary transition-colors text-left">Winners</button></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-primary transition-colors text-left">Contact Us</button></li>
              <li><button className="hover:text-primary transition-colors text-left">FAQ</button></li>
              <li><button className="hover:text-primary transition-colors text-left">Terms & Conditions</button></li>
              <li><button className="hover:text-primary transition-colors text-left">Privacy Policy</button></li>
            </ul>
          </div>
          
          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Platform Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><Gift className="w-4 h-4 mr-2" />Big Prize Pool</li>
              <li className="flex items-center"><Zap className="w-4 h-4 mr-2" />Quick Submission</li>
              <li className="flex items-center"><Shield className="w-4 h-4 mr-2" />Secure Payments</li>
              <li className="flex items-center"><HeartHandshake className="w-4 h-4 mr-2" />Fair Judging</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 Style Impact. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen relative pt-[89px]">
      <HeroSection />
      <PrizeSection />
      <CategoriesSection />
      <PromoBannerSection />
      <SecondPromoSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <NewsletterSection />
      <FAQSection />
      <FooterSection />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 mx-auto" />
      </button>
    </div>
  );
};

export default WelcomePage;
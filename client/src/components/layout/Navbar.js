import React, { useState } from 'react';
import { User, Menu, X, Trophy, HelpCircle, Users, Home, Calendar, Clock, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContestDropdown, setShowContestDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Categories', icon: Menu },
    { name: 'How it Works', icon: HelpCircle },
    { name: 'Winners', icon: Trophy },
    { name: 'Contact', icon: Phone },
  ];

  const handleMobileContestClick = () => {
    setShowContestDropdown(!showContestDropdown);
  };

  const handleNavItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleMobileNavItemClick = (itemName) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full relative">
      {/* Main Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-100 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="text-black font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-black">StyleImpact</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeItem === item.name;
                return (
                  <div key={item.name} className="relative group">
                    <button
                      onClick={() => handleNavItemClick(item.name)}
                      className={`flex items-center space-x-1 transition-colors duration-300 py-2 relative overflow-hidden bg-transparent border-none cursor-pointer ${
                        isActive 
                          ? 'text-primary' 
                          : 'text-black hover:text-primary'
                      }`}
                    >
                      <item.icon size={18} />
                      <span className="font-medium">{item.name}</span>
                      {/* Underline Animation - starts hidden, appears on hover or when active */}
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out ${
                        isActive 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`}></div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right Side Icons & Login */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Contest Dropdown */}
              <div className="relative">
                <button 
                  className="relative p-2 text-black hover:text-primary transition-colors duration-300 rounded-md hover:bg-gray-50"
                  onClick={() => setShowContestDropdown(!showContestDropdown)}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 50 50" 
                     stroke="currentColor"
                  strokeWidth="1.1"
                    fill="currentColor" 
                    className="text-xl"
                  >
                    <g>
                      <path d="M38.594,13.356l0.468-4.477L34.95,7.05l-1.829-4.112l-4.477,0.467L25,0.765l-3.644,2.641l-4.477-0.468L15.05,7.05   l-4.112,1.829l0.467,4.477L8.765,17l2.641,3.644l-0.468,4.477l4.113,1.829L16,29.085v19.72l9-5.625l9,5.625V29.085l0.95-2.135   l4.112-1.829l-0.467-4.477L41.235,17L38.594,13.356z M25,40.821l-7,4.375V30.945l3.356-0.35L25,33.235l3.644-2.641L32,30.945v14.25   L25,40.821z M36.922,23.883l-3.487,1.552l-1.552,3.487l-3.793-0.396L25,30.765l-3.09-2.239l-3.793,0.396l-1.552-3.487l-3.487-1.552   l0.396-3.793L11.235,17l2.239-3.09l-0.396-3.793l3.487-1.552l1.552-3.487l3.793,0.396L25,3.235l3.09,2.239l3.793-0.396l1.552,3.487   l3.487,1.552l-0.396,3.793L38.765,17l-2.239,3.09L36.922,23.883z"/>
                      <path d="M25,7c-5.514,0-10,4.486-10,10s4.486,10,10,10s10-4.486,10-10S30.514,7,25,7z M25,25c-4.411,0-8-3.589-8-8s3.589-8,8-8   s8,3.589,8,8S29.411,25,25,25z"/>
                    </g>
                  </svg>
                  {/* Contest count badge */}
                  <span className="absolute -top-1 -right-1 bg-primary text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    3
                  </span>
                </button>

                {/* Desktop Dropdown Menu */}
                {showContestDropdown && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                    <div className="py-2">
                      {/* Current Contests */}
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Current Contests</h3>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <div>
                              <p className="font-medium text-gray-800">Summer Fashion Contest</p>
                              <p className="text-xs text-gray-500">Prize: ₹1,00,000</p>
                            </div>
                          </div>
                          <Clock size={16} className="text-green-500" />
                        </div>
                      </div>

                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <div>
                              <p className="font-medium text-gray-800">Street Style Challenge</p>
                              <p className="text-xs text-gray-500">Prize: ₹50,000</p>
                            </div>
                          </div>
                          <Clock size={16} className="text-green-500" />
                        </div>
                      </div>

                      {/* Upcoming Contests */}
                      <div className="px-4 py-2 border-b border-gray-100 mt-2">
                        <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Upcoming Contests</h3>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <div>
                              <p className="font-medium text-gray-800">Winter Collection</p>
                              <p className="text-xs text-gray-500">Starts in 5 days</p>
                            </div>
                          </div>
                          <Calendar size={16} className="text-orange-500" />
                        </div>
                      </div>

                      {/* View All Button */}
                      <div className="px-4 py-3 border-t border-gray-100 mt-2">
                        <button className="w-full text-center py-2 text-primary hover:text-primary font-medium text-sm transition-colors">
                          View All Contests →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Login/Signup */}
              <div className="flex items-center space-x-2">
                <button className="text-black hover:text-white transition-colors duration-300 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-800 min-w-[90px] shadow-sm">
                  <span className="font-medium">Login</span>
                </button>
                <button className="bg-primary text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors duration-300 min-w-[90px] shadow-sm">
                  Signup
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <div className="relative">
                <button 
                  className="relative p-2 text-black"
                  onClick={handleMobileContestClick}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 50 50" 
                    fill="currentColor" 
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-xl"
                  >
                    <g>
                      <path d="M38.594,13.356l0.468-4.477L34.95,7.05l-1.829-4.112l-4.477,0.467L25,0.765l-3.644,2.641l-4.477-0.468L15.05,7.05   l-4.112,1.829l0.467,4.477L8.765,17l2.641,3.644l-0.468,4.477l4.113,1.829L16,29.085v19.72l9-5.625l9,5.625V29.085l0.95-2.135   l4.112-1.829l-0.467-4.477L41.235,17L38.594,13.356z M25,40.821l-7,4.375V30.945l3.356-0.35L25,33.235l3.644-2.641L32,30.945v14.25   L25,40.821z M36.922,23.883l-3.487,1.552l-1.552,3.487l-3.793-0.396L25,30.765l-3.09-2.239l-3.793,0.396l-1.552-3.487l-3.487-1.552   l0.396-3.793L11.235,17l2.239-3.09l-0.396-3.793l3.487-1.552l1.552-3.487l3.793,0.396L25,3.235l3.09,2.239l3.793-0.396l1.552,3.487   l3.487,1.552l-0.396,3.793L38.765,17l-2.239,3.09L36.922,23.883z"/>
                      <path d="M25,7c-5.514,0-10,4.486-10,10s4.486,10,10,10s10-4.486,10-10S30.514,7,25,7z M25,25c-4.411,0-8-3.589-8-8s3.589-8,8-8   s8,3.589,8,8S29.411,25,25,25z"/>
                    </g>
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-primary text-black text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    3
                  </span>
                </button>

                {/* Mobile Contest Dropdown - Positioned like a proper dropdown */}
                {showContestDropdown && (
                  <div className="absolute -right-[64px] mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-w-[calc(100vw-2rem)]">
                    <div className="py-3">
                      {/* Current Contests */}
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Current Contests</h3>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <div>
                              <p className="font-medium text-gray-800">Summer Fashion Contest</p>
                              <p className="text-xs text-gray-500">Prize: ₹1,00,000</p>
                            </div>
                          </div>
                          <Clock size={16} className="text-green-500" />
                        </div>
                      </div>

                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <div>
                              <p className="font-medium text-gray-800">Street Style Challenge</p>
                              <p className="text-xs text-gray-500">Prize: ₹50,000</p>
                            </div>
                          </div>
                          <Clock size={16} className="text-green-500" />
                        </div>
                      </div>

                      {/* Upcoming Contests */}
                      <div className="px-4 py-2 border-b border-gray-100 mt-2">
                        <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Upcoming Contests</h3>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <div>
                              <p className="font-medium text-gray-800">Winter Collection</p>
                              <p className="text-xs text-gray-500">Starts in 5 days</p>
                            </div>
                          </div>
                          <Calendar size={16} className="text-orange-500" />
                        </div>
                      </div>

                      {/* View All Button */}
                      <div className="px-4 py-3 border-t border-gray-100 mt-2">
                        <button className="w-full text-center py-2 text-primary hover:text-yellow-600 font-medium text-sm transition-colors">
                          View All Contests →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Promo Banner - Static position */}
      <div className="bg-black text-white text-center py-2 px-4 relative z-20">
        <p className="text-sm">Win ₹ 1,00,000 • Runner-up ₹ 11,000 | Entry ₹ 299</p>
      </div>

      {/* Mobile Menu - Positioned absolutely to overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[89px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-10">
          <div className="px-4 pt-3 pb-3 space-y-1">
            {/* Explicitly render Home first */}
            <button
              onClick={() => handleMobileNavItemClick('Home')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-300 w-full text-left bg-transparent border-none cursor-pointer ${
                activeItem === 'Home'
                  ? 'text-primary bg-yellow-50'
                  : 'text-black hover:text-primary hover:bg-gray-50'
              }`}
            >
              <Home size={18} />
              <span className="font-medium">Home</span>
            </button>
            
            {/* Render other nav items */}
            {navItems.slice(1).map((item) => {
              const isActive = activeItem === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => handleMobileNavItemClick(item.name)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-300 w-full text-left bg-transparent border-none cursor-pointer ${
                    isActive
                      ? 'text-primary bg-yellow-50'
                      : 'text-black hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}

            <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
              <button className="text-black hover:text-white w-full px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-800 transition-colors duration-300 shadow-sm">
                <span className="font-medium">Login</span>
              </button>
              <button className="w-full bg-primary text-black px-3 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors duration-300 shadow-sm">
                Signup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {showContestDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowContestDropdown(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
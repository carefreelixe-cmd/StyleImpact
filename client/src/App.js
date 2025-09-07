import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import WelcomePage from './pages/Welcome/WelcomePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    // Convert navbar menu items to page names for scrolling
    const pageMapping = {
      'Home': 'home',
      'Categories': 'categories', 
      'How it Works': 'how-it-works',
      'Winners': 'winners',
      'Contact': 'contact'
    };
    
    const mappedPage = pageMapping[page] || page.toLowerCase().replace(/\s+/g, '-');
    setCurrentPage(mappedPage);
  };

  return (
    <div className="App">
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />
      <WelcomePage 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
    </div>
  );
}

export default App;
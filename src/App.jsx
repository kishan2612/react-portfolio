// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for navigation
import PortfolioNavBar from './components/PortfolioNavBar';
import PortfolioPage1 from './components/portfolio/PortfolioPage1';
import PortfolioAboutPage from './components/portfolio/PortfolioAboutPage';
import PortfolioWorkPage from './components/portfolio/PortfolioWorkPage';
import PortfolioContactPage from './components/portfolio/PortfolioContactPage';
import PortfolioRootPage from './components/portfolio/PortfolioRootPage';

const App = () => {
  return (
    <div className='relative'>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-10">
        <PortfolioNavBar />
      </div>

      {/* Main Content with Routing */}
      <div className="pt-20"> {/* Add padding to avoid overlap with the fixed navbar */}
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<PortfolioRootPage />} /> {/* Default route */}
          <Route path="/about" element={<PortfolioAboutPage />} />
          <Route path="/work" element={<PortfolioWorkPage />} />
          <Route path="/contact" element={<PortfolioContactPage />} />
          <Route path="/home" element={<PortfolioRootPage/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;

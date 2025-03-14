import {Route, Routes} from 'react-router-dom';
import PortfolioAboutPage from "./pages/PortfolioAboutPage.tsx";
import PortfolioWorkPage from "./components/portfolio/PortfolioWorkPage.tsx";
import PortfolioContactPage from "./pages/PortfolioContactPage.tsx";
import PortfolioRootPage from "./pages/PortfolioRootPage";
const App = () => {
  return (
    <div className='relative'>
      {/* Fixed Navbar */}
  

      {/* Main Content with Routing */}
      <div > {/* Add padding to avoid overlap with the fixed navbar */}
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

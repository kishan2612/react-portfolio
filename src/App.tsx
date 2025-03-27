import {Route, Routes} from 'react-router-dom';
import PortfolioRootPage from "./pages/PortfolioRootPage";
import ProjectDetailPage from "./pages/ProjectDetail.tsx";
import DigitalAgencyHome from "./components/agency/DigitalAgencyHome.tsx";


const App = () => {
  return (
    <div className='relative'>
      {/* Fixed Navbar */}
  

      {/* Main Content with Routing */}
      <div > {/* Add padding to avoid overlap with the fixed navbar */}
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<DigitalAgencyHome />} /> {/* Default route */}
          <Route path="/home" element={<PortfolioRootPage/>}/>
          <Route path="/works/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

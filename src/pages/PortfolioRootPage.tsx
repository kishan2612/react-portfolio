import { userKishan } from '../constants/KishanUserInformation.ts'
import PortfolioNavBar from '../components/portfolio/PortfolioNavBar.tsx';
import { User } from '../model/User.ts';
import PortfolioPage1 from "../components/portfolio/PortfolioPage1.tsx";
import PortfolioPage2 from "../components/portfolio/PortfolioPage2.tsx";
import ScrollToTopButton from "../components/ScrollToTopButton.tsx";

const PortfolioRootPage = () => {
    const user:User = userKishan
    return (

        <div style={{backgroundColor:user.primaryColor}}>
            {/* Page 1 */}
            <div className="fixed top-0 left-0 w-full z-10">
                <PortfolioNavBar user={userKishan} />
            </div>
            <div className="">
                <PortfolioPage1 user={userKishan} />
            </div>

            {/* Page 2 */}
            <div className="h-screen">
                <PortfolioPage2 user={userKishan} />
            </div>
            {/* Floating Scroll to Top Button */}
            <ScrollToTopButton />
        </div>

    );
};


export default PortfolioRootPage
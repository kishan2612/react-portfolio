import { userKishan } from '../constants/KishanUserInformation.ts'
import PortfolioNavBar from '../components/portfolio/PortfolioNavBar.tsx';
import { User } from '../model/User.ts';
import PortfolioIntro from "../components/portfolio/PortfolioIntro.tsx";
import PortfolioPage2 from "../components/portfolio/PortfolioPage2.tsx";
import ScrollToTopButton from "../components/ScrollToTopButton.tsx";
import UserContext from '../hooks/UserContext.tsx';

const PortfolioRootPage = () => {
    const user:User = userKishan
    return (
        <UserContext.Provider value={user}>

        <div style={{backgroundColor:user.primaryColor}}>
            {/* Page 1 */}
            <div className="fixed top-0 left-0 w-full z-10">
                <PortfolioNavBar user={user} />
            </div>
            <div className="">
                <PortfolioIntro />
            </div>

            {/* Page 2 */}
            <div className="h-screen">
                <PortfolioPage2 />
            </div>
            {/* Floating Scroll to Top Button */}
            <ScrollToTopButton />
        </div>
        </UserContext.Provider>
    );
};


export default PortfolioRootPage
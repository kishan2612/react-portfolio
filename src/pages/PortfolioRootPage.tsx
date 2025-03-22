import { userKishan } from '../constants/KishanUserInformation.ts'
import PortfolioNavBar from '../components/portfolio/PortfolioNavBar.tsx';
import { User } from '../model/User.ts';
import PortfolioIntro from "../components/portfolio/PortfolioIntro.tsx";
import PortfolioPage2 from "../components/portfolio/PortfolioPage2.tsx";
import ScrollToTopButton from "../components/ScrollToTopButton.tsx";
import UserContext from '../hooks/UserContext.tsx';
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

const PortfolioRootPage = () => {
    const user: User = userKishan;
    const containerRef = useRef(null);

    // Get the scroll progress for the whole page
    const { scrollYProgress } = useScroll({
        target: containerRef, 
        offset: ["start start", "end start"], // Track from the start to the end
    });

    // Move PortfolioPage2 upwards as you scroll
    const translateY = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);

    return (
        <UserContext.Provider value={user}>
            <div style={{ backgroundColor: user.primaryColor }}>
                {/* Navbar (Fixed at Top) */}
                <div className="fixed top-0 left-0 w-full z-10">
                    <PortfolioNavBar user={user} />
                </div>

                <div ref={containerRef} className="relative h-[200vh] overflow-y-auto">
                    {/* Page 1 (Intro) - Fixed */}
                    <motion.div 
                        className="fixed top-20 md:top-22 left-0 w-full h-screen flex items-center justify-center z-0"
                    >
                        <PortfolioIntro />
                    </motion.div>

                    {/* Page 2 (Scrolls over Intro) */}
                    <motion.div 
                        className="absolute top-0 left-0 w-full h-screen"
                        style={{ y: translateY }}
                    >
                        <PortfolioPage2 />
                    </motion.div>
                </div>

                {/* Floating Scroll to Top Button */}
                <ScrollToTopButton />
            </div>
        </UserContext.Provider>
    );
};

export default PortfolioRootPage
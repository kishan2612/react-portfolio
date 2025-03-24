import { motion, useScroll, useTransform } from "framer-motion";
import AgencyTopNavBar from "./AgencyTopNavBar.tsx";
import AgencyDashboard from "./AgencyDashboard.tsx";
import { useRef } from "react";
import AgencyPage2 from "./AgencyPage2.tsx";
import ScrollToTopButton from "../ScrollToTopButton.tsx";

const DigitalAgencyHome = () => {
    const containerRef = useRef(null);

    // Get the scroll progress for the whole page
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"], // Track from the start to the end
    });

    // Move PortfolioPage2 upwards as you scroll
    const translateY = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);
    return (
        <div className="bg-black text-white font-sans overflow-hidden">
            {/* Header */}
            <AgencyTopNavBar />


            <div>
                {/* Hero Section */}
                <div ref={containerRef} className="relative h-[200vh] overflow-y-auto">
                    <motion.div
                        className="fixed top-20 md:top-22 left-0 w-full h-screen flex items-center justify-center z-0"
                    >
                        <AgencyDashboard />
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute top-0 left-0 w-full h-screen"
                style={{ y: translateY }}
            >
                <AgencyPage2 />
            </motion.div>
            {/* Floating Scroll to Top Button */}
            <ScrollToTopButton />
        </div>


    );
};

export default DigitalAgencyHome;

import React from 'react'
import PortfolioPage2 from './PortfolioPage2'
import PortfolioPage1 from './PortfolioPage1'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { userKishan } from '../../constants/UserInformation'

const PortfolioRootPage = () => {
    return (
        <div className="relative">
            {/* Fixed PortfolioPage1 */}
            <div 
                className="fixed top-0 left-0 w-full h-screen z-10 overflow-hidden"
                style={{ background: userKishan.primaryColor }}
            >
                <PortfolioPage1 />
            </div>

            {/* Scrolling PortfolioPage2 */}
            <motion.div
                className="relative z-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <PortfolioPage2 />
            </motion.div>
        </div>
    );
};


export default PortfolioRootPage
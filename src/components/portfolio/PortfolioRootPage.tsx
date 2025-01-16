import React from 'react'
import PortfolioPage2 from './PortfolioPage2'
import PortfolioPage1 from './PortfolioPage1'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { userKishan } from '../../constants/UserInformation'

const PortfolioRootPage = () => {
    return (
        <div className="overflow-y-auto">
            {/* Page 1 */}
            <div className="h-screen">
                <PortfolioPage1 />
            </div>

            {/* Page 2 */}
            <div className="h-screen">
                <PortfolioPage2 />
            </div>
        </div>
    );
};


export default PortfolioRootPage
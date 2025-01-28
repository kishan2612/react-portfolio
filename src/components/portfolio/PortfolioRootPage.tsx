import React from 'react'
import PortfolioPage2 from './PortfolioPage2'
import PortfolioPage1 from './PortfolioPage1'
import { userKishan } from '../../constants/UserInformation'
import PortfolioNavBar from '../portfolioNavBar';
import { User } from '../../model/user';

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
        </div>
    );
};


export default PortfolioRootPage
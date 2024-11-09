import React from 'react'
import PortfolioNavBar from '../portfolioNavBar'
import { userKishan } from '../../constants/userInformation'
import { AppColors } from '../../constants/AppColors'


const PortfolioPage1 = () => {
    return (
        <div className='bg-purple-300 h-screen  justify-center'>


            <div className='justify-center px16'>
                <h1 className='text-black text-center font-alfaSlab font-bold tracking-wider'
                    style={{ fontSize: '18vw', lineHeight: '1em' }}>
                    {userKishan.name.toUpperCase()}

                </h1>
            </div>
            {/* <div className='text-black text-center font-alfaSlab font-bold'
                style={{ fontSize: '220px' }}>
                {userKishan.name.toUpperCase()}

            </div> */}
        </div>
    )
}

export default PortfolioPage1
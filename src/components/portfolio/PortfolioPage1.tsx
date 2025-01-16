import React from 'react'
import { userKishan } from '../../constants/UserInformation'
import { AppColors } from '../../constants/AppColors'

const PortfolioPage1 = () => {
    return (
        <div className='relative'
            style={{ background: userKishan.primaryColor, height: 'calc(100vh - 6rem)' }}>

            <div className='justify-center'>
                <h1 className='text-black text-center font-alfaSlab font-bold tracking-wider'
                    style={{ fontSize: '18vw', lineHeight: '1em' }}>
                    {userKishan.name.toUpperCase()}

                </h1>
            </div>

            {/* Image positioned between text and the bottom */}



            <div className="absolute top-32 left-1/2 w-1/3 transform -translate-x-1/2 rounded-2xl overflow-hidden"
            style={{borderWidth:"12px",borderColor: AppColors.secondaryBackground,backgroundColor:AppColors.secondaryBackground}}>
                <img
                    src={userKishan.imageLocation}
                    alt="Image Description"
                    className="object-cover w-full rounded-xl"
                    style={{ height: '75.00vh' }}
                />
            </div>

            {/* Text description at the bottom left */}
            <div className="absolute bottom-8 left-0 pl-24  pr-16 pb-16 w-1/3">
                <p className="text-black text-lg font-normal line-clamp-4">{userKishan.shortDescription}</p>
            </div>

        </div>
    )
}

export default PortfolioPage1
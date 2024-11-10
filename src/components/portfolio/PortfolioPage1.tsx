import React from 'react'
import { userKishan } from '../../constants/UserInformation'
import { AppColors } from '../../constants/AppColors'
import PortfolioPage2 from './PortfolioPage2'

const PortfolioPage1 = () => {
    return (
        <div>
            <div className='fixed w-full overflow-hidden'
                style={{ background: userKishan.primaryColor, height: 'calc(100vh - 4rem)' }}>

                <div className='justify-center'>
                    <h1 className='text-black text-center font-alfaSlab font-bold tracking-wider'
                        style={{ fontSize: '18vw', lineHeight: '1em' }}>
                        {userKishan.name.toUpperCase()}

                    </h1>
                </div>

                {/* Image positioned between text and the bottom */}



                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1/3">
                    <img
                        src={userKishan.imageLocation}
                        alt="Image Description"
                        className="object-cover w-full h-screen rounded-2xl"
                        style={{ borderColor: AppColors.secondaryBackground, borderWidth: "16px" }}
                    />
                </div>

                {/* Text description at the bottom left */}
                <div className="absolute bottom-0 left-0 px-16 pb-16 w-1/3">
                    <p className="text-black text-base font-normal line-clamp-4">{userKishan.shortDescription}</p>
                </div>

                {/* Text description at the bottom right */}
                <div className="absolute bottom-0 right-0 px-16 pb-16 w-1/3">
                    {/* Caption above the table */}
                    <div className="text-black text-sm font-light mb-2">Expertise</div>

                    <table className="min-w-full text-black text-center">
                        <tbody>
                            {/* Loop through the skills array and create table rows */}
                            {Array.from({ length: 2 }).map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {/* Map the skills to table cells */}
                                    {userKishan.highlightSkills.slice(rowIndex * 2, rowIndex * 2 + 2).map((skill, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className="border px-2 py-2 border-gray-500 font-spaceGrotesk"
                                            style={{ width: '180px' }} // Fixed width for the cell
                                        >
                                            {skill}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="h-[200vh] bg-black"> {/* Makes content long enough to scroll */}
                <div className="absolute bottom-0 w-full">
                   
                <PortfolioPage2/>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage1
import React from 'react'
import { userKishan } from '../../constants/UserInformation'
import { AppColors } from '../../constants/AppColors'

const PortfolioPage1 = () => {
    return (
        <div
            style={{ background: userKishan.primaryColor, height: 'calc(100vh - 6rem)' }}>

            <div className='justify-center'>
                <h1 className='text-black text-center font-alfaSlab font-bold tracking-wider'
                    style={{ fontSize: '18vw', lineHeight: '1em' }}>
                    {userKishan.name.toUpperCase()}

                </h1>
            </div>

            {/* Image positioned between text and the bottom */}



            <div className="absolute top-1/4 left-1/2 w-1/4 transform -translate-x-1/2 rounded-2xl overflow-hidden"
            style={{borderWidth:"12px",borderColor: AppColors.secondaryBackground,backgroundColor:AppColors.secondaryBackground}}>
                <img
                    src={userKishan.imageLocation}
                    alt="Image Description"
                    className="object-cover w-full rounded-xl"
                    style={{ height: '55.00vh' }}
                />
            </div>

            {/* Text description at the bottom left */}
            <div className="absolute bottom-32 right-0 pl-24  pr-16 pb-16 w-1/3">
                <p className="text-black text-lg font-normal line-clamp-4">{userKishan.shortDescription}</p>
            </div>

            {/* Text description at the bottom right */}
            <div className="absolute bottom-0 left-0 px-16 pb-8 w-full">
                {/* Caption above the table */}
                <div className="text-black text-sm font-normal mb-2">Expertise</div>

                <table className="min-w-full text-black text-center">
                    <tbody>
                        {/* Loop through the skills array and create table rows */}
                        {Array.from({ length: 1 }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {/* Map the skills to table cells */}
                                {userKishan.highlightSkills.slice(rowIndex * 6, rowIndex * 6 + 6).map((skill, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="border px-2 py-4 border-gray-500 font-spaceGrotesk font-semibold"
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
    )
}

export default PortfolioPage1
import React from 'react';
import { userKishan } from '../../constants/UserInformation'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const PortfolioPage2 = () => {
    return (
        <div className="bg-black rounded-t-3xl  pb-8 mx-auto">
            <div className="flex justify-between items-start space-x-4 py-16 px-16 ">
                {/* Left Side: About Me */}
                <div className="w-1/2 pr-16">
                    <h2 className="text-2xl font-bold mb-16 text-white font-spaceGrotesk">About Me</h2>
                    <p className="text-gray-300 leading-relaxed text-2xl text-start">
                        {userKishan.longDescription} </p>
                </div>

                {/* Divider */}


                {/* Right Side: Work Experience */}
                <div className="w-1/2 pl-16">
                    <ExperienceList />
                </div>
            </div>
            <ContactTable />
        </div>
    );
};

const ExperienceList = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-16 text-white font-spaceGrotesk">Experience</h2>

            <ul className="space-y-4">
                {userKishan.workExperiences.map((experience, index) => (
                    <li key={index} className="flex justify-between">
                        <div>
                            <span className="text-gray-400 font-medium">{experience.position}</span>
                            <div className="text-gray-200 text-lg">{experience.company}</div>
                        </div>
                        <span className="text-gray-400">
                            {experience.startYear} - {experience.endYear}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ContactTable = () => {
    const handleClick = (link: string) => {
        if (link.startsWith("mailto:")) {
            // Open email client
            window.location.href = link;
        } else {
            // Open website in a new tab
            window.open(link, "_blank");
        }
    };

    return (
        <div>
            <div className='center'>
                <h4 className="text-xl font-bold mb-8 text-white font-spaceGrotesk text-center">CONNECT WITH ME</h4>
            </div>
            <table className="min-w-min mb-8 mx-auto text-center border border-gray-700">
                <tbody>
                    <tr className="divide-x divide-gray-700">
                        {userKishan.connectionsMediums.map((method, index) => (
                            <td
                                key={index}
                                className="w-48 py-4 text-gray-500 font-spaceGrotesk cursor-pointer hover:text-purple-300 transition-colors duration-200 "
                                onClick={() => handleClick(method.websiteLink)}
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    {method.websiteName === 'LinkedIn' ? (
                                        <FaLinkedin className="text-xl" />
                                    ) : (
                                        <FaEnvelope className="text-xl" />
                                    )}
                                    <span>{method.websiteName}</span>
                                </div>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );

};

export default PortfolioPage2;

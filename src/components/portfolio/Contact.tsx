import {User} from "../../model/User.ts";
import {userKishan} from "../../constants/KishanUserInformation.ts";
import {FaEnvelope, FaLinkedin} from "react-icons/fa";

const ContactSection = ({ user }: { user: User }) => {

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
        <div className=' w-full py-16 px-6 md:px-20 text-black font-sans' style={{
            backgroundColor: user.primaryColor
        }}>
            {/* Main Content */}
            <div className="flex justify-between items-start">
                {/* Heading */}
                <h1 className="text-6xl md:text-9xl font-black leading-none font-alfaSlab">
                    GET IN TOUCH
                </h1>

            </div>

            <table className="min-w-min my-12 ">
                <tbody>
                <tr>
                    {userKishan.connectionsMediums.map((method, index) => (
                        <td
                            key={index}
                            className="w-48 py-4 text-black text-xl font-spaceGrotesk cursor-pointer hover:underline "
                            onClick={() => handleClick(method.websiteLink)}
                        >
                            <div className="flex items-center justify-center space-x-2">
                                {method.websiteName === "LinkedIn" ? (
                                    <FaLinkedin className="text-2xl" />
                                ) : (
                                    <FaEnvelope className="text-2xl" />
                                )}
                                <span>{method.websiteName}</span>
                            </div>
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
            {/*/!* Social Links *!/*/}
            {/*<div className="flex space-x-6 text-lg mt-10">*/}
            {/*    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">*/}
            {/*        Twitter*/}
            {/*    </a>*/}
            {/*    <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:underline">*/}
            {/*        Behance*/}
            {/*    </a>*/}
            {/*    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:underline">*/}
            {/*        Dribbble*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    );
};

export default ContactSection;

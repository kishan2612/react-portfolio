import {User} from "../../model/User.ts";
import {FaEnvelope, FaLinkedin} from "react-icons/fa";
import {useUser} from "../../hooks/UserContext.tsx";

const ContactSection = () => {

    const user:User = useUser();

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
        <section id="/contact">
        <div className=' w-full py-8 md:py-16 px-8 md:px-16 text-black font-sans rounded-t-3xl' style={{
            backgroundColor: user.primaryColor
        }}>
            {/* Main Content */}
            <div className="flex justify-between items-start">
                {/* Heading */}
                <h1 className="text-5xl md:text-9xl font-black leading-none font-alfaSlab">
                    GET IN TOUCH
                </h1>

            </div>

            <table className="min-w-min my-6 md:my-12 ">
                <tbody>
                <tr>
                    {user.connectionsMediums.map((method, index) => (
                        <td
                            key={index}
                            className="w-32 md:w-48 py-4 text-black text-base md:text-xl font-spaceGrotesk cursor-pointer hover:underline "
                            onClick={() => handleClick(method.websiteLink)}
                        >
                            <div className="flex items-center justify-center space-x-2">
                                {method.websiteName === "LinkedIn" ? (
                                    <FaLinkedin className="text-lg md:text-2xl" />
                                ) : (
                                    <FaEnvelope className="text-lg md:text-2xl" />
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
        </section>
    );
};

export default ContactSection;

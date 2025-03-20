import {User} from '../../model/User.ts'
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import { useState} from "react";
import {Squash} from 'hamburger-react'


const PortfolioNavBar = ({user, showActionItems = true}: { user: User; showActionItems?: boolean }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuColor, setMenuColor] = useState("#000000");

    return (
        <nav
            className="h-20 md:h-24 flex items-center justify-between px-6 md:px-16 font-sans"
            style={{backgroundColor: user.primaryColor}}
        >
            {/* Logo / Name */}
            <Link to="/" className="text-black text-lg md:text-2xl hover:scale-90 transition-transform cursor-pointer">
                {user.name}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
                {showActionItems && (
                    <ul className="flex space-x-6">
                        {["About", "Works", "Contact"].map((item, index) => (
                            <li key={index}>
                                <ScrollLink
                                    to={`/${item.toLowerCase()}`}
                                    smooth={true}
                                    duration={800}
                                    className="text-black relative group pb-1 text-xl font-light"
                                >
                                    {item}
                                    <div className="relative group">
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                    </div>
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Mobile Menu Icon */}

            <div className="md:hidden z-50">

            <Squash size={18} toggled={menuOpen} toggle={
                toggled => {
                    if (toggled) {
                        // open a menu
                        setMenuOpen(true);
                        setMenuColor("#ffffff");
                    } else {
                        // close a menu
                        setMenuOpen(false);
                        setMenuColor("#000000");

                    }
                }
            } color={menuColor}/></div>
            {/* Guillotine Mobile Menu */}
            <div
                className={`absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
                    menuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <button className="absolute top-6 right-6 text-3xl" onClick={() => setMenuOpen(false)}>✕</button>

                {showActionItems && (
                    <ul className="flex flex-col space-y-6 text-center">
                        {["About", "Works", "Contact"].map((item, index) => (
                            <li key={index}>
                                <ScrollLink
                                    to={`/${item.toLowerCase()}`}
                                    smooth={true}
                                    duration={800}
                                    className="text-white text-2xl font-light cursor-pointer"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};


export default PortfolioNavBar
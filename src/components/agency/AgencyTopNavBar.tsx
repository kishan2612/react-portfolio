import { AgencyConstants } from "../../constants/AgencyConstants"
import {useState} from "react";
import {Link as ScrollLink} from "react-scroll";

const AgencyTopNavBar = ()=>{


    return  <header className="h-24 flex justify-between items-center px-16 fixed top-0 w-full z-10 bg-black">
        <h1 className="text-2xl font-bold">{AgencyConstants.agencyName}</h1>
        <nav>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
                    <ul className="flex space-x-6">
                        {["About","Contact"].map((item, index) => (
                            <li key={index}>
                                <ScrollLink
                                    to={`${item.toLowerCase()}`}
                                    smooth={true}

                                    duration={800}
                                    className="text-white relative group pb-1 text-xl font-light cursor-pointer "
                                >
                                    {item}
                                    <div className="relative group">
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                    </div>
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
            </div>

        </nav>
    </header>
}

export default AgencyTopNavBar
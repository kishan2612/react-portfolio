import {User} from '../model/User.ts'
import {Link} from "react-router-dom";

const PortfolioNavBar = ({user, showActionItems = true}: { user: User, showActionItems?: boolean }) => {
    return (
        <nav className=" h-24 flex items-center justify-between px-16" style={{backgroundColor: user.primaryColor}}>
            <Link to="/" className="text-black text-2xl hover:scale-90 transition-transform cursor-pointer">
                {user.name}
            </Link>

            {/* Navigation Links */}

            {showActionItems && <ul className="flex space-x-6">

                <li>
                    <a
                        href="/work"
                        className="text-black relative group pb-1  text-xl font-extralight">
                        About
                        <div className="relative group">

                            <span
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </div>

                    </a>
                </li>
                <li>
                    <a
                        href="/home"
                        className="text-black relative group pb-1 text-xl font-light">
                        Works
                        <div className="relative group">

                            <span
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </div></a>
                </li>
                <li>
                    <a
                        href="/home"
                        className="text-black relative group pb-1 text-xl font-light">
                        Contact
                        <div className="relative group">

                            <span
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </div></a>
                </li>
            </ul>}
        </nav>
    )
}

export default PortfolioNavBar
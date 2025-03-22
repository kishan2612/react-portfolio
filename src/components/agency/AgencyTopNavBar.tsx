import { AgencyConstants } from "../../constants/AgencyConstants"

const AgencyTopNavBar = ()=>{
    return  <header className="h-24 flex justify-between items-center px-16 fixed top-0 w-full z-10 bg-black">
        <h1 className="text-2xl font-bold">{AgencyConstants.agencyName}</h1>
        <nav>
            <ul className="flex space-x-6 text-lg">
                <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-gray-400">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    </header>
}

export default AgencyTopNavBar
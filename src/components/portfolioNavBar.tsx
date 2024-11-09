import React from 'react'
import { userKishan } from "../constants/userInformation"
import { AppColors } from '../constants/AppColors'

const PortfolioNavBar = () => {
  return (
    <nav className="bg-purple-300 h-16 flex items-center justify-between px-16 py-12">
      <div className="text-black text-2xl">
        {userKishan.name}
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a
            href="#home"
            className="text-black relative group pb-1 text-xl font-extralight">
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </li>
        <li>
          <a
            href="#home"
            className="text-black relative group pb-1  text-xl font-extralight">
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </li>
        <li>
          <a
            href="#home"
            className="text-black relative group pb-1  text-xl font-extralight">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default PortfolioNavBar
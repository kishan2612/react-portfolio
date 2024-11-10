import React from 'react'
import { userKishan } from "../constants/UserInformation"
import { AppColors } from '../constants/AppColors'

const PortfolioNavBar = () => {
  return (
    <nav className="bg-purple-300 h-24 flex items-center justify-between px-16">
      <div className="text-black text-2xl">
        {userKishan.name}
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a
            href="/home"
            className="text-black relative group pb-1 text-xl font-light">
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </li>
        <li>
          <a
            href="/work"
            className="text-black relative group pb-1  text-xl font-extralight">
            Work
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </li>
        <li>
          <a
            href="/contact"
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
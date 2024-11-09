import React from 'react'

const portfolioNavBar = () => {
  return (
    <nav className="bg-purple-600 h-16 flex items-center justify-between px-6">
      {/* Logo or Brand Name */}
      <div className="text-white text-xl font-bold">
        MyWebsite
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="text-white hover:text-gray-200 transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-gray-200 transition duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="text-white hover:text-gray-200 transition duration-300">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-200 transition duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default portfolioNavBar
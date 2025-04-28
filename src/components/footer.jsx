import React from 'react';
import '@flaticon/flaticon-uicons/css/all/all.css';

const Footer = () => {
  return (
    <div className="bg-black/90 w-full mt-10 pt-10 pb-5 px-10 flex flex-col gap-5">

      {/* Upper Section */}
      <div className="flex flex-col md:flex-row justify-between items-center m-7">

        {/* Left Side - Socials */}
        <div className="flex gap-6 text-white text-2xl">
          <i className="fi fi-brands-instagram hover:text-pink-500 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="fi fi-brands-twitter-alt hover:text-blue-400 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="fi fi-brands-whatsapp hover:text-green-400 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
        </div>

        {/* Center - Input Box */}
        <div className="flex mt-5 md:mt-0">
          <input 
            type="text" 
            placeholder="Write To Us.." 
            className="px-6 text-center py-3 rounded-full bg-gray-300 w-80 text-black placeholder:text-gray-600 focus:outline-none text-lg"
          />
        </div>

        {/* Right Side - More Socials */}
        <div className="flex gap-6 text-white text-2xl mt-5 md:mt-0">
          <i className="fi fi-brands-github hover:text-gray-400 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="fi fi-brands-facebook hover:text-blue-600 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
          <i className="fi fi-brands-reddit hover:text-orange-500 hover:scale-110 transition-transform duration-300 cursor-pointer"></i>
        </div>

      </div>

      {/* Middle Section - Links */}
      <div className="flex flex-wrap justify-center gap-10 text-gray-400 font-semibold text-sm">

        <a href="#about" className="hover:text-white transition-colors duration-300 cursor-pointer">About Us</a>
        <a href="#privacy" className="hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</a>
        <a href="#terms" className="hover:text-white transition-colors duration-300 cursor-pointer">Terms & Conditions</a>
        <a href="#contact" className="hover:text-white transition-colors duration-300 cursor-pointer">Contact</a>
        <a href="#help" className="hover:text-white transition-colors duration-300 cursor-pointer">Help Center</a>

      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full border-t border-gray-700 pt-5 text-center text-gray-500 text-xs">
        © 2025 <span className="text-white font-bold">Snap Budget</span> • Designed with ❤️ by Tech Trojans
      </div>

    </div>
  )
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Monito from "../../assets/Monito.png"; // Logo image
import u_search from "../../assets/u_search.png"; // Search icon
import RedStar from "../../assets/RedStar.png"; // Red star image

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-20">
      {/* Fixed position with background */}
      <div className="container mx-auto flex justify-between items-center w-full h-[100px] px-[130px] py-[28px]">
        {/* Main container */}
        {/* Left-hand side: Logo and Navigation Links */}
        <div className="flex items-center gap-[48px]">
          {/* Logo */}
          <div>
            <img src={Monito} alt="Logo" className="h-10" />
          </div>
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/" // Home link
                className="w-[44px] h-[24px] text-[#003459] text-[16px] font-bold leading-[24px] font-SVN-Gilroy hover:text-blue-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/category" // Category link
                className="w-[44px] h-[24px] text-[#003459] text-[16px] font-bold leading-[24px] font-SVN-Gilroy hover:text-blue-700"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/about" // About link
                className="w-[44px] h-[24px] text-[#003459] text-[16px] font-bold leading-[24px] font-SVN-Gilroy hover:text-blue-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact" // Contact link
                className="w-[44px] h-[24px] text-[#003459] text-[16px] font-bold leading-[24px] font-SVN-Gilroy hover:text-blue-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right-hand side: Search, Join Button, and Currency Selector */}
        <div className="flex items-center space-x-12">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search something here!"
              className="w-[280px] h-[44px] bg-[#FDFDFD] border-none rounded-full px-10 py-3"
            />
            <img
              src={u_search}
              alt="Search Icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>

          {/* Join Button */}
          <button className="bg-[#003459] text-white rounded-full px-7 py-2 w-[203px] h-[44px]">
            Join the community
          </button>

          {/* Currency Selector with Red Star */}
          <div className="flex items-center">
            <img src={RedStar} alt="Red star" className="mr-1 w-5 h-5" />
            <select className="bg-transparent border-none py-2">
              <option value="vnd">VND</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

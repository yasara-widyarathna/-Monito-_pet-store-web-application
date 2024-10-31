import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Importing React Icons
import Monito from '../../assets/Monito.png'; // Importing the Monito logo image

const Footer = () => {
  return (
    <div className="w-full h-[440px] mx-auto relative top-[59px] p-[80px] gap-0 rounded-[40px_40px_0px_0px] opacity-100 bg-gradient-to-br from-[#FCEED5] to-[#FFE7BA]">
      {/* Upper section of the footer */}
      <div className="w-[1180px] h-auto mx-auto p-0 gap-[40px] border-b border-[#CCD1D2] opacity-100 pb-8">
        {/* Registration prompt and subscription input */}
        <div className="w-full h-auto p-[32px] gap-[20px] rounded-[16px] opacity-100 bg-[#003459] flex justify-between items-center">
          {/* Left side - Registration Text */}
          <div className="w-[389px] h-[72px] opacity-100">
            <p className="text-white font-SVN-Gilroy text-[24px] font-bold leading-[36px] text-left">
              Register Now So You Don't Miss Our Programs
            </p>
          </div>

          {/* Right side - Input and Subscribe Button */}
          <div className="w-[707px] h-auto p-[12px] gap-[12px] rounded-[14px] opacity-100 bg-white flex items-center">
            <input
              type="text"
              className="w-[508px] h-[48px] border border-[#99A2A5] pl-[28px] rounded-[8px] bg-white flex items-center"
              placeholder="Enter your Email"
            />
            <button className="w-[163px] h-[48px] p-[14px_28px] rounded-[8px] bg-[#003459] flex items-center justify-center">
              <span className="text-white text-[16px] font-medium leading-[24px]">
                Subscribe Now
              </span>
            </button>
          </div>
        </div>

        {/* Navigation links and social media icons */}
        <div className="w-[1180px] h-[24px] flex justify-between mt-20">
          {/* Navigation Links */}
          <div className="flex items-center gap-[60px]">
            <a href="/" className="text-[#00171F] text-[16px] font-medium leading-[24px]">Home</a>
            <a href="/category" className="text-[#00171F] text-[16px] font-medium leading-[24px]">Category</a>
            <a href="/about" className="text-[#00171F] text-[16px] font-medium leading-[24px]">About</a>
            <a href="/contact" className="text-[#00171F] text-[16px] font-medium leading-[24px]">Contact</a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-[40px]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-[24px] h-[24px] text-[#003459]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-[24px] h-[24px] text-[#003459]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-[24px] h-[24px] text-[#003459]" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-[24px] h-[24px] text-[#003459]" />
            </a>
          </div>
        </div>
      </div>

      {/* Lower section with copyright and policies */}
      <div className="w-[1180px] h-[40px] mx-auto mt-8 flex justify-between items-center">
        {/* Left Side Text */}
        <span className="text-[#667479] text-[14px] font-medium leading-[20px] font-SVN-Gilroy">
          © 2022 Monito. All rights reserved.
        </span>

        {/* Middle Image - Logo */}
        <img
          src={Monito}
          alt="Monito Logo"
          className="w-[115px] h-[40px]"
        />

        {/* Right Side Text - Policy Links */}
        <span className="text-[#667479] text-[14px] font-medium leading-[20px] font-SVN-Gilroy">
          Terms of Service &nbsp;&nbsp;&nbsp;&nbsp; Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from 'react';
import DogGroup from '../../assets/DogGroup.png'; // Import image for banner
import { IoPlayCircleOutline } from "react-icons/io5"; // Play icon for "View Intro" button
import { MdOutlinePauseCircle } from "react-icons/md"; // Pause icon for "View Intro" button

/**
 * CategoryBanner Component
 * Displays a banner with navigation breadcrumbs, a main image, and two action buttons: "View Intro" and "Explore Now".
 * @returns {JSX.Element} A styled banner section for the category page.
 */
const CategoryBanner = () => {
  // State for toggling between play and pause icons
  const [isPlaying, setIsPlaying] = useState(false);

  /**
   * Toggles the play/pause state of the "View Intro" button.
   * When clicked, it switches between play and pause icons to represent the intro video state.
   */
  const handleViewIntroClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      {/* Breadcrumb navigation links for user navigation */}
      <div className="absolute top-[100px] left-[130px] text-[#CCD1D2] font-SVN-Gilroy text-[12px] leading-[18px]">
        <a href="/" className="text-neutral-500 hover:underline">Home</a>
        <span> &gt; </span>
        <a href="/category/dog" className="text-neutral-500 hover:underline">Dog</a>
        <span> &gt; </span>
        <a href="/category/dog/small-dog" className="text-neutral-500 hover:underline">Small Dog</a>
      </div>

      {/* Main banner container with gradient background and decorative elements */}
      <div className="relative w-[1180px] h-[378px] top-[140px] left-[130px] rounded-[20px] bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] overflow-hidden">
        {/* Decorative Background Rectangle */}
        <div className="absolute w-[816.4px] h-[799.52px] top-[-72px] left-[511.23px] rounded-[99px] bg-[#002A48] transform rotate-[-114.22deg]" />

        {/* Dog group image */}
        <img
          src={DogGroup}
          alt="group of dogs"
          className="absolute w-[650px] h-[301px] top-[77px] left-[51px] opacity-1"
        />

        {/* Primary banner heading */}
        <div className="absolute w-[403px] h-[68px] top-[64px] left-[692px]">
          <h1 className="font-SVN-Gilroy font-extrabold text-[52px] leading-[68px] text-left text-white whitespace-nowrap">
            One more friend
          </h1>
        </div>

        {/* Secondary banner heading */}
        <div className="absolute w-[354px] h-[54px] top-[134px] left-[741px]">
          <h2 className="font-SVN-Gilroy font-bold text-[36px] leading-[54px] text-left text-white whitespace-nowrap">
            Thousands more fun!
          </h2>
        </div>

        {/* Banner description text */}
        <div className="absolute w-[394px] h-[54px] top-[196px] left-[701px]">
          <p className="font-SVN-Gilroy font-normal text-[12px] leading-[18px] text-right text-[#CCD1D2]">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
        </div>

        {/* View Intro button with play/pause toggle icon */}
        <div className='absolute top-[300px] left-[701px]'>
          <button 
            className="flex items-center justify-between w-[161px] h-[48px] border-[1.5px] border-white text-white rounded-full px-[28px] py-[14px] gap-[8px]"
            onClick={handleViewIntroClick}
          >
            <span className='text-left text-[16px] font-medium'>
              View Intro
            </span>
            {isPlaying ? (
              <MdOutlinePauseCircle className="w-[18px] h-[18px] text-white" />
            ) : (
              <IoPlayCircleOutline className="w-[18px] h-[18px] text-white" />
            )}
          </button>
        </div>

        {/* Explore Now button */}
        <div className='absolute top-[300px] left-[880px]'>
          <button 
            className="flex items-center justify-center w-[163px] h-[48px] bg-white text-[#003459] rounded-full px-[28px] py-[14px] gap-[10px]"
          >
            <span className='text-left text-[16px] font-medium'>
              Explore Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;

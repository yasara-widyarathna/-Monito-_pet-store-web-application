import React, { useState } from 'react';
import GirlKissingPuppy from '../../assets/GirlKissingPuppy.png';
import { IoPlayCircleOutline } from 'react-icons/io5'; // Importing Play Icon
import { MdOutlinePauseCircle } from 'react-icons/md'; // Importing Pause Icon

const OneMoreFriend = () => {
  // State to manage whether the intro video is playing
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle the button click to toggle play/pause state
  const handleViewIntroClick = () => {
    setIsPlaying(!isPlaying); // Toggle between play and pause icons
  };

  return (
    <div
      className="absolute w-[1180px] h-[378px] bg-[#003459] rounded-[20px] overflow-hidden"
      style={{ top: '1681px', left: '50%', transform: 'translateX(-50%)' }}
    >
      {/* Parent div for the rectangles and image */}
      <div className="relative w-full h-full">
        {/* Rectangle 1 with specific styling */}
        <div
          className="absolute w-[787.54px] h-[787.54px] bg-[#002A48] rounded-[99px] opacity-1 rotate-[-56.25deg]"
          style={{ top: '173.72px', left: '-231.51px' }}
        ></div>

        {/* Rectangle 2 with specific styling */}
        <div
          className="absolute w-[782.29px] h-[635px] bg-[#FCEED5] rounded-[99px] opacity-1 rotate-[30.77deg]"
          style={{ top: '-190px', left: '560.67px' }}
        ></div>

        {/* New Image displaying a girl kissing a puppy */}
        <div className="absolute w-[513px] h-[342px] opacity-1" style={{ top: '36px', left: '20px' }}>
          <img src={GirlKissingPuppy} alt="One More Friend Image" className="w-full h-full object-cover" />
        </div>

        {/* "One more friend" text */}
        <div
          className="absolute w-[600px] h-[68px] text-left text-[#002A48] text-[52px] font-[800] leading-[68px] font-SVN-Gilroy"
          style={{ top: '64px', left: '692px' }}
        >
          One more friend
        </div>

        {/* "Thousands more fun!" text */}
        <div
          className="absolute w-[403px] h-[54px] text-left text-[#002A48] text-[36px] font-[700] leading-[54px] font-SVN-Gilroy"
          style={{ top: '144px', left: '692px' }}
        >
          Thousands more fun!
        </div>

        {/* Long paragraph text about pets */}
        <div
          className="absolute w-[394px] h-[54px] text-right text-[#242B33] text-[12px] font-[500] leading-[18px] font-SVN-Gilroy"
          style={{ top: '208px', left: '692px' }}
        >
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </div>
      </div>

      {/* View Intro Button */}
      <div className='absolute top-[274px] left-[764px]'>
        <button 
          className="flex items-center justify-between w-[161px] h-[48px] border-[1.5px] border-[#003459] text-[#003459] rounded-[57px] px-[28px] py-[10px] gap-[8px] opacity-100"
          onClick={handleViewIntroClick} // Toggle play/pause on click
        >
          <span className='text-left text-[16px] font-medium'>
            View Intro
          </span>
          {isPlaying ? (
            <MdOutlinePauseCircle className="w-[18px] h-[18px]" /> // Show Pause Icon when playing
          ) : (
            <IoPlayCircleOutline className="w-[18px] h-[18px]" /> // Show Play Icon when paused
          )}
        </button>
      </div>

      {/* Explore Now Button */}
      <div className='absolute top-[274px] left-[945px]'>
        <button 
          className="flex items-center justify-center w-[163px] h-[48px] bg-[#003459] text-white rounded-[57px] px-[28px] py-[10px] gap-[10px] opacity-100"
        >
          <span className='text-left text-[16px] font-medium'>
            Explore Now
          </span>
        </button>
      </div>
      
    </div>
  );
};

export default OneMoreFriend;

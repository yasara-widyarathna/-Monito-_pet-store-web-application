import React, { useState } from 'react';
import WomenWithDog from "../../assets/WomenWithDog.png"; // Importing the background image
import { IoPlayCircleOutline } from "react-icons/io5"; // Importing play icon
import { MdOutlinePauseCircle } from "react-icons/md"; // Importing pause icon

const Herro = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to manage play/pause status

  // Function to handle play/pause toggle when the button is clicked
  const handleViewIntroClick = () => {
    setIsPlaying(!isPlaying); // Toggle the isPlaying state
  };

  return (
    <div className='relative w-full h-[695px] overflow-hidden bg-gradient-to-b from-[#FCEED5_6.43%] via-[#FCEED5_78.33%] to-[#FFE7BA_104.24%] rounded-b-[40px]'>
      {/* Background elements */}
      <div className='absolute w-[635px] h-[635px] bg-[#F7DBA7] rounded-[99px] top-[-581px] left-[-64px] transform rotate-[-25.23deg] opacity-100' />
      <div className='absolute w-[67.1px] h-[67.1px] bg-[#F7DBA7] rounded-[20px] top-[179px] left-[123.6px] transform rotate-[-25.23deg] opacity-100' />
      <div className='absolute w-[27.5px] h-[27.5px] bg-[#F7DBA7] rounded-[9px] top-[210.68px] left-[728px] transform rotate-[22.85deg] opacity-100' />
      <div className='absolute w-[21.47px] h-[21.47px] bg-[#002A48] rounded-[6px] top-[223.64px] left-[727px] transform rotate-[43deg] opacity-100' />
      <div className='absolute w-[14.63px] h-[14.63px] bg-[#F7DBA7] rounded-[4px] top-[148px] left-[762.19px] transform rotate-[-20.79deg] opacity-100' />
      <div className='absolute w-[635px] h-[635px] bg-[#F7DBA7] rounded-[99px] top-[564px] left-[438px] transform rotate-[-56.47deg] opacity-40' />
      <div className='absolute w-[635px] h-[635px] bg-[#003459] rounded-[99px] top-[268px] left-[699px] transform rotate-[-9.35deg] opacity-100' />
      <div className='absolute w-[635px] h-[635px] bg-[#F7DBA7] rounded-[99px] top-[180px] left-[865.67px] transform rotate-[-25.23deg] opacity-100' />

      {/* Human Image */}
      <img 
        src={WomenWithDog} 
        alt="Woman with Dog"
        className='absolute w-[944px] h-[693px] top-[84px] left-[530px] opacity-100'
      />

      {/* Text content */}
      <div className='absolute text-[#002A48] font-extrabold text-[60px] leading-[68px] text-left w-full max-w-[484px] top-[180px] left-[130px] whitespace-nowrap overflow-hidden'>
        One more friend
      </div>
      <div className='absolute text-[#002A48] font-extrabold text-[46px] leading-[60px] text-left w-full max-w-[467px] top-[260px] left-[130px] whitespace-nowrap overflow-hidden'>
        Thousands more fun!
      </div>
      <div className='absolute text-black font-medium text-[16px] leading-[24px] text-left w-[480px] top-[340px] left-[130px]'>
        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
        We have 200+ different pets that can meet your needs!
      </div>

      {/* View Intro Button */}
      <div className='absolute top-[442px] left-[130px]'>
        <button 
          className="flex items-center justify-between w-[161px] h-[48px] border-[1.5px] border-[#003459] text-[#003459] rounded-full px-[28px] py-[14px] gap-[8px]"
          onClick={handleViewIntroClick}
        >
          <span className='text-left text-[16px] font-medium'>
            View Intro
          </span>
          {isPlaying ? (
            <MdOutlinePauseCircle className="w-[18px] h-[18px]" /> // Pause icon
          ) : (
            <IoPlayCircleOutline className="w-[18px] h-[18px]" /> // Play icon
          )}
        </button>
      </div>

      {/* Explore Now Button */}
      <div className='absolute top-[442px] left-[311px]'>
        <button 
          className="flex items-center justify-center w-[163px] h-[48px] bg-[#003459] text-white rounded-full px-[28px] py-[14px] gap-[10px]"
        >
          <span className='text-left text-[16px] font-medium'>
            Explore Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default Herro;

import React, { useState } from 'react';
import DogHumanHand from '../../assets/DogHumanHand.png'; // Import the main banner image
import { FaPaw } from "react-icons/fa"; // Importing Paw Icon for decorative purposes
import { IoPlayCircleOutline } from 'react-icons/io5'; // Importing Play Icon
import { MdOutlinePauseCircle } from 'react-icons/md'; // Importing Pause Icon

const Adoption = () => {
    const [isPlaying, setIsPlaying] = useState(false); // State for play/pause toggle

    /**
     * Toggles the isPlaying state to switch between play and pause icons.
     */
    const handleViewIntroClick = () => {
        setIsPlaying(!isPlaying);
    };

    /**
     * Placeholder function for Explore Now button click.
     * Add functionality as needed.
     */
    const handleExploreNowClick = () => {
        console.log('Explore Now clicked');
    };

    return (
        <div className="flex justify-center items-start min-h-[80vh] relative">
            {/* Main banner container with rounded corners and rotated styling */}
            <div className="relative w-[1180px] h-[378px] bg-[#FFB775] rounded-[20px] flex items-center justify-center overflow-hidden transform rotate-180 mt-24">
                
                {/* Main banner image with specific positioning and rotation */}
                <img
                    src={DogHumanHand}
                    alt="Adoption Banner"
                    className="absolute w-[538.53px] h-[378.79px] top-1/2 left-[24%] transform -translate-x-1/2 -translate-y-1/2 rotate-180 opacity-100 z-20"
                />

                {/* Decorative rectangle 1 with gradient and rotation */}
                <div
                    className="absolute w-[787.54px] h-[787.54px] rounded-[99px] bg-gradient-to-r from-[#FCEED5] to-[#FFE7BA] opacity-30 transform rotate-[61.25deg] -top-[589.28px] -left-[199.49px] z-10"
                />

                {/* Decorative rectangle 2 with solid color and rotation */}
                <div
                    className="absolute w-[782.29px] h-[635px] rounded-[99px] bg-[#FCEED5] transform rotate-[-28.77deg] -top-[51px] left-[562.67px] z-10"
                />
            </div>

            {/* Texts and Paw icon container */}
            <div className="flex items-start gap-5">
                <div>
                    {/* Main title text */}
                    <div className="absolute text-left text-[#002A48] text-[52px] font-extrabold leading-[68px] font-SVN-Gilroy top-[170px] left-[254px]">
                        Adoption
                    </div>

                    {/* Subheading text */}
                    <div className="absolute text-left text-[#002A48] text-[36px] font-bold leading-[54px] font-SVN-Gilroy top-[240px] left-[254px]">
                        We need help. so do they.
                    </div>

                    {/* Supporting paragraph text */}
                    <div className="absolute text-left text-[#242B33] text-[12px] font-medium leading-[18px] font-SVN-Gilroy top-[301px] left-[254px]">
                        Adopt a pet and give it a home,<br />
                        it will love you back unconditionally.
                    </div>
                </div>

                {/* Decorative Paw Icon positioned next to the text */}
                <FaPaw
                    className="text-[#002A48] w-[42px] h-[38px] absolute top-[186px] left-[512px]"
                />
            </div>

            {/* Button container with Explore Now and View Intro buttons */}
            <div className="absolute top-[350px] left-[254px] flex gap-5">
                
                {/* Explore Now button */}
                <button
                    className="flex items-center justify-center w-[163px] h-[48px] bg-[#003459] text-white rounded-full px-7 py-2 gap-2 opacity-100"
                    onClick={handleExploreNowClick}
                >
                    <span className='text-left text-[16px] font-medium'>
                        Explore Now
                    </span>
                </button>

                {/* View Intro button with play/pause toggle icon */}
                <button
                    className="flex items-center justify-between w-[161px] h-[48px] border border-[#003459] text-[#003459] rounded-full px-7 py-2 gap-2 opacity-100"
                    onClick={handleViewIntroClick}
                >
                    <span className='text-left text-[16px] font-medium'>
                        View Intro
                    </span>
                    {isPlaying ? (
                        <MdOutlinePauseCircle className="w-4 h-4" /> // Pause Icon
                    ) : (
                        <IoPlayCircleOutline className="w-4 h-4" /> // Play Icon
                    )}
                </button>
            </div>
        </div>
    );
};

export default Adoption;

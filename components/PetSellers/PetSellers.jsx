import React from 'react';
import RightArrow from '../../assets/RightArrow.png'; // Import right arrow icon for the button
import Sheba from '../../assets/Sheba.png'; // Import images for pet sellers
import Whiskas from '../../assets/Whiskas.png';
import Bakers from '../../assets/Bakers.png';
import felix from '../../assets/felix.png';
import GoodBoy from '../../assets/GoodBoy.png';
import Butchers from '../../assets/Butchers.png';
import Pedigree from '../../assets/Pedigree.png';

const PetSellers = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[40px]"> {/* Container for the entire component */}
      
      {/* Upper Section with text and button */}
      <div className="w-[1178px] h-auto flex justify-between items-center opacity-100">
        
        {/* Left Side Area for titles */}
        <div className="flex gap-4 items-center">
          {/* "Proud to be part of" Section */}
          <div className="w-[141px] h-[31px] font-[SVN-Gilroy] text-[16px] font-medium leading-[31px] text-[#000000]">
            Proud to be part of
          </div>
          
          {/* "Pet Sellers" Section */}
          <div className="w-[117px] h-[36px] font-[SVN-Gilroy] text-[24px] font-bold leading-[36px] text-[#003459]">
            Pet Sellers
          </div>
        </div>

        {/* Right Side Area - Button Section */}
        <div>
          <button className="relative w-auto h-[44px] py-[12px] px-[28px] flex items-center justify-center gap-[8px] border border-[#003459] rounded-full">
            <span className="font-[SVN-Gilroy] text-[14px] font-medium leading-[20px] text-[#003459]">
              View all our sellers
            </span>
            <img src={RightArrow} alt="RightArrow" /> {/* Right arrow icon for button */}
          </button>
        </div>
      </div>

      {/* New Section with 7 Images of Pet Sellers */}
      <div className="w-full flex justify-center items-center mt-[20px]">
        <div className="w-[1178px] flex justify-between items-center gap-[10px]">
          
          {/* Image Divs for each Pet Seller */}
          <div className="w-[151.43px] h-[112px] px-[16px] gap-[0px] flex items-center justify-center">
            <img src={Sheba} alt="Seller 1" className="w-[88px] h-[64px] object-cover opacity-[1]" />
          </div>
          <div className="w-[151.43px] h-[112px] px-[16px] gap-[0px] flex items-center justify-center">
            <img src={Whiskas} alt="Seller 2" className="w-[114px] h-[114px] object-cover opacity-[1]" />
          </div>
          <div className="w-[151.43px] h-[112px] px-[16px] gap-[0px] flex items-center justify-center">
            <img src={Bakers} alt="Seller 3" className="w-[104px] h-[46px] object-cover opacity-[1]" />
          </div>
          <div className="w-[151.43px] h-[112px] px-[16px] gap-[0px] flex items-center justify-center">
            <img src={felix} alt="Seller 4" className="w-[92px] h-[64px] object-cover opacity-[1]" />
          </div>
          <div className="w-[151.43px] h-[112px] px-[16px] gap-[0px] flex items-center justify-center">
            <img src={GoodBoy} alt="Seller 5" className="w-[92px] h-[92px] object-cover opacity-[1]" />
          </div>
          <div className="w-[151.43px] h-[112px] px-[16px] gap-[0px] flex items-center justify-center">
            <img src={Butchers} alt="Seller 6" className="w-[130px] h-[56px] object-cover opacity-[1]" />
          </div>
          <div className="w-[151.43px] h-[112px] px-[16px] gap-[0px] flex items-center justify-center">
            <img src={Pedigree} alt="Seller 7" className="w-[116px] h-[72px] object-cover opacity-[1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSellers; 

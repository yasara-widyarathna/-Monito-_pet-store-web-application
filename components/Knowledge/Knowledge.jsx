import React from 'react';
import RightArrow from '../../assets/RightArrow.png';
import Pomeranian from '../../assets/Pomeranian.png';
import Diet from '../../assets/Diet.png';
import Destroy from '../../assets/Destroy.png';

// Knowledge component to display useful pet knowledge cards
const Knowledge = () => {
  return (
    <div className="w-[1440px] h-auto relative opacity-100 ">
      {/* Header Section */}
      <div className="w-[367px] h-[62px] absolute top-[60px] left-[130px] gap-[2px] opacity-100">
        {/* Title Section */}
        <div className="w-full h-[24px] flex items-center justify-start">
          <span className="text-[#000000]">You already know ?</span>
        </div>
        {/* Description Section */}
        <div className="w-full h-[36px] flex items-center justify-start">
          <span className="font-[SVN-Gilroy] text-[24px] font-bold leading-[36px] text-[#003459]">
            Useful pet knowledge
          </span>
        </div>
      </div>

      {/* Button Section */}
      <div>
        <button className="relative w-[151px] h-[44px] top-[78px] left-[1159px] py-3 px-7 flex items-center justify-center gap-2 border border-[#003459] rounded-full opacity-100">
          {/* Button Text */}
          <span className="font-[SVN-Gilroy] text-[14px] font-medium leading-[20px] text-[#003459]">
            View more
          </span>
          {/* Icon */}
          <img src={RightArrow} alt="RightArrow" />
        </button>
      </div>

      {/* Knowledge Cards Section */}
      <div className="flex flex-wrap gap-4 mt-[150px] justify-center">
        {/* Knowledge Card 1 */}
        <div className="w-[380px] h-[424px] p-2 gap-2 rounded-[12px] opacity-1 bg-[#FFFFFF] shadow-[0px_4px_28px_-2px_#00000014] flex flex-col">
          {/* Image Section */}
          <div className="w-full h-[60%] bg-[#E0E0E0] rounded-tl-[12px] rounded-[12px]">
            <img
              src={Pomeranian}
              alt="Pet Knowledge 1"
              className="w-full h-full object-cover rounded-tl-[12px] rounded-[12px]"
            />
          </div>
          {/* Knowledge Description Section */}
          <div className="w-full h-auto flex flex-col justify-center p-3 text-left bg-[#FFFFFF]">
            {/* Pet Knowledge Button */}
            <button className="w-[89px] h-[20px] py-2 px-[10px] gap-0 border-none rounded-[28px] opacity-1 bg-[#00A7E7] flex items-center justify-center">
              <span className="w-[69px] h-[16px] opacity-1 text-[#FDFDFD] font-[SVN-Gilroy] text-[10px] font-bold leading-[16px] text-left">
                Pet Knowledge
              </span>
            </button>
            {/* Description Section */}
            <div className="mt-2">
              <p className="w-[367px] h-[48px] opacity-1 font-[SVN-Gilroy] text-[16px] font-bold leading-[24px] text-left text-[#00171F]">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </p>
              <div className="mt-1">
                <p className="w-[367px] h-[60px] opacity-1 font-[SVN-Gilroy] text-[14px] font-normal leading-[20px] text-left text-[#242B33]">
                  The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Card 2 */}
        <div className="w-[380px] h-[424px] p-2 gap-2 rounded-[12px] opacity-1 bg-[#FFFFFF] shadow-[0px_4px_28px_-2px_#00000014] flex flex-col">
          {/* Image Section */}
          <div className="w-full h-[60%] bg-[#E0E0E0] rounded-tl-[12px] rounded-[12px]">
            <img
              src={Diet}
              alt="Pet Knowledge 2"
              className="w-full h-full object-cover rounded-tl-[12px] rounded-[12px]"
            />
          </div>
          {/* Knowledge Description Section */}
          <div className="w-full h-auto flex flex-col justify-center p-3 text-left bg-[#FFFFFF]">
            {/* Pet Knowledge Button */}
            <button className="w-[89px] h-[20px] py-2 px-[10px] gap-0 border-none rounded-[28px] opacity-1 bg-[#00A7E7] flex items-center justify-center">
              <span className="w-[69px] h-[16px] opacity-1 text-[#FDFDFD] font-[SVN-Gilroy] text-[10px] font-bold leading-[16px] text-left">
                Pet Knowledge
              </span>
            </button>
            {/* Description Section */}
            <div className="mt-1">
              <p className="w-[367px] h-[48px] opacity-1 font-[SVN-Gilroy] text-[16px] font-bold leading-[24px] text-left text-[#00171F]">
                Dog Diet You Need To Know
              </p>
              <div className="mt-0"> {/* Set margin to 0 for closer positioning */}
                <p className="w-[367px] h-[60px] opacity-1 font-[SVN-Gilroy] text-[14px] font-normal leading-[20px] text-left text-[#242B33]">
                  Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Card 3 */}
        <div className="w-[380px] h-[424px] p-2 gap-2 rounded-[12px] opacity-1 bg-[#FFFFFF] shadow-[0px_4px_28px_-2px_#00000014] flex flex-col">
          {/* Image Section */}
          <div className="w-full h-[60%] bg-[#E0E0E0] rounded-tl-[12px] rounded-[12px]">
            <img
              src={Destroy}
              alt="Pet Knowledge 3"
              className="w-full h-full object-cover rounded-tl-[12px] rounded-[12px]"
            />
          </div>
          {/* Knowledge Description Section */}
          <div className="w-full h-auto flex flex-col justify-center p-3 text-left bg-[#FFFFFF]">
            {/* Pet Knowledge Button */}
            <button className="w-[89px] h-[20px] py-2 px-[10px] gap-0 border-none rounded-[28px] opacity-1 bg-[#00A7E7] flex items-center justify-center">
              <span className="w-[69px] h-[16px] opacity-1 text-[#FDFDFD] font-[SVN-Gilroy] text-[10px] font-bold leading-[16px] text-left">
                Pet Knowledge
              </span>
            </button>
            {/* Description Section */}
            <div className="mt-2">
              <p className="w-[367px] h-[48px] opacity-1 font-[SVN-Gilroy] text-[16px] font-bold leading-[24px] text-left text-[#00171F]">
                Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively
              </p>
              <div className="mt-2">
                <p className="w-[367px] h-[60px] opacity-1 font-[SVN-Gilroy] text-[14px] font-normal leading-[20px] text-left text-[#242B33]">
                  Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;

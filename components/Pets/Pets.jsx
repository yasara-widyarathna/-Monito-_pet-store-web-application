import React from 'react';
import RightArrow from '../../assets/RightArrow.png'; // Importing Right Arrow icon

// Sample data for pets
const PetsData = [
  {
    id: "MO231",
    breed: "Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: "6,900,000 VND",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%202.png?alt=media&token=3166cfab-f787-4d8f-a27c-2687071ada57"
  },
  {
    id: "MO502",
    breed: "Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3,900,000 VND",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%202-2.png?alt=media&token=a8be8025-bb3e-43e1-ba1b-ac7315663cb3"
  },
  {
    id: "MO102",
    breed: "Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: "4,000,000 VND",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%203.png?alt=media&token=b4b1ba0b-5985-4464-bc70-767865835de0"
  },
  {
    id: "MO512",
    breed: "Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: "8,900,000 VND",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%204.png?alt=media&token=e70010de-ebc4-4df4-9c3a-75d4abc86b22"
  },
  {
    id: "MO504",
    breed: "Pembroke Corgi Tricolor",
    gender: "Female",
    age: "02 months",
    price: "9,000,000 VND",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%206.png?alt=media&token=2a67924d-c85f-474f-9927-6bad2fe079f1"
  },
  {
    id: "MO237",
    breed: "Pembroke Corgi Cream",
    gender: "Male",
    age: "02 months",
    price: "7,900,000 VND",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%206.png?alt=media&token=2a67924d-c85f-474f-9927-6bad2fe079f1"
  },
  {
    id: "MO228",
    breed: "Pomeranian White",
    gender: "Male",
    age: "03 months",
    price: "6,500,000 VND",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%207.png?alt=media&token=44966a12-3ee0-437c-b1e7-c4fbb8711dc7"
  }
];

const Pets = () => {
  return (
    <div className="w-[1440px] h-[986px] relative opacity-100">
      {/* New Header Section */}
      <div className="w-[367px] h-[62px] absolute top-[60px] left-[130px] gap-[2px] opacity-100">
        {/* Upper Div for Title */}
        <div className="w-[91px] h-[24px] flex items-center justify-center">
          <span className="text-[#000000]">Whats new?</span> {/* Text indicating new pets */}
        </div>
        {/* Lower Div for Description */}
        <div className="w-[367px] h-[36px] flex items-center justify-start">
          <span className="font-[SVN-Gilroy] text-[24px] font-bold leading-[36px] text-[#003459]">
            Take a look at some of our pets {/* Description for the section */}
          </span>
        </div>
      </div>

      {/* Button Section */}
      <div>
        <button className="relative w-[151px] h-[44px] top-[78px] left-[1159px] py-3 px-7 flex items-center justify-center gap-2 border border-[#003459] rounded-full opacity-100">
          {/* Button Text */}
          <span className="font-[SVN-Gilroy] text-[14px] font-medium leading-[20px] text-[#003459]">
            View more {/* Button text */}
          </span>
          {/* Icon */}
          <img src={RightArrow} alt="RightArrow" /> {/* Right arrow icon */}
        </button>
      </div>

      {/* Products Section */}
      <div className="flex flex-wrap gap-4 mt-[100px] justify-center">
        {/* Pet Cards */}
        {PetsData.map((pet) => (
          <div key={pet.id} className="w-[280px] h-[378px] p-2 gap-2 rounded-tl-[12px] rounded-tr-[12px] bg-[#FDFDFD] shadow-[0px_4px_28px_-2px_#00000014] flex flex-col">
            {/* Image Section */}
            <div className="w-full h-[60%] bg-[#E0E0E0] rounded-tl-[12px] rounded-tr-[12px]">
              <img
                src={pet.image}
                alt={pet.breed} // Alternative text for the image
                className="w-full h-full object-cover rounded-tl-[12px] rounded-tr-[12px]" // Ensures image fits container
              />
            </div>
            {/* Description Section */}
            <div className="w-full h-[40%] flex flex-col justify-center p-3 text-left bg-[#FDFDFD]">
              {/* ID and Breed */}
              <div className="flex items-center justify-between w-full mb-2">
                <span className="font-[SVN-Gilroy] text-[16px] font-bold" style={{ width: '248px', height: '24px', opacity: 1, fontFamily: 'SVN-Gilroy', fontSize: '16px', fontWeight: 700, lineHeight: '24px', textAlign: 'left' }}>
                  {pet.id} - {pet.breed} {/* Display pet ID and breed */}
                </span>
              </div>
              {/* Gender and Age */}
              <div className="flex justify-between items-center w-full mb-1">
                <div className="flex items-center gap-1">
                  <span className="text-[14px] text-[#555]">Gene:</span> {/* Label for gender */}
                  <span className="font-[SVN-Gilroy] text-[14px] text-[#555] font-bold">{pet.gender}</span> {/* Display pet gender */}
                  <span className="font-[SVN-Gilroy] text-[14px] text-[#555]">•</span>
                  <span className="font-[SVN-Gilroy] text-[14px] text-[#555] font-bold" >{pet.age}</span> {/* Display pet age */}
                </div>
              </div>
              {/* Price */}
              <div className="w-full">
                <p className="font-[SVN-Gilroy] text-[14px] font-bold text-[#00171F]">
                  {pet.price} {/* Display pet price */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets; 

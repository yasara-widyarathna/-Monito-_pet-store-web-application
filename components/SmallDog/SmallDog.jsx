// SmallDog.jsx
import React from 'react'; 
import Red from '../../assets/Red.png';
import Apricot from '../../assets/Apricot.png';
import Black from '../../assets/Black.png';
import BlackWhite from '../../assets/BlackWhite.png';
import Silver from '../../assets/Silver.png';
import Tan from '../../assets/Tan.png';
import { HiMiniChevronUpDown } from "react-icons/hi2";



const SmallDogData = [
    {
      "id": "MO231",
      "breed": "Pomeranian White",
      "gender": "Male",
      "age": "02 months",
      "price": "6,900,000 VND",
      "image": "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%202.png?alt=media&token=3166cfab-f787-4d8f-a27c-2687071ada57"
    },
    {
      "id": "MO502",
      "breed": "Poodle Tiny Yellow",
      "gender": "Female",
      "age": "02 months",
      "price": "3,900,000 VND",
      "image": "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%202-2.png?alt=media&token=a8be8025-bb3e-43e1-ba1b-ac7315663cb3"
    },
    {
      "id": "MO102",
      "breed": "Poodle Tiny Sepia",
      "gender": "Male",
      "age": "02 months",
      "price": "4,000,000 VND",
      "image": "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%203.png?alt=media&token=b4b1ba0b-5985-4464-bc70-767865835de0"
    },
    {
      "id": "MO512",
      "breed": "Alaskan Malamute Grey",
      "gender": "Male",
      "age": "02 months",
      "price": "8,900,000 VND",
      "image": "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%204.png?alt=media&token=e70010de-ebc4-4df4-9c3a-75d4abc86b22"
    },
    {
      "id": "MO504",
      "breed": "Pembroke Corgi Tricolor",
      "gender": "Female",
      "age": "02 months",
      "price": "9,000,000 VND",
      "image": "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%206.png?alt=media&token=2a67924d-c85f-474f-9927-6bad2fe079f1"
    },
    {
      "id": "MO237",
      "breed": "Pembroke Corgi Cream",
      "gender": "Male",
      "age": "02 months",
      "price": "7,900,000 VND",
      "image": "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%206.png?alt=media&token=2a67924d-c85f-474f-9927-6bad2fe079f1"
    },
    {
      "id": "MO228",
      "breed": "Pomeranian White",
      "gender": "Male",
      "age": "03 months",
      "price": "6,500,000 VND",
      "image": "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/image%207.png?alt=media&token=44966a12-3ee0-437c-b1e7-c4fbb8711dc7"
    }
  ];
const SmallDog = () => {
  return (
    <div className="flex justify-center mt-[272px]"> {/* Main Container with flex display */}
      
      {/* Left Side Filter Section */}
      <div className="mr-8"> {/* Margin added for spacing */}
      <div className="w-[200px] p-4 ">
      <h2 className="text-lg font-semibold mb-4">Filter</h2>
      {/* Gender Label */}
      <div className="mb-2">
        <span className="block w-[57px] h-[24px] text-left font-SVN-Gilroy text-[16px] font-bold leading-[24px] text-[#00171F] opacity-100">
          Gender
        </span>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" id="male" name="gender" value="male" className="mr-2" />
        <label htmlFor="male">Male</label>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" id="female" name="gender" value="female" className="mr-2" />
        <label htmlFor="female">Female</label>
      </div>
      
      {/*colors*/}
      <div className="mb-2">
        <span className="block w-[57px] h-[24px] text-left font-SVN-Gilroy text-[16px] font-bold leading-[24px] text-[#00171F] opacity-100">
          Color
        </span>
      </div>
      

      <div className="flex items-center mb-2">
        <input type="checkbox" id="male" name="gender" value="male" className="mr-2" />
        <img src={Red} alt=""  />
        <label htmlFor="male">Red</label>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" id="female" name="gender" value="female" className="mr-2" />
        <img src={Apricot} alt="" />
        <label htmlFor="female">Apricot</label>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" id="female" name="gender" value="female" className="mr-2" />
        <img src={Black} alt="" />
        <label htmlFor="female">Black</label>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" id="female" name="gender" value="female" className="mr-2" />
        <img src={BlackWhite} alt="" />
        <label htmlFor="female">Black & White</label>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" id="female" name="gender" value="female" className="mr-2" />
        <img src={Silver} alt="" />
        <label htmlFor="female">Silver</label>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" id="female" name="gender" value="female" className="mr-2" />
        <img src={Tan} alt="" />
        <label htmlFor="female">Tan</label>
      </div>

      <div className="mb-2">
        <span className="block w-[57px] h-[24px] text-left font-SVN-Gilroy text-[16px] font-bold leading-[24px] text-[#00171F] opacity-100">
          Price
        </span>
      </div>
      {/* Min and Max Buttons with Icons */}
      <div className="flex items-center justify-between mt-4 gap-3">
        <button className="flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-lg bg-gray-100">
          Min
          <HiMiniChevronUpDown className="text-gray-600 border border-gray-300 p-[1px]" />
        </button>
        <button className="flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-lg bg-gray-100">
          Max
          <HiMiniChevronUpDown className="text-gray-600 border border-gray-300 p-[1px]" />
        </button>
      </div>

      {/* Breed Label */}
      <div className="mb-2">
        <span className="block w-[57px] h-[24px] text-left font-SVN-Gilroy text-[16px] font-bold leading-[24px] text-[#00171F] opacity-100">
          Breed
        </span>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" id="male" name="gender" value="male" className="mr-2" />
        <label htmlFor="male">Small</label>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" id="male" name="gender" value="male" className="mr-2" />
        <label htmlFor="male">Medium</label>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" id="male" name="gender" value="male" className="mr-2" />
        <label htmlFor="male">Large</label>
      </div>

      
    </div>
      </div>

      {/* Right Side Small Dog Component */}
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          {/* Positioning the Small Dog text */}
          <div className="flex items-center">
            <span className="w-[114px] h-[36px] opacity-1 font-SVN-Gilroy text-[24px] font-bold leading-[36px] text-left whitespace-nowrap"
                  style={{ color: '#003459' }}>
              Small Dog
            </span>

            {/* Puppies Count */}
            <span className="ml-2 w-[71px] h-[20px] opacity-100 font-SVN-Gilroy text-[14px] font-medium leading-[20px] text-left"
                  style={{ color: '#667479' }}>
              {SmallDogData.length} puppies
            </span>
          </div>

          {/* Sort By Select */}
          <div className="flex items-center gap-2">
            <select className="bg-transparent border border-[#CCD1D2] rounded-[20px] w-[165px] h-[34px] p-[6px_10px_4px_20px] opacity-1">
              <option value="popular" disabled>Sort By:</option>
              <option value="popular">Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="age">Age</option>
            </select>
          </div>
        </div>

        {/* Grid for Dog Cards */}
        <div className="grid grid-cols-3 gap-4 mt-4"> {/* Ensure 3 cards per row */}
          {/* Dog Cards */}
          {SmallDogData.map((dog) => (
            <div key={dog.id} className="w-[280px] h-[378px] p-2 gap-2 rounded-tl-[12px] rounded-tr-[12px] bg-[#FDFDFD] shadow-[0px_4px_28px_-2px_#00000014] flex flex-col">
              {/* Image Section */}
              <div className="w-full h-[60%] bg-[#E0E0E0] rounded-tl-[12px] rounded-tr-[12px]">
                <img
                  src={dog.image}
                  alt={dog.breed}
                  className="w-full h-full object-cover rounded-tl-[12px] rounded-tr-[12px]"
                />
              </div>
              {/* Description Section */}
              <div className="w-full h-[40%] flex flex-col justify-center p-3 text-left bg-[#FDFDFD]">
                {/* ID and Breed */}
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="font-bold text-[16px] leading-[24px] w-[248px]">
                    {dog.id} - {dog.breed}
                  </span>
                </div>
                {/* Gene and Gender */}
                <div className="flex justify-between items-center w-full mb-1">
                  <div className="flex items-center gap-1">
                    <span className="text-[14px] text-[#555]">Gene:</span>
                    <span className="text-[14px] text-[#555] font-bold">{dog.gender}</span>
                    <span className="mx-2 text-[14px] text-[#555]">•</span>
                    <span className="text-[14px] text-[#555] font-bold">{dog.age}</span>
                  </div>
                </div>
                {/* Price */}
                <div className="w-full">
                  <p className="text-[14px] font-bold text-[#00171F]">
                    {dog.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallDog;

import React, { useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { BsChatLeftDots } from "react-icons/bs";
import HealthGuarantee from '../../assets/HealthGuarantee.png'
import IdentificationGuarantee from '../../assets/IdentificationGuarantee.png'
import { LuShare2 } from "react-icons/lu";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


const handleShareClick = () => {
  if (navigator.share) {
    navigator.share({
      title: "Check out this pet!",
      text: "Shiba Inu Sepia",
      url: window.location.href,
    })
    .catch((error) => console.log("Error sharing:", error));
  } else {
    alert("Sharing is not supported on this browser.");
  }
};


const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://s3-alpha-sig.figma.com/img/f490/0121/5e7c62bfb1ba4c89b22807b33ac45cb7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIoVGUUjiaHH-kwWnJFbEqJ4VzrdhSWQ8U2xqbIjfwZU5vPV2OY2Z9RmN8pZtUR8CHvf89yeWKOxp9uNKvtvvOs21~1jckrLPb28xysdCS0DxaLDWqnbDeNatjmzoU67Xa~n6SMMochaRPUurfKGqHMIFduutA2bjFXwN4dVa~oNYxD64hwMxv5KkMJ6qrQ3UZz19Jj72Ylphyf2D34BCa-rwdkzq4QwtamMZprE77xI1fVE5gfHaMbIJo9rRytFxdfJjYpmO2vlOGFBZIA0CeimYOpfpD89Kv0aWgFclqnOhyaKKovnIY~fUcycFrwvj1GB-d9toUcVC7KD19UUZA__",
    "https://s3-alpha-sig.figma.com/img/ed98/3856/e3a6954a2b20e00d7381454e58aa5f21?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iX5JrsVK~iuVKacZ7-5vQp~UEUBb0eUA5isb6wzLTs6zEXp4Gkgvzlxj2gNJQ18c-eXspHugUb2alU8Vpcx3ZKSSqpUbLay-XJHi5NPlUMZSMZ6VKLDKAImWQjH9vbfB6EWqf8LIZiRNUlQiP0xl9HBAoFVwdIPzRQsI2DP-P~T-dU~qh8AsB7gNC52GkLwVXdyLBH3ONeH7I4wQ3Eb9jb8bvzCNhAKtPlVZ-vItZUaRujYfoMn45S-CzPXb49f4Kj9e7e0JN9lkXr7M5c9j-QhU83D6OtN0KCLZGEGQHRSmWVUg6mqNBOhs5Jk8NcZt8mm0PSFHEStmCGQfV5gOgg__",
    "https://s3-alpha-sig.figma.com/img/c015/c4d6/6cffb2c9eaf940c3cd6e643672d288e2?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IBS~heY0cUGHjMLYvuAsDnHxTnpOKnP0CQ3D7KGuv-YFlC99ROonMZ7XSgW9YsaUy6vhgJ-79T1L6NPPVAPWlIMX46sK3jvN0Vp2qt13Ayqio8bnXNws8ILI5OrTWlvks9v7Y5RFX80AtA4K4AxwbVADC-NiMbSqjxvoL6wTyxJdUcT-e06YfOQp5No6mOO15fN~Bh11tDRtqao90NBd1Z8~o8Kqj8HDWetV910h6t7tYVX2dE87QdYmWjqVQCb2HqW0LDSazO1ha1NNynnA7lGRWBDwbzIoGcj1UAmjuISuzpvLrrNdIs58ycrI1LuNVQWI7hvyLF~xP6pHVsc~cw__",
    "https://s3-alpha-sig.figma.com/img/5bbf/0fe9/f94c346bcd3d90f4b0e033642098257e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CIbSAyH0Pg-H~BQqeYGqsL1PJH8q8Fg2peLxddwwNGWAWHfiPWOIfPcNfJFpdru6W2s5wJrO6h9-AktJ9lGaP99EXA8iqGSVOC9-qehTSVFVrJAqIGWTj3Cq2WD6BOChEnPCqdxvGC4WwSNulRTm953r7t05oQB0ks0NSBJIuHnu2STa2D62BMvxDRYR6-PAQaym3P2dBsTY8eREUFzkfxkme0BAO~7b5H~9gKNI7UaZucOI6woCUvtRYaxqMiK-xh814g2LUnInR6p-0dh857rAEWA7ixmNvnLG81IIliE3AoQWhKNuHJvShEONOcp7A4Y05OFt~6kIDFtIqa9R0A__",
    "https://s3-alpha-sig.figma.com/img/a21b/ff08/d7407df37de834d656c84bedba62c8be?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DwhYjL~jJM9BvVn-rINWnYXSnAaGRrQvCMoNgo3zKNLdlciGza6kwpxKUSHSazxHN1LbZC71oBRQLBWmmjIhvLJjR4BiOvbBzosXydsfr4eUMM~S25eKajOBGjezJzU4-DQIPTKWwIlPxhd5jBQvRbJbcOI7X6oAoW92ram0TPJMkJh-Ajqm6vo7jKdxV6GyneoSWQLb6eOCz-~PAKRsoJcZfC-AxwJMPtzDRr6rlL9e~PaOizqpAHGmy9thTF6dcrW6bfw5Pr178jAM3gqt-r7NmkLOA2raIM4b7wFT8bustJkvETiU6ncmZHabEEO06J3ipDduPlM7IzF3ILmuQw__",
    "https://s3-alpha-sig.figma.com/img/8c73/5279/d3027592cb16678e1f38032890d8ac6f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cjxjg5lzbC3kqUcfvDnAoWrObi0NIj6jNZ3FY7Emz358JT~iit~uuZTsiy0xr1zS4jotbJOAC~YoyF5~IK9KGOLV6KYqKcwOEoQlmQ78633x0whbshyRCihTWIEad9m70G6kL9X6Cq9982p~nKRGMouwFYd10LMaUBRynrbLBcx5GflXimhZraG3G7LCvmf3xbZJFI7fiQFOoszt~ET9AQtMeo9N47ZM~~IHt-lVpIp5~n~j5NYGwNf1ZqeDYBP9XUzeYv7g28d4yR-AcRqQFbiZikirNNPuKwyHBu63JbEsT3GY6E-Ut3MRZFfvAQ9uUnBFIrvBX146XVFoRXmjXw__"
  
    
  ];

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-32 flex w-[1180px] h-[826px] p-[22px] gap-[34px] rounded-tl-[20px] border border-t-0 bg-[#FDFDFD] border-[#EBEEEF] opacity-1 mx-auto">
      {/* Left Side: Image Slider */}
      <div className="flex flex-col items-left relative"> {/* Added relative positioning here */}
        {/* Main Image with Arrows */}
        <div className="relative"> {/* New wrapper for absolute positioning */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10  text-[#FFFFFF66] text-4xl"
            onClick={goToPreviousImage}
          >
            <IoIosArrowDropleftCircle/>
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="w-[560px] h-[476px] object-cover rounded-[10px] border border-[#EBEEEF] opacity-1"
          />
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-[#FFFFFF66] text-4xl"
            onClick={goToNextImage}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
        {/* Thumbnails */}
        <div className="flex flex-col items-center mt-14">
          <div className="flex gap-2 overflow-hidden relative">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-[94px] h-[94px] object-cover cursor-pointer rounded-[6px] transition-transform duration-200 ease-in-out ${currentImageIndex === index ? 'scale-110 border-2 border-blue-500' : 'border border-[#EBEEEF]'}`}
                onClick={() => handleThumbnailClick(index)}
                style={{ marginRight: index === images.length - 1 ? '-44px' : '0' }} // Adjust margin for the last thumbnail
              />
            ))}
          </div>
        </div>

        {/* New Div with Gradient Background */}
    <div className="flex w-[560px] h-[48px] p-[9px_12px] gap-0 rounded-[10px] justify-between bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] opacity-1 mt-4 whitespace-nowrap">
      {/* Left Div with Image and Text */}
      <div className="flex items-center gap-[9px] w-[244px] h-[30px]">
        <img src={HealthGuarantee} alt="Health Guarantee" className="w-[30px] h-[30px] rounded" />
        <span className="text-[#002A48] font-SVN-Gilroy text-[14px] font-bold leading-[20px]">
          100% health guarantee for pets
        </span>
      </div>

      {/* Right Div with Image and Text */}
      <div className="flex items-center gap-[9px] w-[277px] h-[30px] ">
        <img src={IdentificationGuarantee} alt="Pet Identification" className="w-[30px] h-[30px] p-[3px_0_0_3px]" />
        <span className="text-[#002A48] font-SVN-Gilroy text-[14px] font-bold leading-[20px] ">
          100% guarantee of pet identification
        </span>
      </div>
    </div>
    {/* New Div with Share Icon and Social Media Icons */}
<div className="flex items-center w-[560px] h-[48px] p-[9px_12px] gap-2 mt-4">
  {/* Share Icon and Text */}
  <div className="flex items-center gap-[9px] " onClick={handleShareClick}>
    <LuShare2 className="text-[#002A48] w-[18.77px] h-[18.77px] p-[1.76px_0px] cursor-pointer" />
    <span className="text-[#002A48] font-SVN-Gilroy text-[14px] font-bold leading-[20px] cursor-pointer">
      Share:
    </span>
  </div>

  {/* Social Media Icons with Links */}
  <div className="flex justify-between gap-[9px] w-[129px]">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="text-[#99A2A5] w-[18.77px] h-[18.77px] p-[1.76px]" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-[#99A2A5] w-[18.77px] h-[18.77px] p-[1.76px]" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-[#99A2A5] w-[18.77px] h-[18.77px] p-[1.76px]" />
    </a>
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <FaYoutube className="text-[#99A2A5] w-[18.77px] h-[18.77px] p-[1.76px]" />
    </a>
  </div>
</div>
      </div>
      {/* Right Side Dog Information Div */}
      <div className="w-[517px] h-[782px] opacity-1 flex flex-col gap-[18px] ml-4">
        {/* Breadcrumb */}
        <div className="w-[343px] h-[24px] opacity-1 text-[14px] flex items-center gap-[6px]">
        <a href="/" className="text-neutral-500 hover:underline">Home</a>
        <span> &gt; </span>
        <a href="/category/dog" className="text-neutral-500 hover:underline">Dog</a>
        <span> &gt; </span>
        <a href="/category/dog/small-dog" className="text-neutral-500 hover:underline">Large Dog</a>
        <span> &gt; </span>
        <a href="/category/dog/small-dog" className="text-neutral-500 hover:underline">Shiba Inu Sepia</a>
      </div>
      <div className="w-[517px] h-[782px]">
        <div className="w-[302px] h-[96px] gap-[6px] opacity-1">
          {/* SKU Text */}
          <div className="w-[302px] h-[20px] gap-0 opacity-1 text-left font-medium text-[14px] leading-[20px] font-[SVN-Gilroy]">
            SKU #1000078
          </div>
          {/* Dog Name */}
          <div className="w-[302px] h-[36px] gap-0 opacity-1 text-left font-bold text-[24px] leading-[36px] text-[#00171F] font-[SVN-Gilroy]">
            Shiba Inu Sepia
          </div>
          {/* Price */}
          <div className="w-[248px] h-[32px] gap-0 opacity-1 text-left font-bold text-[20px] leading-[32px] text-[#00171F] font-[SVN-Gilroy]">
            34.000.000 VND
          </div>
          {/* New Div with Two Buttons */}
  <div className="w-[373px] h-[44px] flex gap-[18px] opacity-1">
    {/* Button 1: Contact Us */}
    <button className="flex items-center w-[138px] h-[44px] py-[14px] px-[28px] gap-[10px] rounded-[57px] bg-[#003459] text-white opacity-1">
      Contact us
    </button>
    
    {/* Chat with Monito Button */}
    <div className="flex items-center gap-2 text-left font-bold text-[16px] leading-[24px]">
  <button className="flex items-center gap-2 w-[217px] h-[44px] font-[SVN-Gilroy] border-2 border-[#002A48] text-[#002A48] px-4 py-1 rounded-[57px]">
    <BsChatLeftDots className="text-2xl text-neutral-500" />
    Chat with Monito
  </button>
</div>
  </div>
   {/* Right Side Dog Information Div */}
   <div className="w-[194px] h-[26px] p-[4px_11px_2px_11px] flex flex-col gap-10px">
        {[
          { label: "SKU", value: ":#1000078" },
          { label: "Gender", value: ":Female" },
          { label: "Age", value: ":2 Months" },
          { label: "Size", value: ":Small" },
          { label: "Color", value: ":Appricot & Tan" },
          { label: "Vaccinated", value: ":Yes" },
          { label: "Dewormed", value: ":Yes" },
          { label: "Cert", value: ":Yes (MKA)" },
          { label: "Microchip", value: ":Yes" },
          { label: "Location", value: ":Vietnam" },
          { label: "Published Date", value: ":12-Oct-2022" },
          { label: "Additional Information", value: ":Pure breed Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage." }
        ].map((info, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-[517px] h-[564px] border-b border-[#EBEEEF] py-2"
          >
            <div className='flex'>
            <span className="text-neutral font-medium w-[194px] h-[26px] text-[14px] font-SVN-Gilroy">
              {info.label}
            </span>
            <span className="text-neutral font-medium  text-[14px] font-SVN-Gilroy ">
              {info.value}
            </span>
            </div>
          </div>
        ))}
      </div>

  
        </div>
        

      </div>
      
  
      </div>
    </div>
  );
};

export default ImageSlider;

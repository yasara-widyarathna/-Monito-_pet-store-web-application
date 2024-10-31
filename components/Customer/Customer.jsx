import React, { useState } from 'react';

/**
 * Customer Component
 * Renders a carousel of customer images with name and pet information. 
 * Allows navigation through the carousel via image click and dot navigation.
 * @returns {JSX.Element} Customer image carousel component
 */
const Customer = () => {
  // Hardcoded data for customer images and details
  const customerImages = [
    {
      name: "John Eden",
      pet: "Shiba Inu",
      image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/customers%2FFrame%20118.png?alt=media&token=1011fe35-0190-4061-843f-a1582204af75"
    },
    {
      name: "Jane Smith",
      pet: "Poodle Tiny Sepia",
      image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/customers%2FFrame%20119.png?alt=media&token=dacb515d-b387-47ca-a98d-c0bdc8f9062e"
    },
    {
      name: "Carl Johnson",
      pet: "Pomeranian White",
      image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/customers%2FFrame%20120.png?alt=media&token=9bbb7cd6-0490-45de-9c43-e2091d7ad7dd"
    },
    {
      name: "Sarah Connor",
      pet: "Alaskan Malamute Grey",
      image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/customers%2FFrame%20121.png?alt=media&token=cad36778-a377-4d8b-8641-a51a1f617abb"
    },
    {
      name: "Smith Chapmen",
      pet: "Golden Retriever",
      image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/customers%2Fda116490514fd3c8955113428a8386e3.png?alt=media&token=102f1839-6aac-4db3-9ae3-58b2307797f8"
    }
  ];

  // State to keep track of the currently displayed image index
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Advances to the next image in the carousel.
   */
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customerImages.length);
  };

  /**
   * Goes back to the previous image in the carousel.
   */
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + customerImages.length) % customerImages.length
    );
  };

  /**
   * Sets the clicked image as the current image.
   * @param {number} index - The index of the clicked image.
   */
  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mt-8 text-center">
        {/* Title */}
        <h2 className="text-[#002A48] font-SVN-Gilroy text-[24px] font-bold leading-[30px] mb-4">
          Our Lovely Customers
        </h2>

        {/* Customer image carousel */}
        <div className="flex w-[1149px] h-[388px] p-0 pl-4 gap-[12px] opacity-1 mx-auto relative">
          {customerImages.map((customer, index) => (
            <div
              key={index}
              className={`w-[248px] h-[340px] rounded-[10px] overflow-hidden transition-opacity duration-300 ${
                index === currentIndex ? "opacity-100" : "opacity-1"
              }`}
              style={{
                marginRight: index === customerImages.length - 1 ? '-10px' : '0' // Apply right cutoff for the last image
              }}
              onClick={() => handleImageClick(index)} // Set the current index on image click
            >
              <img
                src={customer.image}
                alt={`Customer ${customer.name}`}
                className="w-full h-full object-cover rounded-[10px] cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Dot navigation for carousel */}
        <div className="flex justify-center gap-[6px] mt-4">
          {customerImages.map((_, index) => (
            <div
              key={index}
              className={`w-[12px] h-[12px] rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;

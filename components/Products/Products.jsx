import React from 'react';
import RightArrow from '../../assets/RightArrow.png'; // Import the right arrow icon
import GiftImage from '../../assets/gift.png'; // Import the gift image for product descriptions

// Array containing product data
const ProductsData = [
  {
    id: "PR001",
    name: "Reflex Plus Adult Dog Food Salmon",
    product: "Dog Food",
    price: "150,000 VND",
    size: "385g",
    description: "Free Toy & Free Shaker",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/products%2Fimage%202-6.png?alt=media&token=36292f95-9d02-4915-8cd4-6403bdd244b1"
  },
  {
    id: "PR002",
    name: "Reflex Plus Adult Cat Food Salmon",
    product: "Cat Food",
    price: "160,000 VND",
    size: "700g",
    description: "Free Toy & Free Shaker",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/products%2Fimage%202-3.png?alt=media&token=92ecaeba-32f5-4157-b258-bc2b3f860855"
  },
  {
    id: "PR003",
    name: "Cat scratching ball toy kitten sisal rope ball",
    product: "Toy",
    price: "110,000 VND",
    size: "Small",
    description: "Free Mini Cat Food",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/products%2Fimage%202-4.png?alt=media&token=68610df9-27b7-4185-8c52-52f7227db9d3"
  },
  {
    id: "PR004",
    name: "Cute Pet Cat Warm Nest",
    product: "Toy",
    price: "410,000 VND",
    size: "Large",
    description: "Free Mini Cat Food",
    image: "https://firebasestorage.googleapis.com/v0/b/chatapp-4ef20.appspot.com/o/products%2Fimage%202-5.png?alt=media&token=e3a1c392-3d3d-42cb-a9d0-037a4659ed59"
  }
];

const Products = () => {
  return (
    <div className="w-full h-auto relative opacity-100 mt-[337px]">
      {/* Header Section for product selection prompt */}
      <div className="w-[326px] h-[62px] absolute top-[60px] left-[130px] gap-[2px] flex flex-col">
        <div className="w-full h-[24px] flex items-center justify-start">
          <span className="font-[SVN-Gilroy] text-[16px] font-medium leading-[24px] text-[#000000]">
            Hard to choose right products for your pets?
          </span>
        </div>
        <div className="w-full h-[36px] flex items-center justify-start">
          <span className="font-[SVN-Gilroy] text-[24px] font-bold leading-[36px] text-[#003459]">
            Our Products
          </span>
        </div>
      </div>

      {/* Button to view more products */}
      <div>
        <button className="relative w-[151px] h-[44px] top-[78px] left-[1159px] py-3 px-7 flex items-center justify-center gap-2 border border-[#003459] rounded-full">
          <span className="font-[SVN-Gilroy] text-[14px] font-medium leading-[20px] text-[#003459]">
            View more
          </span>
          <img src={RightArrow} alt="RightArrow" />
        </button>
      </div>

      {/* Products Section where product cards will be displayed */}
      <div className="flex flex-wrap gap-4 mt-[100px] justify-center">
        {ProductsData.map((product) => (
          // Each product card
          <div key={product.id} className="w-[280px] h-[446px] p-[8px] gap-[8px] rounded-[12px_0px_0px_0px] bg-[#FDFDFD] shadow-[0px_4px_28px_-2px_#00000014] flex flex-col">
            {/* Image Section */}
            <div className="w-full h-[60%] bg-[#E0E0E0] rounded-[12px_0px_0px_0px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-[12px_0px_0px_0px]"
              />
            </div>
            {/* Product Name Section */}
            <div className="w-full h-[48px] flex items-center gap-0">
              <span className="font-[SVN-Gilroy] text-[16px] font-bold text-[#00171F]">
                {product.name}
              </span>
            </div>
            {/* Product Type and Size Section */}
            <div className="flex items-center">
              <div className="flex items-center gap-1">
                <span className="font-[SVN-Gilroy] text-[12px] font-medium text-[#667479]">
                  Product: 
                </span>
                <span className="font-[SVN-Gilroy] text-[12px] font-bold text-[#667479]">
                  {product.product}
                </span>
                <span className="font-[SVN-Gilroy] text-[12px] font-medium text-[#667479]">•</span> {/* Unicode dot */}
              </div>
              <span className="font-[SVN-Gilroy] text-[12px] font-medium text-[#667479] ml-1">Size: {product.size}</span>
            </div>
            {/* Price Section */}
            <div className="w-full h-[20px]">
              <span className="font-[SVN-Gilroy] text-[14px] font-bold text-[#00171F]">
                {product.price}
              </span>
            </div>
            {/* Description Section with gift image */}
            <div className="w-full h-auto p-[6px_10px_4px_10px] gap-[2px] rounded-[8px_0px_0px_0px] bg-[#FCEED5] flex items-center">
              <img src={GiftImage} alt="Gift" className="w-[20px] h-[20px] mr-2" /> {/* Gift image */}
              <span className="font-[SVN-Gilroy] text-[12px] font-medium text-[#667479]">•</span> {/* Dot */}
              <span className="font-[SVN-Gilroy] text-[14px] font-bold leading-[20px] text-[#002A48] w-[148px] h-[20px] opacity-100">
                {product.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 

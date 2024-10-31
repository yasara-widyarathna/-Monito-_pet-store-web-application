import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Herro from './components/Hero/Herro';
import Pets from './components/Pets/Pets';
import OneMoreFriend from './components/OneMoreFriend/OneMoreFriend';
import Products from './components/Products/Products';
import PetSellers from './components/PetSellers/PetSellers';
import Adoption from './components/Adoption/Adoption';
import Knowledge from './components/Knowledge/Knowledge';
import Footer from './components/Footer/Footer';
import CategoryBanner from './components/CategoryBanner/CategoryBanner'; // Import CategoryBanner
import SmallDog from './components/SmallDog/SmallDog';
import ImageSlider from './components/ImageSlider/ImageSlider'; // Import ImageSlider
import Customer from './components/Customer/Customer';
import MorePuppies from './components/MorePuppies/MorePuppies';


// HomePage Component
const HomePage = () => (
  <div>
    <Herro />
    <Pets />
    <OneMoreFriend />
    <Products />
    <PetSellers />
    <Adoption />
    <Knowledge />
  </div>
);

// CategoryPage Component
const CategoryPage = () => (
  <div>
    <CategoryBanner />
    <SmallDog />
    {/* Add other sections here if needed */}
  </div>
);

// ProductDetailPage Component
const ProductDetailPage = () => (
  <div>
    <ImageSlider />
    <Customer/>
    <MorePuppies/>
    {/* You can add more details about the product here if needed */}
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is available on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} /> {/* Route to CategoryPage */}
        <Route path="/about" element={<ProductDetailPage />} /> {/* Route to ProductDetailPage */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

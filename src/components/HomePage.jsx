import React from "react";
import Header from "./Header/Header";
import JummyProducts from "./jummyProducts/JummyProducts";
import FakeProducts from './FakeProducts/FakeProducts';
import Slide from "./slider/Slide";



const HomePage = () => {
  
  return (
    <>
      <Header />
      <FakeProducts />
      <Slide/>
      <JummyProducts />
    </>
  );
};

export default HomePage;

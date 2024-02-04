import React from "react"; // Assuming Home is exported as a default export
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../../components/home";
import Navbar2 from "../../components/Navbar2";
import Recent from "../../components/recent";
import Slider from "../../components/slider";
import Categories from "../../components/categories";
import Products from "../../components/products";
const Client = () => {
  return (
    <div>
      {" "}
      <div>
        <Navbar2 />
        <Slider />
        <Recent />
        <Categories />
        <Products />

        {/* Render default home page if no specific route matches */}
      </div>
    </div>
  );
};

export default Client;

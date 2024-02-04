import { useState, React, useEffect } from "react";
import axios from "axios";
import "./index.scss";
import Slider from "../slider";
import Categories from "../categories";
import Card from "../card";
import Products from "../products";

export const Home = () => {
  return (
    <div className="homepage-container">
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

import React from "react";
import Card from "../card";
import iphone from "../../images/iphone.png";

import redmi from "../../images/redmi.jpg";
import "./index.scss";
const Products = () => {
  return (
    <div className="product">
      <div className="title">
        <h1>Our products</h1>
      </div>
      <div className="cards-zone">
        <Card imageUrl={iphone} productName="iphone  14" price="299" />
        <Card imageUrl={redmi} productName="redmi" price="299" />
        <Card imageUrl={iphone} productName="iphone  14" price="299" />
        <Card imageUrl={redmi} productName="redmi" price="299" />
        <Card imageUrl={iphone} productName="iphone  14" price="299" />
        <Card imageUrl={redmi} productName="redmi" price="299" />
      </div>
    </div>
  );
};

export default Products;

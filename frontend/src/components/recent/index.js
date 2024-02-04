import React from "react";
import Card from "../card";
import iphone from "../../images/iphone.png";
import "./index.scss";
const Recent = () => {
  return (
    <div className="product">
      <div className="title">
        <h1>Recenet</h1>
      </div>
      <div className="cards-zone">
        <Card imageUrl={iphone} productName="iphone  14" price="299" />
        <Card imageUrl={iphone} productName="iphone  14" price="299" />
        <Card imageUrl={iphone} productName="iphone  14" price="299" />
      </div>
    </div>
  );
};

export default Recent;

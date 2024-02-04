import React from "react";
import "./index.scss";
import smartphone from "../../images/phone.png";
import accessoire from "../../images/accessoire.png";
import anticase from "../../images/protection.png";
const Categories = () => {
  return (
    <div className="category">
      <div className="title">
        <h1>Categories</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img src={smartphone}></img>
          <p>Smartphone</p>
        </div>
        <div className="card">
          <img src={accessoire}></img>
          <p>accessoires</p>
        </div>
        <div className="card">
          <img src={anticase}></img>
          <p>protection</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;

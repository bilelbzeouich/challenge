import React from "react";
import "./index.scss";

const Card = ({ imageUrl, productName, price }) => {
  return (
    <div className="product-card">
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} style={{ maxWidth: "300px" }} alt={productName} />
      </a>
      <h4>{productName}</h4>
      <div>
        <span>${price}</span>
        <button>+</button>
      </div>
    </div>
  );
};

export default Card;

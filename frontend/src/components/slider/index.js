import React from "react";
import redmi from "../../images/redmi.png";
import "./index.scss";

const Slider = () => {
  return (
    <div className="slide-container ">
      <div className="image">
        <div className="images">
          <img src={redmi} alt="iPhone" />
        </div>
        <div className="texte">
          <h1>
            Explore Mi
            <br /> World
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;

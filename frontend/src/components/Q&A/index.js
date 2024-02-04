import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Qa = () => {
  return (
    <div className="form-container">
      <div className="title">What's ur primary use of a Smartphone?</div>

      <div className="flat-button">
        <NavLink to="/Q1">
          <p>Gaming</p>
        </NavLink>
      </div>

      <div className="flat-button">
        <NavLink to="/Q1">
          <p>Entertainment</p>
        </NavLink>
      </div>

      <div className="flat-button">
        <NavLink to="/Q1">
          <p>Social Media</p>
        </NavLink>
      </div>

      <div className="flat-button">
        <NavLink to="/Q1">
          {" "}
          <p>Photography</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Qa;

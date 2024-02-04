import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Q1 = () => {
  return (
    <div className="form-container">
      <div className="title"> Most Important thing?</div>

      <div className="flat-button">
        <NavLink to="/Q2">
          <p>Battery life</p>
        </NavLink>
      </div>

      <div className="flat-button">
        <NavLink to="/Q2">
          <p> Storage capacity</p>
        </NavLink>
      </div>

      <div className="flat-button">
        <NavLink to="/Q2">
          <p>Camera quality</p>
        </NavLink>
      </div>

      <div className="flat-button">
        <NavLink to="/Q2">
          {" "}
          <p> Data security</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Q1;

import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Q2 = () => {
  return (
    <div className="form-container">
      <div className="title"> Budget?</div>

      <div className="flat-button">
        <NavLink to="/">
          <p> Entry-level (Below $200)</p>
        </NavLink>
      </div>

      <div className="flat-button">
        <NavLink to="/">
          <p>Mid-range ($200 - $500)</p>
        </NavLink>
      </div>

      <div className="flat-button">
        <NavLink to="/">
          <p>High-end ($500 - $1000)</p>
        </NavLink>
      </div>

      <div className="flat-button">
        <NavLink to="/">
          {" "}
          <p> Premium ($1000 and above)</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Q2;

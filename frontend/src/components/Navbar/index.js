import React, { useState } from "react";
import logo from "../../images/white.png";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img src={logo} alt="Logo" style={{ width: "100px" }} />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">shop</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
        <div className="button-container1">
          <button className="Login">Login</button>
          <button className="sign-up">sign up</button>
        </div>
      </ul>
      <div className="button-container">
        <NavLink to="/login">
          <button className="Login">Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="sign-up">sign up</button>
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;

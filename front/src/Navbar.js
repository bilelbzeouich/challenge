import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav>
      <Link to="/" className="title">
       Logo
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Home">Home</NavLink>
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
      <button className="Login">Login</button>
      <button className="sign-up">sign up</button>
      </div>
    </nav>
  );
};
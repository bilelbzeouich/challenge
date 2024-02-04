import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="surname" />
            <input type="mail" placeholder="e-mail" />
            <input type="phone" placeholder="phone" />
            <input type="text" placeholder="addresse" />
            <input type="password" placeholder="password" />
            <NavLink to="/Qa">
              <button>Signup</button>
            </NavLink>
            <p class="message">
              <a href="#">
                <NavLink to="/Login">Signin</NavLink>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;

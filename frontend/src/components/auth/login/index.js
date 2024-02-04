import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <NavLink to="/">
              {" "}
              <NavLink to="/User">
                <button> login</button>
              </NavLink>
            </NavLink>
            <p class="message">
              Not registered?{" "}
              <a href="#">
                <NavLink to="/signup">Create an account</NavLink>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

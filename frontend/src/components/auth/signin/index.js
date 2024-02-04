import React from "react";
import "./index.scss";

const Signin = () => {
  return (
    <div>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p class="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;

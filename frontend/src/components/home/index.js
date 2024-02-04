import { useState, React, useEffect } from "react";
import axios from "axios";
import "./index.scss";
import test from "../../images/download.jpg";

export const Home = () => {
  return (
    <div className="homepage-container">
      <img className="homepage-image" alt="image" src={test} />
    </div>
  );
};

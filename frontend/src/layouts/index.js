import React from "react";
import Navbar from "../components/Navbar"; // Assuming Home is exported as a default export
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../components/home";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Outlet />
      {/* Render default home page if no specific route matches */}
    </div>
  );
};

export default Layout; 

import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/index";
import Login from "./components/auth/login/index";
import Signin from "./components/auth/signin/index";
import Qa from "./components/Q&A";
import Q1 from "./components/Q&A/Q1";
import Q2 from "./components/Q&A/Q1/index ";
import Client from "./layouts/client";
// Import your Layout component

function App() {
  return (
    <Routes>
      <Route path="/User" element={<Client />} />
      <Route path="/" element={<Layout />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/signup" element={<Signin />} />
      <Route path="/Qa" element={<Qa />} />
      <Route path="/Q1" element={<Q1 />} />
      <Route path="/Q2" element={<Q2 />} />
    </Routes>
  );
}

export default App;

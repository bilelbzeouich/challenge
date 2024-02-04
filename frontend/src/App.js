import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/index";
// Import your Layout component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
}

export default App;

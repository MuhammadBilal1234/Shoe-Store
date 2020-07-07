import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import ShoeItem from "./pages/ShoeItem";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="store" element={<Store />} />
        <Route path="/store/:slug" element={<ShoeItem />} />
      </Routes>
    </Router>
  );
};

export default App;

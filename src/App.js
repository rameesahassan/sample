import React from "react";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

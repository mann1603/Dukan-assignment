import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About";
import Contact from "./Contact";
import Privacy from "./Privacy";

const Pages = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacy" element={<Privacy />} />
  </Routes>

  );
};

export default Pages;

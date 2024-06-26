import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import FAQ from "./component/FAQ";
import Products from "./component/Product";
import Home from "./component/Home";
import { About } from "./component/About";
import Login from "./component/Login";
import Signup from "./component/Signup";

const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Main;

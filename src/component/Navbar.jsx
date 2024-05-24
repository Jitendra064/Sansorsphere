import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-header ">
        <div className="nav-left">
          <Link to="/">
            <p>SanorSpare</p>
          </Link>
        </div>
        <div className="nav-right ">
          <p className="navbar-right-item">
            <Link to="/">
              <li className="navbar-right-itemlink">Home</li>
            </Link>
            <Link to="/about">
              <li className="navbar-right-itemlink">AboutUs</li>
            </Link>
            <Link to="/products">
              <li className="navbar-right-itemlink">Products</li>
            </Link>
            <Link to="/faq">
              <li className="navbar-right-itemlink">FAQ'S</li>
            </Link>

            <button>Login</button>
            <button>Signup</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

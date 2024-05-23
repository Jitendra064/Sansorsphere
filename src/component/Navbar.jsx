import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar-header ">
        <div className="nav-left">
          <p>SanorSpare</p>
        </div>
        <div className="nav-right ">
          <p className="navbar-right-item">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <button>Login</button>
            <button>Signup</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

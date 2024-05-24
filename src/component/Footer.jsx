import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="row container-fluid">
        <div className="col-md-4 col-sm-10 ">
          <div className="mt-3">
            <h1>SanorSphere</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              libero sunt mollitia quam earum aliquam ea, similique laborum
              corporis. Perspiciatis possimus voluptatum rerum aliquam error!z
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-10">
          <div className="mt-3">
            <h1>Latest News</h1>
            <p className="">
              <img src="./img/card_img-1.jpeg" width="70px" alt="" />
              <br />
              this is the new image on the site on configer
            </p>
            <p>
              <img src="./img/card_img-1.jpeg" width="70px" alt="" />
              <br />
              this is the new image on the site on configer
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-10 d-flex justify-content-evenly">
          <div className=" FooterQuickLink mt-3">
            <h3>Quick Links</h3>
            <li>Home</li>
            <li>AboutUs</li>
            <li>Products</li>
            <li>FAQ's</li>
            <li>ContactUs</li>
          </div>
          <div className=" FooterQuickLink mt-3">
            <h3>Other Links</h3>
            <li>Privacy Notice</li>
            <li>Terms Of USe</li>
            <li>Security</li>
            <li>Blog</li>
            <li>Services Status</li>
          </div>
        </div>
      </div>
      <div className="FooterEnd">
        <p>
          ©2024.| Designed By: Jitendra Saini(MERN Stack).| All rights
          reserved...
        </p>
      </div>
    </div>
  );
};

export default Footer;

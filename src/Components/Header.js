import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo_image from "../../public/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [btnName, SetbtnName] = useState("Log-In");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo_image} alt="image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <button
            className="AuthSate"
            onClick={() => {
              SetbtnName("Log-Out");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

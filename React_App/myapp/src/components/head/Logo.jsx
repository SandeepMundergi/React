import React from "react";
import Style from "./Navbar.module.css";
import logo from "../Images/logo.png";
const Logo = () => {
  return (
    <div className={Style.Logoblock}>
      <span>
        <img src={logo} id={Style.logoico} alt="logo" />
      </span>
      <span>React App</span>
    </div>
  );
};

export default Logo;

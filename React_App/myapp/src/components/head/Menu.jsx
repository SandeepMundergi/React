import React from "react";
import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";
const Menu = () => {
  return (
    <div className={Style.Menublock}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

import React, { Component } from "react";
import Style from "./auth.module.css";
import { FaLinode } from "react-icons/fa";
export default class Logo extends Component {
  render() {
    return (
      <div className={Style.logoblock}>
        <span id={Style.logoico}>
          <FaLinode />
        </span>
        <span>LOGO</span>
      </div>
    );
  }
}

import React, { Component } from "react";
import style from "./auth.module.css";
export default class Menu extends Component {
  render() {
    return (
      <div className={style.menublock}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Service</a>
          </li>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">Profile</a>
          </li>
        </ul>
      </div>
    );
  }
}

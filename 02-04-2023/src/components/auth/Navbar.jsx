import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Style from "./auth.module.css";
export default class Navbar extends Component {
  render() {
    return (
      <section id={Style.navblock}>
        <article>
          <Logo />
          <Menu />
        </article>
      </section>
    );
  }
}

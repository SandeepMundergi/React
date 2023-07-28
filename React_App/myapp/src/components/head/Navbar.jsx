import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <section id={Style.NavSection}>
        <aside>
          <Logo />
          <Menu />
        </aside>
      </section>
    </div>
  );
};

export default Navbar;

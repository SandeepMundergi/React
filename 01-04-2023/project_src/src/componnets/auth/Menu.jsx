import React from 'react'
import Style from "./auth.module.css"
const Menu = () => {
  return (
    <div className={Style.menuBlock}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </div>
  )
}

export default Menu
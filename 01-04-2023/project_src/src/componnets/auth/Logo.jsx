import React from 'react'
import Style from "./auth.module.css";
import {FaBaby} from "react-icons/fa"
const Logo = () => {
  return (
    <div className={Style.logoBlock}>
        <span><FaBaby/></span>
        <span>LOGO</span>
    </div>
  )
}

export default Logo
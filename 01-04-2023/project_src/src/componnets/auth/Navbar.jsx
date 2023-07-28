import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Style from "./auth.module.css"
const Navbar = () => {
  return (
    <section id={Style.navBlock}>
<article>
    <Logo/>
    <Menu/>
</article>
    </section>
  )
}

export default Navbar
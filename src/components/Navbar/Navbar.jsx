import React from 'react';
import c from './Navbar.module.css'

const Navbar = () => {
    return  <nav className={c.nav}>
    <div> <a href="/Profile">Profile</a> </div>
    <div> <a href="/Dialogs">Dialogs</a> </div>
    <div> <a href="/News">News</a> </div>
    <div> <a href="/Music">Music</a> </div>
  </nav>
}
export default Navbar;
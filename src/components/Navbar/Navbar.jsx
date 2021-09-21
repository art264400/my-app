import React from 'react';
import c from './Navbar.module.css'

const Navbar = () => {
    return  <nav className={c.nav}>
    <div> <a href="#">Profile</a> </div>
    <div> <a href="#">Messages</a> </div>
    <div> <a href="#">News</a> </div>
    <div> <a href="#">Music</a> </div>
  </nav>
}
export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div> <NavLink activeClassName={c.activeLink} to="/Profile">Profile</NavLink> </div>
      <div> <NavLink activeClassName={c.activeLink} to="/Dialogs">Dialogs</NavLink> </div>
      <div> <NavLink activeClassName={c.activeLink} to="/News">News</NavLink> </div>
      <div> <NavLink activeClassName={c.activeLink} to="/Music">Music</NavLink> </div>
    </nav>
  )
}
export default Navbar;
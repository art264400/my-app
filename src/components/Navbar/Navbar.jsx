import React from 'react';
import { NavLink } from 'react-router-dom';
import Sitebar from '../Sitebar/Sitebar';
import c from './Navbar.module.css'

const Navbar = (props) => {
  return (
    <nav className={c.nav}>
      <div> <NavLink activeClassName={c.activeLink} to="/Profile">Profile</NavLink> </div>
      <div> <NavLink activeClassName={c.activeLink} to="/Dialogs">Dialogs</NavLink> </div>
      <div> <NavLink activeClassName={c.activeLink} to="/News">News</NavLink> </div>
      <div> <NavLink activeClassName={c.activeLink} to="/Music">Music</NavLink> </div>
      <Sitebar sitebarPage={props.sitebarPage.sitebarDate}/>
    </nav>
  )
}
export default Navbar;
import React from 'react'
import "./Style.css"
import {links} from "./sideMenu"
import { NavIcon } from '../../atoms'
import { ReactComponent as Logo} from "../../../assets/icons/logo.svg"


function SideNavBar() {
  return (
    <nav className="wrapper">
      <div className="logo">
        <NavIcon path="/">
          <div className="logo_wrapper">
            <Logo />
            <p>TO-DO</p>
          </div>
        </NavIcon>
      </div>
      <div className="navlinks">
        {links.map((item, index) => (
          <NavIcon key={index} path={item.path}>
            {item.icon}
          </NavIcon>
        ))}
      </div>
    </nav>
  );
}

export default SideNavBar
import React from 'react'
import "./Style.css"
import navMenu from "./sideMenu.json"
import {NavIcon} from '../../atoms'
function SideNavBar({links}) {
  return (
    <nav className="wrapper">
      {navMenu.links.map((item, index) => (
        <NavIcon key={index} path={item.path}>
          {item.icon}
        </NavIcon>
      ))}
    </nav>
  );
}

export default SideNavBar
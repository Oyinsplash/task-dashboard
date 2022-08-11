import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Style.css"
function NavIcon({icon, children, path}) {
  return (
    <NavLink exact className="navlink_wrapper" to={path} activeClassName="active">
      {children}
    </NavLink>
  );
}

export default NavIcon
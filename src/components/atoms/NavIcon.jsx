import React from 'react'
import "./Style.css"
function NavIcon({icon, children, path}) {
  return (
    <div className="navlink_wrapper">
      <img src={icon} alt="" />
      <a href={path}>{children}</a>
    </div>
  );
}

export default NavIcon
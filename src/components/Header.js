 import React from "react";
 import {NavLink} from 'react-router-dom'


function Header() {

  return (
    <div className="header">
      <div className="flex">
        <img src="/logo.png" alt="AJ Notes Logo" className="logo"/>
        <NavLink to="/" className="header-title">
          AJ Notes
        </NavLink>
        <NavLink to="/" className="header-link">
          Notes
        </NavLink>
        <div className="divider">|</div>
        <NavLink to="/search" className="header-link">
          Search       
        </NavLink>
        <div className="divider">|</div>
        <NavLink to="/create" className="header-link">
          Create       
        </NavLink>
      </div>
    </div>
  );
}

export default Header;

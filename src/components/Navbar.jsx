import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo_medmonitor.png"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <NavLink className="navItem" to="/">
          <img src={logo} alt="medmonitor logo" className="logo"/>
          <h2 className="name">MEDMONITOR</h2>
        </NavLink>
        <div className="nav-links">
          <NavLink className="navItem" to="/">
            <h2>home</h2>
          </NavLink>
          <NavLink className="navItem" to="/medicines">
            <h2>medicines</h2>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
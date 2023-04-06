import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo_medmonitor.png"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="medmonitor logo" className="logo"/>
          <h2 className="name">MEDMONITOR</h2>
        </Link>
        <div className="nav-links">
          <Link to="/">
            <h2>home</h2>
          </Link>
          <Link to="/medicines">
            <h2>medicines</h2>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from "react"
import { Link } from "react-router-dom"
import logo from "../../public/logo_medmonitor.png"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="medmonitor logo" className="logo"/>
        </Link>
        <div className="nav-links">
          <Link to="/">
            <h2>HOME</h2>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
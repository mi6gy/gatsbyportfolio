import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  return <nav className="nav-bar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo"/>
        <button type="button" className="toggle-btn">
          <FaAlignRight></FaAlignRight>
        </button>
<PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </div>
  </nav>
}

export default Navbar
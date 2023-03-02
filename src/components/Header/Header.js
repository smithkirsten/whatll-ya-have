import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = ({ page }) => {

const content = <p>there are so many reasons to kick alcohol to the curb</p>
const favButton = <NavLink to='/favorites'><button className="nav-buttons">FAVORITES</button></NavLink>
const browseButton = <NavLink to='/browse'><button className='nav-buttons'></button>
</NavLink>

  return (
    <nav className="header">
      <img className="logo" src="/assets/neonlogo.png" alt="what'll ya have logo" />
      {page === 'landing' ? content : <div className='buttons' style={}>{buttons}</div>}
    </nav>
  )

}

export default Header
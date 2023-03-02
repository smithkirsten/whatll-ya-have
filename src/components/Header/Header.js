import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = ({ page }) => {

const content = <p>there are so many reasons to kick alcohol to the curb</p>
const favButton = <NavLink to='/favorites'><button className="nav-buttons">FAVORITES</button></NavLink>
const browseButton = <NavLink to='/browse'><button className='nav-buttons'>BROWSE ALL</button></NavLink>
let buttons;
let position;
const style = {
  display: 'flex',
  justifyContent: position,
}

const determineButtons = () => {
  if (page === 'browse') {
    position = 'flex-end'
    return favButton
  }else if(page === 'favorites') {
    position = 'flex-start'
    return browseButton
  } else {
    position = 'space-between'
    return [favButton, browseButton]
  }
}


  return (
    <nav className="header">
      <img className="logo" src="/assets/neonlogo.png" alt="what'll ya have logo" />
      {page !== 'landing' && <div className='buttons' style={style}>{buttons}</div>}
    </nav>
  )

}

export default Header
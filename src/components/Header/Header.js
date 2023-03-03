import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = ({ page }) => {
  const path = window.location.href.split('/')[3]
  const content = <p>there are so many reasons to kick alcohol to the curb</p>
  const favButton = <NavLink to='/favorites'><button className="nav-buttons">FAVORITES</button></NavLink>
  const browseButton = <NavLink to='/browse'><button className='nav-buttons'>BROWSE ALL</button></NavLink>
  let position;
  const style = {
    display: 'flex',
    justifyContent: position,
  }

const determineButtons = () => {
  if (path === 'browse') {
    position = 'flex-end'
    return favButton
  }else if(path === 'favorites') {
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
      {page === 'landing' && content}
      {page !== 'landing' && <div className='buttons' style={style}>{determineButtons()}</div>}
    </nav>
  )

}

export default Header
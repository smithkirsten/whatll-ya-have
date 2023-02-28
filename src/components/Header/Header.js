import React from "react";
import './Header.css'

const Header = ({ page }) => {

  return (
    <nav className="header">
      <img className="logo" src="/assets/neonlogo.png" alt="what'll ya have logo" />
      {page === 'landing' && <p className="reason">there are so many reasons to kick alcohol to the curb</p>}
      {page === 'browse' || page === 'drink' && <button>favorites</button>}
      {page === 'favorites' || page === 'drink' && <button>browse all</button>}
    </nav>
  )

}

export default Header
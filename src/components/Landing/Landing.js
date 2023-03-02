import React from "react";
import { NavLink } from "react-router-dom";
import './Landing.css'
import Header from "../Header/Header";

const Landing = () => {
  return (
    <>
      <Header page='landing' />
      <div className="pitch"><p>but you still need a signature drink for company happy hour</p></div>
      <NavLink to={'/browse'}><button className='enter-button'>browse mocktails</button></NavLink>
    </>
  )
}

export default Landing
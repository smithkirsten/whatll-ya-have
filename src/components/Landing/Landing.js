import React from "react";
import { NavLink } from "react-router-dom";
import './Landing.css'
import Header from "../Header/Header";

const Landing = ({ drinks }) => {
  return (
    <>
      <Header page='landing' />
      <section className="welcome-page">
        <div className="pitch"><p>but you still need a signature drink</p></div>
        {!drinks ? <p>loading...</p> : <NavLink to={'/browse'}><button className='enter-button'>browse mocktails</button></NavLink>}
      </section>
    </>
  )
}

export default Landing
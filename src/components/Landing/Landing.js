import React from "react";
import Header from "../Header/Header";

const Landing = () => {
  return (
    <>
      <Header page='landing' />
      <div className="pitch"><p>but you still need a signature drink for company happy hour</p></div>
      <button className='enter-button'>browse mocktails</button>
    </>
  )
}

export default Landing
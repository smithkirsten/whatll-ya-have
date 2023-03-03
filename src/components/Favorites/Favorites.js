import React from "react";
import { NavLink } from "react-router-dom";
import '../Browse/Browse.css'
import Header from "../Header/Header";
import Drink from '../Drink/Drink'


const Favorites = ({ drinks, toggleFav, error }) => {

  const createCards = () => {
    return drinks.map(drink => <NavLink to={`/drink/${drink.idDrink}`} key={Date.now()}><Drink drink={drink} toggleFav={toggleFav} key={drink.idDrink} /></NavLink>)
  }

  return (
    <>
      <Header className='favorites'/>
      <section className="card-display">
        {error && <p>error city</p>}
        {!drinks && <p>loading...</p>}
        {drinks && createCards()}
      </section>
    </>
  )
}

export default Favorites
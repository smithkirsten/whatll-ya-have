import React from "react";
import { NavLink } from "react-router-dom";
import './Browse.css'
import Header from "../Header/Header";
import Drink from '../Drink/Drink'


const Browse = ({ drinks, toggleFav, error }) => {
  const path = window.location.href.split('/')[3]

  const createCards = () => {
    const showDrinks = path === 'favorites' ? drinks.filter(drink => drink.fav): drinks;
    return showDrinks.map(drink => <NavLink to={`/drink/${drink.idDrink}`} key={Date.now()}><Drink drink={drink} toggleFav={toggleFav} key={drink.idDrink} /></NavLink>)
  }

  return (
    <>
      <Header />
      <section className="card-display">
        {error && <p>error city</p>}
        {!drinks && <p>loading...</p>}
        {drinks && createCards()}
      </section>
    </>
  )
}

export default Browse
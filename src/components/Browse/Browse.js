import React from "react";
import { NavLink } from "react-router-dom";
import './Browse.css'
import Header from "../Header/Header";
import Drink from '../Drink/Drink'


const Browse = () => {
  const path = window.location.href.split('/')[3]



  const createCards = (favorites) => {
    const showDrinks = path === 'favorites' ? drinks.filter(drink => drink.favorite): drinks;
    return showDrinks.map(drink => <NavLink to={`/drink/${drink.idDrink}/${drink.fav}`}><Drink drink={drink} toggleFav={toggleFav} key={drink.idDrink} /></NavLink>)
  }

  return (
    //add conditional rendering for favorites or not
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
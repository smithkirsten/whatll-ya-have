import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../Browse/Browse.css'
import Header from "../Header/Header";
import Drink from '../Drink/Drink'


const Favorites = ({ drinks, toggleFav, error }) => {
  const navigate = useNavigate
  const createCards = () => {
    return drinks.map(drink => <NavLink to={`/drink/${drink.idDrink}`} key={Date.now()}><Drink drink={drink} toggleFav={toggleFav} key={drink.idDrink} /></NavLink>)
  }
  
  const determineRender = () => {
      if(error) {
        navigate('/error');
      } else if(!drinks) {
        return (<p className='no-favs'>you haven't favorited any drinks, yet!</p>)
      } else {
        return createCards()
      }
  }

  return (
    <>
      <Header className='favorites'/>
      <section className="card-display">
        {determineRender()}
      </section>
    </>
  )
}

export default Favorites
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../Browse/Browse.css'
import Header from "../Header/Header";
import Drink from '../Drink/Drink'


const Favorites = ({ drinks, toggleFav, error }) => {
  const navigate = useNavigate


  const createCards = () => {
    const cards = drinks.map(drink => <NavLink to={`/drink/${drink.idDrink}`} key={drink.strDrink}><Drink drink={drink} toggleFav={toggleFav} key={drink.idDrink} /></NavLink>)
    console.log(cards)
    return cards
  }
  
  const determineRender = () => {
      if(error) {
        navigate('/error');
      } else if(!drinks.length) {
        return (<p className='no-favs'>you haven't favorited any drinks, yet!</p>)
      } else {
        console.log(drinks)
        const cards = createCards()
        console.log('cards', cards)
        return cards
      }
  }

  return (
    <>
      <Header className='favorites'/>
      <section className="card-display">
      <div className="grid">
        {determineRender()}
      </div>
      </section>
    </>
  )
}

export default Favorites
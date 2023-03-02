import React from "react";
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import './Drink.css'
import { NavLink } from "react-router-dom";

const Drink = ({ drink, toggleFav }) => {
  const background = { 
    backgroundImage: `url(${drink.strDrinkThumb})`,  
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  return (
      <article className="drink-card" id={drink.idDrink}>
        <div className='drink-image' style={background}>
          <button className='fav-button' onClick={() => toggleFav(drink.idDrink)}>{drink.favorite ? <AiFillHeart className="fav-heart heart"/> : <AiOutlineHeart className="open-heart heart"/>}</button>
          <p className='drink-name hidden'>{drink.strDrink}</p>
        </div>
      </article>
  )
}

export default Drink
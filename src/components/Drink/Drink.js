import React from "react";
import './Drink.css'
import { NavLink } from "react-router-dom";

const Drink = ({ drink }) => {
  const background = { 
    backgroundImage: `url(${drink.strDrinkThumb})`,  
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  return (
    <NavLink to={`/drink/${drink.idDrink}`}>
      <article className="drink-card" id={drink.idDrink}>
        <div className='drink-image' style={background}>
          <p className='drink-name hidden'>{drink.strDrink}</p>
        </div>
      </article>
    </NavLink>
   
  )
}

export default Drink
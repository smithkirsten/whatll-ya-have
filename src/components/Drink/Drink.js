import React from "react";
import { NavLink } from "react-router-dom";

const Drink = ({ drink }) => {
  return (
    <NavLink>
      <article className="drink-card" id={drink.idDrink}>
        <div className='drink-image'>
          <p className='drink-name'>{drink.strDrink}</p>
        </div>
      </article>
    </NavLink>
   
  )
}

export default Drink
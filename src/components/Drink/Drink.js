import React from "react";
import './Drink.css'

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
          <p className='drink-name hidden'>{drink.strDrink}</p>
        </div>
        {/* <button className='fav-button' onClick={() => toggleFav(drink.idDrink)}>{drink.fav ? <AiFillHeart className="fav-heart heart"/> : <AiOutlineHeart className="open-heart heart"/>}</button> */}
      </article>
  )
}

export default Drink
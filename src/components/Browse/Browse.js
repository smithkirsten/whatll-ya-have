import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Browse.css'
import Header from "../Header/Header";
import Drink from '../Drink/Drink'


const Browse = ({ drinks, toggleFav, error }) => {
  const navigate = useNavigate();

  const createCards = () => {

    return drinks.map(drink => <NavLink to={`/drink/${drink.idDrink}`} key={Date.now()}><Drink drink={drink} toggleFav={toggleFav} key={drink.idDrink} /></NavLink>)
  }
  const determineRender = () => {
    console.log(error)
    console.log(drinks)
    if(error) {
      console.log('rent free')
      navigate('/error');
    } else if(!drinks && !error) {
      return (<p className="loading">loading...</p>)
    } else {
      return createCards()
    }
  }

  return (
    <>
      <Header className='browse'/>
      <section className="card-display">
        <div className="grid">
          {determineRender()}
        </div>
      </section>
    </>
  )
}

export default Browse
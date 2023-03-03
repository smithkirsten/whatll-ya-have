import React from "react";
import { useState, useEffect, useParams } from "react";
import { NavLink } from "react-router-dom";
import './Browse.css'
import { fetchData } from "../../apiCalls";
import { addFavProp } from "../../util";
import Header from "../Header/Header";
import Drink from '../Drink/Drink'

const dummyArray = [{
  "strDrink": "Afterglow",
  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
  "idDrink": "12560"
},
{
"strDrink": "Alice Cocktail",
"strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
"idDrink": "12562"
},
{
"strDrink": "Aloha Fruit punch",
"strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
"idDrink": "12862"
},
{
"strDrink": "Apello",
"strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
"idDrink": "15106"
},
{
"strDrink": "Apple Karate",
"strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
"idDrink": "12564"
}
]

const Browse = () => {
  const [drinks, setDrinks] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  // const { favorites } = useParams()

  useEffect(() => {
    // if(!drinks.length) {
    //   fetchData()
    //     .then(data => {
    //       console.log(data)
    //       setDrinks(data.drinks)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //       setError(error)
    //     })
    // }
    if(!drinks.length) {
      setDrinks(addFavProp(dummyArray))
    }
  }, [])
  const toggleFav = (id) => {
    const updatedDrinks = drinks.map(drink => {
      if(drink.idDrink === id) {
        drink.favorite = !drink.favorite
      }
      return drink
    })
    setDrinks(updatedDrinks)
  }

  const createCards = (favorites) => {
    const showDrinks = favorites ? drinks.filter(drink => drink.favorite): drinks;
    console.log(showDrinks)
    return showDrinks.map(drink => <NavLink to={`/drink/${drink.idDrink}/${drink.fav}`}><Drink drink={drink} toggleFav={toggleFav} key={drink.idDrink} /></NavLink>)
  }

  return (
    //add conditional rendering for favorites or not
    <>
      <Header page='browse' />
      <section className="card-display">
        {error && <p>error city</p>}
        {!drinks && <p>loading...</p>}
        {drinks && createCards()}
      </section>
    </>
  )
}

export default Browse
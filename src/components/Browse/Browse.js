import React from "react";
import { useDispatch, useSelector} from 'react-redux'
import { updateDrinks, toggleFavorite } from "./BrowseSlice";
import { useState, useEffect } from "react";
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
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.browse.drinks)
  // const [drinks, setDrinks] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const path = window.location.href.split('/')[3]

  useEffect(() => {
    if(!drinks.length) {
      console.log('fetching all')
      fetchData()
        .then(data => {
          dispatch(updateDrinks(addFavProp(data.drinks)))
          // setDrinks(addFavProp(data.drinks))
        })
        .catch((error) => {
          console.log(error)
          setError(error)
        })
    }
    // if(!drinks.length) {
    //   setDrinks(addFavProp(dummyArray))
    // }
  }, [])

  const toggleFav = (id) => {
    console.log('toggling', id)
    console.log(drinks)

    dispatch(toggleFav(id))

    // const copy = drinks;
    
    // const updatedDrinks = copy.map(drink => {
    //   if(drink.idDrink === id) {
    //     console.log('match')
    //     drink.fav = !drink.fav
    //     console.log(drink.fav)
    //   }
    //   return drink
    // })
    // dispatch(updateDrinks(updatedDrinks))
  }

  const createCards = (favorites) => {
    const showDrinks = path === 'favorites' ? drinks.filter(drink => drink.fav) : drinks;
    return showDrinks.map(drink => <NavLink to={`/drink/${drink.idDrink}/${drink.fav}`}><Drink drink={drink} toggleFav={toggleFav} key={drink.idDrink} /></NavLink>)
  }

  return (
    //add conditional rendering for favorites or not
    <>
      <Header key={path}/>
      <section className="card-display">
        {error && <p>error city</p>}
        {!drinks && <p>loading...</p>}
        {drinks && createCards()}
      </section>
    </>
  )
}

export default Browse
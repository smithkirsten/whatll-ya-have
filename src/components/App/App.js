// import React from "react";
import { Route, Routes } from 'react-router'
import { useState, useEffect } from "react";
import { fetchData } from "../../apiCalls";
import { addFavProp } from "../../util";
import './App.css';
import Landing from '../Landing/Landing';
import Browse from '../Browse/Browse';
import Favorites from '../Favorites/Favorites';
import DrinkDeets from '../DrinkDeets/DrinkDeets';
import Error from '../Error/Error';

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

function App() {
  const [drinks, setDrinks] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    if(!drinks.length) {
      fetchData()
        .then(data => {
          console.log(data)
          setDrinks(addFavProp(data.drinks))
        })
        .catch((err) => {
          console.log(err)
          setError(err.message)
        })
    }
    // if(!drinks.length) {
    //   setDrinks(addFavProp(dummyArray))
    // }
    // eslint-disable-next-line
}, [])

    const toggleFav = (id) => {
      console.log('toggling', id)
      const updatedDrinks = drinks.map(drink => {
        if(drink.idDrink === id) {
          return {
            ...drink,
            fav:!drink.fav
          }
        }
        return drink
      })
      setDrinks(updatedDrinks)
    }

  return (
    <main>
      <Routes>
        <Route exact path='/favorites' element={<Favorites drinks={drinks.filter(drink => drink.fav)} toggleFav={toggleFav} />} />
        <Route exact path='/browse' element={<Browse drinks={drinks} error={error} toggleFav={toggleFav}/>} />
        <Route exact path='/drink/:id' element={<DrinkDeets drinks={drinks} toggleFav={toggleFav} />} />
        <Route exact path='/error' element={<Error />}/>
        <Route exact path='/' element={<Landing drinks={drinks} error={error} />}/>
        <Route path="*" element={<Error error="This page doesn't exist" />} />
      </Routes>
    </main>
  );
}


export default App;

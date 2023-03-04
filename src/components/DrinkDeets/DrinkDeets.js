import React from "react";
import './DrinkDeets.css'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { cleanDrink } from "../../util";
import { fetchData } from "../../apiCalls";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Header from "../Header/Header";

const gotDrink = {
  "idDrink": "12562",
  "strDrink": "Alice Cocktail",
  "strDrinkAlternate": null,
  "strTags": null,
  "strVideo": null,
  "strCategory": "Cocktail",
  "strIBA": null,
  "strAlcoholic": "Non alcoholic",
  "strGlass": "Cocktail glass",
  "strInstructions": "Shake well, strain into a large cocktail glass.",
  "strInstructionsES": "Agitar bien, colar en un vaso grande de cóctel.",
  "strInstructionsDE": "Gut schütteln, in ein großes Cocktailglas abseihen.",
  "strInstructionsFR": null,
  "strInstructionsIT": "Shakerare bene, filtrare in una coppetta da cocktail capiente.",
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
  "strIngredient1": "Grenadine",
  "strIngredient2": "Orange juice",
  "strIngredient3": "Pineapple juice",
  "strIngredient4": "Cream",
  "strIngredient5": null,
  "strIngredient6": null,
  "strIngredient7": null,
  "strIngredient8": null,
  "strIngredient9": null,
  "strIngredient10": null,
  "strIngredient11": null,
  "strIngredient12": null,
  "strIngredient13": null,
  "strIngredient14": null,
  "strIngredient15": null,
  "strMeasure1": "1 cl ",
  "strMeasure2": "1 cl ",
  "strMeasure3": "2 cl ",
  "strMeasure4": "4 cl ",
  "strMeasure5": null,
  "strMeasure6": null,
  "strMeasure7": null,
  "strMeasure8": null,
  "strMeasure9": null,
  "strMeasure10": null,
  "strMeasure11": null,
  "strMeasure12": null,
  "strMeasure13": null,
  "strMeasure14": null,
  "strMeasure15": null,
  "strImageSource": null,
  "strImageAttribution": null,
  "strCreativeCommonsConfirmed": "No",
  "dateModified": "2016-07-18 22:09:04"
}

const DrinkDeets = ({ drinks, toggleFav }) => {
  const [drink, setDrink] = useState({})
  const [error, setError] = useState('')
  const { id, favorite } = useParams()

  useEffect(() => {
    // console.log('effective', drink.idDrink)
    // if (!drink.idDrink) {
    //   console.log('setting')
    //   const cleanedDrink = cleanDrink(gotDrink)
    //   console.log('cleaned drink: ', cleanedDrink)
    //   setDrink(cleanedDrink)
    // }
    if (!drink.idDrink) {
      console.log('fetching')
      fetchData(id)
        .then(data => {
          setDrink(cleanDrink(data.drinks[0]))
        })
        .catch(error => setError(error))
    }

  })

  const createList = (property) => {
    if(drink.idDrink) {
      return drink[property].map(string => <li className='list-item'>{string}</li>)
    }
  }

  const assessFav = () => {
    if(!drink.idDrink) {
      return false
    } 
    const drinkInfo = drinks.find(el => el.idDrink === drink.idDrink)
    return drinkInfo.fav ? true : false
  }

  return (
    <>
      <Header key={'drink'}/>
      {!drink && <p>loading...</p>}
      {drink && <section className="drink-display">
        <div className="info">
          <div className="fav-bar">
            <p>IS THIS YOUR DRINK?</p>
            <button className='fav-button' onClick={() => toggleFav(drink.idDrink)}>{ assessFav() ? <AiFillHeart className='heart'/> : <AiOutlineHeart className='heart'/> }</button>
          </div>
          <div className="drink">
            <img src={drink.strDrinkThumb} alt={`photo of ${drink.strDrink}`} className="drink-img"/>
            <h1>{drink.strDrink}</h1>
          </div>
        </div>
        <div className='instructions'>
          <h2>INSTRUCTIONS</h2>
          <div className="recipe">
            <ul className='ingredients'>
              {createList('ingredients')}
            </ul>
            <ul className='measurements'>
              {createList('measurements')}
            </ul>
          </div>
          <div className="directions"><p>{drink.strInstructions}</p></div>
        </div>
      </section>}
    </>
  )
}

export default DrinkDeets
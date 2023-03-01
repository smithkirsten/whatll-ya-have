import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Browse.css'
import { fetchData } from "../../apiCalls";
import Header from "../Header/Header";
import Drink from '../Drink/Drink'

const Browse = () => {
  const [drinks, setDrinks] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  useEffect(() => {
    if(!drinks) {
      fetchData()
        .then(data => {
          console.log(data)
          setDrinks(data.drinks)
        })
        .catch((error) => {
          console.log(error)
          setError(error)
        })
    }
  }, [])

  const createCards = () => {
    return drinks.map(drink => <Drink />)
  }

  return (
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
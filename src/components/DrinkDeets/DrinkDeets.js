import React from "react";
import { fetchData } from "../../apiCalls";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Header from "../Header/Header";

const DrinkDeets = (props) => {
  const [drink, setDrink] = useState({})
  const [error, setError] = useState('')
  const { id } = useParams()

  useEffect(() => {

    fetchData(id)
      .then(data => {
        console.log(data)
        setDrink(data.drinks)
      })
      .catch(error => setError(error))
  }, [])

  return (
    <>
      <Header page='drink'/>
      <div className="fav-bar">
        <p>IS THIS YOUR DRINK?</p>
        <img />
      </div>
      <img />
      <div className="ingredients"></div>
      <div className="directions"></div>
    </>
  )
}

export default DrinkDeets
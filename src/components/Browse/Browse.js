import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Browse.css'
import Header from "../Header/Header";

const Browse = () => {
  const [drinks, setDrinks] = useState([])

  const createCards = () => {
    
  }
  return (
    <>
      <Header page='browse' />
      <section className="card-display">
        {createCards()}
      </section>
    </>
  )
}

export default Browse
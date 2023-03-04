import React from "react";
import './Landing.css'
import Header from "../Header/Header";

const Error = () => {
  return (
    <>
      <Header page='error' />
      <section className="error-page">
        <div className="pitch"><img src='/assets/broken-glass.png' alt='broken glass' /><p>Whoops! Something went wrong</p></div>
      </section>
    </>
  )
}

export default Error
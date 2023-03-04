import React from "react";
import './Error.css'
import Header from "../Header/Header";

const Error = ({ error }) => {
  return (
    <>
      <Header page='error' />
      <section className="error-page">
        <div className="error-block"><img src='/assets/broken-glass.png' alt='broken glass' /><p>Whoops! {error ? error : 'Something went wrong'}</p></div>
      </section>
    </>
  )
}

export default Error
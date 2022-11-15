import React from "react";
import "./MoviesCardList.css";

import MoviesCards from '../MoviesCard/MoviesCard'

function MoviesCardList() {
  return (
    <section className="section section_card-list">
      <ul className="movie-gallery">
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />
        <MoviesCards />

      </ul>
      <button className="button button__more-movies">Ещё</button>
    
    </section>
  );
}

export default MoviesCardList;
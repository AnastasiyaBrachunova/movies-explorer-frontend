import React from "react";
import "./MoviesCardList.css";

import MoviesCards from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  let renderMovies = props.movies.slice(0, 12); // показываю по 12 карточек на странице

  return (
    <section className="section section_card-list">
      <ul className="movie-gallery">
        {renderMovies.map((movie) => (
          <MoviesCards
            key={movie.id}
            card={movie} //пропс card идет в карточку и содержит все данные о ней
          />
        ))}
      </ul>
      <button className="button button__more-movies">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
